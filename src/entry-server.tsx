/**
 * Server entry used ONLY at build time by scripts/prerender.mjs to write static HTML for every route.
 */
import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { blogs } from './data/blogs';
import { products } from './data/products';
import { siteConfig } from './data/siteConfig';
import { preloadRoute } from './pages';

export const siteUrl = siteConfig.url;

/** Every URL that gets its own HTML file + sitemap entry. */
export const routes = [
  '/',
  '/products',
  ...products.map((p) => `/products/${p.slug}`),
  '/services',
  '/blogs',
  ...blogs.map((b) => `/blogs/${b.slug}`),
  '/contact',
  '/request-service',
];

export async function render(url: string) {
  await preloadRoute(url);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const h = helmetContext.helmet;
  const head = h ? [h.title, h.priority, h.meta, h.link, h.script].map((x) => x.toString()).join('\n    ') : '';
  return { html, head };
}
