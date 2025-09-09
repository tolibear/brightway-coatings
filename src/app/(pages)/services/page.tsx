import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServiceCard from '@/components/sections/ServiceCard';
import CTABand from '@/components/sections/CTABand';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText } from '@/data/business';

export const metadata: Metadata = {
  title: 'Floor Coating Services | Jacksonville FL | Brightway',
  description: 'Complete range of polyaspartic floor coating services in Jacksonville FL. Garage floors, patios, pool decks, residential & commercial. Licensed, insured, 1-day install.',
  keywords: ['floor coating services Jacksonville', 'polyaspartic coatings', 'garage floor coating', 'patio coating', 'pool deck coating', 'commercial floor coating'],
};

const services = [
  {
    title: 'Garage Floor Coatings',
    description: 'Transform your garage into a showroom-quality space with our premium polyaspartic coatings. Resistant to oil stains, chemicals, and hot tire pickup.',
    features: [
      '1-Day installation for most garages',
      'Oil and chemical resistant surface',
      'No hot tire pickup or peeling',
      'Custom decorative flake options',
      'Lifetime warranty protection'
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
    description: 'Complete home flooring solutions from basements to sunrooms. Durable, beautiful surfaces that add value to your property.',
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
    description: 'Heavy-duty solutions for warehouses, retail spaces, and industrial facilities. Built to withstand high traffic and demanding conditions.',
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
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Professional Floor Coating Services"
        subtitle="From garage floors to commercial spaces, we deliver premium coating systems with lifetime durability. Licensed, insured, and family-owned since 1990."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-671-2686"
        
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Coating Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every surface gets the same meticulous attention to detail. We use only premium polyaspartic systems 
              that outperform traditional epoxy in durability, speed, and appearance.
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

      <CTABand
        title="Ready to Transform Your Floors?"
        description="Get your free quote today and discover why Jacksonville trusts Brightway Coatings"
        primaryCTA={ctaText.primary}
        
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
