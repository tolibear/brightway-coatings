import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServiceCard from '@/components/sections/ServiceCard';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText } from '@/data/business';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Floor Coating Services | Jacksonville FL | Brightway',
  description: 'Complete range of polyaspartic floor coating services in Jacksonville FL. Garage floors, patios, pool decks, residential & commercial. Licensed, insured, 1-day install.',
  keywords: ['floor coating services Jacksonville', 'polyaspartic coatings', 'garage floor coating', 'patio coating', 'pool deck coating', 'commercial floor coating'],
};

const services = [
  {
    title: 'Garage Floor Coatings',
    description: 'Transform your garage into a showroom with a slip-resistant coating. Handles hot tires, oil spills, and heavy traffic while adding significant home value with stunning visual appeal.',
    features: [
      '1-Day installation for most garages',
      'Oil and chemical resistant surface',
      'No hot tire pickup or peeling',
      'Custom decorative flake options',
      '15 year warranty protection'
    ],
    slug: 'garage-floor-coatings',
  },
  {
    title: 'Patio Coatings',
    description: 'Create stunning outdoor living spaces with UV-resistant coatings that handle Florida sun and weather. Perfect for entertaining and relaxation.',
    features: [
      'UV stable - won\'t yellow or fade',
      'Slip-resistant texture options',
      'Weather resistant in all conditions',
      'Easy to clean and maintain',
      'Beautiful decorative finishes'
    ],
    slug: 'patio-coatings',
  },
  {
    title: 'Pool Deck Coatings',
    description: 'Safe, slip-resistant surfaces around your pool area. Our coatings handle constant moisture while providing lasting beauty and comfort.',
    features: [
      'Slip-resistant safety texture',
      'Chlorine and chemical resistant',
      'Cool-to-the-touch surface',
      'Fade and UV resistant',
      'Quick 1-day installation'
    ],
    slug: 'pool-deck-coatings',
  },
  {
    title: 'Residential Floor Coatings',
    description: 'Transform your home\'s concrete surfaces - whether in basements, workshops, or living areas - into durable, stylish spaces built to last. Our industrial-grade coatings lock out humidity and create sleek, easy to clean finishes.',
    features: [
      'Interior and exterior applications',
      'Moisture barrier protection',
      'Easy maintenance and cleaning',
      'Increases property value',
      'Custom color and design options'
    ],
    slug: 'residential-floor-coatings',
  },
  {
    title: 'Commercial Floor Coatings',
    description: 'Industrial-strength solutions for warehouses, showrooms, and retail spaces. Chemical-resistant formulations withstand heavy equipment, constant foot traffic, and harsh cleaning protocols while maintaining professional appearance.',
    features: [
      'Heavy traffic durability',
      'Chemical and abrasion resistant',
      'Low maintenance requirements',
      'Fast installation to minimize downtime',
      'Professional appearance'
    ],
    slug: 'commercial-floor-coatings',
  },
];

export default function ServicesPage() {
  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your Concrete?"
        subtitle="Join satisfied Northeast Florida homeowners and businesses who chose Brightway Coatings for expert transformations with 15 year durability, one-day installation, and unmatched craftsmanship."
      />
      
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Professional Floor Coating Services"
        subtitle="From garage floors to commercial spaces, we deliver premium coating systems with 15 year durability. Licensed, insured, and family-owned since 2024."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-540-9693"
        
      />

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Coating Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every surface gets the same meticulous attention to detail. We use only premium polyurea and polyaspartic systems 
              that surpass expectations in durability, speed, and appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
