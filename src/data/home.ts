/**
 * HOME PAGE CONTENT  (hero slides, why-choose, industries, steps, gallery, testimonials, FAQs)
 */
import type { IconKey } from '../components/Icon';
import type { FaqItem, ImageRef, Testimonial } from './types';

/* ------------------------------------------------------------------ HERO SLIDES */

export interface TitlePart {
  text: string;
  /** gradient-highlighted words */
  highlight?: boolean;
}

export interface HeroSlide {
  id: string;
  /** 'image' or 'video'. Videos autoplay muted, loop and fall back to `poster`. */
  type: 'image' | 'video';
  /** file path under /public (e.g. /assets/videos/hero-1.mp4 or /assets/hero-showroom.webp) */
  src: string;
  /** shown while a video loads (and on devices that block autoplay) */
  poster?: string;
  /** intrinsic size of the image (prevents layout shift) */
  width?: number;
  height?: number;
  alt: string;
  /**
   * `showcase`: for photos that are not wide enough to fill a huge screen sharply, the photo is shown as a
   * framed product picture on the right (desktop) over a blurred, darkened copy of itself that fills the frame.
   */
  showcase?: boolean;
  badge: { icon: IconKey; text: string };
  title: TitlePart[];
  subtitle: string;
  highlights: { icon: IconKey; label: string }[];
}

const COMMON_HIGHLIGHTS: { icon: IconKey; label: string }[] = [
  { icon: 'shield', label: '1 Year Warranty' },
  { icon: 'leaf', label: 'Energy Saving' },
  { icon: 'globe', label: 'Pan-India Service' },
  { icon: 'industry', label: 'Made in India' },
];

/**
 * EDIT HERE to change the hero slider.
 * To use a video background, change type to 'video', set src to your .mp4 (e.g. '/assets/videos/hero-1.mp4')
 * and set poster to a still image. Keep videos short (10-15 s), muted and under ~6 MB.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: 'showroom',
    type: 'image',
    src: '/assets/hero-showroom.webp',
    width: 1600,
    height: 900,
    alt: 'Rathin showroom with commercial induction griddle, floor-standing and table-top induction cooktops',
    badge: { icon: 'industry', text: 'Induction Machine Manufacturer' },
    title: [{ text: 'Commercial Induction Kitchen Equipment ' }, { text: 'Made in India', highlight: true }],
    subtitle:
      'Stainless steel induction cooktops, woks, griddles, bratt pans and boiling kettles - manufactured, installed and serviced by Rathin.',
    highlights: COMMON_HIGHLIGHTS,
  },
  {
    id: 'kettle',
    type: 'image',
    src: '/assets/servicehero1.webp',
    width: 1600,
    height: 1504,
    alt: 'Rathin induction tilting boiling kettle with hand wheel, outlet valve and LED display',
    badge: { icon: 'thermometer', text: 'Tilting Boiling Kettles' },
    title: [{ text: 'Induction Boiling Kettles for ' }, { text: 'Bulk Cooking', highlight: true }],
    subtitle: 'Soups, dal, rice and sweets in large batches with even heat, a hand-wheel tilt, outlet valve and a built-in energy counter.',
    highlights: COMMON_HIGHLIGHTS,
  },
  {
    id: 'bratt-pan',
    type: 'image',
    src: '/assets/servicehero3.webp',
    width: 881,
    height: 983,
    alt: 'Rathin induction tilting bratt pan skillet with lid and tap',
    badge: { icon: 'layers', text: 'Tilting Bratt Pans' },
    title: [{ text: 'Fry, Braise and Boil in ' }, { text: 'One Machine', highlight: true }],
    subtitle: 'Induction tilting bratt pans with lid, tap and hand-wheel tilt - faster batches, safer emptying and a cooler kitchen.',
    highlights: COMMON_HIGHLIGHTS,
  },
  {
    id: 'cooktops',
    type: 'image',
    src: '/assets/servicehero2.webp',
    width: 845,
    height: 755,
    alt: 'Rathin commercial induction cooktops with digital display and flat glass top',
    badge: { icon: 'fire', text: 'Commercial Induction Cooktops' },
    title: [{ text: 'Flat-Glass Induction Cooktops from ' }, { text: '3.5 kW to 15 kW', highlight: true }],
    subtitle: 'Table-top and floor-standing models with digital display and knob control, built in SS 304 for daily heavy use.',
    highlights: COMMON_HIGHLIGHTS,
  },
  {
    id: 'wok',
    type: 'image',
    src: '/assets/servicehero4.webp',
    width: 900,
    height: 1600,
    alt: 'Rathin induction wok concave cooking unit in stainless steel',
    badge: { icon: 'utensils', text: 'Induction Woks and Griddles' },
    title: [{ text: 'Wok, Griddle and More with ' }, { text: '1 Year Warranty', highlight: true }],
    subtitle: 'Concave induction woks and flat-top griddles on wheels, backed by Rathin service, spares and AMC across India.',
    highlights: COMMON_HIGHLIGHTS,
  },
];

/* --------------------------------------------------------------------- WHY CHOOSE */

export const whyChoose: { icon: IconKey; title: string; text: string }[] = [
  { icon: 'shield', title: '1 Year Warranty', text: 'Every new Rathin machine is covered for a full year, with after-sales support you can reach.' },
  { icon: 'leaf', title: 'Energy Efficient', text: 'Induction sends heat straight into the vessel, so less energy is wasted and the kitchen stays cooler.' },
  { icon: 'cogs', title: 'Stainless Steel Build', text: 'Fully welded SS 304 construction that resists corrosion and wipes clean in seconds.' },
  { icon: 'stopwatch', title: 'Fast Service', text: 'Phone, WhatsApp and on-site support so a breakdown does not become a lost day.' },
  { icon: 'ruler', title: 'Custom Manufacturing', text: 'Sizes, power ratings and layouts made to order for your kitchen and menu.' },
  { icon: 'graduation', title: 'Trained Technicians', text: 'Experienced engineers for installation, repair, spares and operator training.' },
];

/* ------------------------------------------------------------------- INDUSTRIES */

export const industries: { icon: IconKey; label: string }[] = [
  { icon: 'hotel', label: 'Hotels' },
  { icon: 'utensils', label: 'Restaurants' },
  { icon: 'bed', label: 'Hostels' },
  { icon: 'burger', label: 'Canteens' },
  { icon: 'catering', label: 'Catering' },
  { icon: 'hospital', label: 'Hospitals' },
  { icon: 'store', label: 'Cloud Kitchens' },
  { icon: 'school', label: 'Institutions' },
];

/* ------------------------------------------------------------------ HOW IT WORKS */

export const howItWorks: { icon: IconKey; title: string; text: string }[] = [
  { icon: 'phone', title: 'Enquire', text: 'Call, WhatsApp or send an enquiry with your menu, volume and power supply details.' },
  { icon: 'headset', title: 'Consult', text: 'Our team recommends the right machines and capacity and shares a clear quote.' },
  { icon: 'truck', title: 'Deliver and Install', text: 'We manufacture, deliver, install and commission, and train your kitchen staff.' },
  { icon: 'shield', title: 'Support', text: '1 year warranty, spares, service visits and optional AMC keep you cooking.' },
];

/* ------------------------------------------------------------------- ABOUT TEXT */

export const aboutChecklist = [
  'In-house stainless steel fabrication and assembly',
  'Induction cooktops, woks, griddles, bratt pans and kettles',
  'Repair and service for Rathin and other induction machines',
  'Custom sizes, power ratings and layouts',
  '1 year warranty with after-sales support',
];

/* --------------------------------------------------------------------- GALLERY */

export const galleryImages: ImageRef[] = [
  { src: '/assets/hero-showroom.webp', alt: 'Rathin showroom displaying induction griddle and cooktops', width: 1600, height: 900 },
  { src: '/assets/products/tilting-boiling-kettle.webp', alt: 'Rathin induction tilting boiling kettle', width: 1200, height: 900 },
  { src: '/assets/products/tilting-bratt-pan.webp', alt: 'Rathin induction tilting bratt pan with lid', width: 1200, height: 900 },
  { src: '/assets/products/wok-unit.webp', alt: 'Rathin induction wok concave cooking unit', width: 1200, height: 900 },
  { src: '/assets/products/induction-griddle.webp', alt: 'Rathin induction griddle flat top on caster wheels', width: 1200, height: 900 },
  { src: '/assets/products/cooktop-floor-standing.webp', alt: 'Rathin floor-standing induction cooktops', width: 1200, height: 900 },
  { src: '/assets/products/cooktop-compact-pair.webp', alt: 'Rathin compact table-top induction cooktops', width: 1200, height: 900 },
  { src: '/assets/products/cooktop-display-closeup.webp', alt: 'Display panel of a Rathin commercial induction cooktop', width: 1200, height: 900 },
];

/* ----------------------------------------------------------------- TESTIMONIALS */

/**
 * SAMPLE TEXT ONLY. Replace each entry with real feedback from real customers (with their permission),
 * then set `placeholder: false` - the small "Sample" badge disappears automatically.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'The induction kettle changed how we run the morning rush. Large batches of dal and milk heat evenly and the kitchen is noticeably cooler.',
    name: 'Kitchen Manager',
    role: 'Hostel and institutional kitchen',
    placeholder: true,
  },
  {
    quote: 'Service was quick. We raised a request in the morning and had a technician and the replacement part sorted without losing a full day.',
    name: 'Operations Head',
    role: 'Restaurant group',
    placeholder: true,
  },
  {
    quote: 'The stainless steel finish and build quality feel truly commercial. The team trained our cooks on day one and answered every question.',
    name: 'Executive Chef',
    role: 'Hotel kitchen',
    placeholder: true,
  },
  {
    quote: 'We asked for a custom size and Rathin built it to our layout. Installation was clean and the machine has run without trouble.',
    name: 'Proprietor',
    role: 'Catering company',
    placeholder: true,
  },
];

/* ------------------------------------------------------------------------ FAQ */

export const faqs: FaqItem[] = [
  {
    q: 'What warranty do Rathin induction machines carry?',
    a: 'Every new Rathin machine comes with a 1 year warranty from the date of installation, covering manufacturing defects and electronic parts under normal use, along with after-sales support. An Annual Maintenance Contract (AMC) is available after the warranty period.',
  },
  {
    q: 'Do you repair induction machines made by other brands?',
    a: 'Yes. Our technicians repair and service commercial induction cooktops, woks, griddles, bratt pans and kettles from other manufacturers as well as Rathin. Raise a service request with the model and fault details and we will advise the next step.',
  },
  {
    q: 'What power supply does a commercial induction machine need?',
    a: 'Smaller machines up to about 3.5 kW commonly run on single-phase supply, while higher-power machines normally need three-phase supply with suitable cabling, MCB and earthing. Share your available load and we will recommend a suitable model.',
  },
  {
    q: 'Which cookware works on induction?',
    a: 'Use flat-bottomed vessels with a magnetic base, such as stainless steel with an iron core or cast iron. A simple test is whether a fridge magnet sticks firmly to the base. Aluminium, glass and copper without a magnetic base will not work.',
  },
  {
    q: 'Can Rathin make equipment to our size and power requirement?',
    a: 'Yes. We manufacture in-house and can build custom sizes, power ratings, vessel capacities and control layouts. Send your requirement or a sketch and we will propose a specification and quote.',
  },
  {
    q: 'How do I raise a service request?',
    a: 'Click the blinking Request For Service button on any page, fill in your name, phone number, email, service type and a short description, and submit. You can also call or message us on WhatsApp from the buttons at the bottom of the screen.',
  },
  {
    q: 'Do you deliver and install across India?',
    a: 'We dispatch across India and our technicians handle installation, commissioning and operator training. Tell us your city when you enquire and we will confirm delivery and service arrangements.',
  },
  {
    q: 'How much does a commercial induction machine cost?',
    a: 'Price depends on the model, power, stainless steel grade, capacity and any customisation, so prices are on request. Send an enquiry and we will share a clear quotation.',
  },
];
