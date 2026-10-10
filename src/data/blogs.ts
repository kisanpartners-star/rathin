/**
 * BLOG POSTS  (add a new object to the array to publish a new article)
 * - `slug` becomes the URL: /blogs/<slug>
 * - `sections` render as headings + paragraphs (+ optional bullet list) and drive the table of contents.
 * - Keep titles under ~60 characters and excerpts around 150 characters for best SEO.
 */
import type { BlogPost } from './types';

const AUTHOR = 'Rathin Technical Team';

export const blogs: BlogPost[] = [
  {
    slug: 'induction-vs-gas-commercial-kitchen',
    title: 'Induction vs Gas in a Commercial Kitchen: An Honest Comparison',
    excerpt:
      'Thinking of replacing LPG burners? We compare commercial induction and gas on efficiency, running cost, safety, heat and cleaning so you can decide with facts.',
    category: 'Buying Guide',
    date: '2026-09-18',
    readMinutes: 6,
    author: AUTHOR,
    image: { src: '/assets/hero-showroom.webp', alt: 'Commercial induction cooktops and griddle compared with gas cooking equipment', width: 1600, height: 900 },
    tags: ['Induction vs gas', 'Commercial kitchen', 'Energy saving'],
    keywords: ['induction vs gas', 'commercial induction cooker', 'induction kitchen equipment supplier India'],
    sections: [
      {
        id: 'how-they-differ',
        heading: 'How induction and gas cook differently',
        paragraphs: [
          'A gas burner heats the air and the flame wraps around the vessel, so a large share of the energy escapes into the kitchen. Induction works through a magnetic field that makes the base of the pan itself generate heat, which means the energy goes into the food rather than the room.',
          'That single difference explains most of the pros and cons below. It is why induction kitchens feel cooler, why vessels respond instantly to a change in power, and why only magnetic cookware works.',
        ],
      },
      {
        id: 'efficiency-and-cost',
        heading: 'Efficiency and running cost',
        paragraphs: [
          'Gas is commonly quoted at around 40 to 50 percent efficiency in practice, while induction is commonly quoted at 80 to 90 percent. Because more of the energy reaches the pot, the same dish usually needs less total energy and finishes sooner.',
          'Your actual saving depends on local LPG and electricity prices, menu and operating hours, so we recommend comparing one month of real LPG consumption against the rated power and daily cooking hours of the induction machines you plan to buy.',
        ],
        bullets: [
          'Check your monthly LPG cylinder spend, including delivery and handling.',
          'Estimate induction usage as rated kW multiplied by realistic hours at that power.',
          'Add the value of faster cooking and a cooler, more comfortable kitchen.',
        ],
      },
      {
        id: 'safety-and-comfort',
        heading: 'Safety, heat and kitchen comfort',
        paragraphs: [
          'With no open flame there is no gas leak risk, no flame-out, and no combustion gases. The glass or steel surface only gets hot from the vessel, and pan-detection switches the heating off when a vessel is removed.',
          'Cooks also notice the difference after a long shift: less radiant heat and lower ambient temperature means a more comfortable and productive kitchen, and exhaust and cooling loads can drop.',
        ],
      },
      {
        id: 'cooking-and-cleaning',
        heading: 'Cooking performance and cleaning',
        paragraphs: [
          'Induction responds almost instantly, so simmering, holding and searing are easy to control. For high-heat stir-fry, concave induction woks bring heat to the curve of the wok. Flat surfaces wipe clean in seconds because spills do not burn on.',
          'The main adjustment is cookware: vessels must be induction compatible, which usually means a magnetic, flat-bottomed base. A simple fridge-magnet test tells you whether a pan will work.',
        ],
      },
      {
        id: 'which-should-you-choose',
        heading: 'Which should you choose?',
        paragraphs: [
          'Many kitchens choose a hybrid approach, shifting boiling, simmering and bulk cooking to induction first and keeping a gas point for special techniques. High-volume tasks such as soup, dal, rice and gravies are where induction kettles, bratt pans and cooktops pay back fastest.',
          'If you would like help estimating your own payback, share your cooking load with the Rathin team and we will suggest the right machines and capacity.',
        ],
      },
    ],
  },
  {
    slug: 'save-energy-commercial-induction-cooking',
    title: '7 Ways to Save Energy with Commercial Induction Cooking',
    excerpt:
      'Induction is already efficient, but small habits make it even cheaper to run. Seven practical tips for restaurants, canteens and hostel kitchens.',
    category: 'Energy Savings',
    date: '2026-09-04',
    readMinutes: 5,
    author: AUTHOR,
    image: { src: '/assets/products/kettle-display-closeup.webp', alt: 'Induction boiling kettle display with energy counter for monitoring power use', width: 1200, height: 900 },
    tags: ['Energy saving', 'Induction cooking', 'Operating cost'],
    keywords: ['energy efficient induction cooker', 'induction energy saving', 'commercial induction cooker'],
    sections: [
      {
        id: 'match-power',
        heading: '1. Match machine power to the job',
        paragraphs: [
          'An oversized machine does not cook faster than the pot allows, and an undersized one runs flat out for hours. Choose a power rating that fits your usual batch size, then use the knob to run only as much power as the recipe needs.',
        ],
      },
      {
        id: 'right-cookware',
        heading: '2. Use the right cookware',
        paragraphs: [
          'Flat, thick, magnetic bases make full contact with the heating zone and transfer energy efficiently. Warped or undersized bases waste power and can trigger protection circuits.',
        ],
        bullets: [
          'Pick a base diameter close to the size of the heating zone.',
          'Avoid dented or warped vessels.',
          'Keep the base clean and dry before placing it on the machine.',
        ],
      },
      {
        id: 'lids-and-batches',
        heading: '3. Cover pots and cook in full batches',
        paragraphs: [
          'A lid keeps heat in and shortens boiling time. Cooking one full batch instead of two half batches also means less repeated heating from cold.',
        ],
      },
      {
        id: 'lower-after-boil',
        heading: '4. Turn the power down once boiling starts',
        paragraphs: [
          'Induction is so responsive that a gentle simmer needs only a fraction of boiling power. Train cooks to drop the setting as soon as a pot reaches temperature.',
        ],
      },
      {
        id: 'switch-off',
        heading: '5. Switch off between batches',
        paragraphs: [
          'Because induction only heats when a vessel is present and reacts instantly, there is no need to leave a machine running idle. Turning off between batches saves energy and reduces wear.',
        ],
      },
      {
        id: 'track-usage',
        heading: '6. Track consumption',
        paragraphs: [
          'Machines such as our tilting boiling kettles include an energy counter. Note the reading at the start and end of each week to understand real consumption and spot unusual changes early.',
        ],
      },
      {
        id: 'maintenance',
        heading: '7. Keep the machine clean and serviced',
        paragraphs: [
          'Clogged air filters and dusty fans force the electronics to work harder. A regular cleaning routine and an annual maintenance contract keep efficiency and reliability high.',
        ],
      },
    ],
  },
  {
    slug: 'commercial-induction-cooktop-buying-guide',
    title: 'Commercial Induction Cooktop Buying Guide: What to Check',
    excerpt:
      'Choosing a commercial induction cooktop in India? Learn how to pick the right power, build, controls, warranty and service support before you buy.',
    category: 'Buying Guide',
    date: '2026-08-21',
    readMinutes: 7,
    author: AUTHOR,
    image: { src: '/assets/products/cooktop-floor-standing.webp', alt: 'Floor-standing commercial induction cooktops in stainless steel', width: 1200, height: 900 },
    tags: ['Buying guide', 'Induction cooktop', 'Commercial kitchen equipment'],
    keywords: ['commercial induction cooktop buying guide', 'induction cooktop manufacturer', 'stainless steel kitchen equipment'],
    sections: [
      {
        id: 'power-rating',
        heading: 'Start with the power rating',
        paragraphs: [
          'Commercial induction machines are commonly offered from 3.5 kW to 15 kW or more. Smaller units suit counters and live stations, while 5 to 8 kW suits restaurant lines and 10 kW and above suits large pots, woks and bulk cooking.',
          'Think about your biggest vessel and your typical batch time, then choose a machine that heats it comfortably without running at the limit all day.',
        ],
      },
      {
        id: 'electrical-supply',
        heading: 'Check your electrical supply',
        paragraphs: [
          'Lower-power machines often run on single-phase supply, while higher power usually needs three-phase. Ask a qualified electrician to confirm the available load, cable size, MCB rating and earthing before you place an order.',
        ],
      },
      {
        id: 'build-and-material',
        heading: 'Look at build quality and stainless steel grade',
        paragraphs: [
          'A good commercial machine has a fully welded stainless steel body, a flat ceramic glass plate, and ventilation that protects the electronics from steam and spills. Ask whether the body is SS 304 or SS 202. SS 304 resists corrosion better and is the usual choice for food areas.',
        ],
        bullets: [
          'Sturdy frame with adjustable feet',
          'Flush, easy-to-clean glass or steel cooking surface',
          'Good airflow and a washable filter',
        ],
      },
      {
        id: 'controls-and-safety',
        heading: 'Controls and safety features',
        paragraphs: [
          'Knobs are quick and familiar for cooks, while digital controls offer precise temperature steps. Look for pan detection, over-temperature protection, over- and under-voltage protection and clear status indication.',
        ],
      },
      {
        id: 'warranty-and-service',
        heading: 'Warranty, spares and service support',
        paragraphs: [
          'The real cost of a machine includes how quickly it is fixed. Ask about warranty length, what it covers, spare-parts availability and whether technicians can reach your city. All new Rathin machines carry a 1 year warranty with after-sales support, plus optional AMC.',
        ],
      },
      {
        id: 'custom-needs',
        heading: 'Do you need a custom size?',
        paragraphs: [
          'If your kitchen layout is unusual, a manufacturer can build to your dimensions. Share your drawing, power needs and vessel sizes and ask for a specification and quote before you decide.',
        ],
      },
    ],
  },
  {
    slug: 'induction-machine-maintenance-checklist',
    title: 'Induction Machine Maintenance Checklist: Daily to Annual',
    excerpt:
      'Simple daily, weekly and yearly care steps that keep commercial induction cooktops, woks and kettles running reliably and extend their working life.',
    category: 'Maintenance Tips',
    date: '2026-08-07',
    readMinutes: 5,
    author: AUTHOR,
    image: { src: '/assets/products/cooktop-display-closeup.webp', alt: 'Cleaning the display panel and glass top of a commercial induction cooktop', width: 1200, height: 900 },
    tags: ['Maintenance', 'AMC', 'Induction repair and service'],
    keywords: ['induction maintenance', 'induction repair and service', 'induction AMC'],
    sections: [
      {
        id: 'daily',
        heading: 'Daily care',
        paragraphs: [
          'Switch the machine off and let it cool, then wipe the cooking surface with a soft damp cloth and mild detergent. Remove spills straight away, and never use abrasive pads on the glass.',
        ],
        bullets: [
          'Wipe the glass or steel top and the control panel after service.',
          'Keep vessel bases clean and dry before placing them on the machine.',
          'Never spray water directly into vents or onto the control panel.',
        ],
      },
      {
        id: 'weekly',
        heading: 'Weekly checks',
        paragraphs: [
          'Clean the air-intake grille and any dust filter so the cooling fan can breathe. Check that the cable, plug and socket are in good condition and that nothing is blocking airflow around the machine.',
        ],
      },
      {
        id: 'monthly',
        heading: 'Monthly checks',
        paragraphs: [
          'Look for loose knobs, cracked glass, damaged cable insulation or discoloured connectors, and listen for unusual fan noise. Report any of these to your service team early rather than waiting for a breakdown.',
        ],
      },
      {
        id: 'annual',
        heading: 'Annual service by a technician',
        paragraphs: [
          'Once a year, a trained technician should open the machine, clean dust from the electronics, inspect the coil, fan, PCB and connections, test protections and calibrate the controls. This is exactly what an Annual Maintenance Contract (AMC) schedules for you.',
        ],
      },
      {
        id: 'dont',
        heading: 'What not to do',
        paragraphs: [
          'Do not open the machine yourself while it is connected to power, do not bypass safety switches, and do not use non-compatible or badly warped cookware. Internal repairs should only be done by qualified technicians.',
        ],
      },
    ],
  },
  {
    slug: 'induction-cooktop-not-heating-troubleshooting',
    title: 'Induction Cooktop Not Heating? 8 Checks Before You Call',
    excerpt:
      'If your commercial induction cooktop will not heat or keeps switching off, run through these eight safe checks first, then raise a service request.',
    category: 'Troubleshooting',
    date: '2026-07-24',
    readMinutes: 6,
    author: AUTHOR,
    image: { src: '/assets/products/cooktop-compact-pair.webp', alt: 'Commercial induction cooktops with status display being checked for faults', width: 1200, height: 900 },
    tags: ['Troubleshooting', 'Induction repair', 'Service request'],
    keywords: ['induction cooktop not heating', 'induction repair and service', 'induction troubleshooting'],
    sections: [
      {
        id: 'safety-first',
        heading: 'Safety first',
        paragraphs: [
          'These checks are all external and safe to do. Never open the machine or touch internal parts while it is connected to power. If you smell burning, see smoke or find damaged cables, switch off at the main supply and call a technician.',
        ],
      },
      {
        id: 'check-power',
        heading: '1 to 3: Power supply',
        paragraphs: [
          'Confirm the machine is plugged in or wired correctly, that the wall switch and MCB are on, and that the display lights up. On three-phase machines a missing phase can stop heating completely, so check that all phases are present.',
        ],
        bullets: ['Is the display on?', 'Has the MCB or fuse tripped?', 'Is the voltage stable and are all phases present?'],
      },
      {
        id: 'check-cookware',
        heading: '4 to 5: Cookware',
        paragraphs: [
          'The most common reason for no heating is unsuitable cookware. Use a magnetic, flat-based vessel of adequate diameter. If a fridge magnet does not stick to the base, the pan will not work on induction. Also make sure the pan is centred on the heating zone.',
        ],
      },
      {
        id: 'check-airflow',
        heading: '6: Ventilation and overheating',
        paragraphs: [
          'Blocked vents, a dirty filter or a hot, enclosed space can make the machine shut down to protect itself. Switch off, let it cool for twenty minutes, clear the air intake and try again.',
        ],
      },
      {
        id: 'check-codes',
        heading: '7: Error indications',
        paragraphs: [
          'Note any code, flashing light or beep pattern on the display. Different patterns indicate no-pan, over-temperature, over-voltage or sensor faults, and giving them to our team speeds up the diagnosis.',
        ],
      },
      {
        id: 'check-reset',
        heading: '8: Power reset',
        paragraphs: [
          'Switch the machine off, disconnect for a minute, reconnect and start again. If the fault returns, raise a service request with the model number, a short description and a photo of the display.',
        ],
      },
    ],
  },
  {
    slug: 'tilting-bratt-pan-boiling-kettle-induction-bulk-cooking',
    title: 'Induction Bratt Pans and Boiling Kettles for Bulk Cooking',
    excerpt:
      'See how induction tilting bratt pans and boiling kettles speed up bulk cooking in hostels, hospitals, caterers and central kitchens, with less heat and effort.',
    category: 'Induction Cooking',
    date: '2026-07-10',
    readMinutes: 6,
    author: AUTHOR,
    image: { src: '/assets/products/tilting-bratt-pan.webp', alt: 'Induction tilting bratt pan with lid and tap used for bulk cooking', width: 1200, height: 900 },
    tags: ['Bratt pan', 'Boiling kettle', 'Bulk cooking'],
    keywords: ['tilting bratt pan', 'tilting boiling kettle', 'induction kettle', 'commercial kitchen equipment'],
    sections: [
      {
        id: 'bulk-cooking-challenges',
        heading: 'The challenge of bulk cooking',
        paragraphs: [
          'Cooking for hundreds of people means heavy pots, long heat-up times, hot kitchens and labour-intensive emptying and cleaning. Equipment that spreads heat evenly and tips for easy emptying changes the pace of the entire kitchen.',
        ],
      },
      {
        id: 'bratt-pan',
        heading: 'Tilting bratt pans: one machine, many methods',
        paragraphs: [
          'A tilting bratt pan, also called a tilting skillet, fries, braises, sautes and simmers on a wide flat base. Induction heats that base evenly with fast recovery, and a hand-wheel tilts the pan so you can pour out the contents or drain oil safely.',
        ],
        bullets: ['Shallow frying of vegetables and cutlets', 'Braising and gravies in large batches', 'Sauteing and tempering', 'Boiling and reducing'],
      },
      {
        id: 'boiling-kettle',
        heading: 'Tilting boiling kettles: soups, dal, rice and sweets',
        paragraphs: [
          'A jacketed or induction-heated boiling kettle brings large volumes of liquid up to temperature without hot spots. An outlet valve and a hand-wheel tilt make transferring food simple, while an LED display and energy counter help you monitor what each batch costs.',
        ],
      },
      {
        id: 'who-benefits',
        heading: 'Who benefits most',
        paragraphs: [
          'Hostel and school messes, hospitals, industrial canteens, caterers, sweet and dairy preparation and central kitchens see the biggest gains because they cook the same recipes in large quantities every day.',
        ],
      },
      {
        id: 'sizing',
        heading: 'Sizing and choosing',
        paragraphs: [
          'Choose capacity from your peak batch size and available power supply. Rathin builds tilting bratt pans and kettles in standard sizes and to order. Contact us with your menu and number of covers and we will recommend a model.',
        ],
      },
    ],
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);

export const relatedBlogs = (post: BlogPost, limit = 3) => {
  const same = blogs.filter((b) => b.slug !== post.slug && b.category === post.category);
  const others = blogs.filter((b) => b.slug !== post.slug && b.category !== post.category);
  return [...same, ...others].slice(0, limit);
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
