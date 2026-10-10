/**
 * JSON-LD builders (schema.org). Used by the <SEO /> component.
 * Everything here reads from siteConfig and the data files, so editing those updates the structured data too.
 */
import { absoluteUrl, fullAddress, siteConfig } from '../data/siteConfig';
import type { BlogPost, FaqItem, Product, Service } from '../data/types';
import { categoryLabel } from '../data/products';

type Json = Record<string, unknown>;

const sameAs = () => Object.values(siteConfig.social).filter(Boolean);

const orgRef = () => ({ '@type': 'Organization', name: siteConfig.name, url: absoluteUrl('/') });

export const organizationSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: `${siteConfig.brandName} - ${siteConfig.tagline}`,
  slogan: siteConfig.tagline,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/assets/logo.png'),
  image: absoluteUrl(siteConfig.ogImage),
  description: siteConfig.shortDescription,
  email: siteConfig.email,
  telephone: siteConfig.phoneTel,
  sameAs: sameAs(),
});

export const localBusinessSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  image: absoluteUrl(siteConfig.ogImage),
  url: absoluteUrl('/'),
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  description: siteConfig.shortDescription,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteConfig.address.street}, ${siteConfig.address.locality}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.countryCode,
  },
  geo: { '@type': 'GeoCoordinates', latitude: siteConfig.address.lat, longitude: siteConfig.address.lng },
  openingHours: siteConfig.hours.schema,
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: sameAs(),
});

export const websiteSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: `${siteConfig.brandName} - ${siteConfig.tagline}`,
  url: absoluteUrl('/'),
  inLanguage: 'en-IN',
  publisher: { '@id': `${siteConfig.url}/#organization` },
});

export const breadcrumbSchema = (items: { label: string; to?: string }[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    ...(item.to ? { item: absoluteUrl(item.to) } : {}),
  })),
});

export const productSchema = (p: Product): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.name,
  sku: p.model,
  mpn: p.model,
  description: p.shortDescription,
  image: p.gallery.map((g) => absoluteUrl(g.src)),
  url: absoluteUrl(`/products/${p.slug}`),
  category: categoryLabel(p.category),
  brand: { '@type': 'Brand', name: siteConfig.brandName },
  manufacturer: orgRef(),
  material: 'Stainless steel',
  additionalProperty: p.specs.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })),
});

export const faqSchema = (items: FaqItem[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const articleSchema = (post: BlogPost): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: [absoluteUrl(post.image.src)],
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Organization', name: post.author },
  publisher: { '@type': 'Organization', name: siteConfig.name, logo: { '@type': 'ImageObject', url: absoluteUrl('/assets/logo.png') } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/blogs/${post.slug}`) },
  keywords: post.keywords.join(', '),
});

export const serviceListSchema = (items: Service[]): Json[] =>
  items.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.short,
    serviceType: s.title,
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, address: fullAddress(), telephone: siteConfig.phoneTel },
    areaServed: { '@type': 'Country', name: 'India' },
    url: absoluteUrl(`/services#${s.slug}`),
  }));
