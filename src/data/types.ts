import type { IconKey } from '../components/Icon';

export interface ImageRef {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type CategoryId = 'cooktop' | 'wok' | 'griddle' | 'bratt-pan' | 'kettle' | 'range';

export interface ProductCategory {
  id: CategoryId;
  label: string;
  icon: IconKey;
  description: string;
}

export interface Highlight {
  icon: IconKey;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  model: string;
  category: CategoryId;
  /** One-line summary used on cards and in meta descriptions */
  tagline: string;
  /** Short paragraph shown beside the gallery */
  shortDescription: string;
  /** Paragraphs for the Description tab */
  description: string[];
  /** Card/main image. Gallery images follow. All are 4:3 */
  image: ImageRef;
  gallery: ImageRef[];
  /** Spec chips on cards, e.g. ["5 kW", "SS 304"] */
  chips: string[];
  highlights: Highlight[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
  warranty: string[];
  /** Used for sorting by power (kW) */
  powerKw: number;
  featured?: boolean;
  keywords: string[];
}

export interface Service {
  slug: string;
  title: string;
  icon: IconKey;
  short: string;
  /** Detailed paragraphs */
  details: string[];
  bullets: string[];
  image: ImageRef;
  /** Value passed to the service request form when the visitor clicks "Request this service" */
  formType: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, yyyy-mm-dd */
  date: string;
  readMinutes: number;
  author: string;
  image: ImageRef;
  tags: string[];
  keywords: string[];
  sections: BlogSection[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Marks sample text. The site shows a small "Sample" badge until you set this to false. */
  placeholder: boolean;
}
