#!/usr/bin/env python3
"""Build high-resolution Seasons color chart JPEGs from seasons.pdf.

Outputs:
  - floss-seasons-140-color-chart-tight-20260710.jpg   (page thumbnail, ~2400px wide)
  - floss-seasons-140-color-chart-zoom-tight-20260710.jpg (lightbox zoom, full render)
"""

from __future__ import annotations

import sys
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/hiroki/Desktop/seasons.pdf")
OUT_DIR = ROOT / "public" / "images"

THUMB_NAME = "floss-seasons-140-color-chart-tight-20260710.jpg"
ZOOM_NAME = "floss-seasons-140-color-chart-zoom-tight-20260710.jpg"

RENDER_DPI = 400
THUMB_MAX_WIDTH = 2400

# Crop ratios tuned against Lecien catalog pages 6–7 (5000 + 8000 on p1, 8000 + 9000 on p2).
CROP = {
    "left": 0.10,
    "top": 0.515,
    "right": 0.955,
    "bottom": 0.955,
}


def render_page(doc: fitz.Document, index: int, dpi: int) -> Image.Image:
    page = doc[index]
    matrix = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def crop_chart_band(page_img: Image.Image) -> Image.Image:
    w, h = page_img.size
    return page_img.crop(
        (
            int(w * CROP["left"]),
            int(h * CROP["top"]),
            int(w * CROP["right"]),
            int(h * CROP["bottom"]),
        )
    )


def trim_white(img: Image.Image, threshold: int = 248, margin: int = 12) -> Image.Image:
    rgb = img.convert("RGB")
    w, h = rgb.size
    pixels = rgb.load()
    min_x, min_y, max_x, max_y = w, h, 0, 0

    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y]
            if r < threshold or g < threshold or b < threshold:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)

    if max_x <= min_x:
        return rgb

    return rgb.crop(
        (
            max(0, min_x - margin),
            max(0, min_y - margin),
            min(w, max_x + margin + 1),
            min(h, max_y + margin + 1),
        )
    )


def stitch_charts(page1: Image.Image, page2: Image.Image) -> Image.Image:
    band1 = crop_chart_band(page1)
    band2 = crop_chart_band(page2)
    height = min(band1.height, band2.height)
    band1 = band1.crop((0, 0, band1.width, height))
    band2 = band2.crop((0, 0, band2.width, height))

    combined = Image.new("RGB", (band1.width + band2.width, height), "white")
    combined.paste(band1, (0, 0))
    combined.paste(band2, (band1.width, 0))
    return trim_white(combined)


def save_jpeg(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "JPEG", quality=92, optimize=True, progressive=True)


def main() -> int:
    if not PDF.is_file():
        print(f"PDF not found: {PDF}", file=sys.stderr)
        return 1

    doc = fitz.open(str(PDF))
    if doc.page_count < 2:
        print("Expected at least 2 pages in seasons.pdf", file=sys.stderr)
        return 1

    page1 = render_page(doc, 0, RENDER_DPI)
    page2 = render_page(doc, 1, RENDER_DPI)
    doc.close()

    chart = stitch_charts(page1, page2)
    zoom_path = OUT_DIR / ZOOM_NAME
    save_jpeg(chart, zoom_path)

    thumb = chart.copy()
    if thumb.width > THUMB_MAX_WIDTH:
        ratio = THUMB_MAX_WIDTH / thumb.width
        thumb = thumb.resize(
            (THUMB_MAX_WIDTH, round(thumb.height * ratio)),
            Image.Resampling.LANCZOS,
        )
    thumb_path = OUT_DIR / THUMB_NAME
    save_jpeg(thumb, thumb_path)

    print(f"zoom:  {zoom_path}  {chart.width}x{chart.height}  {zoom_path.stat().st_size:,} bytes")
    print(f"thumb: {thumb_path}  {thumb.width}x{thumb.height}  {thumb_path.stat().st_size:,} bytes")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
