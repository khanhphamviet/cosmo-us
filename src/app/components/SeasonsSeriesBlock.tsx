import Image from "next/image";

const COLOR_CHANGE_STRIPS = [
  {
    label: "Seasons 5000",
    note: "Color-changing evenly every 8 cm",
    img: "/images/floss-seasons-color-change-strip-5000-20260710-v2.jpg",
    width: 1024,
    height: 110,
  },
  {
    label: "Seasons 8000",
    note: "Gentle color-gradation",
    img: "/images/floss-seasons-color-change-strip-8000-20260710-v2.jpg",
    width: 1024,
    height: 110,
  },
  {
    label: "Seasons 9000",
    note: "Longer · Shorter",
    img: "/images/floss-seasons-color-change-strip-9000-20260710-v2.jpg",
    width: 1024,
    height: 110,
  },
] as const;

const SERIES = [
  {
    heading: "Seasons 5000",
    body:
      "Changes color at even intervals about every 8 cm (3.1 in). With an easy-to-use color-change pitch, it is enjoyable for embroidery as well as creative thread play.",
    img: "/images/floss-seasons-5000-skeins-20260710.jpg",
    alt: "COSMO Seasons 5000 variegated embroidery floss skeins in blues, greens, and purples",
  },
  {
    heading: "Seasons 8000",
    body:
      "Colors change about every 30 cm (11.8 in). Ideal for large motifs and firm, full stitching. A rich variety of pinks and greens—colors often used to depict landscapes and scenery.",
    img: "/images/floss-seasons-8000-skeins-20260710.jpg",
    alt: "COSMO Seasons 8000 variegated embroidery floss skeins in greens and yellow-greens",
  },
  {
    heading: "Seasons 9000",
    body:
      "A series with short, random color-change pitches. Enjoy dynamic gradation even in small motifs. Vivid, memorable colors suited to accent and one-point stitching.",
    img: "/images/floss-seasons-9000-skeins-20260710.jpg",
    alt: "COSMO Seasons 9000 variegated embroidery floss skeins in vivid multi-color mixes",
  },
] as const;

export default function SeasonsSeriesBlock() {
  return (
    <div className="floss-seasons-series-block">
      <div className="sashiko-concepts floss-seasons-series-grid">
        {SERIES.map((item) => (
          <article key={item.heading} className="floss-seasons-series-card">
            <div className="floss-seasons-series-media">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="sashiko-concept-title">{item.heading}</h3>
            <p className="sashiko-concept-body">{item.body}</p>
          </article>
        ))}
      </div>
      <figure className="floss-seasons-change-chart">
        <div className="floss-seasons-change-grid">
          {COLOR_CHANGE_STRIPS.map((strip) => (
            <div key={strip.label} className="floss-seasons-change-panel">
              <p className="floss-seasons-change-label">{strip.label}</p>
              <div className="floss-seasons-change-strip">
                <Image
                  src={strip.img}
                  alt={`${strip.label} — ${strip.note}`}
                  width={strip.width}
                  height={strip.height}
                  sizes="(max-width:720px) 33vw, 280px"
                  className="floss-seasons-change-strip-img"
                />
              </div>
              <p className="floss-seasons-change-note">{strip.note}</p>
            </div>
          ))}
        </div>
        <figcaption className="floss-seasons-change-caption">
          Difference in length of color change across the three Seasons series.
        </figcaption>
      </figure>
    </div>
  );
}
