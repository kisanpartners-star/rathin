import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon, type IconKey } from '../components/Icon';
import { Img } from '../components/Img';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { absoluteUrl } from '../data/siteConfig';
import { getBlog, relatedBlogs } from '../data/blogs';
import { articleSchema } from '../utils/schema';
import { fitDescription } from '../utils/seoText';
import { BlogCard, BlogMeta } from './Blogs';
import NotFound from './NotFound';

export default function BlogDetail() {
  const { slug = '' } = useParams();
  const post = getBlog(slug);
  const [copied, setCopied] = useState(false);
  if (!post) return <NotFound />;

  const url = absoluteUrl(`/blogs/${post.slug}`);
  const share: { key: IconKey; label: string; href: string }[] = [
    { key: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { key: 'x', label: 'X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}` },
    { key: 'linkedin', label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', url);
    }
  };

  return (
    <>
      <SEO
        title={post.title.length <= 60 ? post.title : `${post.title.slice(0, 57).replace(/\s+\S*$/, '')}…`}
        description={fitDescription(post.excerpt, ' Read the Rathin guide.')}
        path={`/blogs/${post.slug}`}
        type="article"
        image={post.image.src}
        imageAlt={post.image.alt}
        keywords={post.keywords}
        publishedTime={post.date}
        jsonLd={articleSchema(post)}
      />
      <PageHero title={post.title} image="/assets/banners/banner-blogs.webp" crumbs={[{ label: 'Blogs', to: '/blogs' }, { label: post.category }]} />

      <section className="section section--white">
        <div className="container post">
          <article className="post__main">
            <Img src={post.image.src} alt={post.image.alt} width={post.image.width ?? 1200} height={post.image.height ?? 675} priority className="post__cover" />
            <BlogMeta post={post} />
            <p className="post__lead">{post.excerpt}</p>

            {post.sections.map((s) => (
              <section key={s.id} id={s.id} className="post__section">
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.bullets ? (
                  <ul className="tick-list">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="checkCircle" /> {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="post__tags">
              <Icon name="tag" />
              <ul className="tag-list">
                {post.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="post__side" aria-label="Article tools">
            <nav className="toc" aria-label="Table of contents">
              <h2 className="toc__title">In this article</h2>
              <ol>
                {post.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="share">
              <h2 className="toc__title">Share this article</h2>
              <ul className="share__list">
                {share.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${s.label}`} className="social__link" data-tip={s.label}>
                      <Icon name={s.key} />
                    </a>
                  </li>
                ))}
                <li>
                  <button type="button" className="social__link" onClick={copy} aria-label="Copy article link" data-tip={copied ? 'Copied!' : 'Copy link'}>
                    <Icon name={copied ? 'check' : 'link'} />
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <SectionHeading eyebrow="Keep Reading" title={<>Related <em>Articles</em></>} />
          <div className="grid grid--3">
            {relatedBlogs(post, 3).map((b, i) => (
              <BlogCard key={b.slug} post={b} index={i} />
            ))}
          </div>
          <p className="center">
            <Link to="/blogs" className="link-arrow">
              All articles <Icon name="arrowRight" />
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
