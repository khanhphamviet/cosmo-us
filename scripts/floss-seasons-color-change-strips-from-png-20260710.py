#!/usr/bin/env python3
"""Build high-resolution Seasons color-change strip JPEGs from source PNG.

Source: lecien product photo (three thread rows, no labels).
Outputs:
  - floss-seasons-color-change-threads-20260710-v2.jpg (full 3-row composite)
  - floss-seasons-color-change-strip-{5000,8000,9000}-20260710-v2.jpg
"""

from __future__ import annotations

import statistics
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(
    "/Users/hiroki/.cursor/projects/Users-hiroki-Documents-cosmo-us/assets/"
    "80-6_4-ee26648c-13fa-42d7-b89c-d2d65fe188c4.png"
)
OUT_DIR = ROOT / "public" / "images"

SERIES = ("5000", "8000", "9000")
STRIP_PAD = 55


def find_thread_centers(img: Image.Image) -> list[int]:
    gray = img.convert("L")
    w, h = gray.size
    proj = [sum(gray.getpixel((x, y)) for x in range(w)) for y in range(h)]
    third = h // 3
    centers: list[int] = []
    for i in range(3):
        y0 = max(0, i * third - 40)
        y1 = min(h, (i + 1) * third + 40)
        segment = proj[y0:y1]
        local = min(range(len(segment)), key=lambda j: segment[j])
        centers.append(y0 + local)
    return centers


def save_jpeg(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    rgb = img.convert("RGB")
    rgb.save(path, "JPEG", quality=92, optimize=True, progressive=True)


def main() -> int:
    if not SRC.is_file():
        print(f"Source PNG not found: {SRC}", file=sys.stderr)
        return 1

    img = Image.open(SRC)
    w, h = img.size
    centers = find_thread_centers(img)

    composite_path = OUT_DIR / "floss-seasons-color-change-threads-20260710-v2.jpg"
    save_jpeg(img, composite_path)
    print(f"composite {w}x{h} -> {composite_path.name}")

    for series, cy in zip(SERIES, centers):
        y0 = max(0, cy - STRIP_PAD)
        y1 = min(h, cy + STRIP_PAD)
        strip = img.crop((0, y0, w, y1))
        out = OUT_DIR / f"floss-seasons-color-change-strip-{series}-20260710-v2.jpg"
        save_jpeg(strip, out)
        print(f"strip {series} {strip.width}x{strip.height} -> {out.name}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
