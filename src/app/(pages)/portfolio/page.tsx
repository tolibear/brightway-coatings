import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Square } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | Brightway Coatings Jacksonville FL',
  description: 'See stunning before and after photos of garage floors, pool decks, patios, and commercial concrete coatings by Brightway Coatings in Jacksonville, FL.',
  keywords: ['concrete coating portfolio Jacksonville', 'garage floor before after', 'pool deck coatings gallery', 'patio coating photos', 'Brightway Coatings projects'],
};

// Sample project data - In a real app, this would come from a CMS or database
const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Garage Transformation',
    location: 'Ponte Vedra Beach, FL',
    date: '2024',
    category: 'Garage',
    size: '650 sq ft',
    description: 'Complete garage makeover with decorative flake system in charcoal and silver blend.',
    beforeImage: '/portfolio/garage-before-1.jpg',
    afterImage: '/portfolio/garage-after-1.jpg',
    features: ['Oil Resistant', '1-Day Install', 'Custom Flakes', 'Lifetime Warranty']
  },
  {
    id: 2,
    title: 'Luxury Pool Deck Coating',
    location: 'Jacksonville, FL',
    date: '2024',
    category: 'Pool Deck',
    size: '1,200 sq ft',
    description: 'Slip-resistant polyaspartic coating in coastal blue with texture additives for pool safety.',
    beforeImage: '/portfolio/pool-before-1.jpg',
    afterImage: '/portfolio/pool-after-1.jpg',
    features: ['Slip Resistant', 'UV Stable', 'Cool Surface', 'Chemical Resistant']
  },
  {
    id: 3,
    title: 'Elegant Patio Makeover',
    location: 'St. Augustine, FL',
    date: '2024',
    category: 'Patio',
    size: '800 sq ft',
    description: 'Stunning outdoor living space transformation with warm earth tone decorative system.',
    beforeImage: '/portfolio/patio-before-1.jpg',
    afterImage: '/portfolio/patio-after-1.jpg',
    features: ['Weather Resistant', 'Easy Clean', 'Decorative Finish', 'Fast Cure']
  },
  {
    id: 4,
    title: 'Commercial Warehouse Floor',
    location: 'Orange Park, FL',
    date: '2023',
    category: 'Commercial',
    size: '5,000 sq ft',
    description: 'Heavy-duty industrial flooring system designed for forklift traffic and chemical exposure.',
    beforeImage: '/portfolio/commercial-before-1.jpg',
    afterImage: '/portfolio/commercial-after-1.jpg',
    features: ['Heavy Duty', 'Chemical Proof', 'High Traffic', 'Low Maintenance']
  },
  {
    id: 5,
    title: 'Driveway Extension Project',
    location: 'Fleming Island, FL',
    date: '2024',
    category: 'Residential',
    size: '400 sq ft',
    description: 'Seamless driveway extension with matching color and texture to existing concrete.',
    beforeImage: '/portfolio/driveway-before-1.jpg',
    afterImage: '/portfolio/driveway-after-1.jpg',
    features: ['Color Match', 'Seamless Blend', 'Weather Proof', 'Enhanced Curb Appeal']
  },
  {
    id: 6,
    title: 'Multi-Car Garage System',
    location: 'Nocatee, FL',
    date: '2024',
    category: 'Garage',
    size: '950 sq ft',
    description: 'Three-car garage with premium granite flake blend and high-gloss clear coat finish.',
    beforeImage: '/portfolio/garage-before-2.jpg',
    afterImage: '/portfolio/garage-after-2.jpg',
    features: ['Granite Flakes', 'High Gloss', 'Stain Proof', 'Mirror Finish']
  },
  {
    id: 7,
    title: 'Resort-Style Pool Area',
    location: 'Mandarin, FL',
    date: '2023',
    category: 'Pool Deck',
    size: '1,800 sq ft',
    description: 'Complete pool deck and patio combination with tropical color scheme and texture.',
    beforeImage: '/portfolio/pool-before-2.jpg',
    afterImage: '/portfolio/pool-after-2.jpg',
    features: ['Tropical Colors', 'Large Area', 'Texture Finish', 'Coordinate Design']
  },
  {
    id: 8,
    title: 'Outdoor Entertainment Space',
    location: 'St. Johns, FL',
    date: '2024',
    category: 'Patio',
    size: '600 sq ft',
    description: 'Perfect for entertaining with custom decorative pattern and integrated seating areas.',
    beforeImage: '/portfolio/patio-before-2.jpg',
    afterImage: '/portfolio/patio-after-2.jpg',
    features: ['Custom Pattern', 'Entertainment Ready', 'Integrated Design', 'Low Maintenance']
  }
];

const categories = ['All', 'Garage', 'Pool Deck', 'Patio', 'Commercial', 'Residential'];

export default function PortfolioPage() {
  return (
    <>
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Our Work Speaks for Itself"
        subtitle="Browse our portfolio of completed projects featuring garage floors, pool decks, patios, and commercial installations. See the Brightway difference in every transformation."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-671-2686"
        
      />

      {/* Portfolio Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Over 2,000 Successful Transformations
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Each project represents a family who trusted us with their home improvement investment. 
              From simple garage upgrades to complex commercial installations, we bring the same 
              attention to detail and commitment to excellence to every job.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-gray-600">Counties Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Project Gallery
            </h2>

            {/* Category Filter - For future implementation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-blue-50">
                  {category}
                </Badge>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {/* Placeholder for before/after images */}
                    <div className="aspect-video bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-sm font-medium">{project.category} Project</div>
                        <div className="text-xs">Before & After Photos</div>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-blue-600">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Square className="w-4 h-4" />
                        {project.size}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button - For future implementation */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Serving Northeast Florida Communities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our project portfolio spans across Northeast Florida, from coastal communities 
              to suburban neighborhoods. Wherever you are, we bring the same quality and 
              professionalism to your concrete transformation.
            </p>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {businessInfo.serviceAreas.map((area, index) => (
                  <div key={index} className="font-medium text-gray-700 py-2">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every project in our portfolio started with a free consultation and quote. 
              We'll assess your space, discuss your vision, and provide a detailed proposal 
              for your concrete transformation.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm">We visit your property to assess the space and understand your vision.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Proposal</h3>
                <p className="text-gray-600 text-sm">Detailed quote with material options, timeline, and warranty information.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Professional Install</h3>
                <p className="text-gray-600 text-sm">Expert installation with minimal disruption to your daily routine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <CTABand
        title="Your Dream Floor is Just a Click Away"
        description="Join the thousands of satisfied customers in our portfolio with a custom concrete transformation"
        primaryCTA={ctaText.primary}
        
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
