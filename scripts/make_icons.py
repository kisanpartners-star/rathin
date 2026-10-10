#!/usr/bin/env python3
"""Draws the gear + R favicon set (matches public/favicon.svg). Optional helper."""
import math, glob
from PIL import Image, ImageDraw, ImageFont

OUT = "/home/claude/rathin-website/public/"
S = 1024  # draw large, then downsample for crisp edges

def gear_icon(bg=None):
    img = Image.new("RGBA", (S, S), bg or (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    cx = cy = S // 2
    r_out, r_in, teeth = S * 0.47, S * 0.38, 10
    pts = []
    for i in range(teeth):
        a0 = 2 * math.pi * i / teeth
        step = 2 * math.pi / teeth
        for frac, r in [(0.00, r_in), (0.14, r_out), (0.50, r_out), (0.64, r_in)]:
            a = a0 + step * frac
            pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    d.polygon(pts, fill=(30, 79, 184, 255))
    d.ellipse([cx - S * 0.30, cy - S * 0.30, cx + S * 0.30, cy + S * 0.30], fill=(255, 255, 255, 255))
    font = None
    for f in glob.glob("/usr/share/fonts/**/DejaVuSerif-Bold.ttf", recursive=True) + glob.glob("/usr/share/fonts/**/DejaVuSans-Bold.ttf", recursive=True):
        font = ImageFont.truetype(f, int(S * 0.46)); break
    if font is None:
        font = ImageFont.load_default()
    d.text((cx, cy + S * 0.01), "R", font=font, fill=(227, 38, 46, 255), anchor="mm")
    return img

glyph = gear_icon()
for name, px in [("favicon-16.png", 16), ("favicon-32.png", 32)]:
    glyph.resize((px, px), Image.LANCZOS).save(OUT + name, optimize=True)
for name, px in [("apple-touch-icon.png", 180), ("icon-192.png", 192), ("icon-512.png", 512)]:
    base = gear_icon((255, 255, 255, 255)).resize((px, px), Image.LANCZOS)
    base.save(OUT + name, optimize=True)
glyph.resize((64, 64), Image.LANCZOS).save(OUT + "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print("icons written")

# ---- favicon.svg (same geometry as the PNGs) ----
cx = cy = 64
r_out, r_in, teeth = 60, 49, 10
pts = []
for i in range(teeth):
    a0 = 2 * math.pi * i / teeth
    step = 2 * math.pi / teeth
    for frac, r in [(0.00, r_in), (0.14, r_out), (0.50, r_out), (0.64, r_in)]:
        a = a0 + step * frac
        pts.append("%.1f,%.1f" % (cx + r * math.cos(a), cy + r * math.sin(a)))
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Rathin">
  <polygon fill="#1E4FB8" points="{' '.join(pts)}"/>
  <circle cx="64" cy="64" r="38" fill="#fff"/>
  <text x="64" y="65" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="58" fill="#E3262E">R</text>
</svg>
'''
open(OUT + "favicon.svg", "w").write(svg)
print("favicon.svg written")
