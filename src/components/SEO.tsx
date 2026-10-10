/**
 * Per-page SEO: title, description, keywords, canonical, Open Graph, Twitter Card, geo meta and JSON-LD.
 * Titles should stay under 60 characters and descriptions around 150-160 characters.
 */
import { Helmet } from 'react-helmet-async';
import { absoluteUrl, siteConfig } from '../data/siteConfig';

type Json = Record<string, unknown>;

export interface SEOProps {
  title: string;
  description: string;
  /** path starting with "/" (used for canonical + og:url) */
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product';
  jsonLd?: Json | Json[];
  noindex?: boolean;
  publishedTime?: string;
}

export const baseKeywords = [
  'Rathin',
  'induction cooktop',
  'commercial induction cooker',
  'induction wok',
  'induction griddle',
  'tilting bratt pan',
  'tilting boiling kettle',
  'induction kettle',
  'commercial kitchen equipment',
  'stainless steel kitchen equipment',
  'induction machine manufacturer',
  'induction repair and service',
  'induction AMC',
  '1 year warranty',
  'induction kitchen equipment supplier India',
];

export function SEO({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.ogImage,
  imageAlt = 'Rathin commercial induction kitchen equipment',
  type = 'website',
  jsonLd,
  noindex = false,
  publishedTime,
}: SEOProps) {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image);
  const allKeywords = Array.from(new Set([...keywords, ...baseKeywords.slice(0, 6), siteConfig.seoLocation])).join(', ');
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const { lat, lng, region, regionCode, city } = siteConfig.address;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type === 'product' ? 'website' : type} />
      <meta property="og:site_name" content={`${siteConfig.brandName} - ${siteConfig.tagline}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_IN" />
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      <meta name="theme-color" content="#12337F" />
      <meta name="geo.region" content={regionCode} />
      <meta name="geo.placename" content={`${city}, ${region}`} />
      <meta name="geo.position" content={`${lat};${lng}`} />
      <meta name="ICBM" content={`${lat}, ${lng}`} />

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
