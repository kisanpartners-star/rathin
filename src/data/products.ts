/**
 * PRODUCT CATALOGUE  (edit this file to add, remove or change products)
 *
 * Source: the commercial induction equipment catalogue supplied by the business (product renders only).
 * Each product needs a unique `slug` (used in the URL: /products/<slug>).
 * Images live in /public/assets/images/catalog/ (4:3, 1200 x 900, product on white).
 * Each product has one or more `tables` (model lists). Rows must have one cell per column.
 *
 * NOTE: model codes, power ratings and dimensions are copied from the supplied catalogue.
 * Verify them (and your right to use the catalogue images and model codes) before publishing.
 */
import type { CategoryId, DataTable, GuideId, ImageRef, Product, ProductCategory } from './types';

export const categories: ProductCategory[] = [
  { id: 'wok', label: 'Wok Cookers', icon: 'utensils', description: 'Big and small concave induction wok cookers, single and double burner, 6 kW to 30 kW.' },
  { id: 'stockpot', label: 'Stock Pot and Soup', icon: 'layers', description: 'Heavy-duty stock pot and soup cookers up to 100 L with water tap and glass plate.' },
  { id: 'kettle', label: 'Kettles and Decoction', icon: 'thermometer', description: 'Sugar boiling kettles and herbal decoction cookers with Mag-Switch or touch control.' },
  { id: 'griddle', label: 'Griddles and Bun Stoves', icon: 'grid', description: 'Induction griddles and pan-fried bun stoves with thick iron plates.' },
  { id: 'steamer', label: 'Steamers and Noodle', icon: 'box', description: 'Induction steamers and 12-burner noodle cookers in freestanding and cabinet builds.' },
  { id: 'fryer', label: 'Induction Fryers', icon: 'fire', description: 'Counter-top and floor-standing induction deep fryers with oil-filter baskets.' },
  { id: 'flame', label: 'Electric Flame Stoves', icon: 'bolt', description: 'Real-flame look electric flame stoves, 5 kW to 15 kW.' },
  { id: 'multi', label: 'Multi-Burner Cookers', icon: 'industry', description: '2, 3, 4 and 6 burner induction cookers, 3.5 kW per burner, 9 power levels.' },
  { id: 'tabletop', label: 'Table-Top Cookers', icon: 'fire', description: 'Table-top flat and wok induction cookers from 2.5 kW to 8 kW in six control series.' },
  { id: 'builtin', label: 'Built-in and Hot Pot', icon: 'cogs', description: 'Built-in single burner cookers, hot pot hobs, wire controllers and stainless rings.' },
];

export const categoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;

/* ------------------------------------------------------------------ shared guides */

export interface Guide {
  id: GuideId;
  title: string;
  text: string;
  image?: ImageRef;
  bullets?: string[];
  table?: DataTable;
}

const gimg = (file: string, alt: string, w: number, h: number): ImageRef => ({ src: `/assets/images/guides/${file}.webp`, alt, width: w, height: h });

export const stageTable: DataTable = {
  title: 'Power stages by rating (380 V, 8 stages)',
  note: 'Stage-by-stage output of the heavy-duty 380 V digital drivers.',
  columns: ['Stage', '8 kW', '12 kW', '15 kW', '20 kW', '25 kW', '30 kW'],
  rows: [
    ['Stage 1', '1000 W', '3000 W', '3000 W', '5000 W', '5000 W', '6000 W'],
    ['Stage 2', '2000 W', '5000 W', '5000 W', '8000 W', '9000 W', '10000 W'],
    ['Stage 3', '3000 W', '7000 W', '7000 W', '10000 W', '13000 W', '14000 W'],
    ['Stage 4', '4000 W', '8000 W', '8000 W', '12000 W', '16000 W', '16000 W'],
    ['Stage 5', '5000 W', '9000 W', '9000 W', '14000 W', '19000 W', '18000 W'],
    ['Stage 6', '6000 W', '10000 W', '11000 W', '16000 W', '21000 W', '22000 W'],
    ['Stage 7', '7000 W', '11000 W', '13000 W', '18000 W', '23000 W', '26000 W'],
    ['Stage 8', '8000 W', '12000 W', '15000 W', '20000 W', '25000 W', '30000 W'],
  ],
};

export const guides: Record<GuideId, Guide> = {
  cookware: {
    id: 'cookware',
    title: 'Suitable Cookware',
    text: 'Induction heats magnetic cookware directly. Use any magnetic pan or pot (material 430, 409, 304 and similar) with a base larger than 18 cm and smaller than 45 cm.',
    image: gimg('guide-cookware', 'Suitable and unsuitable cookware for induction: iron wok, non-stick pan, stainless steel wok and pot are suitable; ceramic, glass and aluminium are not', 800, 910),
    bullets: ['Suitable: iron wok, non-stick pan, stainless steel wok, stainless steel pot', 'Not suitable: glass, aluminium and ceramic cookware', 'Base diameter: more than 18 cm and less than 45 cm'],
  },
  wiring: {
    id: 'wiring',
    title: '220 V and 380 V Connection',
    text: 'Single-phase units use a 220 V / 16 A plug per burner. Three-phase units connect through a 3-phase breaker with live (L), neutral (N) and a separate earth (E) wire.',
    image: gimg('guide-wiring', '220 V and 380 V wiring connection diagrams for a four burner induction cooker', 690, 1600),
    bullets: ['220 V: one L and N feed with a 16 A plug for every burner', '380 V: 3 live wires, neutral and earth through a 4-pole breaker', 'Installation by a qualified electrician is recommended'],
  },
  glass: {
    id: 'glass',
    title: 'High Pressure-Proof Glass Plate',
    text: 'The ceramic glass plate is anti-bursting, easy to clean and resistant to high temperature, with a bearing capacity of 100 kg.',
    image: gimg('guide-glass-plate', 'High pressure-proof glass plate: anti-bursting, easy to clean, 100 kg bearing capacity, high temperature resistance', 800, 1022),
    bullets: ['Anti-bursting glass', '100 kg bearing capacity', 'Easy to clean flat surface', 'High temperature resistance'],
  },
  panel: {
    id: 'panel',
    title: 'Control Panel',
    text: 'A digital display with ON/OFF, SELECT and a control knob gives 9 power levels, a timer up to 180 minutes and temperature control up to 240 degrees C.',
    image: gimg('guide-control-panel', 'Induction control panel with display, ON/OFF key, select key and control knob: 9 power levels, 180 minute timer, 240 degree temperature control', 800, 750),
    bullets: ['9 power levels', 'Timer up to 180 minutes', 'Temperature control up to 240 degrees C'],
  },
  levels: {
    id: 'levels',
    title: '9 Power Levels',
    text: 'Nine steps from a gentle 400 W (60 degrees C) to full 3500 W (240 degrees C) give precise temperature control for frying, deep frying, steaming, stir-frying, stewing and braising.',
    image: gimg('guide-power-levels', 'Nine power levels from 400 W at 60 degrees C to 3500 W at 240 degrees C on a four burner induction cooker', 800, 1171),
    bullets: ['Level 1: 400 W, 60 C', 'Level 5: 1600 W, 140 C', 'Level 9: 3500 W, 240 C'],
  },
  stages: {
    id: 'stages',
    title: 'Power Stages',
    text: 'Heavy-duty 380 V units use 8 power stages. The table shows the output of every stage for each power rating.',
    table: stageTable,
  },
};

/* ------------------------------------------------------------------ helpers */

const WARRANTY_STD = [
  '1 year warranty on the machine from the date of installation.',
  'Warranty covers manufacturing defects and failure of electronic parts such as the PCB, IGBT and coil under normal use.',
  'After-sales support by phone, WhatsApp and on-site visit through the Rathin service network.',
  'Lifetime spare-parts availability and optional Annual Maintenance Contract (AMC) after the warranty period.',
];

const COMMON_FEATURES = [
  'Stainless steel housing: durable, strong load-bearing and easy to clean',
  'Water-proof design, can be rinsed directly',
  'Full power with pure copper coil for stable working',
  'More than 29 professional protection functions and automatic fault diagnosis',
  'Different display screens and switches available',
  'OEM and ODM service on request',
];

const image = (file: string, alt: string): ImageRef => ({ src: `/assets/images/catalog/${file}.webp`, alt, width: 1200, height: 900 });

type Hl = [Product['highlights'][number]['icon'], string];

interface Spec {
  slug: string;
  name: string;
  model: string;
  category: CategoryId;
  tagline: string;
  short: string;
  description: string[];
  /** image file names (no extension); first one is the main image */
  imgs: string[];
  /** optional per-image alt text suffix, same order as imgs */
  alts?: string[];
  chips: string[];
  highlights: Hl[];
  specs: [string, string][];
  features: string[];
  applications: string[];
  powerKw: number;
  tables: DataTable[];
  guides: GuideId[];
  keywords: string[];
  featured?: boolean;
}

const mk = (s: Spec): Product => ({
  slug: s.slug,
  name: s.name,
  model: s.model,
  category: s.category,
  tagline: s.tagline,
  shortDescription: s.short,
  description: s.description,
  image: image(s.imgs[0], `${s.name} by Rathin`),
  gallery: s.imgs.map((f, i) => image(f, s.alts?.[i] ?? `${s.name} by Rathin${i ? `, view ${i + 1}` : ''}`)),
  chips: s.chips,
  highlights: s.highlights.map(([icon, label]) => ({ icon, label })),
  specs: s.specs.map(([label, value]) => ({ label, value })),
  features: [...s.features, ...COMMON_FEATURES],
  applications: s.applications,
  warranty: WARRANTY_STD,
  tables: s.tables,
  guides: s.guides,
  powerKw: s.powerKw,
  featured: s.featured,
  keywords: s.keywords,
});

const T = (title: string, columns: string[], rows: string[][], note?: string): DataTable => ({ title, columns, rows, note });

const V380 = '380V / 50Hz';
const INSTALL_GUIDES: GuideId[] = ['cookware', 'glass', 'wiring'];

/** 9-level power chart shared by the AB multi-burner series */
const abLevels = T(
  '9 power levels (per burner)',
  ['Level', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  [
    ['Power', '400 W', '600 W', '1000 W', '1300 W', '1600 W', '2000 W', '2500 W', '3000 W', '3500 W'],
    ['Temp.', '60 C', '80 C', '100 C', '120 C', '140 C', '160 C', '180 C', '200 C', '240 C'],
  ],
  'Applies to the TS-AB series; TS-AB0002 uses 500 W to 3500 W in steps.',
);

const ttCols = ['Model', 'Type', 'Power', 'Voltage', 'Size (mm)', 'Control', 'Levels'];
const MAGCOLS = ttCols;

/* ------------------------------------------------------------------ products */

export const products: Product[] = [
  /* ================================================================ WOK COOKERS */
  mk({
    slug: 'commercial-induction-big-wok-cooker',
    name: 'Commercial Induction Big Wok Cooker',
    model: 'TS-DC series, 12 to 30 kW',
    category: 'wok',
    tagline: 'Concave big-wok induction cookers from 12 kW to 30 kW, wok 600 to 1200 mm.',
    short: 'Heavy-duty 380 V big wok cookers with a deep concave stainless steel bowl, water tap and digital control, built for canteens, hotels and central kitchens that cook in bulk.',
    description: [
      'The big wok series heats the bowl directly with a pure copper coil, giving full-power stir-frying without flame, smoke or wasted heat. Bowl diameters run from 600 mm (26 L) to 1200 mm (175 L) with power from 12 kW to 30 kW.',
      'Models with a rear panel include a swivel water tap and a LED display. The digital induction driver has more than 29 protection functions, so the unit keeps working through long, hot service hours.',
    ],
    imgs: ['wok-big-2', 'wok-big-1', 'at0005'],
    chips: ['12 to 30 kW', '380 V', 'Wok 600 to 1200 mm'],
    highlights: [['bolt', 'Up to 30 kW'], ['utensils', 'Wok up to 175 L'], ['shield', '1 year warranty'], ['cogs', '29+ protections']],
    specs: [['Power range', '12 kW to 30 kW (AT0005: 8 to 20 kW)'], ['Voltage', '380 V / 50 Hz, three phase'], ['Wok diameter', '600 mm to 1200 mm'], ['Wok depth', '200 mm to 315 mm'], ['Capacity', '26 L to 175 L'], ['Body', 'Stainless steel'], ['Control', 'Digital with Mag-Switch'], ['Warranty', '1 year']],
    features: ['Concave bowl for real stir-fry heat distribution', 'Swivel water tap and back panel on tall models', 'Power stage table from 1000 W to 30000 W', 'Pan sense technology detects unsuitable vessels'],
    applications: ['Hotel and restaurant kitchens', 'Canteens and mess halls', 'Central kitchens', 'Catering units'],
    powerKw: 30,
    tables: [
      T('Big wok cooker, low model', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Wok dia. (mm)', 'Wok depth (mm)', 'Capacity'], [
        ['12 kW', 'TS-DC12C06-05', V380, '900*1000*800', '600', '200', '26 L'],
        ['20 kW', 'TS-DC20C06-01', V380, '1000*1100*800', '800', '200', '40 L'],
      ]),
      T('Big wok cooker with back panel and tap', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Wok dia. (mm)', 'Wok depth (mm)', 'Capacity'], [
        ['12 kW', 'TS-DC12C-06', V380, '900*1000*1200', '600', '200', '26 L'],
        ['15 kW', 'TS-DC15C-07', V380, '900*1000*1200', '700', '200', '40 L'],
        ['20 kW', 'TS-DC20C-08', V380, '1000*1100*1200', '800', '245', '60 L'],
        ['25 kW', 'TS-DC25C-09', V380, '1100*1200*1200', '900', '264', '84 L'],
        ['30 kW', 'TS-DC30C-10', V380, '1200*1300*1200', '1000', '280', '112 L'],
        ['30 kW', 'TS-DC30C-12', V380, '1400*1500*1200', '1200', '315', '175 L'],
      ]),
      T('Single burner big wok (Mag-Switch)', ['Model', 'Rated power', 'Voltage', 'Power stage', 'Control', 'Display', 'Dimension (mm)', 'Wok dia.'], [
        ['AT0005', '8 to 20 kW', 'AC 380V', '9 levels', 'Mag-Switch', 'Lotus display', '1000*1100*800', 'Φ800 mm'],
      ]),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['big wok induction cooker', 'commercial induction wok 30 kw', 'induction wok cooker 380v'],
    featured: true,
  }),
  mk({
    slug: 'double-burner-big-wok-cooker',
    name: 'Double Burner Big Wok Cooker',
    model: 'TS-SDC / TS-DXC series',
    category: 'wok',
    tagline: 'Two big woks or a wok plus soup burner on one stainless steel counter, 12 to 30 kW.',
    short: 'A long double-burner counter with two independent induction burners, back panel, water taps and LED displays. Run two woks together, or a big wok with a smaller soup burner.',
    description: [
      'Each burner has its own digital driver and display, so two cooks can work at different heat levels. The standard double wok uses the same power on both sides, while the wok plus soup version pairs a 15 kW wok with a 12.75 L soup burner.',
      'The stainless steel counter is built for heavy use with a rear splash panel, swivel taps and rinse-proof electronics.',
    ],
    imgs: ['wok-bigdbl-1', 'wok-bigdbl-2'],
    chips: ['2 x 12 to 30 kW', '380 V', 'Double burner'],
    highlights: [['bolt', 'Two independent burners'], ['utensils', 'Wok up to 112 L x 2'], ['shield', '1 year warranty'], ['cogs', 'Easy-service driver']],
    specs: [['Power', '12 to 30 kW per burner'], ['Voltage', '380 V / 50 Hz'], ['Wok diameter', '600 to 1000 mm'], ['Counter length', '1800 to 2400 mm'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Independent display and power control per burner', 'Back panel with swivel water taps', 'Wok plus soup burner option'],
    applications: ['Large restaurants', 'Hotel banquet kitchens', 'Institutional canteens'],
    powerKw: 60,
    tables: [
      T('Double burner big wok cooker', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Wok dia. (mm)', 'Wok depth (mm)', 'Capacity'], [
        ['12 kW', 'TS-SDC12C-06', V380, '1800*1000*1200', '600', '200', '26 L x 2'],
        ['15 kW', 'TS-SDC15C-07', V380, '1800*1100*1200', '700', '200', '40 L x 2'],
        ['20 kW', 'TS-SDC20C-08', V380, '2000*1100*1200', '800', '245', '60 L x 2'],
        ['25 kW', 'TS-SDC25C-09', V380, '2200*1200*1200', '900', '264', '84 L x 2'],
        ['30 kW', 'TS-SDC30C-10', V380, '2400*1300*1200', '1000', '280', '112 L x 2'],
      ]),
      T('Double burner: wok plus soup burner', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Wok dia. (mm)', 'Wok depth (mm)', 'Capacity'], [
        ['15+12 kW', 'TS-DXC1512-01', V380, '1800*1100*1200', '600', '200', '12.75 L + 26 L'],
        ['15+15 kW', 'TS-DXC1515-01', V380, '1800*1100*1200', '700', '200', '12.75 L + 40 L'],
        ['15+20 kW', 'TS-DXC1520-01', V380, '2000*1100*1200', '800', '245', '12.75 L + 60 L'],
        ['15+25 kW', 'TS-DXC1525-01', V380, '2000*1200*1200', '900', '264', '12.75 L + 84 L'],
        ['15+30 kW', 'TS-DXC1530-01', V380, '2200*1300*1200', '1000', '280', '12.75 L + 112 L'],
      ]),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['double burner wok induction', 'two burner big wok cooker', 'commercial induction wok'],
  }),
  mk({
    slug: 'commercial-induction-small-wok-cooker',
    name: 'Commercial Induction Small Wok Cooker',
    model: 'TS-XC series, 6 to 15 kW',
    category: 'wok',
    tagline: 'Compact single-burner stir-fry wok cookers, 6 to 15 kW, wok 400 to 500 mm.',
    short: 'The everyday restaurant wok station: a stainless steel counter with a concave induction bowl, digital control and optional back panel and water tap.',
    description: [
      'Small wok cookers deliver fast, controllable stir-fry heat in a footprint of just 800 x 900 mm. Choose from 6 kW to 15 kW and from open-front to cabinet versions.',
      'Cabinet model AX0019 adds a closed storage base and Half-Bridge technology for a smooth low-power start and long continuous heating.',
    ],
    imgs: ['wok-small-hero', 'wok-small-1', 'wok-small-2', 'wok-small-3', 'wok-small-4', 'wok-ax0019'],
    chips: ['6 to 15 kW', '380 V', 'Wok 400 to 500 mm'],
    highlights: [['bolt', '6 to 15 kW'], ['utensils', 'Wok 400 to 500 mm'], ['shield', '1 year warranty'], ['thermometer', 'Cooler kitchen']],
    specs: [['Power', '6 kW to 15 kW'], ['Voltage', '380 V / 50 Hz'], ['Wok diameter', 'Φ400 mm or Φ500 mm'], ['Footprint', '800*900 or 1100*1100 mm'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Back panel with swivel tap on tall models', 'Cabinet option with Half-Bridge technology', 'Real stir-fry heat with instant power response'],
    applications: ['Restaurants and cloud kitchens', 'Chinese and Indo-Chinese kitchens', 'Hotel live stations'],
    powerKw: 15,
    featured: true,
    tables: [
      T('Small wok cooker', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Wok dia.'], [
        ['12 kW', 'TS-XC12004-36', V380, '800*900*800', 'Φ500'],
        ['6 kW', 'TS-XC6C-01L', V380, '800*900*800', 'Φ400'],
        ['8 kW', 'TS-XC08C-00', V380, '800*900*1200 (800+400)', 'Φ500'],
        ['12 kW', 'TS-XC12C-00', V380, '800*900*1200 (800+400)', 'Φ500'],
        ['15 kW', 'TS-XC15C-00', V380, '800*900*1200 (800+400)', 'Φ500'],
        ['8 kW', 'TS-XC08C-01', V380, '1100*1100*1200 (800+400)', 'Φ500'],
        ['12 kW', 'TS-XC12C-01', V380, '1100*1100*1200 (800+400)', 'Φ500'],
        ['15 kW', 'TS-XC15C-01', V380, '1100*1100*1200 (800+400)', 'Φ500'],
      ]),
      T('Small wok cooker (cabinet)', ['Model', 'Rated power', 'Voltage', 'Control', 'Timer', 'Dimension (mm)', 'Wok'], [
        ['AX0019', '15 kW', 'AC 380V', 'Touch and knob', '4 hours', '800*800*800+30', 'Φ400 mm'],
      ], 'Eight power levels, Half-Bridge technology. Wooden case 880*880*1030 mm.'),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['small wok induction cooker', 'commercial induction wok 15 kw', 'chinese wok induction stove'],
  }),
  mk({
    slug: 'double-burner-small-wok-cooker',
    name: 'Double Burner Small Wok Cooker',
    model: 'TS-SXC series, 8 to 15 kW x 2',
    category: 'wok',
    tagline: 'Two small woks side by side with back panel, taps and under-shelf, 8 to 15 kW each.',
    short: 'A double wok station with two independent induction burners and digital controls. Cook two dishes at different heat levels from a single stainless steel unit.',
    description: [
      'Each wok bowl has its own coil, display and Mag-Switch, so one can simmer while the other stir-fries at full power. A rear panel carries the water taps and displays.',
      'Choose a 1800 mm or 2000 mm counter and 8, 12 or 15 kW per burner.',
    ],
    imgs: ['wok-smalldbl-1', 'wok-smalldbl-2', 'photo-double-wok-stove'],
    alts: ['Double burner small wok cooker by Rathin', 'Double burner small wok cooker with centre soup burner by Rathin', 'Double wok induction stove with water tap and under-shelf'],
    chips: ['2 x 8 to 15 kW', '380 V', 'Wok Φ500'],
    highlights: [['bolt', 'Two woks, two controls'], ['utensils', 'Wok Φ500 mm'], ['shield', '1 year warranty'], ['cogs', 'Easy to service']],
    specs: [['Power', '8, 12 or 15 kW per burner'], ['Voltage', '380 V / 50 Hz'], ['Wok diameter', 'Φ500 mm'], ['Counter length', '1800 or 2000 mm'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Independent power control per wok', 'Rear panel with taps and displays', 'Optional centre soup burner'],
    applications: ['Busy restaurant lines', 'Hotel kitchens', 'Food courts'],
    powerKw: 30,
    tables: [
      T('Double burner small wok cooker', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Wok dia.'], [
        ['8 kW x 2', 'TS-SXC08C-01', V380, '1800*1100*1200 (800+400)', 'Φ500'],
        ['12 kW x 2', 'TS-SXC12C-01', V380, '1800*1100*1200 (800+400)', 'Φ500'],
        ['15 kW x 2', 'TS-SXC15C-01', V380, '1800*1100*1200 (800+400)', 'Φ500'],
        ['8 kW x 2', 'TS-SXC08C-02', V380, '2000*1100*1200 (800+400)', 'Φ500'],
        ['12 kW x 2', 'TS-SXC12C-02', V380, '2000*1100*1200 (800+400)', 'Φ500'],
        ['15 kW x 2', 'TS-SXC15C-02', V380, '2000*1100*1200 (800+400)', 'Φ500'],
      ]),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['double wok induction cooker', 'two burner small wok', 'commercial induction wok station'],
  }),

  /* ================================================================ STOCK POT / SOUP */
  mk({
    slug: 'heavy-duty-stock-pot-cooker',
    name: 'Heavy Duty Stock Pot Cooker',
    model: 'TS-TL / TS-STL series',
    category: 'stockpot',
    tagline: '100 litre stock pot induction cookers, 8 to 20 kW, single and double burner.',
    short: 'A flat glass induction stove sized for a 500 mm, 100 L stock pot, with a water tap, display panel and stainless steel body. Boil stock, soup, rice and curry in bulk.',
    description: [
      'The heavy-duty stock pot series carries a 100 litre barrel (Φ500 x H500 mm) on a flat pressure-proof glass plate, heated by a large pure copper coil.',
      'Choose a low counter unit, a tall unit with back panel, tap and display, or a double burner line with two 100 L pots.',
    ],
    imgs: ['stock-hero', 'stock-1', 'stock-2', 'stock-3'],
    chips: ['8 to 20 kW', '100 L pot', '380 V'],
    highlights: [['bolt', '8 to 20 kW'], ['utensils', '100 L stock pot'], ['shield', '1 year warranty'], ['industry', 'Heavy duty']],
    specs: [['Power', '8 kW to 20 kW (x2 on double models)'], ['Voltage', '380 V / 50 Hz'], ['Capacity', '100 L per burner'], ['Barrel size', 'Φ500 x H500 mm'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Flat glass plate with high pressure resistance', 'Swivel water tap and display on tall models', 'Double burner line for two 100 L pots'],
    applications: ['Central kitchens', 'Hotels and banquets', 'Canteens', 'Soup and stock production'],
    powerKw: 30,
    tables: [
      T('Heavy duty stock pot cooker', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Capacity', 'Barrel size (mm)'], [
        ['12 kW', 'TS-TL15C-32L', V380, '650*750*500', '100 L', 'Φ500*H500'],
        ['20 kW', 'TS-TL20-C01', V380, '650*750*500', '100 L', 'Φ500*H500'],
        ['8 kW', 'TS-TL08C-02', V380, '650*750*1200 (500+700)', '100 L', 'Φ500*H500'],
        ['12 kW', 'TS-TL12C-02', V380, '650*750*1200 (500+700)', '100 L', 'Φ500*H500'],
        ['15 kW', 'TS-TL15C-02', V380, '650*750*1200 (500+700)', '100 L', 'Φ500*H500'],
        ['8 kW x 2', 'TS-STL08C-01', V380, '1300*750*1200 (500+700)', '100 L x 2', 'Φ500*H500'],
        ['12 kW x 2', 'TS-STL12C-01', V380, '1300*750*1200 (500+700)', '100 L x 2', 'Φ500*H500'],
        ['15 kW x 2', 'TS-STL15C-01', V380, '1300*750*1200 (500+700)', '100 L x 2', 'Φ500*H500'],
      ]),
    ],
    guides: ['stages', 'glass', 'cookware'],
    keywords: ['stock pot induction cooker', '100 litre induction stock pot', 'commercial soup cooker induction'],
  }),
  mk({
    slug: 'commercial-induction-soup-cooker',
    name: 'Commercial Induction Soup Cooker',
    model: 'AT0012 / AT0009 / AT0015 / AT0017',
    category: 'stockpot',
    tagline: 'Single and double burner soup cookers, 15 to 24 kW, with glass plate and tap.',
    short: 'Soup cookers with a tall back panel, water tap, 8 power levels and Mag-Switch, hand-switch or digital control, plus a closed-cabinet soup stove with a 50 L wok.',
    description: [
      'The soup cooker range covers a single 15 kW burner (AT0012), two double-burner layouts (AT0009 and AT0015, 2 x 12 kW) and the cabinet soup stove AT0017 (15 kW, 50 L wok).',
      'Glass plates of 400*400 mm or Φ428 to Φ430 mm carry large stock pots, and the display options include 8-segment, Lotus and LED digital.',
    ],
    imgs: ['at0012', 'at0009', 'at0015', 'soup-at0017'],
    chips: ['15 to 24 kW', '380 V', '8 levels'],
    highlights: [['bolt', '8 power levels'], ['utensils', 'Large glass plate'], ['shield', '1 year warranty'], ['cogs', 'Easy to service']],
    specs: [['Power', '15 kW or 2 x 12 kW'], ['Voltage', 'AC 380 V'], ['Power stage', '8 levels'], ['Control', 'Mag-Switch, hand switch or touch and knob'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Single, double and cabinet versions', 'Back panel with swivel water tap', 'Glass plate sizes up to Φ430 mm'],
    applications: ['Restaurants and hotels', 'Canteens', 'Soup kitchens'],
    powerKw: 24,
    tables: [
      T('Soup cooker models', ['Model', 'Type', 'Rated power', 'Control', 'Display', 'Dimension (mm)', 'Plate / wok'], [
        ['AT0012', 'Single burner', '15 kW', 'Mag-Switch', '"8" display', '650*750*1200', '400*400*6 mm glass'],
        ['AT0009', 'Double burner', '2 x 12 kW', 'Hand switch', 'Lotus display', '1300*1175*1200', 'Φ428*6 mm glass'],
        ['AT0015', 'Double burner', '2 x 12 kW', 'Mag-Switch', 'LED digital', '1300*750*1050', 'Φ430*5 mm glass'],
        ['AT0017', 'Cabinet soup stove', '15 kW', 'Touch and knob', '8 digital', '800*800*800+30', '50 L wok'],
      ], 'All models: AC 380 V, 8 power levels. AT0017 has a 4-hour timer and Half-Bridge technology (wooden case 880*880*1030 mm).'),
    ],
    guides: ['glass', 'cookware', 'stages'],
    keywords: ['induction soup cooker', 'commercial soup stove', 'double burner soup cooker'],
  }),

  /* ================================================================ KETTLES / DECOCTION */
  mk({
    slug: 'sugar-boiling-kettle-30kw',
    name: 'Food-Grade Sugar Boiling Kettle',
    model: 'AT0013, 30 kW',
    category: 'kettle',
    tagline: '30 kW industrial induction kettle with a food-grade Φ1000 mm pot.',
    short: 'A large stainless steel boiling kettle on a 30 kW induction base with Mag-Switch control and an 8-segment display. Built for sugar, syrup, jaggery and bulk boiling.',
    description: [
      'The AT0013 combines a 30 kW induction driver with a Φ1000 x 400 mm food-grade pot, so syrups and sauces heat evenly without open flame.',
      'Eight power levels and a rugged stainless steel body make it a dependable choice for sweet makers and food processors.',
    ],
    imgs: ['at0013'],
    chips: ['30 kW', '380 V', 'Wok Φ1000'],
    highlights: [['bolt', '30 kW power'], ['thermometer', '8 power levels'], ['shield', '1 year warranty'], ['industry', 'Industrial duty']],
    specs: [['Model', 'AT0013'], ['Rated power', '30 kW'], ['Voltage', 'AC 380 V'], ['Control', 'Mag-Switch'], ['Display', '"8" display'], ['Wok size', 'Φ1000 x 400 mm'], ['Dimension', '1200*1300*1200 mm']],
    features: ['Food-grade stainless steel pot', 'Eight power levels', 'Mag-Switch control'],
    applications: ['Sweet and confectionery makers', 'Food processing units', 'Central kitchens'],
    powerKw: 30,
    tables: [T('Sugar boiling kettle', ['Model', 'Rated power', 'Voltage', 'Control', 'Power stage', 'Display', 'Dimension (mm)', 'Wok size'], [['AT0013', '30 kW', 'AC 380V', 'Mag-Switch', '8 levels', '"8" display', '1200*1300*1200', 'Φ1000*400 mm']])],
    guides: ['stages', 'cookware'],
    keywords: ['sugar boiling kettle induction', 'induction boiling kettle 30 kw', 'industrial induction kettle'],
  }),
  mk({
    slug: 'smart-herbal-decoction-cooker',
    name: 'Smart Herbal Decoction Cooker',
    model: 'AT0014 / AT0016 / AT0018',
    category: 'kettle',
    tagline: 'Single and double head decoction cookers, 15 to 60 kW, with timer and temperature control.',
    short: 'Smart cookers for herbal decoction and slow extraction: a double 30 kW pot unit, a 150 L single-head stove and a 15 kW touch-and-press model with 30 to 110 degree control.',
    description: [
      'The decoction range suits pharmacies, herbal producers and kitchens that need long, gentle, well-controlled heating.',
      'AT0018 offers a 0 to 180 minute timer and 30 to 110 degree C temperature range with a touch-and-press panel.',
    ],
    imgs: ['at0014', 'at0016', 'at0018'],
    chips: ['15 to 60 kW', '380 V', 'Timer + temperature'],
    highlights: [['thermometer', '30 to 110 C control'], ['stopwatch', 'Timer to 180 min'], ['shield', '1 year warranty'], ['bolt', 'Up to 2 x 30 kW']],
    specs: [['Power', '15 kW to 2 x 30 kW'], ['Voltage', 'AC 380 V'], ['Power stage', '8 levels'], ['Capacity', 'Up to 150 L (AT0016)'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Double-pot and single-head versions', 'Touch and press control on AT0018', 'Timer and temperature control'],
    applications: ['Herbal and Ayurvedic producers', 'Hospital and wellness kitchens', 'Bulk extraction'],
    powerKw: 60,
    tables: [T('Decoction cooker models', ['Model', 'Type', 'Rated power', 'Control', 'Display', 'Dimension (mm)', 'Notes'], [
      ['AT0014', 'Smart herbal decoction cooker', '2 x 30 kW', 'Mag-Switch', 'LED display', '1200*1300*1250', 'Wok Φ1000*350 mm'],
      ['AT0016', 'Single-head herbal decoction stove', '20 kW', 'Mag-Switch', 'LED display', '1000*1000*1135', 'Capacity 150 L'],
      ['AT0018', 'Smart herbal decoction cooker', '15 kW', 'Touch and press', 'Touch panel', '715*990*990+85', 'Timer 0-180 min, 30 to 110 C'],
    ], 'All models: AC 380 V, 8 power levels.')],
    guides: ['stages', 'cookware'],
    keywords: ['herbal decoction cooker', 'induction decoction machine', 'induction kettle 150 litre'],
  }),

  /* ================================================================ GRIDDLES */
  mk({
    slug: 'commercial-induction-griddle',
    name: 'Commercial Induction Griddle',
    model: 'TS-PL / TS-TPL / AY0010 / AY0011',
    category: 'griddle',
    tagline: 'Flat-top induction griddles and bun stoves, 5 to 15 kW, with thick iron plate.',
    short: 'Free-standing and counter-top induction griddles with a 15 mm iron plate, plus a cabinet griddle and a pan-fried bun stove. Even heat across the plate with no flame.',
    description: [
      'Induction griddles heat the iron plate directly for fast, even, easy-to-clean cooking. Floor models offer plates up to 1060 x 560 mm and cabinet storage beneath.',
      'The cabinet range adds a 650 x 580 mm griddle (AY0011) and a Φ485 mm pan-fried bun stove (AY0010), both with a 4-hour timer and Half-Bridge technology.',
    ],
    imgs: ['griddle-hero', 'griddle-1', 'griddle-2', 'griddle-ay0011', 'bun-ay0010'],
    chips: ['5 to 15 kW', 'Iron plate', '380 V'],
    highlights: [['bolt', '5 to 15 kW'], ['grid', 'Iron plate up to 1060 mm'], ['shield', '1 year warranty'], ['cogs', 'Easy to clean']],
    specs: [['Power', '5 kW to 15 kW'], ['Voltage', '380 V / 50 Hz'], ['Plate size', '558*305 up to 1060*560 mm'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Thick iron plate for even heat', 'Cabinet storage models', 'Timer and Half-Bridge technology on cabinet series'],
    applications: ['Fast-food counters', 'Restaurants and cafes', 'Live cooking stations'],
    powerKw: 15,
    tables: [
      T('Induction griddle (floor models)', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Iron plate (mm)'], [
        ['8 kW', 'TS-PL08C-01', V380, '750*900*1000 (800+200)', '670*560*15'],
        ['12 kW', 'TS-PL12C-01', V380, '750*900*1000 (800+200)', '670*560*15'],
        ['12 kW', 'TS-PL12C-02', V380, '1200*900*1000 (800+200)', '1060*560*15'],
        ['15 kW', 'TS-PL15C-01', V380, '1200*900*1000 (800+200)', '1060*560*15'],
      ]),
      T('Induction griddle (counter-top)', ['Power', 'Model', 'Voltage', 'Dimension (mm)', 'Iron plate (mm)'], [
        ['5 kW', 'TS-TPL05C-01', V380, '600*500*500', '558*305*80'],
        ['8 kW', 'TS-TPL08C-01', V380, '600*500*500', '558*305*80'],
      ]),
      T('Cabinet series', ['Model', 'Type', 'Rated power', 'Voltage', 'Control', 'Timer', 'Dimension (mm)', 'Plate'], [
        ['AY0011', 'Induction griddle', '12 kW', 'AC 380V', 'Touch and knob', '4 hours', '800*800*800+30', '650*580*16 mm'],
        ['AY0010', 'Pan-fried bun stove', '12 kW', 'AC 380V', 'Touch and knob', '4 hours', '800*800*800+30', 'Φ485 mm'],
      ], 'Eight power levels, Half-Bridge technology.'),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['induction griddle', 'commercial griddle induction', 'pan fried bun stove'],
    featured: true,
  }),

  /* ================================================================ STEAMERS / NOODLE */
  mk({
    slug: 'commercial-induction-steamer',
    name: 'Commercial Induction Steamer',
    model: 'TS-ZC / AZ0008 to AZ0011',
    category: 'steamer',
    tagline: 'Induction steamers for rice rolls, buns and dumplings, 8 to 20 kW.',
    short: 'Free-standing and cabinet induction steamers with stainless steel racks. Choose a cheong fun steamer, bun steamer, round steamer or a 4-burner steamer.',
    description: [
      'The TS-ZC series is a free-standing steamer with a back panel and tap in 8, 12 and 15 kW. The cabinet series (AZ0008 to AZ0011) adds closed storage, a 4-hour timer and Half-Bridge technology.',
      'AZ0011 is a four-burner steamer rated 20 kW with a 700 x 740 mm rack, and AB0020 offers 4 x 3.5 kW for smaller loads.',
    ],
    imgs: ['steamer-1', 'steam-az0008', 'steam-az0009', 'steam-az0010', 'steam-az0011', 'multi-ab0020'],
    chips: ['8 to 20 kW', '380 V', 'Cabinet options'],
    highlights: [['bolt', '8 to 20 kW'], ['box', 'Cabinet storage'], ['shield', '1 year warranty'], ['stopwatch', '4-hour timer']],
    specs: [['Power', '8 kW to 20 kW'], ['Voltage', '380 V / 50 Hz'], ['Technology', 'Half Bridge (cabinet series)'], ['Timer', '4 hours (cabinet series)'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Rice-roll, bun and round steaming racks', 'Closed cabinet base', 'Four-burner steamer option'],
    applications: ['Dim sum and bakery kitchens', 'Hotels and restaurants', 'Canteens'],
    powerKw: 20,
    tables: [
      T('Induction steamer', ['Power', 'Model', 'Voltage', 'Dimension (mm)'], [
        ['8 kW', 'TS-ZC08C-01', V380, '800*1100*1200 (800+400)'],
        ['12 kW', 'TS-ZC12C-01', V380, '800*1100*1200 (800+400)'],
        ['15 kW', 'TS-ZC15C-01', V380, '800*1100*1200 (800+400)'],
      ]),
      T('Steamer (cabinet)', ['Model', 'Type', 'Rated power', 'Power stage', 'Dimension (mm)', 'Rack / plate'], [
        ['AZ0008', 'Cheong fun steamer', '12 kW', '8 levels', '800*800*800+30', '400*550 mm'],
        ['AZ0009', 'Steamed bun steamer', '12 kW', '8 levels', '800*800*800+30', 'Φ650 mm'],
        ['AZ0010', 'Induction steamer', '15 kW', '8 levels', '800*800*800+30', 'Φ570*Φ420*300 mm'],
        ['AZ0011', '4-burner steamer', '20 kW', '4 levels', '800*900*800+30', '700*740 mm'],
        ['AB0020', '4-burner steamer', '3500 W x 4', '8 levels', '800*800*800+30', 'Glass 300*300*4 mm'],
      ], 'Cabinet series: AC 380 V, 4-hour timer, Half-Bridge technology.'),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['induction steamer', 'commercial bun steamer', 'cheong fun steamer induction'],
  }),
  mk({
    slug: 'induction-noodle-cooker-12-burner',
    name: '12 Burner Noodle Cooking Induction Hob',
    model: 'TS-12ZML / AN0010',
    category: 'steamer',
    tagline: 'Noodle and pasta cookers with 12 baskets, 8 to 24 kW.',
    short: 'A stainless steel noodle hob with twelve cooking baskets, back panel and tap. Available as a freestanding unit or a cabinet unit with 2 x 12 kW.',
    description: [
      'Cook many portions of noodles, pasta or dumplings at the same time with individually lifted baskets in a single heated water bath.',
      'The cabinet version AN0010 uses two 12 kW drives with Half-Bridge technology and a 4-hour timer.',
    ],
    imgs: ['noodle-1', 'noodle-an0010'],
    chips: ['8 to 24 kW', '12 baskets', '380 V'],
    highlights: [['bolt', '8 to 24 kW'], ['utensils', '12 baskets'], ['shield', '1 year warranty'], ['box', 'Cabinet option']],
    specs: [['Power', '8, 12, 15 kW or 2 x 12 kW'], ['Voltage', '380 V / 50 Hz'], ['Baskets', '12'], ['Basket rack', 'Φ140*125 mm (AN0010)'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Twelve independent baskets', 'Rear panel with tap', 'Cabinet storage option'],
    applications: ['Noodle bars and ramen shops', 'Restaurants', 'Canteens'],
    powerKw: 24,
    tables: [
      T('12 burner noodle cooking hob', ['Power', 'Model', 'Voltage', 'Dimension (mm)'], [
        ['8 kW', 'TS-12ZML08C-01', V380, '700*900*1000 (800+200)'],
        ['12 kW', 'TS-12ZML12C-01', V380, '700*900*1000 (800+200)'],
        ['15 kW', 'TS-12ZML15C-01', V380, '700*900*1000 (800+200)'],
      ]),
      T('Cabinet model', ['Model', 'Rated power', 'Voltage', 'Control', 'Timer', 'Dimension (mm)', 'Rack'], [['AN0010', '2 x 12 kW', 'AC 380V', 'Touch and knob', '4 hours', '800*800*800+30', 'Φ140*125 mm']]),
    ],
    guides: ['stages', 'cookware'],
    keywords: ['noodle cooker induction', '12 burner noodle cooker', 'commercial pasta cooker induction'],
  }),

  /* ================================================================ FRYERS */
  mk({
    slug: 'induction-counter-top-fryer-3500w',
    name: 'Induction Counter-Top Deep Fryer 3500 W',
    model: 'AY3503 / AY3504',
    category: 'fryer',
    tagline: '8 litre, 3500 W single induction fryers with temperature control to 260 degrees.',
    short: 'A compact single-tank fryer with touch control, 8 power levels, oil drain tap and an oil-filter basket. Plugs into a 220 V supply.',
    description: [
      'The counter-top fryer fits cafes, snack bars and small kitchens. Touch control sets the temperature between 30 and 260 degrees C (AY3503), while AY3504 adds a 99-minute timer at 200 degrees C.',
      'A front drain tap makes oil changes easy, and the stainless steel body wipes clean.',
    ],
    imgs: ['fryer-hero', 'fryer-ay3503', 'fryer-ay3504'],
    chips: ['3500 W', '220 V', '8 L'],
    highlights: [['bolt', '3500 W'], ['thermometer', 'To 260 C'], ['shield', '1 year warranty'], ['stopwatch', 'Timer to 99 min']],
    specs: [['Rated power', '3500 W'], ['Voltage', 'AC 220 V'], ['Volume', '8 L'], ['Power stage', '8 levels'], ['Filter basket', '240*190*140 mm'], ['Carton size', '375*525*450 mm']],
    features: ['Touch control', 'Drain tap for easy oil change', 'Oil-filter basket included'],
    applications: ['Cafes and snack bars', 'Small restaurants', 'Cloud kitchens'],
    powerKw: 3.5,
    tables: [T('Counter-top fryer models', ['Model', 'Rated power', 'Voltage', 'Control', 'Levels / timer', 'Temperature', 'Volume', 'Dimension (mm)'], [
      ['AY3503', '3500 W', 'AC 220V', 'Touch', '8 levels', '30 to 260 C', '8 L', '320*440*415'],
      ['AY3504', '3500 W', 'AC 220V', 'Touch', 'Timer 99 min', '200 C', '8 L', '320*485*405'],
    ])],
    guides: ['cookware'],
    keywords: ['induction deep fryer', 'counter top induction fryer 3500w', 'commercial induction fryer'],
  }),
  mk({
    slug: 'induction-floor-standing-fryer',
    name: 'Induction Floor-Standing Fryer',
    model: 'AY0003 / AY0005 / AY0009',
    category: 'fryer',
    tagline: 'Single and double tank induction fryers, 8 to 24 kW, with timer and oil sink.',
    short: 'Free-standing induction fryers for continuous frying: a 32 L single tank, a double 15 kW tank and a double-cylinder cabinet fryer with oil-filter screens.',
    description: [
      'AY0003 is a single 32 L fryer in 8, 12 or 15 kW. AY0005 offers two 320 x 400 mm oil sinks with 15 kW each and a 1 to 120 minute timer.',
      'AY0009 is a double-cylinder cabinet fryer (2 x 12 kW) with a 4-hour timer and filter screens.',
    ],
    imgs: ['fryer-ay0003', 'fryer-ay0005', 'fryer-ay0009'],
    chips: ['8 to 30 kW', '380 V', 'Single / double tank'],
    highlights: [['bolt', 'Up to 2 x 15 kW'], ['stopwatch', 'Programmable timer'], ['shield', '1 year warranty'], ['industry', 'Heavy duty']],
    specs: [['Power', '8 kW to 2 x 15 kW'], ['Voltage', 'AC 380 V'], ['Control', 'Press and knob / touch and knob'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Single and double tank models', 'Oil sink with filter screen', 'Timer on all models'],
    applications: ['Fast-food outlets', 'Restaurants', 'Snack production'],
    powerKw: 30,
    tables: [T('Floor-standing fryer models', ['Model', 'Type', 'Rated power', 'Control', 'Levels', 'Timer', 'Dimension (mm)', 'Capacity / sink'], [
      ['AY0003', 'Induction frying cooker', '8 / 12 / 15 kW', 'Press and knob', '9', '-', '450*900*1000', '32 L'],
      ['AY0005', 'Double fryer', '2 x 15 kW', 'Press and knob', '8', '1-120 min', '800*900*1200', 'Sink 320*400 mm x 2'],
      ['AY0009', 'Double cylinder fryer', '2 x 12 kW', 'Touch and knob', '8', '4 hours', '800*800*800+30', 'Sink 387*273*185 mm x 2'],
    ], 'AY0003 and AY0005 (AC 380 V). AY0009: AC 380 V, wooden case 880*880*1030 mm, filter screen 336*240*150 mm x 2.')],
    guides: ['cookware'],
    keywords: ['floor standing induction fryer', 'double tank induction fryer', 'commercial deep fryer 380v'],
  }),

  /* ================================================================ FLAME */
  mk({
    slug: 'commercial-electric-flame-stove',
    name: 'Commercial Electric Flame Stove',
    model: 'AD5001 to AD1501',
    category: 'flame',
    tagline: 'Electric flame stoves with a real-flame look, 5 to 15 kW.',
    short: 'Flame-style electric stoves that deliver strong wok heat with a visible flame ring, in 220 V 5 kW single units and 380 V 10 and 15 kW cabinet models.',
    description: [
      'Electric flame stoves give cooks the familiar look and feel of a gas flame, powered by electricity. Eight power levels are set with a Mag-Switch.',
      'Choose 5 kW (AC 220 V) low and tall units, or 10 kW and 15 kW (AC 380 V) models with ventilated cabinets.',
    ],
    imgs: ['flame-hero', 'flame-ad5001', 'flame-ad5003', 'flame-ad1001', 'flame-ad1501'],
    chips: ['5 to 15 kW', '220 / 380 V', 'Flame look'],
    highlights: [['fire', 'Real-flame look'], ['bolt', '5 to 15 kW'], ['shield', '1 year warranty'], ['cogs', 'Mag-Switch']],
    specs: [['Power', '5 kW, 10 kW, 15 kW'], ['Voltage', 'AC 220 V (5 kW) / AC 380 V (10, 15 kW)'], ['Frequency', '50 to 60 Hz'], ['Power stage', '8 levels'], ['Control', 'Mag-Switch'], ['Body', 'Stainless steel']],
    features: ['Visible flame ring', 'Mag-Switch control', 'Stainless steel body'],
    applications: ['Restaurants wanting a flame look', 'Open kitchens', 'Hotels'],
    powerKw: 15,
    tables: [T('Electric flame stove models', ['Model', 'Rated power', 'Voltage', 'Frequency', 'Power stage', 'Control', 'Dimension (mm)'], [
      ['AD5001', '5000 W', 'AC 220V', '50-60 Hz', '8 levels', 'Mag switch', '896*900*1200'],
      ['AD5002', '5000 W', 'AC 220V', '50-60 Hz', '8 levels', 'Mag switch', '700*800*1200'],
      ['AD5003', '5000 W', 'AC 220V', '50-60 Hz', '8 levels', 'Mag switch', '600*650*350+120'],
      ['AD1001', '10 kW', 'AC 380V', '50-60 Hz', '8 levels', 'Mag switch', '800*800*800+30'],
      ['AD1501', '15 kW', 'AC 380V', '50-60 Hz', '8 levels', 'Mag switch', '1200*800*800+30'],
    ], 'AD5002 has a 1-digit display. AD1001 wooden case 880*880*1030 mm; AD1501 wooden case 1280*880*1030 mm.')],
    guides: ['cookware'],
    keywords: ['electric flame stove', 'commercial flame induction stove', 'electric wok flame stove'],
  }),

  /* ================================================================ MULTI BURNER */
  mk({
    slug: '2-burner-induction-cooker',
    name: '2 Burner Induction Cooker',
    model: 'TS-AB0006 / TS-AB0015',
    category: 'multi',
    tagline: '2 x 3500 W induction cooker in cabinet or foldable-feet build.',
    short: 'Two independent 3.5 kW burners with 3-digit displays, press-and-knob control, a 0 to 180 minute timer and 9 power levels from 400 W to 3500 W.',
    description: [
      'The 2-burner cooker is a compact cooking line for small kitchens. The cabinet version adds closed storage; the foldable-feet version is lighter and easy to move.',
      'Each burner has its own display, knob and timer, and the glass plates are 300 x 300 mm with 100 kg bearing capacity.',
    ],
    imgs: ['multi-2cab', 'multi-2fold', 'photo-twin-2-burner'],
    alts: ['2 burner induction cooker with cabinet by Rathin', '2 burner induction cooker with foldable feet by Rathin', 'Twin 2 burner stainless steel induction cooking tables'],
    chips: ['2 x 3.5 kW', '380 V', '9 levels'],
    highlights: [['bolt', '2 x 3500 W'], ['stopwatch', 'Timer 0-180 min'], ['shield', '1 year warranty'], ['thermometer', 'Up to 240 C']],
    specs: [['Rated power', '3500 W x 2'], ['Voltage', '380 V ~ 50 Hz'], ['Display', '3 digital'], ['Power stage', '9 levels'], ['Timer', '0 to 180 minutes'], ['Control', 'Press and knob'], ['Weight', 'N.W. 25 kg / G.W. 42 kg']],
    features: ['Independent power, timer and display per burner', 'Cabinet or foldable-feet versions', '9 levels with temperature control'],
    applications: ['Small restaurants', 'Cafes and cloud kitchens', 'Hostel kitchens'],
    powerKw: 7,
    tables: [
      T('2 burner models', ['Model', 'Type', 'Rated power', 'Voltage', 'Display', 'Control', 'Dimension (mm)', 'N.W. / G.W.'], [
        ['TS-AB0006', 'Cabinet', '3500 W x 2', '380V~50Hz', '3 digital', 'Press and knob', '400*900*1000', '25 / 42 kg'],
        ['TS-AB0015', 'Foldable feet', '3500 W x 2', '380V~50Hz', '3 digital', 'Press and knob', '400*900*1000', '25 / 42 kg'],
      ]),
      abLevels,
    ],
    guides: ['levels', 'panel', 'glass', 'cookware', 'wiring'],
    keywords: ['2 burner induction cooker', 'double burner commercial induction', '3500w x 2 induction'],
  }),
  mk({
    slug: '3-burner-induction-cooker',
    name: '3 Burner Induction Cooker',
    model: 'TS-AB0017',
    category: 'multi',
    tagline: '3 x 3500 W induction cooker with back panel and storage cabinet.',
    short: 'Three independent 3.5 kW burners across a 1500 mm stainless steel counter, with digital displays, press-and-knob control and 9 power levels.',
    description: [
      'The 3-burner cooker is a full cooking line in one unit: each burner has its own knob, display and 0 to 180 minute timer.',
      'A tall back panel protects the wall, and the cabinet below stores pots and pans.',
    ],
    imgs: ['multi-3cab', 'photo-3-burner-table'],
    alts: ['3 burner induction cooker with cabinet by Rathin', 'Three burner stainless steel induction cooking table with under-shelf'],
    chips: ['3 x 3.5 kW', '380 V', '9 levels'],
    highlights: [['bolt', '3 x 3500 W'], ['stopwatch', 'Timer 0-180 min'], ['shield', '1 year warranty'], ['thermometer', 'Up to 240 C']],
    specs: [['Rated power', '3500 W x 3'], ['Voltage', '380 V ~ 50 Hz'], ['Display', 'Digital'], ['Power stage', '9 levels'], ['Timer', '0 to 180 minutes'], ['Dimension', '1500*750*1000 mm'], ['Weight', 'N.W. 32 kg / G.W. 49 kg']],
    features: ['Three independent burners', 'Back panel and cabinet', '9 power levels'],
    applications: ['Restaurants', 'Canteens', 'Hotel kitchens'],
    powerKw: 10.5,
    tables: [
      T('3 burner model', ['Model', 'Rated power', 'Voltage', 'Display', 'Control', 'Dimension (mm)', 'N.W. / G.W.'], [['TS-AB0017', '3500 W x 3', '380V~50Hz', 'Digital', 'Press and knob', '1500*750*1000', '32 / 49 kg']]),
      abLevels,
    ],
    guides: ['levels', 'panel', 'glass', 'cookware', 'wiring'],
    keywords: ['3 burner induction cooker', 'three burner commercial induction range'],
  }),
  mk({
    slug: '4-burner-induction-cooker',
    name: '4 Burner Induction Cooker',
    model: 'TS-AB0001 / AB0002 / AB0016 / AB0019',
    category: 'multi',
    tagline: '4 x 3500 W induction cookers in cabinet and foldable-feet builds.',
    short: 'Our most popular multi-burner: four independent 3.5 kW burners with 9 power levels, 0 to 180 minute timers and precise temperature control from 60 to 240 degrees C.',
    description: [
      'Four burners with their own displays and knobs let a whole line cook at once. Choose a closed cabinet, a stand with foldable feet, a touch-and-knob version (AB0002) or the 8-digital multi-burner hob (AB0019).',
      'Heat is generated in the cookware only, keeping the kitchen cool and the plate easy to wipe clean.',
    ],
    imgs: ['multi-hero', 'multi-4cab', 'multi-4fold', 'multi-4touch', 'multi-ab0019', 'photo-4-burner-power-levels'],
    chips: ['4 x 3.5 kW', '380 V', '9 levels'],
    highlights: [['bolt', '4 x 3500 W'], ['stopwatch', 'Timer 0-180 min'], ['shield', '1 year warranty'], ['thermometer', '60 to 240 C']],
    specs: [['Rated power', '3500 W x 4'], ['Voltage', '380 V ~ 50 Hz'], ['Display', '3 or 4 digital'], ['Power stage', '9 levels (8 on AB0019)'], ['Timer', '0 to 180 minutes'], ['Control', 'Press and knob / touch and knob'], ['Weight', 'N.W. 57 kg / G.W. 82 kg']],
    features: ['Four independent burners', 'Cabinet, foldable-feet and hob versions', '220 V or 380 V connection options'],
    applications: ['Restaurants', 'Hostels and canteens', 'Hotel kitchens', 'Catering units'],
    powerKw: 14,
    featured: true,
    tables: [
      T('4 burner models', ['Model', 'Type', 'Rated power', 'Voltage', 'Display', 'Control', 'Dimension (mm)', 'N.W. / G.W.'], [
        ['TS-AB0001', 'Cabinet', '3500 W x 4', '380V~50Hz', '3 digital', 'Press and knob', '800*900*1000', '57 / 82 kg'],
        ['TS-AB0016', 'Foldable feet', '3500 W x 4', '380V~50Hz', '3 digital', 'Press and knob', '740*840*950', '57 / 82 kg'],
        ['TS-AB0002', 'Cabinet', '3500 W x 4', '380V~50Hz', '4 digital', 'Touch and knob', '800*900*1000', '62 / 87 kg'],
        ['AB0019', 'Multi-burner hob (cabinet)', '3500 W x 4', 'AC 380V~', '8 digital', 'Press and knob', '800*900*1000', '-'],
      ]),
      abLevels,
    ],
    guides: ['levels', 'panel', 'glass', 'cookware', 'wiring'],
    keywords: ['4 burner induction cooker', 'four burner commercial induction', '3500w x 4 induction range'],
  }),
  mk({
    slug: '6-burner-induction-cooker',
    name: '6 Burner Induction Cooker',
    model: 'TS-AB0008 / TS-AB0005',
    category: 'multi',
    tagline: '6 x 3500 W induction cooker for high-volume lines, cabinet or foldable feet.',
    short: 'Six independent 3.5 kW burners across a 1150 mm counter. 9 power levels, timers and digital displays on every burner.',
    description: [
      'The 6-burner is the highest-capacity unit in the AB series, suited to busy kitchens that cook many dishes at once.',
      'Pick the cabinet version for storage or foldable feet for an open, easy-to-clean base.',
    ],
    imgs: ['multi-6cab', 'multi-6fold'],
    chips: ['6 x 3.5 kW', '380 V', '9 levels'],
    highlights: [['bolt', '6 x 3500 W'], ['stopwatch', 'Timer 0-180 min'], ['shield', '1 year warranty'], ['industry', 'High volume']],
    specs: [['Rated power', '3500 W x 6'], ['Voltage', '380 V ~ 50 Hz'], ['Display', '3 digital'], ['Power stage', '9 levels'], ['Timer', '0 to 180 minutes'], ['Dimension', '1150*900*1000 mm'], ['Weight', 'N.W. 78 kg / G.W. 112 kg']],
    features: ['Six independent burners', 'Cabinet or foldable-feet versions', '9 power levels'],
    applications: ['Large restaurants', 'Canteens and mess', 'Central kitchens'],
    powerKw: 21,
    tables: [
      T('6 burner models', ['Model', 'Type', 'Rated power', 'Voltage', 'Display', 'Control', 'Dimension (mm)', 'N.W. / G.W.'], [
        ['TS-AB0008', 'Cabinet', '3500 W x 6', '380V~50Hz', '3 digital', 'Press and knob', '1150*900*1000', '78 / 112 kg'],
        ['TS-AB0005', 'Foldable feet', '3500 W x 6', '380V~50Hz', '3 digital', 'Press and knob', '1150*900*1000', '78 / 112 kg'],
      ]),
      abLevels,
    ],
    guides: ['levels', 'panel', 'glass', 'cookware', 'wiring'],
    keywords: ['6 burner induction cooker', 'six burner commercial induction'],
  }),

  /* ================================================================ TABLE TOP */
  mk({
    slug: 'table-top-induction-cooker-big-knob',
    name: 'Table-Top Induction Cooker, Big Knob Series',
    model: 'TS-BT2501 to TS-BT8010',
    category: 'tabletop',
    tagline: 'Big-knob table-top cookers from 2.5 kW to 8 kW, flat and wok.',
    short: 'Simple, rugged stainless steel table-top cookers with a large rotary knob and 8 power levels. The European-standard series is CE/CB certified in selected models.',
    description: [
      'Big-knob models are easy to learn and quick to use, which makes them a favourite in busy counters. Choose flat glass or a concave wok plate.',
      'The range runs from 2500 W (220 V) to 8000 W (380 V) with stainless steel bodies and 8 power levels.',
    ],
    imgs: ['bt3006', 'bt2501', 'bt3007', 'bt3535', 'bt8009', 'bt8010', 'bt3533', 'bt5017'],
    chips: ['2.5 to 8 kW', 'Big knob', 'Flat / wok'],
    highlights: [['bolt', '2.5 to 8 kW'], ['cogs', 'Simple knob control'], ['shield', '1 year warranty'], ['leaf', 'Energy efficient']],
    specs: [['Power', '2500 W to 8000 W'], ['Voltage', 'AC 220-240 V or 380-400 V'], ['Power stage', '8 levels'], ['Control', 'Big knob'], ['Body', 'Stainless steel'], ['Warranty', '1 year']],
    features: ['Large rotary knob', 'Flat and wok versions', 'CE / CB certified models'],
    applications: ['Cafes and counters', 'Restaurants', 'Catering'],
    powerKw: 8,
    tables: [T('Big knob series', ttCols, [
      ['TS-BT2501', 'Flat', '2500 W', 'AC 220-240V', '340*420*145', 'Big knob', '8'],
      ['TS-BT3006', 'Flat', '3000 W', 'AC 220-240V', '400*455*160', 'Big knob', '8'],
      ['TS-BT3007', 'Wok', '3000 W', 'AC 220-240V', '400*455*210', 'Big knob', '8'],
      ['TS-BT3535', 'Wok', '3500 W', 'AC 220-240V', '400*455*160', 'Big knob', '8'],
      ['BT3533', 'Flat (CE/CB)', '3500 W', 'AC 220V, 50-60Hz', '400*450*190', 'Big knob', '8'],
      ['TS-BT8009', 'Flat', '8000 W', 'AC 380-400V', '500*540*245', 'Big knob', '8'],
      ['TS-BT8010', 'Wok', '8000 W', 'AC 380-400V', '510*600*330', 'Big knob', '8'],
      ['BT5017', 'Flat', '5000 W', 'AC 380V, 50-60Hz', '400*700*475', 'Big knob', '8'],
    ])],
    guides: INSTALL_GUIDES,
    keywords: ['table top induction cooker', 'big knob induction cooker', 'commercial induction cooker 5000w'],
  }),
  mk({
    slug: 'table-top-induction-cooker-button-series',
    name: 'Table-Top Induction Cooker, Button Series',
    model: 'TS-BT35xx / BT35xx',
    category: 'tabletop',
    tagline: '3 to 3.5 kW button-control cookers with 8 to 10 power levels, flat and wok.',
    short: 'Slim stainless steel table-top cookers with a push-button panel and 4-digit display, 8 or 10 levels and a 278 x 278 mm glass plate.',
    description: [
      'Button series cookers are slim, light and precise: a single press steps power or temperature. The range covers flat and wok models and one double burner (TS-BT3003).',
      'Selected models carry CE/CB certification and a timer of up to 240 minutes.',
    ],
    imgs: ['bt3537', 'bt3546', 'bt3501', 'bt3502', 'bt3538', 'bt3522', 'bt3554', 'bt3555', 'bt3001', 'bt3003', 'bt3525', 'bt3526'],
    chips: ['3 to 3.5 kW', 'Button', '220 V'],
    highlights: [['bolt', '3 to 3.5 kW'], ['stopwatch', 'Timer up to 240 min'], ['shield', '1 year warranty'], ['leaf', 'Energy efficient']],
    specs: [['Power', '3000 W to 3500 W (double 2 x 3000 W)'], ['Voltage', 'AC 220 V, 50-60 Hz'], ['Power stage', '8 or 10 levels'], ['Control', 'Button'], ['Display', '4 digital'], ['Warranty', '1 year']],
    features: ['Push-button control', 'Flat and wok versions', 'Double burner option'],
    applications: ['Cafes', 'Cloud kitchens', 'Hostels and PGs', 'Live counters'],
    powerKw: 6,
    tables: [T('Button series', ttCols, [
      ['TS-BT3537', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*120', 'Button', '8'],
      ['TS-BT3546', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*165', 'Button', '8'],
      ['TS-BT3501', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*430*110', 'Button', '8'],
      ['TS-BT3502', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*425*120', 'Button', '8'],
      ['BT3538', 'Flat (CE/CB)', '3500 W', 'AC 220V~, 50-60Hz', '350*470*150', 'Button', '10'],
      ['BT3522', 'Flat (CE/CB)', '3500 W', 'AC 220V~, 50-60Hz', '350*450*121', 'Button', '10'],
      ['BT3554', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*435*122', 'Button', '10'],
      ['BT3555', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '320*390*80', 'Button', '10'],
      ['TS-BT3001', 'Flat', '3000 W', 'AC 220V~, 50-60Hz', '350*470*150', 'Button', '10'],
      ['TS-BT3003', 'Double', '3000 W + 3000 W', 'AC 220V~, 50-60Hz', '656*420*100', 'Button', '10'],
      ['TS-BT3525', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*121', 'Button', '10'],
      ['TS-BT3526', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*166', 'Button', '10'],
    ])],
    guides: INSTALL_GUIDES,
    keywords: ['button induction cooker', '3500w induction cooker commercial', 'table top induction wok'],
    featured: true,
  }),
  mk({
    slug: 'table-top-induction-cooker-double-knob',
    name: 'Table-Top Induction Cooker, Double Knob Series',
    model: 'BM3503 / BM3511 / BT3544 / BM3512',
    category: 'tabletop',
    tagline: '3.5 kW double-knob cookers with a 0 to 180 minute timer and double-ring options.',
    short: 'Two knobs set power and timer independently. The double-ring models add outer and inner heating rings for flat and wok cooking.',
    description: [
      'Double-knob cookers give a clear, tactile control: one knob for power, one for time. Nine power levels from 500 W to 3500 W.',
      'BM3512 and BM3513 use outer and inner heating rings for even heat across larger pans.',
    ],
    imgs: ['bm3503', 'bm3511', 'bt3544', 'bt3545', 'bm3512', 'bm3513'],
    chips: ['3.5 kW', 'Double knob', '9 levels'],
    highlights: [['bolt', '3500 W'], ['stopwatch', 'Timer 0-180 min'], ['shield', '1 year warranty'], ['cogs', 'Double knob']],
    specs: [['Power', '3500 W'], ['Voltage', 'AC 220 V, 50-60 Hz'], ['Power stage', '9 levels (8 on double-ring)'], ['Control', 'Double knob'], ['Timer', '0 to 180 minutes'], ['Warranty', '1 year']],
    features: ['Double-knob control', 'Flat and wok versions', 'Double-ring heating option'],
    applications: ['Cafes and canteens', 'Hotel counters', 'Catering'],
    powerKw: 3.5,
    tables: [T('Double knob series', ttCols, [
      ['BM3503', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*121', 'Double knob', '9'],
      ['BM3511', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*168', 'Double knob', '9'],
      ['BT3544', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '335*420*105', 'Double knob', '9'],
      ['BT3545', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '335*420*110', 'Double knob', '9'],
      ['BM3512', 'Double ring, flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*130', 'Double knob', '8'],
      ['BM3513', 'Double ring, wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*160', 'Double knob', '8'],
    ], 'Double-ring models: outer ring 350 W to 2100 W, inner ring 500 W to 3500 W.')],
    guides: INSTALL_GUIDES,
    keywords: ['double knob induction cooker', '3500w induction wok cooker', 'commercial induction table top'],
  }),
  mk({
    slug: 'table-top-induction-cooker-touch-and-knob',
    name: 'Table-Top Induction Cooker, Touch and Knob Series',
    model: 'TS-BT35xx / TS-BT50xx / TS-BT6003',
    category: 'tabletop',
    tagline: 'Touch keys plus a knob, 3.5 to 6 kW, flat and wok, with 0 to 99 minute timer.',
    short: 'Touch keys for functions and a rotary knob for power: the best of both. Stainless steel bodies with 2-digit or 8-digit displays.',
    description: [
      'This series runs from 3500 W on a 220 V supply to 5000 W and 6000 W on higher-power versions, with nine power levels.',
      'Flat glass and wok plate versions are available, and some models carry CE/CB certification.',
    ],
    imgs: ['bt3518', 'bt3503ce', 'bt3515', 'bt3516', 'bt6003'],
    chips: ['3.5 to 6 kW', 'Touch + knob', '9 levels'],
    highlights: [['bolt', '3.5 to 6 kW'], ['stopwatch', 'Timer 0-99 min'], ['shield', '1 year warranty'], ['cogs', 'Touch and knob']],
    specs: [['Power', '3500 W to 6000 W'], ['Voltage', '220 V or 380 V'], ['Power stage', '8 or 9 levels'], ['Control', 'Touch and knob'], ['Timer', '0 to 99 minutes'], ['Warranty', '1 year']],
    features: ['Touch keys with rotary knob', 'Flat and wok models', 'Up to 6000 W'],
    applications: ['Cafes and restaurants', 'Cloud kitchens', 'Catering'],
    powerKw: 6,
    tables: [T('Touch and knob series', ttCols, [
      ['TS-BT3518', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '338*418*95', 'Touch and knob', '9'],
      ['TS-BT3503', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*120', 'Touch and knob', '9'],
      ['TS-BT3504', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*150', 'Touch and knob', '9'],
      ['TS-BT3515', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*120', 'Touch and knob', '9'],
      ['TS-BT3516', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*120', 'Touch and knob', '9'],
      ['BT3503', 'Flat (CE/CB)', '3500 W', 'AC 220V~, 50-60Hz', '380*472*128', 'Touch and knob', '9'],
      ['TS-BT5001', 'Flat', '5000 W', 'AC 220V~, 50-60Hz', '380*472*134', 'Touch and knob', '9'],
      ['TS-BT5002', 'Wok', '5000 W', 'AC 220V~, 50-60Hz', '380*500*184', 'Touch and knob', '9'],
      ['TS-BT6003', 'Flat', '6000 W', 'AC 380V~', '430*550*245', 'Touch and knob', '8'],
    ])],
    guides: INSTALL_GUIDES,
    keywords: ['touch and knob induction cooker', '5000w table top induction', '6000w commercial induction cooker'],
  }),
  mk({
    slug: 'table-top-induction-cooker-touch-series',
    name: 'Table-Top Induction Cooker, Touch Series',
    model: 'TS-BT35xx / TS-BT50xx',
    category: 'tabletop',
    tagline: 'Full touch-control table-top cookers, 3.5 to 5 kW, with LCD and 6-digit displays.',
    short: 'A smooth glass touch panel with a bright display and temperature control from 60 to 270 degrees C. Timer up to 240 minutes on selected models.',
    description: [
      'Touch series cookers are the most modern in the range, with sealed touch keys that are easy to wipe clean.',
      'TS-BT3528 adds an LCD, and the 5 kW models (TS-BT5013, TS-BT5014) bring high power to a table-top format.',
    ],
    imgs: ['bt3520', 'bt3521', 'bt3527', 'bt3529', 'bt3528', 'bt5013', 'bt5014'],
    chips: ['3.5 to 5 kW', 'Touch', 'Timer to 240 min'],
    highlights: [['bolt', '3.5 to 5 kW'], ['stopwatch', 'Timer to 240 min'], ['shield', '1 year warranty'], ['thermometer', 'Up to 270 C']],
    specs: [['Power', '3500 W to 5000 W'], ['Voltage', 'AC 220 V, 50-60 Hz'], ['Power stage', '9 levels'], ['Control', 'Touch'], ['Display', '4 or 6 digital / LCD'], ['Warranty', '1 year']],
    features: ['Sealed glass touch panel', 'LCD display model', '5 kW option'],
    applications: ['Modern cafes', 'Cloud kitchens', 'Hotel counters'],
    powerKw: 5,
    tables: [T('Touch series', ttCols, [
      ['TS-BT3520', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*121', 'Touch', '9'],
      ['TS-BT3521', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*165', 'Touch', '9'],
      ['TS-BT3527', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*118', 'Touch', '9'],
      ['TS-BT3529', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '338*418*95', 'Touch', '9'],
      ['TS-BT3528', 'Flat (LCD)', '3500 W', 'AC 220V~, 50-60Hz', '338*418*95', 'Touch', '9'],
      ['TS-BT5013', 'Flat', '5000 W', 'AC 220V~, 50-60Hz', '380*470*135', 'Touch', '9'],
      ['TS-BT5014', 'Wok', '5000 W', 'AC 220V~, 50-60Hz', '380*500*200', 'Touch', '9'],
    ])],
    guides: INSTALL_GUIDES,
    keywords: ['touch control induction cooker', '5000w touch induction cooker', 'lcd induction cooker commercial'],
  }),
  mk({
    slug: 'table-top-induction-cooker-classic-series',
    name: 'Table-Top Induction Cooker, Classic Series',
    model: 'TS-BT35xx / TS-BT50xx / TS-BT6002',
    category: 'tabletop',
    tagline: 'Press-and-knob classic cookers, 3.5 to 6 kW, including double and triple burners.',
    short: 'The classic press-and-knob layout in stainless steel, with 3-digit display and 0 to 180 minute timer. Includes 2-burner and 3-burner table-top versions.',
    description: [
      'Classic series cookers combine reliable press keys with a rotary knob. Power ranges from 3500 W (220 V) to 6000 W (380 V) with Half-Bridge technology on the 5 kW and 6 kW models.',
      'Double (TS-BT3530, TS-BT5016, TS-BT3512) and triple (TS-BT3524) versions extend a counter with more burners.',
    ],
    imgs: ['bt3505', 'bt3506', 'bt5003', 'bt5004', 'bt3530', 'bt5016', 'bt3512', 'bt3524', 'bt3541', 'bt6002', 'bt3556', 'bt3543'],
    chips: ['3.5 to 6 kW', 'Press + knob', '1 to 3 burners'],
    highlights: [['bolt', '3.5 to 6 kW'], ['stopwatch', 'Timer 0-180 min'], ['shield', '1 year warranty'], ['grid', 'Up to 3 burners']],
    specs: [['Power', '3500 W to 6000 W (up to 3 burners)'], ['Voltage', 'AC 220 V or 380 V'], ['Power stage', '8 to 10 levels'], ['Control', 'Press and knob'], ['Timer', '0 to 180 minutes'], ['Warranty', '1 year']],
    features: ['Press and knob control', 'Half-Bridge on 5 and 6 kW models', 'Double and triple burner versions'],
    applications: ['Restaurants', 'Canteens', 'Catering'],
    powerKw: 10,
    tables: [T('Classic series', ttCols, [
      ['TS-BT3505', 'Flat', '3500 W', 'AC 220V~, 50-60Hz', '350*450*145', 'Press and knob', '9'],
      ['TS-BT3506', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*150', 'Press and knob', '9'],
      ['TS-BT5003', 'Flat', '5000 W', 'AC 220V~, 50-60Hz', '380*505*205', 'Press and knob', '8'],
      ['TS-BT5004', 'Wok', '5000 W', 'AC 220V~, 50-60Hz', '380*505*220', 'Press and knob', '8'],
      ['TS-BT3530', 'Double', '3500 W x 2', 'AC 220V~, 50-60Hz', '350*750*150', 'Press and knob', '9'],
      ['TS-BT5016', 'Double', '5000 W x 2', 'AC 380V', '350*810*160.8', 'Press and knob', '9'],
      ['TS-BT3512', 'Double (flat + wok)', '3500 W x 2', 'AC 220V~, 50-60Hz', '750*450*150', 'Press and knob', '9'],
      ['TS-BT3524', 'Triple', '3500 W x 3', 'AC 220V~, 50-60Hz', '1150*450*150', 'Press and knob', '9'],
      ['TS-BT3541', 'Flat', '3500 W', 'AC 220V~', '350*422.7*105', 'Press and knob', '10'],
      ['TS-BT6002', 'Flat', '6000 W', 'AC 380V~', '430*550*245', 'Press and knob', '8'],
      ['BT3556', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '405*515*200', 'Press and knob', '9'],
      ['BT3543', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '350*450*165', 'Press and knob', '8'],
    ])],
    guides: INSTALL_GUIDES,
    keywords: ['classic induction cooker', 'double burner table top induction', 'three burner table top induction cooker'],
  }),
  mk({
    slug: 'table-top-induction-cooker-mag-switch',
    name: 'Table-Top Induction Cooker, Mag-Switch Series',
    model: 'TS-BT5009 to TS-BT8011',
    category: 'tabletop',
    tagline: 'Heavy-duty Mag-Switch cookers, 5 to 8 kW, flat and wok, with stand options.',
    short: 'Industrial table-top and stand-mounted cookers with a magnetic power switch and a sealed digital display. Built for continuous heavy use.',
    description: [
      'The Mag-Switch series uses a magnetic slide switch that is easy to operate with wet or gloved hands. Eight power stages cover 600 W to 8000 W.',
      'Models are available as table-top units, on a stainless steel stand with under-shelf (TS-BT8004, TS-BT8005), and as a double burner (TS-BT8003, 2 x 8000 W).',
    ],
    imgs: ['bt5009', 'bt5010', 'bt6004', 'bt6005', 'bt8004', 'bt8005', 'bt8003', 'bt6001', 'bt8001', 'bt8002', 'bt8007', 'bt8006', 'bt8008', 'bt8011', 'bt3536'],
    chips: ['5 to 8 kW', 'Mag-Switch', '8 stages'],
    highlights: [['bolt', '5 to 8 kW'], ['cogs', 'Magnetic switch'], ['shield', '1 year warranty'], ['industry', 'Heavy duty']],
    specs: [['Power', '5000 W to 8000 W (double 2 x 8000 W)'], ['Voltage', 'AC 220 V or 380 V'], ['Power stage', '8 levels'], ['Control', 'Mag-Switch'], ['Technology', 'Half bridge (full bridge on TS-BT8008 / 8011)'], ['Warranty', '1 year']],
    features: ['Magnetic power switch', 'Stand and under-shelf versions', 'Flame-screen display on TS-BT8008 and TS-BT8011'],
    applications: ['Hotel and restaurant kitchens', 'Canteens', 'Catering'],
    powerKw: 16,
    tables: [T('Mag-Switch series', ttCols, [
      ['TS-BT5009', 'Flat', '5000 W', 'AC 220V~', '430*550*245', 'Mag switch', '8'],
      ['TS-BT5010', 'Wok', '5000 W', 'AC 220V~', '430*550*260', 'Mag switch', '8'],
      ['TS-BT6001', 'Flat', '6000 W', 'AC 380V~', '430*550*245', 'Mag switch', '8'],
      ['TS-BT6004', 'Flat', '6000 W', 'AC 380V~', '530*610*315', 'Mag switch', '8'],
      ['TS-BT6005', 'Wok', '6000 W', 'AC 380V~', '530*610*335', 'Mag switch', '8'],
      ['TS-BT8001', 'Flat', '8000 W', 'AC 380V~', '530*610*265', 'Mag switch', '8'],
      ['TS-BT8002', 'Wok', '8000 W', 'AC 380V~', '530*630*285', 'Mag switch', '8'],
      ['TS-BT8007', 'Flat', '8000 W', 'AC 380V~', '530*610*265', 'Mag switch', '8'],
      ['TS-BT8006', 'Wok', '8000 W', 'AC 380V~', '530*630*285', 'Mag switch', '8'],
      ['TS-BT8004', 'Flat on stand', '8000 W', 'AC 380V~', '530*610*800', 'Mag switch', '8'],
      ['TS-BT8005', 'Wok on stand', '8000 W', 'AC 380V~', '530*610*800', 'Mag switch', '8'],
      ['TS-BT8003', 'Double (flat + wok)', '8000 W x 2', 'AC 380V~', '1000*610*265', 'Mag switch', '8'],
      ['TS-BT8008', 'Flat (flame screen)', '8000 W', 'AC 220V~', '530*610*265', 'Mag switch and knob', '8 and 70'],
      ['TS-BT8011', 'Wok (flame screen)', '8000 W', 'AC 220V~', '530*610*395', 'Mag switch and knob', '8 and 70'],
      ['TS-BT3536', 'Wok', '3500 W', 'AC 220V~, 50-60Hz', '405*515*205', 'Mag switch (single)', '8'],
    ])],
    guides: INSTALL_GUIDES,
    keywords: ['mag switch induction cooker', '8000w induction cooker', 'heavy duty table top induction'],
  }),

  /* ================================================================ BUILT-IN / HOT POT */
  mk({
    slug: 'built-in-single-burner-induction-cooker',
    name: 'Built-in Single Burner Induction Cooker',
    model: 'TS-BT3507 / BT5008 / BT3508 / BT5030 / BT5031',
    category: 'builtin',
    tagline: 'Built-in induction cookers from 1.8 to 5 kW with remote control box.',
    short: 'Drop-in induction units with a glass top and a separate control box, for counters, serving lines and custom cooking stations.',
    description: [
      'Built-in cookers sit flush in a counter cut-out and run from a wired control panel placed where it is convenient. Sizes range from 300 x 300 mm to 360 x 360 mm.',
      'Power spans 1800 W to 5000 W, with a wok version (BT5031) for 5 kW stir-frying.',
    ],
    imgs: ['bi-bt3508', 'bt3507', 'bt5008', 'bi-bp1808', 'bi-bt5030', 'bi-bt5031'],
    chips: ['1.8 to 5 kW', 'Built-in', 'Flat / wok'],
    highlights: [['bolt', '1.8 to 5 kW'], ['box', 'Counter built-in'], ['shield', '1 year warranty'], ['stopwatch', 'Timer to 480 min']],
    specs: [['Power', '1800 W to 5000 W'], ['Voltage', 'AC 220 V or AC 380 V'], ['Power stage', '8 to 10 levels'], ['Control', 'Press and knob'], ['Timer', '0 to 480 minutes (BT5030, BT5031)'], ['Warranty', '1 year']],
    features: ['Separate wired control box', 'Flush glass top', 'Wok version available'],
    applications: ['Buffet and serving lines', 'Custom counters', 'Restaurant tables'],
    powerKw: 5,
    tables: [T('Built-in models', ['Model', 'Type', 'Power', 'Voltage', 'Unit size (mm)', 'Built-in size (mm)', 'Levels'], [
      ['TS-BT3507', 'Flat', '3500 W', 'AC 220V~', '320*320*116', '305*305*86', '9'],
      ['TS-BT5008', 'Flat', '5000 W', 'AC 220V~', '320*320*113', '300*300', '9'],
      ['BT3508', 'Flat', '3500 W', 'AC 220V~', '340*340*116', '320*320*78', '9'],
      ['BP1808', 'Flat', '1800 W', 'AC 220V~', '300*300*84', '265*315', '8'],
      ['BT5030', 'Flat', '5000 W', 'AC 380V~', '360*360*116', '335*335', '10'],
      ['BT5031', 'Wok', '5000 W', 'AC 380V~', '360*360*165', '335*335', '10'],
    ])],
    guides: ['cookware', 'glass'],
    keywords: ['built in induction cooker', 'drop in commercial induction hob', '5000w built in induction'],
  }),
  mk({
    slug: 'hot-pot-induction-hob',
    name: 'Hot Pot Induction Hob',
    model: 'TS-AX-196 to TS-AX-330 / TS-AX-215 to 320',
    category: 'builtin',
    tagline: 'Round and square hot pot hobs, 500 W to 3000 W, with touch or wire control.',
    short: 'Built-in hot pot hobs in round (Φ196 to Φ328 mm) and square (215 x 175 to 320 x 320 mm) sizes, with touch or wire control and stainless steel mounting rings.',
    description: [
      'Hot pot hobs are mounted into tables for restaurant hot pot service. Choose touch control on the glass, or a wire controller for a cleaner table top.',
      'Matching stainless steel rings are available for each diameter and square size.',
    ],
    imgs: ['hp-round-1', 'hp-round-2', 'hp-sq-1', 'hp-sq-2', 'hp-ring'],
    chips: ['500 W to 3 kW', 'Touch / wire', 'Round / square'],
    highlights: [['bolt', '500 W to 3000 W'], ['cogs', 'Touch or wire control'], ['shield', '1 year warranty'], ['grid', 'Round and square']],
    specs: [['Power', '500 W to 3000 W'], ['Voltage', 'AC 220-240 V, 50-60 Hz'], ['Control', 'Touch / wire control'], ['Shapes', 'Round and square'], ['Warranty', '1 year']],
    features: ['Touch or wire control', 'Stainless steel ring accessories', 'Several controller panel styles'],
    applications: ['Hot pot restaurants', 'Buffet tables', 'Hotels'],
    powerKw: 3,
    tables: [
      T('Hot pot hobs', ['Item', 'Size (mm)', 'Power', 'Voltage', 'Control', 'Shape'], [
        ['TS-AX-196', 'Φ196*75', '500W-800W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Round'],
        ['TS-AX-245', 'Φ245*75', '1000W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Round'],
        ['TS-AX-288', 'Φ288*75', '2000W / 2500W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Round'],
        ['TS-AX-330', 'Φ328*95', '3000W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Round'],
        ['TS-AX-215', '215*175*75', '500W-800W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Square'],
        ['TS-AX-300', '300*300', '2000W / 2500W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Square'],
        ['TS-AX-320', '320*320', '3000W', 'AC 220-240V, 50-60Hz', 'Touch / wire control', 'Square'],
      ]),
      T('Stainless steel ring (accessory)', ['Diameter size (mm)', 'Cut hole size (mm)'], [
        ['Φ196', 'Φ202'], ['Φ245', 'Φ253'], ['Φ288', 'Φ295'], ['Φ328', 'Φ337'], ['175*215', '183*223'], ['300*300', '308*308'], ['320*320', '326*326'],
      ]),
    ],
    guides: ['glass', 'cookware'],
    keywords: ['hot pot induction hob', 'built in hot pot induction cooker', 'restaurant hot pot induction'],
  }),
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const relatedProducts = (product: Product, limit = 6) => {
  const same = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...same, ...others].slice(0, limit);
};
