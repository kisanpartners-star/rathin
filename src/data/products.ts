/**
 * PRODUCT CATALOGUE  (edit this file to add, remove or change products)
 *
 * Each product needs a unique `slug` (used in the URL: /products/<slug>).
 * Images live in /public/assets/products/ - replace the files with your own photos keeping the same
 * names, or point `src` to a new file. All product images are 4:3 (1200 x 900) so grids stay aligned.
 *
 * NOTE: model numbers, capacities, dimensions and ratings below are realistic PLACEHOLDERS.
 * Verify every specification against your actual machines before publishing.
 */
import type { CategoryId, ImageRef, Product, ProductCategory } from './types';

const img = (file: string, alt: string): ImageRef => ({ src: `/assets/products/${file}`, alt, width: 1200, height: 900 });

export const categories: ProductCategory[] = [
  {
    id: 'cooktop',
    label: 'Induction Cooktops',
    icon: 'fire',
    description: 'Flat glass commercial induction cooktops in table-top and floor-standing builds.',
  },
  {
    id: 'wok',
    label: 'Induction Woks',
    icon: 'utensils',
    description: 'Concave induction cooking units for high-heat stir-fry, tadka and bulk curries.',
  },
  {
    id: 'griddle',
    label: 'Induction Griddles',
    icon: 'grid',
    description: 'Flat-top induction griddles on caster wheels for dosa, tikki, parotta and live counters.',
  },
  {
    id: 'bratt-pan',
    label: 'Tilting Bratt Pans',
    icon: 'layers',
    description: 'Tilting skillets with lid, tap and hand-wheel tilt for frying, braising and sauteing in bulk.',
  },
  {
    id: 'kettle',
    label: 'Boiling Kettles',
    icon: 'thermometer',
    description: 'Jacketed tilting boiling kettles with outlet valve, LED display and energy counter.',
  },
  {
    id: 'range',
    label: 'High-Power Ranges',
    icon: 'bolt',
    description: 'Multi-burner induction ranges from 3.5 kW to 15 kW for canteens and industrial kitchens.',
  },
];

export const categoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;

const WARRANTY_STD = [
  '1 year warranty on the machine from the date of installation.',
  'Warranty covers manufacturing defects and failure of electronic parts such as the PCB, IGBT and coil under normal use.',
  'After-sales support by phone, WhatsApp and on-site visit through the Rathin service network.',
  'Lifetime spare-parts availability and optional Annual Maintenance Contract (AMC) after the warranty period.',
];

export const products: Product[] = [
  /* ------------------------------------------------------------------ COOKTOPS */
  {
    slug: 'table-top-induction-cooktop-3-5-kw',
    name: 'Table-Top Commercial Induction Cooktop 3.5 kW',
    model: 'RT-TT-35',
    category: 'cooktop',
    tagline: 'Compact flat-glass cooktop for counters, live stations and cafeterias.',
    shortDescription:
      'A robust 3.5 kW commercial induction cooktop in a stainless steel body with a flat ceramic glass plate, digital display and rotary control. Sits on any counter and heats vessels directly for fast, clean and cool-kitchen cooking.',
    description: [
      'The Rathin RT-TT-35 is built for kitchens that need dependable induction heat in a small footprint. A hardened ceramic glass plate sits inside a fully stainless steel enclosure, so spills wipe off in seconds and the surface stays hygienic through long service days.',
      'Heat is generated directly in the base of the cookware, which means almost no wasted energy and far less heat radiating into your kitchen. Power can be dialled in from low simmer to full boil with the rotary knob, while the digital display shows the running power level at a glance.',
      'An internal cooling fan, over-temperature cut-off and pan-detection safeguard the electronics, and the service-friendly layout lets a trained technician replace the coil or PCB without disturbing the rest of the machine.',
    ],
    image: img('cooktop-tabletop.webp', 'Rathin 3.5 kW table-top commercial induction cooktop with flat glass top, display and knob'),
    gallery: [
      img('cooktop-tabletop.webp', 'Rathin table-top commercial induction cooktop in stainless steel'),
      img('cooktop-display-closeup.webp', 'Digital display and power selector of a Rathin commercial induction cooktop'),
      img('cooktop-compact-pair.webp', 'Rathin induction cooktops installed in a commercial kitchen'),
    ],
    chips: ['3.5 kW', 'Flat glass', 'SS 304'],
    highlights: [
      { icon: 'bolt', label: '3.5 kW rapid heating' },
      { icon: 'leaf', label: 'Energy efficient' },
      { icon: 'shield', label: '1 year warranty' },
      { icon: 'cogs', label: 'Easy-service design' },
    ],
    specs: [
      { label: 'Model', value: 'RT-TT-35' },
      { label: 'Power', value: '3.5 kW' },
      { label: 'Voltage', value: 'Single phase, 230 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '450 x 550 x 300 mm (indicative)' },
      { label: 'Capacity', value: 'Vessels up to 360 mm base diameter' },
      { label: 'Control type', value: 'Rotary knob, 8 power steps' },
      { label: 'Display', value: 'Digital LED power display' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Flat ceramic glass top with stainless steel frame',
      'Eight power levels from gentle simmer to full boil',
      'Pan detection and automatic shut-off when no vessel is present',
      'Over-temperature and over-voltage protection',
      'Built-in cooling fan with washable dust filter',
      'Table-top format that fits any counter or live-cooking station',
    ],
    applications: ['Cafeterias and canteens', 'Live food stations', 'Small restaurants and cloud kitchens', 'Hostel and PG kitchens'],
    warranty: WARRANTY_STD,
    powerKw: 3.5,
    featured: true,
    keywords: ['table top induction cooktop', 'commercial induction cooker 3.5 kw', 'stainless steel induction cooktop'],
  },
  {
    slug: 'table-top-induction-cooktop-5-kw',
    name: 'Table-Top Commercial Induction Cooktop 5 kW',
    model: 'RT-TT-50',
    category: 'cooktop',
    tagline: 'Higher-power table-top induction for busy restaurant and hotel lines.',
    shortDescription:
      'A 5 kW three-phase table-top induction cooktop with an extra-strong stainless steel body, ceramic glass plate and rotary power control. Designed for continuous service in restaurants and hotel kitchens.',
    description: [
      'The RT-TT-50 steps up to 5 kW so it can bring large pots of stock, gravy or rice to the boil quickly and hold a steady simmer for hours. It shares the compact table-top form of the 3.5 kW model with a stronger power stage and cooling system.',
      'The stainless steel enclosure is fully welded and rests on adjustable feet with non-slip caps. The glass plate is flush with the frame, giving you a flat, easy-to-clean work surface without crumb traps.',
      'Because the machine only heats the vessel, the surrounding work area stays comfortable - a real benefit in compact commercial kitchens where gas burners push temperatures up.',
    ],
    image: img('cooktop-compact-pair.webp', 'Rathin 5 kW table-top commercial induction cooktops in stainless steel with glass tops'),
    gallery: [
      img('cooktop-compact-pair.webp', 'Rathin 5 kW table-top induction cooktops with flat glass plates'),
      img('cooktop-display-closeup.webp', 'Control panel with display on a Rathin commercial induction cooktop'),
      img('cooktop-tabletop.webp', 'Rathin commercial induction cooktops on a kitchen counter'),
    ],
    chips: ['5 kW', 'Three phase', 'SS 304'],
    highlights: [
      { icon: 'bolt', label: '5 kW power output' },
      { icon: 'thermometer', label: 'Cooler kitchen' },
      { icon: 'shield', label: '1 year warranty' },
      { icon: 'stopwatch', label: 'Faster boiling' },
    ],
    specs: [
      { label: 'Model', value: 'RT-TT-50' },
      { label: 'Power', value: '5 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '500 x 600 x 400 mm (indicative)' },
      { label: 'Capacity', value: 'Vessels up to 400 mm base diameter' },
      { label: 'Control type', value: 'Rotary knob with power steps' },
      { label: 'Display', value: 'Digital LED power display' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Heavy-duty 5 kW coil and power stage for continuous service',
      'Flat ceramic glass plate flush with the stainless steel frame',
      'Adjustable stainless steel legs with non-slip caps',
      'Forced-air cooling for the electronics',
      'Automatic protection against over-heating and voltage faults',
    ],
    applications: ['Restaurants and dhabas', 'Hotel kitchens', 'Catering units', 'Institutional canteens'],
    warranty: WARRANTY_STD,
    powerKw: 5,
    keywords: ['5 kw induction cooktop', 'commercial induction cooker', 'induction kitchen equipment supplier India'],
  },
  {
    slug: 'floor-standing-induction-cooktop-8-kw',
    name: 'Floor-Standing Commercial Induction Cooktop 8 kW',
    model: 'RT-FS-80',
    category: 'cooktop',
    tagline: 'Floor-standing 8 kW induction unit with digital display and cabinet base.',
    shortDescription:
      'A freestanding stainless steel induction cooking station with an 8 kW flat glass cooktop, front-mounted control panel and storage cabinet. Built for high-volume kitchens that need serious heat at working height.',
    description: [
      'The RT-FS-80 is a complete induction cooking station on its own stainless steel stand. The 8 kW heating zone handles large stock pots, handis and kadais, and the control panel sits at the front where the cook can reach it comfortably.',
      'A full SS 304 body with a lower cabinet panel keeps cables and electronics protected from splashes and steam. Adjustable feet level the machine on uneven kitchen floors, and the open space below the unit makes floor cleaning simple.',
      'Choose the single-phase or three-phase configuration and optional extra work shelf when you place your order - Rathin manufactures to your kitchen layout.',
    ],
    image: img('cooktop-floor-standing.webp', 'Rathin 8 kW floor-standing commercial induction cooktop in stainless steel with control knob'),
    gallery: [
      img('cooktop-floor-standing.webp', 'Rathin floor-standing commercial induction cooktops'),
      img('cooktop-display-closeup.webp', 'Digital control panel and display of a Rathin induction cooktop'),
      img('cooktop-compact-pair.webp', 'Rathin induction cooktops in a stainless steel kitchen installation'),
    ],
    chips: ['8 kW', 'Floor standing', 'SS 304'],
    highlights: [
      { icon: 'bolt', label: '8 kW heavy-duty heating' },
      { icon: 'building', label: 'Stable floor-standing build' },
      { icon: 'shield', label: '1 year warranty' },
      { icon: 'leaf', label: 'Up to 90% heat transfer' },
    ],
    specs: [
      { label: 'Model', value: 'RT-FS-80' },
      { label: 'Power', value: '8 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '600 x 700 x 850 mm (indicative)' },
      { label: 'Capacity', value: 'Vessels up to 450 mm base diameter; 100 L pots' },
      { label: 'Control type', value: 'Rotary knob with power steps' },
      { label: 'Display', value: 'Digital LED power and status display' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'High-output 8 kW heating zone with flat glass plate',
      'Front control panel with knob and digital display',
      'Fully enclosed stainless steel cabinet protects the electronics',
      'Adjustable levelling feet for uneven floors',
      'Custom width, height and shelf options on request',
    ],
    applications: ['Large hotel and banquet kitchens', 'Industrial canteens', 'Central kitchens', 'Institutional mess halls'],
    warranty: WARRANTY_STD,
    powerKw: 8,
    featured: true,
    keywords: ['floor standing induction cooktop', '8 kw induction cooker', 'commercial induction cooker India'],
  },

  /* ---------------------------------------------------------------------- WOKS */
  {
    slug: 'induction-wok-unit-8-kw',
    name: 'Induction Wok / Concave Cooking Unit 8 kW',
    model: 'RT-WK-80',
    category: 'wok',
    tagline: 'Concave induction cooking unit for stir-fry, tadka and bulk curries.',
    shortDescription:
      'A floor-standing 8 kW induction wok with a stainless steel concave cooking bowl, knob control and ventilated cabinet. Delivers intense, even heat around the curve of the wok for authentic high-flame style cooking.',
    description: [
      'Traditional induction plates struggle with round-bottom woks. The Rathin RT-WK-80 solves that with a concave induction coil that follows the curve of the bowl, so heat reaches the sides as well as the base for true stir-fry performance.',
      'The all-stainless body has a raised back splash edge, a front control panel with a power knob and a ventilated cabinet that protects the electronics. The compact footprint fits easily under an exhaust hood.',
      'Typical uses include Indo-Chinese, fried rice, noodles, tadka, vegetable stir-fry and bulk gravies. Wok bowl diameter and power are customisable.',
    ],
    image: img('wok-unit.webp', 'Rathin 8 kW induction wok concave cooking unit in stainless steel with front control knob'),
    gallery: [
      img('wok-unit.webp', 'Rathin commercial induction wok unit with stainless steel concave bowl'),
      img('wok-closeup.webp', 'Concave induction wok bowl close-up'),
    ],
    chips: ['8 kW', 'Concave bowl', 'SS 304'],
    highlights: [
      { icon: 'fire', label: 'Wok-style intense heat' },
      { icon: 'bolt', label: '8 kW output' },
      { icon: 'shield', label: '1 year warranty' },
      { icon: 'thermometer', label: 'Cool surrounding area' },
    ],
    specs: [
      { label: 'Model', value: 'RT-WK-80' },
      { label: 'Power', value: '8 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body and bowl (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '600 x 600 x 850 mm (indicative)' },
      { label: 'Capacity', value: 'Wok bowl 450 mm diameter (custom sizes available)' },
      { label: 'Control type', value: 'Rotary knob with power steps' },
      { label: 'Display', value: 'LED indicator panel' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Concave induction coil matched to the wok bowl',
      'Heavy stainless steel cooking bowl with polished finish',
      'Knob control with power indicator',
      'Ventilated stainless steel cabinet and adjustable feet',
      'Customisable bowl size and power rating',
    ],
    applications: ['Indo-Chinese and pan-Asian kitchens', 'Restaurants and food courts', 'Catering units', 'Canteens and hostel messes'],
    warranty: WARRANTY_STD,
    powerKw: 8,
    featured: true,
    keywords: ['induction wok', 'commercial induction wok', 'concave induction cooker'],
  },
  {
    slug: 'heavy-duty-induction-wok-15-kw',
    name: 'Heavy-Duty Induction Wok Unit 15 kW',
    model: 'RT-WK-150',
    category: 'wok',
    tagline: 'Our highest-output induction wok for central and industrial kitchens.',
    shortDescription:
      'A heavy-duty 15 kW induction wok for the highest throughput kitchens, with a large stainless steel concave bowl, reinforced frame and forced cooling.',
    description: [
      'When volume matters, the RT-WK-150 delivers. Its 15 kW concave coil heats large woks and kadais rapidly, cutting cooking times for biryani bases, gravies and fried rice prepared in bulk.',
      'The reinforced stainless steel frame and thick cooking bowl are designed for daily commercial duty. The power section uses advanced cooling and multiple protections for reliable continuous operation.',
      'This model is made to order, so wok diameter, bowl depth, height and control layout can be matched to your cooking style and exhaust canopy.',
    ],
    image: img('wok-unit.webp', 'Rathin 15 kW heavy-duty induction wok unit for industrial kitchens'),
    gallery: [
      img('wok-unit.webp', 'Rathin heavy-duty induction wok with stainless steel bowl'),
      img('wok-closeup.webp', 'Stainless steel concave wok bowl of a Rathin induction unit'),
    ],
    chips: ['15 kW', 'Heavy duty', 'SS 304'],
    highlights: [
      { icon: 'bolt', label: '15 kW maximum power' },
      { icon: 'industry', label: 'Industrial-grade build' },
      { icon: 'shield', label: '1 year warranty' },
      { icon: 'ruler', label: 'Made to order' },
    ],
    specs: [
      { label: 'Model', value: 'RT-WK-150' },
      { label: 'Power', value: '15 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body and bowl (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '800 x 800 x 850 mm (indicative)' },
      { label: 'Capacity', value: 'Wok bowl up to 600 mm diameter' },
      { label: 'Control type', value: 'Rotary knob with power steps' },
      { label: 'Display', value: 'Digital LED power display' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      '15 kW concave induction coil for rapid, even heating',
      'Reinforced stainless steel frame for daily heavy use',
      'Forced-air cooling with multiple protection circuits',
      'Custom bowl diameter, depth and height',
    ],
    applications: ['Central kitchens', 'Large catering companies', 'Industrial canteens', 'Banquet halls'],
    warranty: WARRANTY_STD,
    powerKw: 15,
    keywords: ['15 kw induction wok', 'industrial induction wok', 'heavy duty induction cooker'],
  },

  /* ------------------------------------------------------------------ GRIDDLE */
  {
    slug: 'induction-griddle-flat-top-10-kw',
    name: 'Induction Griddle / Flat Top 10 kW on Wheels',
    model: 'RT-GR-100',
    category: 'griddle',
    tagline: 'Mobile flat-top induction griddle with caster wheels and brakes.',
    shortDescription:
      'A 10 kW induction griddle with a wide flat cooking plate, splash back, digital temperature display and heavy-duty caster wheels with brakes. Move it where you need it, lock it, and cook.',
    description: [
      'The Rathin RT-GR-100 is a powerful flat-top induction griddle built for dosa, parotta, tikki, sandwiches, burgers, pancakes and live counters. Induction heating warms the plate evenly with quick recovery when cold food is placed on it.',
      'The cabinet stands on heavy-duty caster wheels, two with locking brakes, so the whole unit can be wheeled out for cleaning or relocated between stations and locked firmly in place while cooking.',
      'A stainless steel splash back protects the wall, the front panel carries the temperature display, controls and a clearly marked safety label, and the cabinet below houses the ventilated power electronics.',
    ],
    image: img('induction-griddle.webp', 'Rathin 10 kW induction griddle flat top on wheels with caster brakes and digital display'),
    gallery: [
      img('induction-griddle.webp', 'Rathin induction griddle flat top on caster wheels'),
    ],
    chips: ['10 kW', 'On wheels', 'Flat top'],
    highlights: [
      { icon: 'grid', label: 'Large flat cooking plate' },
      { icon: 'truck', label: 'Wheels with caster brakes' },
      { icon: 'thermometer', label: 'Digital temperature control' },
      { icon: 'shield', label: '1 year warranty' },
    ],
    specs: [
      { label: 'Model', value: 'RT-GR-100' },
      { label: 'Power', value: '10 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body and splash back (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '1200 x 700 x 900 mm (indicative)' },
      { label: 'Capacity', value: 'Cooking plate approx. 1000 x 550 mm' },
      { label: 'Control type', value: 'Digital temperature control with handle selector' },
      { label: 'Display', value: 'Digital temperature display' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Even induction heating across the whole flat plate',
      'Four caster wheels, front pair with locking brakes',
      'Digital temperature display with set-point control',
      'Stainless steel back splash and drip-friendly edges',
      'Ventilated lower cabinet for the power electronics',
    ],
    applications: ['Dosa, uttapam and parotta stations', 'Burger, sandwich and tikki counters', 'Breakfast lines in hotels', 'Food courts and live kitchens'],
    warranty: WARRANTY_STD,
    powerKw: 10,
    featured: true,
    keywords: ['induction griddle', 'induction flat top', 'commercial induction griddle on wheels'],
  },

  /* --------------------------------------------------------------- BRATT PAN */
  {
    slug: 'tilting-bratt-pan-induction-100-litre',
    name: 'Induction Tilting Bratt Pan / Skillet 100 Litre',
    model: 'RT-BP-100',
    category: 'bratt-pan',
    tagline: 'Tilting induction skillet with lid, tap and hand-wheel tilt.',
    shortDescription:
      'A large-capacity induction tilting bratt pan with a lid, swan-neck water tap, hand-wheel tilting mechanism and an LED control display. Fry, braise, saute and boil in bulk, then tilt to empty cleanly.',
    description: [
      'The Rathin RT-BP-100 combines the work of a frying pan, a braising pot and a boiling pan in one stainless steel machine. A thick pan base is heated evenly by induction, so you can sear, saute, shallow-fry, simmer and steam in large batches.',
      'A smooth hand-wheel tilts the pan through a worm-gear mechanism so heavy food can be emptied without lifting. The counter-balanced lid opens smoothly and a swan-neck tap on the control tower makes filling and cleaning easy.',
      'The control tower includes the LED display and a pull-out service drawer. The reinforced stainless steel frame stands on adjustable feet for a stable working position.',
    ],
    image: img('tilting-bratt-pan.webp', 'Rathin 100 litre induction tilting bratt pan skillet with lid, tap and hand wheel'),
    gallery: [
      img('tilting-bratt-pan.webp', 'Rathin induction tilting bratt pan in stainless steel'),
    ],
    chips: ['100 L', 'Tilting', 'With lid & tap'],
    highlights: [
      { icon: 'layers', label: 'Fry, braise and boil' },
      { icon: 'cogs', label: 'Hand-wheel tilt' },
      { icon: 'leaf', label: 'Energy efficient induction' },
      { icon: 'shield', label: '1 year warranty' },
    ],
    specs: [
      { label: 'Model', value: 'RT-BP-100' },
      { label: 'Power', value: '12 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 pan and body (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '1400 x 900 x 900 mm (indicative)' },
      { label: 'Capacity', value: '100 litres (other sizes on request)' },
      { label: 'Control type', value: 'Digital touch controls with temperature set-point' },
      { label: 'Display', value: 'LED display' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Thick, evenly heated stainless steel pan base',
      'Hand-wheel tilting mechanism for safe, easy emptying',
      'Counter-balanced lid with handle',
      'Swan-neck water tap integrated on the control tower',
      'LED display with temperature and power indication',
    ],
    applications: ['Large hotel and banquet kitchens', 'Central kitchens and caterers', 'Hospitals and institutional kitchens', 'Industrial canteens'],
    warranty: WARRANTY_STD,
    powerKw: 12,
    featured: true,
    keywords: ['tilting bratt pan', 'induction tilting skillet', 'commercial bratt pan India'],
  },

  /* ----------------------------------------------------------------- KETTLE */
  {
    slug: 'tilting-boiling-kettle-induction-150-litre',
    name: 'Induction Tilting Boiling Kettle 150 Litre',
    model: 'RT-BK-150',
    category: 'kettle',
    tagline: 'Jacketed tilting kettle with outlet valve, LED display and energy counter.',
    shortDescription:
      'A 150 litre induction tilting boiling kettle with hand-wheel tilt, tri-clover style outlet valve, LED display and an energy counter. Built for soups, dal, rice, sweets, milk and bulk gravies.',
    description: [
      'The Rathin RT-BK-150 is a stainless steel tilting kettle designed for bulk boiling and cooking. Induction heating warms the vessel quickly and evenly, avoiding the scorching and hot spots that come with direct flame.',
      'An outlet valve at the base lets you draw off liquids directly, while the hand-wheel on the right-hand pedestal tilts the kettle for complete emptying and thorough cleaning. A counter-balanced lid keeps heat and steam contained.',
      'The control pedestal on the left carries the LED display with temperature and power indication and a mechanical energy counter so you can track consumption. The whole assembly stands on a sturdy square-section stainless steel frame with adjustable feet.',
    ],
    image: img('tilting-boiling-kettle.webp', 'Rathin 150 litre induction tilting boiling kettle with hand wheel, outlet valve and LED display'),
    gallery: [
      img('tilting-boiling-kettle.webp', 'Rathin induction tilting boiling kettle in stainless steel'),
      img('kettle-display-closeup.webp', 'LED display and energy counter of a Rathin induction boiling kettle'),
    ],
    chips: ['150 L', 'Tilting', 'LED display'],
    highlights: [
      { icon: 'thermometer', label: 'Precise temperature control' },
      { icon: 'gauge', label: 'Energy counter' },
      { icon: 'cogs', label: 'Hand-wheel tilting' },
      { icon: 'shield', label: '1 year warranty' },
    ],
    specs: [
      { label: 'Model', value: 'RT-BK-150' },
      { label: 'Power', value: '15 kW' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 vessel and frame (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '1500 x 900 x 1100 mm (indicative)' },
      { label: 'Capacity', value: '150 litres (100 to 500 litres on request)' },
      { label: 'Control type', value: 'Digital controller with hand-wheel tilt' },
      { label: 'Display', value: 'LED display with energy counter' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Even induction heating of the whole vessel',
      'Hand-wheel tilt for complete, effortless emptying',
      'Outlet valve for direct draw-off',
      'LED display for temperature and power plus an energy counter',
      'Counter-balanced lid and rugged stainless steel frame',
    ],
    applications: ['Hostel, school and institutional kitchens', 'Hospitals', 'Sweet and dairy preparation', 'Catering companies and central kitchens'],
    warranty: WARRANTY_STD,
    powerKw: 15,
    featured: true,
    keywords: ['tilting boiling kettle', 'induction kettle', 'jacketed boiling kettle India'],
  },

  /* ------------------------------------------------------------------ RANGES */
  {
    slug: 'two-burner-induction-range-10-kw',
    name: 'Two-Burner Induction Range 10 kW (2 x 5 kW)',
    model: 'RT-MB-100',
    category: 'range',
    tagline: 'Twin-zone induction range with independent controls.',
    shortDescription:
      'A two-zone floor-standing induction range delivering 10 kW in total, with a separate power control for each burner. Cook two dishes at once with no cross-heat and no open flame.',
    description: [
      'The RT-MB-100 gives a busy line two independent 5 kW induction zones in one stainless steel cabinet. Each burner has its own control and protection so you can run a rapid boil on one side and a slow simmer on the other.',
      'Burner layout, number of zones and hob height are made to suit your kitchen. A 3.5 kW and 5 kW single-zone version is also available, along with three- and four-burner ranges up to 15 kW.',
    ],
    image: img('cooktop-floor-standing.webp', 'Rathin multi-burner induction range with stainless steel cabinet and knob controls'),
    gallery: [
      img('cooktop-floor-standing.webp', 'Rathin induction range units in stainless steel'),
      img('cooktop-display-closeup.webp', 'Control display of a Rathin induction range'),
    ],
    chips: ['10 kW', '2 burners', 'SS 304'],
    highlights: [
      { icon: 'layers', label: 'Two independent zones' },
      { icon: 'bolt', label: '10 kW total' },
      { icon: 'leaf', label: 'Energy efficient' },
      { icon: 'shield', label: '1 year warranty' },
    ],
    specs: [
      { label: 'Model', value: 'RT-MB-100' },
      { label: 'Power', value: '10 kW (2 x 5 kW)' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '1200 x 700 x 850 mm (indicative)' },
      { label: 'Capacity', value: 'Two vessels up to 400 mm base diameter' },
      { label: 'Control type', value: 'Independent rotary knobs' },
      { label: 'Display', value: 'Digital LED display per burner' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Two independent heating zones with separate controls',
      'Rapid boil and low simmer side by side',
      'Stainless steel cabinet with adjustable feet',
      'Variants available from 3.5 kW to 15 kW',
    ],
    applications: ['Restaurant lines', 'Hotel and banquet kitchens', 'Canteens and hostel messes', 'Cloud kitchens'],
    warranty: WARRANTY_STD,
    powerKw: 10,
    keywords: ['multi burner induction range', '10 kw induction cooker', 'commercial induction range'],
  },
  {
    slug: 'high-power-induction-range-15-kw',
    name: 'High-Power Induction Range 15 kW',
    model: 'RT-HP-150',
    category: 'range',
    tagline: 'Three-zone high-power range for canteens and industrial kitchens.',
    shortDescription:
      'A high-power three-zone induction range totalling 15 kW for industrial canteens, central kitchens and large restaurants, with robust stainless steel construction and forced cooling.',
    description: [
      'The RT-HP-150 puts 15 kW of controllable induction power on a single stainless steel range. With three independent zones it keeps a high-volume line moving without the heat, smoke and flame of gas.',
      'It is built around Rathin\'s heavy-duty power electronics, with extended cooling, a reinforced cabinet and service-friendly access. Configuration, hob height and burner sizes can be customised.',
    ],
    image: img('cooktop-floor-standing.webp', 'Rathin 15 kW high-power commercial induction range for industrial kitchens'),
    gallery: [
      img('cooktop-floor-standing.webp', 'Rathin high-power induction range'),
      img('cooktop-compact-pair.webp', 'Rathin induction cooktops installed in a commercial kitchen'),
    ],
    chips: ['15 kW', '3 burners', 'Heavy duty'],
    highlights: [
      { icon: 'bolt', label: '15 kW high power' },
      { icon: 'industry', label: 'Industrial duty' },
      { icon: 'cogs', label: 'Easy to service' },
      { icon: 'shield', label: '1 year warranty' },
    ],
    specs: [
      { label: 'Model', value: 'RT-HP-150' },
      { label: 'Power', value: '15 kW (3 x 5 kW)' },
      { label: 'Voltage', value: 'Three phase, 415 V AC, 50 Hz' },
      { label: 'Material', value: 'SS 304 body (SS 202 available on request)' },
      { label: 'Dimensions (W x D x H)', value: '1800 x 750 x 850 mm (indicative)' },
      { label: 'Capacity', value: 'Three vessels up to 450 mm base diameter' },
      { label: 'Control type', value: 'Independent rotary knobs' },
      { label: 'Display', value: 'Digital LED display per zone' },
      { label: 'Warranty', value: '1 year' },
    ],
    features: [
      'Three independent 5 kW induction zones',
      'Extended cooling for continuous heavy-duty service',
      'Reinforced stainless steel cabinet',
      'Fully customisable layout and burner sizes',
    ],
    applications: ['Industrial canteens', 'Central kitchens', 'Large catering units', 'Institutional kitchens'],
    warranty: WARRANTY_STD,
    powerKw: 15,
    keywords: ['15 kw induction range', 'high power induction cooker', 'industrial induction cooktop'],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const relatedProducts = (product: Product, limit = 6) => {
  const same = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...same, ...others].slice(0, limit);
};
