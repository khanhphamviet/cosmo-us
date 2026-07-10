#!/usr/bin/env python3
"""Build Nishikiito color chart and wordmark JPEGs from catalog PDF."""

from __future__ import annotations

from io import BytesIO
from pathlib import Path

import fitz
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/hiroki/Desktop/local 編集用/0710 HP編集/nishikiito/nishikiito.pdf")
OUT = ROOT / "public" / "images"

RENDER_DPI = 400
THUMB_MAX_WIDTH = 1200


def render_page(pdf: Path, dpi: int) -> Image.Image:
    doc = fitz.open(str(pdf))
    page = doc[0]
    matrix = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    doc.close()
    return img


def trim_whitespace(img: Image.Image) -> Image.Image:
    gray = ImageOps.autocontrast(img.convert("L"))
    bbox = ImageOps.invert(gray).getbbox()
    return img.crop(bbox) if bbox else img


def save_jpeg(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "JPEG", quality=92, optimize=True, progressive=True)


def main() -> None:
    full = render_page(PDF, RENDER_DPI)
    w, h = full.size

    wordmark = trim_whitespace(full.crop((int(w * 0.08), int(h * 0.02), int(w * 0.55), int(h * 0.11))))
    chart = full.crop((int(w * 0.03), int(h * 0.115), int(w * 0.97), int(h * 0.98)))

    zoom_path = OUT / "floss-nishikiito-color-chart-zoom-20260710-v2.jpg"
    thumb_path = OUT / "floss-nishikiito-color-chart-20260710-v2.jpg"
    wordmark_path = OUT / "floss-nishikiito-wordmark-catalog-20260710-v2.jpg"

    save_jpeg(chart, zoom_path)
    ratio = THUMB_MAX_WIDTH / chart.width
    save_jpeg(
        chart.resize((THUMB_MAX_WIDTH, round(chart.height * ratio)), Image.Resampling.LANCZOS),
        thumb_path,
    )
    save_jpeg(wordmark, wordmark_path)

    print(f"wordmark {wordmark.size} -> {wordmark_path.name}")
    print(f"zoom     {chart.size} -> {zoom_path.name}")
    thumb = Image.open(thumb_path)
    print(f"thumb    {thumb.size} -> {thumb_path.name}")


if __name__ == "__main__":
    main()
