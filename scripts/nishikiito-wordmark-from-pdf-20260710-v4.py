#!/usr/bin/env python3
"""Extract Nishikiito wordmark from catalog PDF — logo only, no right-edge bleed."""

from __future__ import annotations

from pathlib import Path

import fitz
import numpy as np
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/hiroki/Desktop/local 編集用/0710 HP編集/nishikiito/nishikiito.pdf")
OUT = ROOT / "public" / "images" / "floss-nishikiito-wordmark-catalog-20260710-v4.jpg"
TARGET_W = 560
RENDER_DPI = 400


def trim_logo_only(img: Image.Image) -> Image.Image:
    gray = np.array(img.convert("L"))
    dark = gray < 240
    ys, xs = np.where(dark)
    # Exclude stray catalog bleed on the far right.
    logo = xs < int(img.width * 0.78)
    xs = xs[logo]
    ys = ys[logo]
    if len(xs) == 0:
        return img
    pad_x, pad_y = 20, 16
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    return img.crop(
        (
            max(0, x0 - pad_x),
            max(0, y0 - pad_y),
            min(img.width, x1 + pad_x),
            min(img.height, y1 + pad_y),
        )
    )


def main() -> None:
    doc = fitz.open(str(PDF))
    page = doc[0]
    matrix = fitz.Matrix(RENDER_DPI / 72, RENDER_DPI / 72)
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    full = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    doc.close()

    w, h = full.size
    crop = full.crop((int(w * 0.05), int(h * 0.018), int(w * 0.48), int(h * 0.088)))
    crop = trim_logo_only(crop)

    ratio = TARGET_W / crop.width
    out = crop.resize((TARGET_W, round(crop.height * ratio)), Image.Resampling.LANCZOS)
    out.save(OUT, "JPEG", quality=93, optimize=True, progressive=True)
    print(f"{OUT.name}: {out.size}")


if __name__ == "__main__":
    main()
