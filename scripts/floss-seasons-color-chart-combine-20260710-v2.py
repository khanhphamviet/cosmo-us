#!/usr/bin/env python3
"""Join Seasons color chart panel A + B into one horizontal image.

Trims panel A right margin and panel B left margin so the gap between
8032 and 8033 matches the 46px inter-column spacing in the source PDF crops.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "public" / "images"

PANEL_A = IMG / "floss-seasons-color-chart-panel-a-zoom-20260710.jpg"
PANEL_B = IMG / "floss-seasons-color-chart-panel-b-zoom-20260710.jpg"
OUT_ZOOM = IMG / "floss-seasons-color-chart-zoom-20260710-v2.jpg"
OUT_THUMB = IMG / "floss-seasons-color-chart-20260710-v2.jpg"

# Measured from panel-a/b zoom JPEGs (400 DPI PDF crops).
COLUMN_GAP = 46
A_LEFT = 102
A_LAST_COL_END = 2935
B_FIRST_COL_START = 103
TOP = 19
A_BOTTOM = 2249
B_BOTTOM = 2247
THUMB_MAX_WIDTH = 1200


def make_thumb(img: Image.Image) -> Image.Image:
    if img.width <= THUMB_MAX_WIDTH:
        return img.copy()
    ratio = THUMB_MAX_WIDTH / img.width
    return img.resize(
        (THUMB_MAX_WIDTH, round(img.height * ratio)),
        Image.Resampling.LANCZOS,
    )


def main() -> None:
    a = Image.open(PANEL_A)
    b = Image.open(PANEL_B)

    a_crop = a.crop((A_LEFT, TOP, A_LAST_COL_END + COLUMN_GAP, A_BOTTOM))
    b_crop = b.crop((B_FIRST_COL_START, TOP, b.width, B_BOTTOM))

    height = min(a_crop.height, b_crop.height)
    a_crop = a_crop.crop((0, 0, a_crop.width, height))
    b_crop = b_crop.crop((0, 0, b_crop.width, height))

    combined = Image.new("RGB", (a_crop.width + b_crop.width, height), (255, 255, 255))
    combined.paste(a_crop, (0, 0))
    combined.paste(b_crop, (a_crop.width, 0))

    combined.save(OUT_ZOOM, "JPEG", quality=92, optimize=True, progressive=True)
    make_thumb(combined).save(OUT_THUMB, "JPEG", quality=92, optimize=True, progressive=True)

    print(f"zoom  {combined.width}x{combined.height} -> {OUT_ZOOM.name}")
    thumb = Image.open(OUT_THUMB)
    print(f"thumb {thumb.width}x{thumb.height} -> {OUT_THUMB.name}")


if __name__ == "__main__":
    main()
