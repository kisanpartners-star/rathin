/**
 * SERVICES  (edit titles, text and bullets here; images are in /public/assets/products or /public/assets)
 */
import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'new-machine-sales',
    title: 'New Machine Sales',
    icon: 'box',
    short: 'Factory-direct induction wok cookers, multi-burner cookers, stock pots, griddles, steamers, fryers and table-top cookers with 1 year warranty.',
    details: [
      'We manufacture commercial induction kitchen equipment in stainless steel and sell it directly to restaurants, hotels, canteens, hostels, caterers, cloud kitchens and institutions. Buying from the manufacturer means clear pricing, honest advice and one team accountable from order to after-sales.',
      'Tell us what you cook, how many covers you serve and what power supply you have. We recommend the right model and capacity, quote on request and deliver with a 1 year warranty.',
    ],
    bullets: ['Factory-direct pricing on request', 'Right-sizing advice for your menu and volume', '1 year warranty on every new machine', 'Pan-India dispatch and delivery'],
    image: { src: '/assets/images/catalog/multi-4cab.webp', alt: 'Rathin 4 burner commercial induction cooker with cabinet', width: 1200, height: 900 },
    formType: 'New Machine Enquiry',
  },
  {
    slug: 'repair-and-maintenance',
    title: 'Repair and Maintenance',
    icon: 'wrench',
    short: 'Fast diagnosis and repair of Rathin and other brands of commercial induction equipment.',
    details: [
      'When a machine stops in the middle of service, every hour costs money. Our technicians diagnose faults on induction cookers, woks, griddles, fryers and kettles - including machines not made by Rathin - and repair them using quality components.',
      'Raise a service request in under a minute. We call you back, understand the fault and schedule a visit or advise on a quick fix over the phone.',
    ],
    bullets: ['Repairs for Rathin and other induction brands', 'Phone and WhatsApp troubleshooting', 'Genuine-quality spares and tested repairs', 'Clear estimate before work begins'],
    image: { src: '/assets/images/guides/guide-control-panel.webp', alt: 'Induction control panel with display, ON/OFF key and control knob', width: 1200, height: 900 },
    formType: 'Repair',
  },
  {
    slug: 'annual-maintenance-contract',
    title: 'Annual Maintenance Contract (AMC)',
    icon: 'clipboard',
    short: 'Scheduled preventive visits, priority response and discounted spares for worry-free kitchens.',
    details: [
      'An AMC keeps your induction machines running at their best and catches small problems before they become breakdowns. Our technicians visit on a schedule to clean, test and calibrate your equipment and replace worn consumables.',
      'Choose the plan that suits the size of your kitchen, from basic preventive visits to comprehensive cover with spares included.',
    ],
    bullets: ['Scheduled preventive maintenance visits', 'Priority response for contract customers', 'Discounted or included spare parts by plan', 'Service reports after every visit'],
    image: { src: '/assets/images/catalog/multi-6cab.webp', alt: 'Rathin 6 burner induction cooker covered under an AMC plan', width: 1200, height: 900 },
    formType: 'Maintenance / AMC',
  },
  {
    slug: 'spare-parts-pcb-coil-replacement',
    title: 'Spare Parts and PCB / Coil Replacement',
    icon: 'chip',
    short: 'Induction coils, PCBs, IGBTs, fans, glass plates, sensors and controls ready to ship.',
    details: [
      'Most induction faults come down to a few parts: the control PCB, the heating coil, the IGBT power devices, the cooling fan or the glass plate. We stock these for Rathin machines and for common commercial induction models, and fit them quickly.',
      'Send us a photo of the machine and its label and we will confirm the correct part. Parts can be shipped across India or fitted on site by our technician.',
    ],
    bullets: ['Coils, PCBs, IGBTs, fans, sensors, glass plates and knobs', 'Part identification from photos', 'Fitted on site or shipped to you', 'Tested before dispatch'],
    image: { src: '/assets/images/catalog/bt3528.webp', alt: 'Induction cooker control board and glass plate, spare parts available', width: 1200, height: 900 },
    formType: 'Spare Parts',
  },
  {
    slug: 'installation-and-commissioning',
    title: 'Installation and Commissioning',
    icon: 'cogs',
    short: 'Safe installation, electrical checks and trial runs by trained Rathin technicians.',
    details: [
      'A well-installed machine runs better and lasts longer. We advise on power load, cabling, earthing, ventilation and positioning before delivery, then install, test and commission the equipment so your kitchen can start cooking confidently.',
      'Installation also starts your warranty period and gives our team the chance to demonstrate correct use to your staff.',
    ],
    bullets: ['Site and electrical readiness guidance', 'Installation, levelling and testing', 'Commissioning with a live trial run', 'Warranty registration on completion'],
    image: { src: '/assets/images/catalog/photo-3-burner-table.webp', alt: 'Three burner stainless steel induction cooking table ready for commissioning', width: 1200, height: 900 },
    formType: 'Installation',
  },
  {
    slug: 'operator-training',
    title: 'Operator Training',
    icon: 'graduation',
    short: 'Hands-on training so your cooks and helpers use and clean induction machines the right way.',
    details: [
      'Induction is different from gas, and a short training session makes a big difference to energy use, cooking quality and machine life. We train your kitchen team on correct vessels, power settings, cleaning and daily care.',
      'We also explain basic error indications and what to do before calling service, so small issues never stop your line.',
    ],
    bullets: ['On-site demonstration for kitchen staff', 'Correct vessel and power-setting guidance', 'Daily cleaning and care routine', 'Quick troubleshooting guide for operators'],
    image: { src: '/assets/images/catalog/wok-small-hero.webp', alt: 'Small wok induction cooker used for operator training', width: 1200, height: 900 },
    formType: 'Installation',
  },
  {
    slug: 'on-site-service-visits',
    title: 'On-site Service Visits',
    icon: 'truck',
    short: 'Technicians at your kitchen for inspections, repairs and breakdowns across our service network.',
    details: [
      'Some jobs need a technician on location. Our on-site service team visits your kitchen with tools and common spares to inspect, diagnose and repair your machines so you do not have to move heavy equipment.',
      'Tell us your city and the machine model when you raise the request, and we will confirm the earliest available visit.',
    ],
    bullets: ['Technician visits with tools and common spares', 'Inspection and written findings', 'Scheduled or emergency visits', 'Coverage across our pan-India service network'],
    image: { src: '/assets/images/catalog/stock-hero.webp', alt: 'Heavy duty stock pot induction cooker serviced on site', width: 1200, height: 900 },
    formType: 'Repair',
  },
  {
    slug: 'custom-manufacturing',
    title: 'Custom Manufacturing',
    icon: 'ruler',
    short: 'Made-to-order stainless steel induction equipment in your size, power and layout.',
    details: [
      'Not every kitchen fits a catalogue. Because we manufacture in-house, we can build induction equipment to your dimensions, power rating, vessel size and control layout - from a special wok bowl to a complete cooking line.',
      'Share your requirement or a sketch and our engineers will propose a design and quote.',
    ],
    bullets: ['Custom sizes, heights and power ratings', 'Special wok bowls, stock pots and kettle capacities', 'Complete kitchen line planning', 'Stainless steel fabrication in-house'],
    image: { src: '/assets/images/catalog/wok-bigdbl-1.webp', alt: 'Custom size double burner big wok induction cooker', width: 1200, height: 900 },
    formType: 'New Machine Enquiry',
  },
];

export const processSteps = [
  { icon: 'phone', title: 'Raise a request', text: 'Call, WhatsApp or fill the short service form with your machine details.' },
  { icon: 'headset', title: 'We respond', text: 'Our team contacts you, understands the problem and advises the fastest route.' },
  { icon: 'tools', title: 'Service or repair', text: 'A technician visits or guides you, then repairs using tested parts.' },
  { icon: 'checkCircle', title: 'Verified and reported', text: 'The machine is tested with you and the work is recorded for your history.' },
] as const;

export type AmcPlanId = 'basic' | 'standard' | 'premium';

/** AMC plan comparison. Edit the labels and ticks to match your actual plans. */
export const amcPlans: { id: AmcPlanId; name: string; tagline: string; highlight?: boolean }[] = [
  { id: 'basic', name: 'Basic', tagline: 'Preventive care' },
  { id: 'standard', name: 'Standard', tagline: 'Most popular', highlight: true },
  { id: 'premium', name: 'Premium', tagline: 'Complete cover' },
];

export const amcRows: { label: string; basic: boolean | string; standard: boolean | string; premium: boolean | string }[] = [
  { label: 'Preventive maintenance visits per year', basic: '2', standard: '4', premium: '6' },
  { label: 'Cleaning, testing and calibration', basic: true, standard: true, premium: true },
  { label: 'Breakdown response', basic: 'Standard', standard: 'Priority', premium: 'Priority + escalation' },
  { label: 'Labour charges on repairs', basic: false, standard: true, premium: true },
  { label: 'Spare parts', basic: 'Chargeable', standard: 'Discounted', premium: 'Included (wear parts)' },
  { label: 'Operator refresher training', basic: false, standard: true, premium: true },
  { label: 'Service report after each visit', basic: true, standard: true, premium: true },
];
