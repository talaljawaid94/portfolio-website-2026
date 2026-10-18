#!/usr/bin/env python3
"""Convert PNG files to WebP, next to the originals.

Usage:  python3 scripts/make-webp.py <folder-or-file> [...]

Used for the Home / AI Experiments card images: drop a new export (including
@2x / @3x versions, e.g. mobile@2x.png) into its folder, run this, and
reference the .webp files from src/data/content.js. The PNGs stay as the
editable source; the site serves only the smaller WebP files.

Each image is encoded at the lowest quality that stays visually clean
(>= MIN_PSNR dB against the original); dark, glowing artwork that WebP would
smooth into blocks falls back to lossless. Needs Pillow (pip install pillow).
"""
import math
import sys
from pathlib import Path
from PIL import Image, ImageChops

QUALITIES = (88, 92, 96, 99)  # tried in order
MIN_PSNR = 40.0  # dB; above ~38-40 UI imagery is visually indistinguishable


def psnr(a: Image.Image, b: Image.Image) -> float:
    hist = ImageChops.difference(a.convert("RGB"), b.convert("RGB")).histogram()
    n = a.size[0] * a.size[1] * 3
    mse = sum(((i % 256) ** 2) * c for i, c in enumerate(hist)) / n
    return 99.0 if mse == 0 else 10 * math.log10(255 * 255 / mse)


def convert(png: Path) -> None:
    out = png.with_suffix(".webp")
    with Image.open(png) as im:
        im.load()
        chosen = "lossless"
        for q in QUALITIES:
            im.save(out, "WEBP", quality=q, method=6)
            with Image.open(out) as check:
                score = psnr(im, check)
            if score >= MIN_PSNR:
                chosen = f"q{q}, {score:.1f} dB"
                break
        else:
            im.save(out, "WEBP", lossless=True, method=6)
    before, after = png.stat().st_size, out.stat().st_size
    print(f"{png}: {before // 1024} KB -> {after // 1024} KB ({after * 100 // before}%)  [{chosen}]")


def main(args: list[str]) -> None:
    if not args:
        sys.exit(__doc__)
    for arg in args:
        p = Path(arg)
        files = [p] if p.is_file() else sorted(p.rglob("*.png"))
        for f in files:
            convert(f)


if __name__ == "__main__":
    main(sys.argv[1:])
