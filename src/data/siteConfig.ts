/**
 * ============================================================
 *  RATHIN - SITE CONFIG  (the ONE file with all business info)
 * ============================================================
 *  Everything marked  "TODO: UPDATE"  is a placeholder - replace it with your real details
 *  before going live. Phone, email, address, map, social links, working hours,
 *  statistics and the production URL all live here.
 */

const env = import.meta.env;

export const siteConfig = {
  name: 'RATHIN',
  brandName: 'Rathin',
  tagline: 'Manufacturing Innovation',
  shortDescription:
    'Manufacturer of commercial induction kitchen equipment in stainless steel: induction cooktops, woks, griddles, tilting bratt pans and boiling kettles with 1 year warranty and pan-India service.',

  /** TODO: UPDATE - your live domain, no trailing slash. Used for canonical URLs, sitemap and Open Graph. */
  url: 'https://www.rathin.in',

  /** TODO: UPDATE - phone number shown on the site (display text) and the same number for tel: links */
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  /** TODO: UPDATE - WhatsApp number in international format, digits only (no +, no spaces) */
  whatsappNumber: '919876543210',
  /** TODO: UPDATE - the inbox that receives enquiries (also used by the mailto fallback) */
  email: env.VITE_FALLBACK_EMAIL || 'info@rathin.in',

  /** TODO: UPDATE - full address (also used in LocalBusiness schema) */
  address: {
    street: 'Plot No. 00, Industrial Area',
    locality: 'Peenya',
    city: 'Bengaluru',
    region: 'Karnataka',
    regionCode: 'IN-KA',
    postalCode: '560058',
    country: 'India',
    countryCode: 'IN',
    lat: 13.0285,
    lng: 77.5197,
  },

  /** TODO: UPDATE - working hours. `schema` follows schema.org openingHours format. */
  hours: {
    display: 'Mon - Sat: 9:30 AM - 6:30 PM',
    note: 'Sunday: Emergency service by appointment',
    schema: ['Mo-Sa 09:30-18:30'],
  },

  /** TODO: UPDATE - social profile URLs (leave a link empty to hide that icon) */
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
    x: 'https://x.com/',
  },

  /**
   * TODO: UPDATE - Google Maps embed URL.
   * Google Maps -> Share -> Embed a map -> copy the src="..." value. The default below works without an API key
   * and simply shows the search result for the text after q=.
   */
  mapEmbedUrl: 'https://www.google.com/maps?q=Peenya+Industrial+Area,+Bengaluru,+Karnataka&output=embed',

  /**
   * EmailJS keys come from the .env file (see README -> "EmailJS setup").
   * They are read at build time. Never hard-code private keys here.
   */
  emailjs: {
    serviceId: env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY || '',
  },

  /** Default Open Graph image (1200x630). Replace /public/assets/og-image.jpg to change it. */
  ogImage: '/assets/og-image.jpg',

  /**
   * TODO: UPDATE - the numbers in the animated stats strip. These are PLACEHOLDERS - only publish figures you can stand behind.
   */
  stats: [
    { icon: 'industry', value: 500, suffix: '+', label: 'Machines Delivered' },
    { icon: 'handshake', value: 250, suffix: '+', label: 'Happy Clients' },
    { icon: 'map', value: 40, suffix: '+', label: 'Cities Served' },
    { icon: 'calendar', value: 10, suffix: '+', label: 'Years of Experience' },
  ] as const,

  /** SEO location keywords (placeholders for Bengaluru, Karnataka, India) */
  seoLocation: 'Bengaluru, Karnataka, India',
};

export type SiteConfig = typeof siteConfig;

/* ---------- link helpers ---------- */

export const telLink = `tel:${siteConfig.phoneTel}`;
export const mailtoLink = (subject = '', body = '') => {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${siteConfig.email}${params.length ? `?${params.join('&')}` : ''}`;
};
export const whatsappLink = (message = 'Hello Rathin, I would like to know more about your induction kitchen equipment.') =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const fullAddress = () => {
  const a = siteConfig.address;
  return `${a.street}, ${a.locality}, ${a.city}, ${a.region} ${a.postalCode}, ${a.country}`;
};

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${clean === '/' ? '' : clean}`;
};

/** Main navigation (desktop header, mobile drawer, footer). */
export const navItems = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Products', to: '/products', icon: 'box' },
  { label: 'Services', to: '/services', icon: 'tools' },
  { label: 'Blogs', to: '/blogs', icon: 'news' },
  { label: 'Contact Us', to: '/contact', icon: 'phone' },
  { label: 'Request For Service', to: '/request-service', icon: 'wrench' },
] as const;

/** Mobile bottom navigation (5 items). */
export const bottomNavItems = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Products', to: '/products', icon: 'box' },
  { label: 'Services', to: '/services', icon: 'tools' },
  { label: 'Blogs', to: '/blogs', icon: 'news' },
  { label: 'Contact', to: '/contact', icon: 'phone' },
] as const;
