/** All route components (lazy-loaded) plus a helper that finds the page for a URL so it can be preloaded. */
import { lazyPage, type LazyPage } from '../utils/lazyPage';

export const Home = lazyPage(() => import('./Home'));
export const Products = lazyPage(() => import('./Products'));
export const ProductDetail = lazyPage(() => import('./ProductDetail'));
export const Services = lazyPage(() => import('./Services'));
export const Blogs = lazyPage(() => import('./Blogs'));
export const BlogDetail = lazyPage(() => import('./BlogDetail'));
export const Contact = lazyPage(() => import('./Contact'));
export const RequestService = lazyPage(() => import('./RequestService'));
export const NotFound = lazyPage(() => import('./NotFound'));

export function pageForPath(pathname: string): LazyPage {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/') return Home;
  if (p === '/products') return Products;
  if (p.startsWith('/products/')) return ProductDetail;
  if (p === '/services') return Services;
  if (p === '/blogs') return Blogs;
  if (p.startsWith('/blogs/')) return BlogDetail;
  if (p === '/contact') return Contact;
  if (p === '/request-service') return RequestService;
  return NotFound;
}

export const preloadRoute = (pathname: string) => pageForPath(pathname).preload();
