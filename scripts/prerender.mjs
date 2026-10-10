/**
 * Static pre-rendering (a tiny, dependency-free "SSG").
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle):
 *   - renders every route to real HTML (headings, text, links, meta tags, JSON-LD) so search engines can crawl it
 *   - writes dist/<route>/index.html, dist/404.html, sitemap.xml and robots.txt
 * The browser then loads the React app, which replaces the static HTML with the live interactive page.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const serverEntry = pathToFileURL(join(root, 'dist-server', 'entry-server.js')).href;

const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render, routes, siteUrl } = await import(serverEntry);

const inject = (html, head, app) => template.replace('<!--app-head-->', head).replace('<!--app-html-->', app);

async function write(file, content) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
}

let count = 0;
for (const route of routes) {
  const { html, head } = await render(route);
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html');
  await write(file, inject(template, head, html));
  count += 1;
}

// 404 page (Netlify, Vercel, GitHub Pages and most static hosts serve /404.html for unknown URLs)
const notFound = await render('/this-page-does-not-exist');
await write(join(dist, '404.html'), inject(template, notFound.head, notFound.html));

// sitemap.xml + robots.txt (also copied into /public so they exist during `npm run dev`)
const today = new Date().toISOString().slice(0, 10);
const priority = (r) => (r === '/' ? '1.0' : r === '/products' || r === '/services' ? '0.9' : r.startsWith('/products/') ? '0.8' : '0.7');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url>\n    <loc>${siteUrl}${r === '/' ? '' : r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
for (const dir of [dist, join(root, 'public')]) {
  await write(join(dir, 'sitemap.xml'), sitemap);
  await write(join(dir, 'robots.txt'), robots);
}

console.log(`Pre-rendered ${count} pages + 404.html, sitemap.xml and robots.txt`);
