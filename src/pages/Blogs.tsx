import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { Img } from '../components/Img';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { blogs, formatDate } from '../data/blogs';
import type { BlogPost } from '../data/types';
import { cx } from '../utils/cx';

export function BlogMeta({ post }: { post: BlogPost }) {
  return (
    <ul className="blog-meta">
      <li>
        <Icon name="calendar" /> <time dateTime={post.date}>{formatDate(post.date)}</time>
      </li>
      <li>
        <Icon name="clock" /> {post.readMinutes} min read
      </li>
      <li>
        <Icon name="user" /> {post.author}
      </li>
    </ul>
  );
}

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="blog-card" data-fx="">
        <Link to={`/blogs/${post.slug}`} className="blog-card__media" tabIndex={-1} aria-label={post.title}>
          <Img src={post.image.src} alt={post.image.alt} width={post.image.width ?? 1200} height={post.image.height ?? 675} />
          <span className="blog-card__tag">{post.category}</span>
        </Link>
        <div className="blog-card__body">
          <BlogMeta post={post} />
          <h3 className="blog-card__title">
            <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
          <Link to={`/blogs/${post.slug}`} className="link-arrow">
            Read article <Icon name="arrowRight" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export default function Blogs() {
  const cats = ['All', ...Array.from(new Set(blogs.map((b) => b.category)))];
  const [cat, setCat] = useState('All');
  const [featured, ...rest] = blogs;
  const list = (cat === 'All' ? rest : blogs.filter((b) => b.category === cat));

  return (
    <>
      <SEO
        title="Induction Cooking Blog & Kitchen Guides | Rathin"
        description="Guides from Rathin on induction vs gas, energy savings, buying commercial induction cooktops, maintenance, troubleshooting, bratt pans and boiling kettles."
        path="/blogs"
        keywords={['induction vs gas', 'induction energy saving', 'induction cooktop buying guide', 'induction troubleshooting', 'induction maintenance']}
      />
      <PageHero title="Induction Cooking Blog" subtitle="Practical guides on buying, running and maintaining commercial induction kitchen equipment." image="/assets/banners/banner-blogs.webp" crumbs={[{ label: 'Blogs' }]} />

      <section className="section section--blush">
        <div className="container">
          {cat === 'All' ? (
            <Reveal>
              <article className="blog-featured" data-fx="">
                <Link to={`/blogs/${featured.slug}`} className="blog-featured__media" tabIndex={-1} aria-label={featured.title}>
                  <Img src={featured.image.src} alt={featured.image.alt} width={featured.image.width ?? 1200} height={featured.image.height ?? 675} priority />
                  <span className="blog-card__tag">Featured &middot; {featured.category}</span>
                </Link>
                <div className="blog-featured__body">
                  <BlogMeta post={featured} />
                  <h2 className="blog-featured__title">
                    <Link to={`/blogs/${featured.slug}`}>{featured.title}</Link>
                  </h2>
                  <p>{featured.excerpt}</p>
                  <ul className="tag-list">
                    {featured.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/blogs/${featured.slug}`} className="btn btn--primary btn--md">
                    <span className="btn__label">Read the article</span>
                    <Icon name="arrowRight" className="btn__icon btn__icon--right" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ) : null}

          <SectionHeading as="h2" eyebrow="Latest Articles" title={<>Insights from the <em>Rathin Team</em></>} />
          <div className="chips" role="group" aria-label="Filter articles by category">
            {cats.map((c) => (
              <button key={c} type="button" className={cx('chip-btn', cat === c && 'is-active')} aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid--3">
            {list.map((b, i) => (
              <BlogCard key={b.slug} post={b} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
