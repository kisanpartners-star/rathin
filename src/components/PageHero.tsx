/** Breadcrumb banner shown at the top of every page except Home. Also outputs BreadcrumbList JSON-LD. */
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { breadcrumbSchema } from '../utils/schema';
import { Icon } from './Icon';

export interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  /** background image path, e.g. /assets/banners/banner-products.webp */
  image: string;
  /** breadcrumb trail AFTER "Home". The last item is the current page (no link). */
  crumbs: Crumb[];
}

export function PageHero({ title, subtitle, image, crumbs }: Props) {
  const trail: Crumb[] = [{ label: 'Home', to: '/' }, ...crumbs];

  return (
    <section className="page-hero" aria-labelledby="page-title">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(trail))}</script>
      </Helmet>
      <img className="page-hero__img" src={image} alt="" width={1920} height={620} />
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__inner">
        <motion.h1
          id="page-title"
          className="page-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            className="page-hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        ) : null}
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="breadcrumb__list">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <Fragment key={`${c.label}-${i}`}>
                  <li className="breadcrumb__item">
                    {last || !c.to ? (
                      <span aria-current="page">{c.label}</span>
                    ) : (
                      <Link to={c.to}>
                        {i === 0 ? <Icon name="home" /> : null}
                        {c.label}
                      </Link>
                    )}
                  </li>
                  {!last ? (
                    <li className="breadcrumb__sep" aria-hidden="true">
                      <Icon name="chevronRight" />
                    </li>
                  ) : null}
                </Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
