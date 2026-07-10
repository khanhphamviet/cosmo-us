#!/usr/bin/env python3
"""Build high-resolution Seasons color chart JPEGs from seasons.pdf.

Two panels (catalog pages 6–7), displayed side by side on /floss/seasons:
  Panel A — Seasons 5000 + Seasons 8000 (5001–8032)
  Panel B — Seasons 8000 cont. + Seasons 9000 (8033–9020)
"""

from __future__ import annotations

import sys
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/hiroki/Desktop/seasons.pdf")
OUT_DIR = ROOT / "public" / "images"

PANELS = (
    {
        "label": "5000-8000",
        "page": 0,
        "thumb": "floss-seasons-color-chart-panel-a-20260710.jpg",
        "zoom": "floss-seasons-color-chart-panel-a-zoom-20260710.jpg",
    },
    {
        "label": "8000-9000",
        "page": 1,
        "thumb": "floss-seasons-color-chart-panel-b-20260710.jpg",
        "zoom": "floss-seasons-color-chart-panel-b-zoom-20260710.jpg",
    },
)

RENDER_DPI = 400
THUMB_MAX_WIDTH = 1200

# Full chart block on each PDF page — generous margins so headers and edge swatches stay intact.
CROP = {
    "left": 0.04,
    "top": 0.455,
    "right": 0.98,
    "bottom": 0.968,
}


def render_page(doc: fitz.Document, index: int, dpi: int) -> Image.Image:
    page = doc[index]
    matrix = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def crop_chart_panel(page_img: Image.Image) -> Image.Image:
    w, h = page_img.size
    return page_img.crop(
        (
            int(w * CROP["left"]),
            int(h * CROP["top"]),
            int(w * CROP["right"]),
            int(h * CROP["bottom"]),
        )
    )


def save_jpeg(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "JPEG", quality=92, optimize=True, progressive=True)


def make_thumb(img: Image.Image) -> Image.Image:
    if img.width <= THUMB_MAX_WIDTH:
        return img.copy()
    ratio = THUMB_MAX_WIDTH / img.width
    return img.resize(
        (THUMB_MAX_WIDTH, round(img.height * ratio)),
        Image.Resampling.LANCZOS,
    )


def main() -> int:
    if not PDF.is_file():
        print(f"PDF not found: {PDF}", file=sys.stderr)
        return 1

    doc = fitz.open(str(PDF))
    if doc.page_count < 2:
        print("Expected at least 2 pages in seasons.pdf", file=sys.stderr)
        return 1

    rendered = [render_page(doc, panel["page"], RENDER_DPI) for panel in PANELS]
    doc.close()

    for panel, page_img in zip(PANELS, rendered):
        chart = crop_chart_panel(page_img)
        zoom_path = OUT_DIR / panel["zoom"]
        thumb_path = OUT_DIR / panel["thumb"]
        save_jpeg(chart, zoom_path)
        save_jpeg(make_thumb(chart), thumb_path)
        thumb = Image.open(thumb_path)
        print(
            f"{panel['label']}: "
            f"zoom {chart.width}x{chart.height} ({zoom_path.stat().st_size:,} B), "
            f"thumb {thumb.width}x{thumb.height} ({thumb_path.stat().st_size:,} B)"
        )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
