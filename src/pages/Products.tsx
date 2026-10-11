import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { categories, products } from '../data/products';
import type { CategoryId } from '../data/types';
import { cx } from '../utils/cx';

type Sort = 'featured' | 'power-asc' | 'power-desc' | 'name';

function SkeletonGrid() {
  return (
    <div className="grid grid--3" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton--img" />
          <div className="skeleton skeleton--line" />
          <div className="skeleton skeleton--line skeleton--short" />
          <div className="skeleton skeleton--btns" />
        </div>
      ))}
    </div>
  );
}

export default function Products() {
  const [params, setParams] = useSearchParams();
  const initial = params.get('category');
  const [category, setCategory] = useState<CategoryId | 'all'>(categories.some((c) => c.id === initial) ? (initial as CategoryId) : 'all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('featured');
  // brief skeleton on the client's first paint (pre-rendered HTML already contains every product for search engines)
  const [loading, setLoading] = useState(typeof window !== 'undefined');

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(t);
  }, []);

  const chooseCategory = (c: CategoryId | 'all') => {
    setCategory(c);
    setParams(c === 'all' ? {} : { category: c }, { replace: true });
  };

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = products.filter((p) => (category === 'all' || p.category === category) && (!q || `${p.name} ${p.model} ${p.tagline} ${p.keywords.join(' ')} ${p.tables.flatMap((t) => t.rows.map((r) => r.join(' '))).join(' ')}`.toLowerCase().includes(q)));
    if (sort === 'power-asc') out = [...out].sort((a, b) => a.powerKw - b.powerKw);
    if (sort === 'power-desc') out = [...out].sort((a, b) => b.powerKw - a.powerKw);
    if (sort === 'name') out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [category, query, sort]);

  return (
    <>
      <SEO
        title="Commercial Induction Kitchen Equipment | Rathin"
        description="Commercial induction wok cookers, multi-burner cookers, stock pot, griddles, steamers, fryers, flame stoves and table-top cookers from 2.5 kW to 30 kW. 1 year warranty."
        path="/products"
        keywords={['commercial induction cooker', 'induction wok cooker', 'multi burner induction cooker', 'induction griddle', 'induction steamer', 'induction fryer', 'electric flame stove', 'table top induction cooker']}
      />
      <PageHero
        title="Commercial Induction Products"
        subtitle="Wok cookers, multi-burner ranges, stock pots, griddles, steamers, fryers and table-top cookers in stainless steel."
        image="/assets/banners/banner-products.webp"
        crumbs={[{ label: 'Products' }]}
      />

      <section className="section section--blush">
        <div className="container">
          <div className="toolbar">
            <div className="toolbar__search">
              <Icon name="search" />
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <input id="product-search" type="search" placeholder="Search name, model or power (e.g. TS-AB0001, 8 kW wok)" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="toolbar__sort">
              <Icon name="sort" />
              <label htmlFor="product-sort" className="sr-only">
                Sort products
              </label>
              <select id="product-sort" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="featured">Featured</option>
                <option value="power-asc">Power: low to high</option>
                <option value="power-desc">Power: high to low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="chips" role="group" aria-label="Filter by category">
            <button type="button" className={cx('chip-btn', category === 'all' && 'is-active')} aria-pressed={category === 'all'} onClick={() => chooseCategory('all')}>
              <Icon name="grid" /> All Products
            </button>
            {categories.map((c) => (
              <button key={c.id} type="button" className={cx('chip-btn', category === c.id && 'is-active')} aria-pressed={category === c.id} onClick={() => chooseCategory(c.id)}>
                <Icon name={c.icon} /> {c.label}
              </button>
            ))}
          </div>

          <p className="results-count" aria-live="polite">
            Showing {list.length} of {products.length} products
          </p>

          {loading ? (
            <SkeletonGrid />
          ) : list.length ? (
            <motion.div className="grid grid--3" layout>
              <AnimatePresence mode="popLayout">
                {list.map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="empty">
              <Icon name="search" />
              <h2>No products match your search</h2>
              <p>Try a different keyword or clear the filters. Need something custom? We manufacture to order.</p>
              <button
                type="button"
                className="btn btn--primary btn--md"
                onClick={() => {
                  setQuery('');
                  chooseCategory('all');
                }}
              >
                <span className="btn__label">Clear filters</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* the products grid is pre-rendered in full for SEO; this static list keeps every product link crawlable when filters are active */}
      <CtaBand serviceType="New Machine Enquiry" />
    </>
  );
}
