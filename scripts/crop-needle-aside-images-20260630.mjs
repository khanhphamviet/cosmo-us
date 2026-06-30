import fs from "fs";
import sharp from "sharp";

async function tightBounds(buf, threshold = 242) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r < threshold || g < threshold || b < threshold) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

async function processPackage(src, dest, targetHeight) {
  const rotated = await sharp(src).rotate().toBuffer();
  const meta = await sharp(rotated).metadata();
  const isCrossStitch = /4307/i.test(src);
  const isSashiko = /4345|sashiko/i.test(src);
  const cropped = isCrossStitch
    ? await sharp(rotated)
        .extract({
          left: Math.round(meta.width * 0.36),
          top: Math.round(meta.height * 0.07),
          width: Math.round(meta.width * 0.28),
          height: Math.round(meta.height * 0.86),
        })
        .toBuffer()
    : isSashiko
      ? await sharp(rotated)
          .extract({
            left: Math.round(meta.width * 0.32),
            top: Math.round(meta.height * 0.05),
            width: Math.round(meta.width * 0.36),
            height: Math.round(meta.height * 0.90),
          })
          .toBuffer()
      : await (async () => {
        const bounds = await tightBounds(rotated);
        const pad = 10;
        const left = Math.max(0, bounds.left - pad);
        const top = Math.max(0, bounds.top - pad);
        const width = Math.min(meta.width - left, bounds.width + pad * 2);
        const height = Math.min(meta.height - top, bounds.height + pad * 2);
        return sharp(rotated).extract({ left, top, width, height }).toBuffer();
      })();
  const cropMeta = await sharp(cropped).metadata();
  const outWidth = Math.round(cropMeta.width * (targetHeight / cropMeta.height));
  const out = await sharp(cropped)
    .resize({ width: outWidth, height: targetHeight, fit: "fill" })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(dest, out);
  return {
    crop: `${cropMeta.width}x${cropMeta.height}`,
    out: `${outWidth}x${targetHeight}`,
  };
}

const TARGET_HEIGHT = 880;
const jobs = [
  [
    "/Users/hiroki/.cursor/projects/Users-hiroki-Documents-cosmo-us/assets/4307-1a7a50a1-f2d6-48e1-b252-ecc0ccf6b682.png",
    "public/images/blog-needle-history-cross-stitch-4307-aside-20260630.jpg",
  ],
  [
    "/Users/hiroki/.cursor/projects/Users-hiroki-Documents-cosmo-us/assets/4345-8259423f-2773-4ed6-b6b3-0587d0c0f9cd.png",
    "public/images/blog-needle-history-sashiko-needles-aside-20260630.jpg",
  ],
];

for (const [src, dest] of jobs) {
  const result = await processPackage(src, dest, TARGET_HEIGHT);
  console.log(dest.split("/").pop(), result);
}
