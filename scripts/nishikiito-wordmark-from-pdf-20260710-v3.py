#!/usr/bin/env python3
"""Extract Nishikiito wordmark (logo only) from catalog PDF with safe padding."""

from __future__ import annotations

from pathlib import Path

import fitz
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/hiroki/Desktop/local 編集用/0710 HP編集/nishikiito/nishikiito.pdf")
OUT = ROOT / "public" / "images" / "floss-nishikiito-wordmark-catalog-20260710-v3.jpg"
TARGET_W = 900
RENDER_DPI = 400


def main() -> None:
    doc = fitz.open(str(PDF))
    page = doc[0]
    matrix = fitz.Matrix(RENDER_DPI / 72, RENDER_DPI / 72)
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    full = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    doc.close()

    w, h = full.size
    crop = full.crop((int(w * 0.05), int(h * 0.018), int(w * 0.56), int(h * 0.088)))
    crop = ImageOps.expand(crop, border=36, fill=(255, 255, 255))

    gray = ImageOps.autocontrast(crop.convert("L"))
    bbox = ImageOps.invert(gray).getbbox()
    if bbox:
        x0, y0, x1, y1 = bbox
        crop = crop.crop(
            (
                max(0, x0 - 28),
                max(0, y0 - 24),
                min(crop.width, x1 + 28),
                min(crop.height, y1 + 24),
            )
        )

    ratio = TARGET_W / crop.width
    out = crop.resize((TARGET_W, round(crop.height * ratio)), Image.Resampling.LANCZOS)
    out.save(OUT, "JPEG", quality=93, optimize=True, progressive=True)
    print(f"{OUT.name}: {out.size}")


if __name__ == "__main__":
    main()
