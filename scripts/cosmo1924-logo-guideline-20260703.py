#!/usr/bin/env python3
"""Process COSMO "since 1924" logo per brand guideline (#595957, 40% clear space baked in).

Source: public/images/cosmo1924-logo-cropped-20260703.png
Clear space: margin b = 40% of logo bounding-box height a (ratio a:b = 5:2), all 4 sides.
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

BRAND_GRAY = (89, 89, 87)  # #595957
CLEAR_SPACE_RATIO = 0.4  # b = 40% of logo bounding-box height (a:b = 5:2)
SOURCE = (
    Path(__file__).resolve().parent.parent
    / "public/images/cosmo1924-logo-cropped-20260703.png"
)
OUTPUT = (
    Path(__file__).resolve().parent.parent
    / "public/images/cosmo1924-logo-guideline-20260703.png"
)


def load_rgba(path: Path) -> Image.Image:
    img = Image.open(path).convert("RGBA")
    arr = np.array(img)
    rgb = arr[:, :, :3]
    white = (rgb[:, :, 0] > 230) & (rgb[:, :, 1] > 230) & (rgb[:, :, 2] > 230)
    arr[white, 3] = 0
    return Image.fromarray(arr)


def trim_to_content(img: Image.Image) -> Image.Image:
    arr = np.array(img)
    mask = arr[:, :, 3] > 10
    ys, xs = np.where(mask)
    if len(ys) == 0:
        raise ValueError("No visible content in logo")
    left, top, right, bottom = xs.min(), ys.min(), xs.max() + 1, ys.max() + 1
    return img.crop((left, top, right, bottom))


def recolor_to_brand_gray(img: Image.Image) -> Image.Image:
    arr = np.array(img)
    mask = arr[:, :, 3] > 10
    arr[mask, 0] = BRAND_GRAY[0]
    arr[mask, 1] = BRAND_GRAY[1]
    arr[mask, 2] = BRAND_GRAY[2]
    return Image.fromarray(arr)


def add_clear_space(img: Image.Image, ratio: float = CLEAR_SPACE_RATIO) -> Image.Image:
    w, h = img.size
    pad = max(1, round(h * ratio))
    out = Image.new("RGBA", (w + 2 * pad, h + 2 * pad), (0, 0, 0, 0))
    out.paste(img, (pad, pad))
    return out


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f"Source not found: {SOURCE}")

    content = trim_to_content(recolor_to_brand_gray(trim_to_content(load_rgba(SOURCE))))
    final = add_clear_space(content)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    final.save(OUTPUT, optimize=True)

    arr = np.array(content)
    mask = arr[:, :, 3] > 10
    pixels = arr[mask][:, :3]
    pad = max(1, round(content.size[1] * CLEAR_SPACE_RATIO))
    print(f"Content size: {content.size[0]}x{content.size[1]}")
    print(f"Clear space pad: {pad}px (40% of content height)")
    print(f"Final size (with margins): {final.size[0]}x{final.size[1]}")
    print(f"Content mean RGB: {pixels.mean(axis=0).astype(int).tolist()} (target {list(BRAND_GRAY)})")
    print(f"Saved: {OUTPUT}")


if __name__ == "__main__":
    main()
