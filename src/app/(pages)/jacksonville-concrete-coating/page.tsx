import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import ValuePropositionCards from '@/components/sections/ValuePropositionCards';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';
import CTABand from '@/components/sections/CTABand';
import StructuredData from '@/components/SEO/StructuredData';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Star, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jacksonville Concrete Coating & Epoxy Floor Specialists | Brightway',
  description: 'Premier concrete coating and epoxy floor specialists serving Jacksonville, FL. Garage floors, pool decks, patios. Licensed, insured, family-owned since 2024. Free quotes.',
  keywords: [
    'concrete coating Jacksonville',
    'epoxy floors Jacksonville', 
    'garage floor coating Jacksonville',
    'pool deck coating Jacksonville',
    'patio coating Jacksonville FL',
    'concrete contractors Jacksonville',
    'polyaspartic coatings Jacksonville'
  ],
};

const jacksonvilleNeighborhoods = [
  'Riverside', 'Avondale', 'Springfield', 'Downtown Jacksonville', 'San Marco',
  'Ortega', 'Mandarin', 'Southside', 'Northside', 'Westside', 'Atlantic Beach',
  'Neptune Beach', 'Jacksonville Beach', 'Mayport', 'Fernandina Beach'
];

const localStats = {
  projectsCompleted: '98%',
  yearsInJacksonville: '5+',
  averageRating: '15 Yr',
  responseTime: '24 hours'
};

const serviceAreas = [
  'Downtown Jacksonville',
  'Riverside & Avondale', 
  'San Marco',
  'Southside',
  'Mandarin',
  'Orange Park',
  'Fleming Island',
  'Atlantic Beach',
  'Neptune Beach',
  'Jacksonville Beach'
];

export default function JacksonvilleCoatingPage() {
  return (
    <>
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Jacksonville's Premier Concrete Coating Specialists"
        subtitle="Transform your garage, patio, and pool deck with professional-grade polyurea, polyaspartic and epoxy coating systems. Serving Jacksonville and Northeast Florida since 2024."
        description="Family-owned business delivering superior concrete transformations throughout Jacksonville's neighborhoods. Licensed, insured, and trusted by local families."
        showImage={true}
        imageDescription="Beautiful garage floor coating installation in Jacksonville neighborhood"
        ctaPrimary="Get Free Jacksonville Quote"
        ctaSecondary="Call 904-540-9693"
      />

      {/* Jacksonville-Specific Introduction */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-gray-900">
                  Why Jacksonville Chooses Brightway Coatings
                </h2>
                
                <div className="prose prose-xl max-w-none mb-8">
                  <p className="leading-relaxed text-gray-700">
                    Jacksonville families trust Brightway Coatings to transform their concrete surfaces with 5+ years of specialized coatings experience 
                    backed by 30+ years of home service expertise. From historic Riverside homes to modern Southside developments, we understand the 
                    unique challenges Florida's climate presents to concrete floors and outdoor surfaces.
                  </p>
                  
                  <p className="leading-relaxed text-gray-700">
                    Our polyurea, polyaspartic and epoxy coating systems are specifically engineered for Jacksonville's hot, humid climate. 
                    Unlike traditional epoxy that can fail in Florida heat, our premium coatings resist UV damage, handle thermal 
                    cycling, and provide superior protection against the salt air from our nearby coast.
                  </p>

                  <p className="leading-relaxed text-gray-700">
                    Whether you're in downtown Jacksonville's urban core or the suburban neighborhoods of Mandarin and Orange Park, 
                    we bring the same level of craftsmanship and attention to detail as a father-and-son team committed to quality work and 
                    lasting relationships with our customers.
                  </p>
                </div>

                {/* Jacksonville Portfolio Preview */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Recent Jacksonville Projects</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-blue-600">Garage</Badge>
                        <ImagePlaceholder
                          alt="Garage floor coating in Riverside Jacksonville"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Historic Riverside Home</h4>
                        <p className="text-sm text-gray-600">Custom flake system, 650 sq ft</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-green-600">Pool Deck</Badge>
                        <ImagePlaceholder
                          alt="Pool deck coating in Southside Jacksonville"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Southside Pool Area</h4>
                        <p className="text-sm text-gray-600">Cool-surface coating, 1,200 sq ft</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-orange-600">Patio</Badge>
                        <ImagePlaceholder
                          alt="Patio coating in San Marco Jacksonville"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">San Marco Outdoor Space</h4>
                        <p className="text-sm text-gray-600">Slip-resistant finish, 800 sq ft</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center mt-6">
                    <Link 
                      href="/portfolio" 
                      className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Full Jacksonville Portfolio →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Local Business Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-4 text-blue-900">Jacksonville Service Stats</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.projectsCompleted}</div>
                          <div className="text-sm text-blue-800">Projects Completed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.yearsInJacksonville}</div>
                          <div className="text-sm text-blue-800">Years in Jacksonville</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.averageRating}</div>
                          <div className="text-sm text-blue-800">Average Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.responseTime}</div>
                          <div className="text-sm text-blue-800">Response Time</div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-blue-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>Licensed Florida Contractor</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>Fully Insured & Bonded</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>Family-Owned Since 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>Local Jacksonville Business</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-600" />
                        Quick Contact
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Phone:</strong> <a href="tel:904-540-9693" className="text-blue-600 hover:text-blue-800">904-540-9693</a>
                        </div>
                        <div>
                          <strong>Service Area:</strong> All of Jacksonville & Northeast FL
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>Mon-Fri 8 AM - 5 PM</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <Link 
                          href="/contact"
                          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                        >
                          Get Free Quote
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Neighborhoods We Serve</h3>
                      <div className="grid grid-cols-1 gap-1 text-sm text-gray-700">
                        {serviceAreas.map((area, index) => (
                          <div key={index} className="py-1">• {area}</div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        ...and many more Jacksonville areas
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesOverview />

      {/* Before/After Gallery */}
      <BeforeAfterGallery 
        title="Jacksonville Transformations"
        description="See stunning concrete coating transformations from neighborhoods throughout Jacksonville and Northeast Florida."
      />

      {/* Value Propositions */}
      <ValuePropositionCards />

      {/* Jacksonville Neighborhoods */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-gray-900">
              Proudly Serving All Jacksonville Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              From historic districts to new developments, we bring professional concrete coating 
              services to every corner of Jacksonville and the surrounding communities.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {jacksonvilleNeighborhoods.map((neighborhood, index) => (
                  <div key={index} className="text-sm text-gray-700 py-2">
                    {neighborhood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <TestimonialsSection />

      <TrustBadges />

      <CTABand
        title="Ready to Transform Your Jacksonville Property?"
        description="Join hundreds of satisfied Jacksonville homeowners with professional concrete coating"
        primaryCTA="Get Free Jacksonville Quote"
        secondaryCTA="Call 904-540-9693"
      />
    </>
  );
}
