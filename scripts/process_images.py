#!/usr/bin/env python3
"""
One-off helper used to turn the supplied photos into the web assets under public/assets.
You do NOT need to run this to use the site. Replace the files in public/assets with your own
(keep the same file names) and you are done. See README -> "Replacing images".
"""
import sys
from PIL import Image, ImageFilter, ImageDraw

SRC = "/mnt/user-data/uploads/"
OUT = "/home/claude/rathin-website/public/assets/"

WOK = SRC + "WhatsApp_Image_2026-10-06_at_09_44_24.jpeg"
COOKTOPS = SRC + "WhatsApp_Image_2026-10-06_at_09_43_32.jpeg"
KETTLE = SRC + "WhatsApp_Image_2026-10-06_at_09_33_44.jpeg"
BRATT = SRC + "WhatsApp_Image_2026-10-06_at_09_30_08.jpeg"
SHOWROOM = SRC + "WhatsApp_Image_2026-10-06_at_09_24_45.jpeg"
LOGO = SRC + "rathinlogo.jpg"


def load(p):
    return Image.open(p).convert("RGB")


def blur_pad(img, size=(1200, 900), bg_dim=0.35):
    """Fit the whole photo inside a 4:3 frame; the sides are filled with a blurred, brightened copy
    so every product tile has an identical aspect ratio with nothing cropped off."""
    w, h = size
    scale_bg = max(w / img.width, h / img.height)
    bg = img.resize((int(img.width * scale_bg) + 1, int(img.height * scale_bg) + 1), Image.LANCZOS)
    left = (bg.width - w) // 2
    top = (bg.height - h) // 2
    bg = bg.crop((left, top, left + w, top + h)).filter(ImageFilter.GaussianBlur(28))
    white = Image.new("RGB", (w, h), (244, 246, 250))
    bg = Image.blend(bg, white, bg_dim)
    scale = min(w / img.width, h / img.height)
    fg = img.resize((max(1, int(img.width * scale)), max(1, int(img.height * scale))), Image.LANCZOS)
    bg.paste(fg, ((w - fg.width) // 2, (h - fg.height) // 2))
    return bg


def cover(img, size):
    w, h = size
    s = max(w / img.width, h / img.height)
    r = img.resize((int(img.width * s) + 1, int(img.height * s) + 1), Image.LANCZOS)
    l = (r.width - w) // 2
    t = (r.height - h) // 2
    return r.crop((l, t, l + w, t + h))


def save(img, name, q=82):
    path = OUT + name
    if name.endswith(".webp"):
        img.save(path, "WEBP", quality=q, method=6)
    else:
        img.save(path, quality=q, optimize=True)
    print("wrote", name, img.size)


wok, cook, kettle, bratt, show = load(WOK), load(COOKTOPS), load(KETTLE), load(BRATT), load(SHOWROOM)

# ---- Products (4:3, 1200x900) ----
save(blur_pad(cook), "products/cooktop-tabletop.webp")
save(blur_pad(wok), "products/wok-unit.webp")
save(blur_pad(bratt), "products/tilting-bratt-pan.webp")
save(blur_pad(kettle), "products/tilting-boiling-kettle.webp")
# crops from the showroom photo (1600x900)
save(blur_pad(show.crop((40, 300, 680, 810))), "products/induction-griddle.webp")
save(blur_pad(show.crop((665, 335, 1060, 665))), "products/cooktop-floor-standing.webp")
save(blur_pad(show.crop((1040, 440, 1600, 830))), "products/cooktop-compact-pair.webp")
# detail close-ups
save(blur_pad(kettle.crop((100, 560, 400, 880))), "products/kettle-display-closeup.webp")
save(blur_pad(cook.crop((170, 290, 480, 520))), "products/cooktop-display-closeup.webp")
save(blur_pad(wok.crop((200, 500, 790, 960))), "products/wok-closeup.webp")

# ---- Hero / general (kept at native ratio, used with object-fit: cover) ----
save(show, "hero-showroom.webp", 84)
save(kettle, "hero-kettle.webp", 84)
save(bratt, "hero-bratt-pan.webp", 84)
save(cook, "hero-cooktops.webp", 84)
save(wok, "hero-wok.webp", 84)
save(show.crop((40, 300, 680, 810)), "about-griddle.webp", 84)

# ---- Page banners (wide, dark overlay is added in CSS) ----
save(cover(show.crop((0, 0, 1600, 640)), (1920, 620)), "banners/banner-contact.webp", 78)
save(cover(show.crop((0, 280, 1600, 900)), (1920, 620)), "banners/banner-products.webp", 78)
save(cover(kettle.crop((0, 380, 1600, 1130)), (1920, 620)), "banners/banner-services.webp", 78)
save(cover(kettle.crop((0, 0, 1600, 760)), (1920, 620)), "banners/banner-blogs.webp", 78)
save(cover(cook.crop((0, 100, 845, 520)), (1920, 620)), "banners/banner-request.webp", 78)
save(cover(show, (1920, 800)), "banners/banner-parallax.webp", 80)

# ---- Open Graph image (1200x630 JPG) ----
og = cover(show.crop((0, 0, 1600, 840)), (1200, 630))
og.save(OUT + "og-image.jpg", quality=86, optimize=True)
print("wrote og-image.jpg")

# ---- Logo: transparent background + favicons ----
logo = Image.open(LOGO).convert("RGBA")
w, h = logo.size
# flood-fill the white *outside* the gear to transparent (the white disc inside the gear stays white)
tmp = logo.copy()
for corner in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
    ImageDraw.floodfill(tmp, corner, (255, 255, 255, 0), thresh=40)
bbox = tmp.getbbox()
tmp = tmp.crop(bbox)
tmp.save(OUT + "logo.png", optimize=True)
print("wrote logo.png", tmp.size)
logo.convert("RGB").save(OUT + "logo-original.jpg", quality=92)

# favicon source = the gear (left portion of the logo, square)
gear = tmp.crop((0, 0, min(tmp.width, int(tmp.height * 1.0)), tmp.height))
side = max(gear.size)
sq = Image.new("RGBA", (side, side), (255, 255, 255, 0))
sq.paste(gear, ((side - gear.width) // 2, (side - gear.height) // 2), gear)
for name, px in [("favicon-16.png", 16), ("favicon-32.png", 32), ("apple-touch-icon.png", 180), ("icon-192.png", 192), ("icon-512.png", 512)]:
    icon = sq.resize((px, px), Image.LANCZOS)
    if name in ("apple-touch-icon.png", "icon-192.png", "icon-512.png"):
        base = Image.new("RGBA", (px, px), (255, 255, 255, 255))
        pad = int(px * 0.08)
        inner = sq.resize((px - 2 * pad, px - 2 * pad), Image.LANCZOS)
        base.paste(inner, (pad, pad), inner)
        icon = base
    icon.save(OUT + "../" + name, optimize=True)
    print("wrote", name)
sq.resize((48, 48), Image.LANCZOS).save(OUT + "../favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("wrote favicon.ico")
