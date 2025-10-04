import { BusinessInfo } from '@/types';

export const businessInfo: BusinessInfo = {
  name: 'Brightway Coatings',
  address: '172 Little Bear Run, St Johns, FL 32259',
  phone: '904-540-9693', // Tim's primary number
  secondaryPhone: '904-671-2686', // Paul's number
  email: 'timbrightwaycoatings@gmail.com', // Tim's primary email
  secondaryEmail: 'paulbrightwayepoxy@gmail.com', // Paul's email
  hours: 'Mon-Fri 8 AM - 5 PM, Sat-Sun Closed',
  serviceAreas: [
    'Jacksonville',
    'St. Johns',
    'St. Augustine',
    'Ponte Vedra',
    'Orange Park',
    'Fleming Island',
    'Nocatee',
    'Mandarin',
    'Green Cove Springs',
    'Vilano Beach',
    'Deer Creek',
  ],
};

export const brandPillars = [
  '1-Day Installation for most residential jobs',
  'Premium polyurea & polyaspartic systems (superior to traditional epoxy)',
  'Licensed & insured - License #L24000469209',
  'Father-and-son craftsmanship since 2024',
  '15 year warranty with fair pricing',
];

export const primaryKeywords = [
  'polyaspartic floor coating Jacksonville',
  'garage floor coating Jacksonville',
  'concrete coating Jacksonville',
];

export const ctaText = {
  primary: 'Get a Free Quote',
  secondary: 'Call 904-540-9693',
  trust: 'Family-owned in St. Johns - 5+ years of coatings experience - 30+ years home service expertise - 1-Day Install',
};

// 5 Hero Headline/Subhead Variations for A/B Testing
export const heroVariations = [
  {
    id: 'current',
    title: 'Jacksonville\'s Premium Concrete Transformation',
    subtitle: 'Polyaspartic floor coatings that last a lifetime - installed in just one day',
    description: 'Father-and-son craftsmanship meets modern coating technology. Transform garages, patios, and pool decks with surfaces built to endure Florida\'s toughest conditions.',
  },
  {
    id: 'speed-focused',
    title: 'Beautiful Floors in Just One Day',
    subtitle: 'Jacksonville\'s fastest concrete coating installation with 15 year durability',
    description: 'Why wait weeks for a floor makeover? Our polyaspartic system transforms your garage, patio, or pool deck in a single day. Family-owned craftsmanship you can trust since 2024.',
  },
  {
    id: 'quality-focused', 
    title: 'Concrete Floors That Never Fail',
    subtitle: 'Premium polyaspartic coatings engineered for Florida\'s harsh climate',
    description: 'Forget about epoxy that chips and yellows. Our polyaspartic system delivers unmatched durability against heat, UV rays, and heavy traffic. Built right the first time.',
  },
  {
    id: 'local-trust',
    title: 'Your St. Johns County Floor Experts',
    subtitle: 'Three decades of father-and-son craftsmanship in Jacksonville',
    description: 'Licensed, insured, and local since 2024. We live here, work here, and stand behind every installation with 15 year warranty protection.',
  },
  {
    id: 'transformation',
    title: 'Transform Your Concrete Into Art',
    subtitle: 'Professional-grade coatings that turn ordinary surfaces into stunning floors',
    description: 'Watch cracked, stained concrete become a showroom-quality surface. Custom colors, decorative flakes, and mirror-like finishes that impress guests and increase home value.',
  },
];
