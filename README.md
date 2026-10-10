# RATHIN - Manufacturing Innovation (website)

Static, SEO-ready website for Rathin, a manufacturer and service provider of commercial induction kitchen equipment.

**Stack:** React 18, TypeScript, Vite, React Router v6, Framer Motion, Swiper, react-helmet-async, react-icons, EmailJS (`@emailjs/browser`), plain CSS design system (CSS variables). No backend, no database.
**Fonts:** Philosopher (headings) and Alegreya (body) from Google Fonts.

> **Status note:** this project was written in a sandbox that could not reach the npm registry, so `npm install`, the TypeScript compile and the production build were **not run there**. Please run the three commands below once. If anything reports an error, send me the message and I will fix it.

## 1. Install, run, build

Requires Node.js 18 or newer.

```bash
npm install          # install dependencies
npm run dev          # development server at http://localhost:5173
npm run build        # type-check + production build + static pre-render into /dist
npm run preview      # preview the built site locally
npm run check:seo    # after a build: audits title/description length, h1 count and image alt text of every page
```

`npm run build` does four things: `tsc --noEmit`, the normal Vite build, a small server bundle, and `scripts/prerender.mjs`, which writes real HTML for every route (`/`, `/products`, each product, `/services`, `/blogs`, each post, `/contact`, `/request-service`), plus `404.html`, `sitemap.xml` and `robots.txt`. The browser then loads React and replaces the static HTML with the live page.

## 2. First things to edit (placeholders)

Everything marked `TODO: UPDATE` lives in **`src/data/siteConfig.ts`**: phone, WhatsApp number, email, address, working hours, social links, Google Maps embed URL, the production URL (`url`, used for canonical links, sitemap, Open Graph) and the stats numbers.

Placeholders you MUST replace before launch:
- Phone / WhatsApp / email / address / map (siteConfig.ts). Defaults are dummy values.
- **Stats** (500+ machines, 250+ clients, ...) are placeholders. Only publish numbers you can stand behind.
- **Testimonials** (`src/data/home.ts`) are sample text. Replace with real customer feedback, then set `placeholder: false` (the "Sample" badge disappears).
- **Product specs, model numbers and dimensions** (`src/data/products.ts`) are realistic placeholders. Verify against your machines.
- **AMC plans** (`src/data/services.ts`) are illustrative.
- **Brochure**: replace `public/assets/brochures/rathin-brochure.pdf`.
- `.env` EmailJS keys (see below).

## 3. EmailJS setup (all forms email you, no backend)

The Request For Service modal, `/request-service`, the Contact form and the product enquiry form all send through EmailJS.

1. Create a free account at https://www.emailjs.com
2. **Email Services -> Add New Service** (Gmail, Outlook, ...). Copy the **Service ID**.
3. **Email Templates -> Create New Template**. Set *To Email* to your inbox (or `{{to_email}}`), *Reply-To* to `{{reply_to}}`, *Subject* to `{{subject}}` (already prefixed with "[Website]"), and use this body:

   ```
   New {{form_type}} from the Rathin website

   Name: {{from_name}}
   Phone: {{phone}}
   Email: {{from_email}}
   Service type: {{service_type}}
   Product: {{product_name}}
   Subject: {{subject}}

   Message:
   {{message}}

   Page: {{page_url}}
   Sent: {{sent_at}}
   ```
   Copy the **Template ID**.
4. **Account -> General** copy the **Public Key**. Under **Account -> Security**, restrict allowed domains to your website.
5. Copy `.env.example` to `.env` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Rebuild. On Netlify/Vercel, add the same three variables in the dashboard (they are read at build time).

Template variables sent by the site: `form_type, from_name, phone, from_email, reply_to, service_type, subject, message, product_name, page_url, sent_at, to_email`.

**Fallback:** if EmailJS is not configured or the request fails, the form shows an error panel with *Try again*, WhatsApp, Call and *Send via email app* (a prefilled `mailto:` link), so no enquiry is lost.

## 4. Editing content

| What | Where |
|---|---|
| Business details, stats, nav | `src/data/siteConfig.ts` |
| Hero slides (image or video) | `src/data/home.ts` -> `heroSlides` |
| Why choose, industries, steps, gallery, testimonials, FAQs | `src/data/home.ts` |
| Products (add / remove / edit) | `src/data/products.ts` |
| Services, process steps, AMC plans | `src/data/services.ts` |
| Blog posts | `src/data/blogs.ts` |
| Colours, spacing, all styling | `src/styles/index.css` (colours in `:root`) |
| Icons used in data files | `src/components/Icon.tsx` (register more react-icons there) |

**Hero video:** set a slide's `type: 'video'`, `src: '/assets/videos/your.mp4'`, `poster: '/assets/...jpg'`. Videos autoplay muted, loop and fill the frame with `object-fit: cover`. Two sample clips are in `public/assets/videos/` (`hero-demo.mp4`, `hero-demo-m.mp4`).

**New product:** copy an object in `products.ts`, change `slug`, text, specs and image paths. The page, card, sitemap entry, JSON-LD and pre-rendered HTML are created automatically at the next build.

## 5. Images to replace

All images are in `public/assets/`. Keep the file names (or update the path in the data file).

- `logo.png` - your logo (already included). `og-image.jpg` (1200x630) - social sharing image.
- `hero-showroom.webp`, `hero-kettle.webp`, `hero-bratt-pan.webp`, `hero-cooktops.webp`, `hero-wok.webp` - hero slides.
- `products/*.webp` and `images/products/*.jpg` - product photos (4:3, 1200x900 recommended).
- `images/services/*.jpg`, `images/blog/*.jpg`, `images/gallery/g1-g8.jpg`, `images/about/*.jpg`, `images/parallax.jpg`, `banners/*.webp` (1920x620 page banners).
- `favicon.svg`, `favicon.ico`, `favicon-16/32.png`, `apple-touch-icon.png`, `icon-192/512.png` - favicon set.
- `src/data/lqip.ts` holds tiny blur-up placeholders; missing entries simply skip the blur-up.

## 6. SEO checklist

- [ ] Set the real domain in `siteConfig.url` (canonical, sitemap, Open Graph, JSON-LD).
- [ ] Replace phone, address, geo coordinates (`address.lat/lng`) and map.
- [ ] Run `npm run build` then `npm run check:seo` (title <= 60, description ~150-160, one h1 per page, alt text).
- [ ] Submit `https://your-domain/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- [ ] Create / claim your Google Business Profile with the same name, address, phone.
- [ ] Add real testimonials and photos; check structured data at https://search.google.com/test/rich-results
- [ ] Run Lighthouse (target 90+) on the deployed site.

Included: unique title/description/keywords/canonical/Open Graph/Twitter/geo meta per page; JSON-LD for Organization, LocalBusiness, WebSite, BreadcrumbList, Product, FAQPage, Article and Service; sitemap, robots, manifest, favicon set, 404 page.

## 7. Deployment

The `dist/` folder is plain static files.

- **Netlify:** build command `npm run build`, publish directory `dist` (`netlify.toml` included). Add the EmailJS env vars.
- **Vercel:** framework preset *Vite*, build `npm run build`, output `dist`.
- **GitHub Pages / any static host:** upload `dist/`. `404.html` is generated. For a project page under a sub-path, set `base` in `vite.config.ts`.
- Serve over HTTPS and enable gzip/brotli (Netlify and Vercel do this automatically).

## 8. Notes

- **Mobile:** the viewport disables pinch/double-tap zoom as requested (`user-scalable=no`, `touch-action: manipulation`, an iOS gesture guard in `main.tsx`). This reduces accessibility for low-vision users; remove those lines if you prefer standard zoom. Form inputs use 17px text so iOS does not zoom on focus.
- **Hero height:** the hero fills the screen below the header (viewport height minus header) so slide dots and highlights are never cut off.
- **Reduced motion:** animations switch off for visitors who request it. Cursor follower, tilt, spotlight and magnetic buttons run on mouse devices only.
- **Pre-render:** static HTML is replaced (not hydrated) when React loads. The preloader shows only once per browser session.
