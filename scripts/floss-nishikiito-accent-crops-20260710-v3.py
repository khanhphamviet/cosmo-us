#!/usr/bin/env python3
"""Center Nishikiito accent gallery photos in 3:2 crops."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BASE = Path("/Users/hiroki/Desktop/local 編集用/0710 HP編集/nishikiito")
OUT = ROOT / "public" / "images"
MAX_W = 1400
ASPECT = 3 / 2
PAD_PCT = 0.12
THRESH = 200

ITEMS = (
    ("tamamushi_image.jpg", "floss-nishikiito-accent-tamamushi-20260710-v3.jpg", "color"),
    ("20190926_LECIEN9083.jpg", "floss-nishikiito-accent-hoop-card-20260710-v3.jpg", "color"),
    ("8762.tif", "floss-nishikiito-accent-stitch-flower-20260710-v3.jpg", "color"),
)


def subject_metrics(
    im: Image.Image, mode: str
) -> tuple[float, float, float, float, float, float]:
    rgb = np.array(im.convert("RGB"), dtype=np.float32)
    gray = rgb.mean(axis=2)
    h, w = gray.shape

    if mode == "color":
        sat = rgb.max(axis=2) - rgb.min(axis=2)
        mask = (sat > 25) & (gray < 240)
    else:
        mask = gray < THRESH

    ys, xs = np.where(mask)
    if len(xs) == 0:
        return w / 2, h / 2, 0, w, 0, h

    if mode == "color":
        weights = np.clip(sat[ys, xs], 1, None).astype(float)
    else:
        weights = np.clip(THRESH - gray[ys, xs], 1, None).astype(float)

    cx = float(np.average(xs, weights=weights))
    cy = float(np.average(ys, weights=weights))
    x_lo, x_hi = np.percentile(xs, [3, 97])
    y_lo, y_hi = np.percentile(ys, [3, 97])
    if mode == "color":
        cx = (x_lo + x_hi) / 2
        cy = (y_lo + y_hi) / 2
    return cx, cy, float(x_lo), float(x_hi), float(y_lo), float(y_hi)


def centered_crop_rect(
    w: int, h: int, cx: float, cy: float, half_w: float, half_h: float
) -> tuple[int, int, int, int]:
    left, top, right, bottom = cx - half_w, cy - half_h, cx + half_w, cy + half_h
    if left < 0:
        right -= left
        left = 0
    if right > w:
        left -= right - w
        right = w
    if top < 0:
        bottom -= top
        top = 0
    if bottom > h:
        top -= bottom - h
        bottom = h
    return max(0, int(round(left))), max(0, int(round(top))), min(w, int(round(right))), min(
        h, int(round(bottom))
    )


def crop_3_2_centered(im: Image.Image, mode: str) -> Image.Image:
    w, h = im.size
    cx, cy, x_lo, x_hi, y_lo, y_hi = subject_metrics(im, mode)
    req_half_w = max(cx - x_lo, x_hi - cx) * (1 + PAD_PCT)
    req_half_h = max(cy - y_lo, y_hi - cy) * (1 + PAD_PCT)
    half_h = max(req_half_h, req_half_w / ASPECT)
    half_w = half_h * ASPECT
    if req_half_w > half_w:
        half_w = req_half_w
        half_h = half_w / ASPECT
    box = centered_crop_rect(w, h, cx, cy, half_w, half_h)
    return im.crop(box)


def main() -> None:
    for src_name, out_name, mode in ITEMS:
        src = BASE / src_name
        cropped = crop_3_2_centered(Image.open(src), mode)
        if cropped.width > MAX_W:
            ratio = MAX_W / cropped.width
            cropped = cropped.resize(
                (MAX_W, round(cropped.height * ratio)),
                Image.Resampling.LANCZOS,
            )
        cropped.save(OUT / out_name, "JPEG", quality=93, optimize=True, progressive=True)
        print(f"{out_name}: {cropped.size}")


if __name__ == "__main__":
    main()
