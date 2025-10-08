import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import ValuePropositionCards from '@/components/sections/ValuePropositionCards';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';
import StructuredData from '@/components/SEO/StructuredData';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Star, CheckCircle, Users, Waves } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Ponte Vedra Concrete Coating & Epoxy Floors | Luxury Home Specialists',
  description: 'Premium concrete coating services for Ponte Vedra luxury homes. Garage epoxy floors, pool decks, patios. Specialists in coastal properties. Licensed, insured. Free estimates.',
  keywords: [
    'concrete coating Ponte Vedra',
    'epoxy floors Ponte Vedra Beach',
    'luxury garage floor coating Ponte Vedra',
    'pool deck coating Ponte Vedra',
    'patio coating Ponte Vedra FL',
    'coastal concrete contractors',
    'polyaspartic coatings Ponte Vedra'
  ],
};

const ponteVedraAreas = [
  'Ponte Vedra Beach', 'Ponte Vedra Inn & Club', 'TPC Sawgrass',
  'Nocatee (Ponte Vedra)', 'Palm Valley', 'Marsh Landing',
  'The Plantation at Ponte Vedra Beach', 'Ocean Palms',
  'Mediterra', 'Queens Harbour', 'Pablo Creek Reserve'
];

const localStats = {
  projectsCompleted: '98%',
  yearsInPonteVedra: '5+',
  averageRating: '15 Yr',
  avgHomeValue: 'Licensed'
};

export default function PonteVedraCoatingPage() {
  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your Ponte Vedra Home?"
        subtitle="Join satisfied Ponte Vedra homeowners who chose Brightway Coatings for luxury-grade transformations with coastal-resilient finishes and unmatched craftsmanship."
      />
      
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Ponte Vedra's Luxury Concrete Coating Specialists"
        subtitle="Premium polyaspartic and epoxy systems designed for coastal luxury homes. Serving Ponte Vedra Beach's most exclusive communities with unmatched quality and service."
        description="From oceanfront estates to golf course homes, we understand the unique requirements of Ponte Vedra's luxury properties and demanding coastal environment."
        showImage={true}
        imageDescription="Luxury garage floor coating in Ponte Vedra Beach estate"
        ctaPrimary="Get Premium Quote"
        ctaSecondary="Call 904-540-9693"
      />

      {/* Coastal Expertise Highlight */}
      <section className="bg-primary/5 border-b-2 border-blue-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Waves className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary/70">Coastal Environment Specialists</h3>
            </div>
            <p className="text-lg text-primary/80">
              Our coatings are specifically engineered to withstand salt air, humidity, and UV exposure from the Atlantic Ocean.
            </p>
          </div>
        </div>
      </section>

      {/* Ponte Vedra-Specific Introduction */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-gray-900">
                  Why Ponte Vedra's Elite Properties Choose Brightway
                </h2>
                
                <div className="prose prose-xl max-w-none mb-8">
                  <p className="leading-relaxed text-gray-700">
                    Ponte Vedra Beach represents the pinnacle of Northeast Florida luxury living. From oceanfront mansions 
                    to championship golf course estates, these exceptional properties demand concrete coating solutions 
                    that match their caliber of excellence.
                  </p>
                  
                  <p className="leading-relaxed text-gray-700">
                    For over 15 years, Ponte Vedra's most discerning homeowners have trusted Brightway Coatings to protect 
                    and enhance their significant investments. Our premium polyaspartic systems are specifically formulated 
                    to excel in the coastal environment - resisting salt air corrosion, UV degradation, and the thermal 
                    cycling that destroys inferior epoxy coatings.
                  </p>

                  <p className="leading-relaxed text-gray-700">
                    Whether it's a show-stopping garage floor in Mediterra, a resort-quality pool deck at The Plantation, 
                    or an entertainment-ready patio overlooking the Intracoastal, we deliver results that complement the 
                    sophisticated aesthetic and demanding performance standards of Ponte Vedra's luxury market.
                  </p>
                </div>

                {/* Premium Features */}
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary/70 mb-4">Premium Services for Luxury Homes</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Custom color matching services</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Architect & designer coordination</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Premium material upgrades</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>White-glove installation service</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Extended warranty options</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Concierge project management</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ponte Vedra Portfolio Preview */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Featured Ponte Vedra Projects</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-primary">Estate Garage</Badge>
                        <ImagePlaceholder
                          alt="Luxury garage floor coating in Ponte Vedra Beach estate"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Oceanfront Estate</h4>
                        <p className="text-sm text-gray-600">Custom granite flakes, 1,200 sq ft</p>
                        <Link 
                          href="/portfolio/ponte-vedra-garage-transformation" 
                          className="text-primary hover:text-primary/80 text-xs font-medium"
                        >
                          View Details →
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-green-600">Resort Pool</Badge>
                        <ImagePlaceholder
                          alt="Pool deck coating at TPC Sawgrass area home"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">TPC Golf Course Home</h4>
                        <p className="text-sm text-gray-600">Cool-surface system, 1,800 sq ft</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-purple-600">Entertainment</Badge>
                        <ImagePlaceholder
                          alt="Luxury patio coating in Mediterra"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Mediterra Entertainment Area</h4>
                        <p className="text-sm text-gray-600">Designer finish, 1,000 sq ft</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center mt-6">
                    <Link 
                      href="/portfolio" 
                      className="inline-block text-primary hover:text-primary/80 font-medium"
                    >
                      View Full Luxury Portfolio →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Luxury Service Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-4 text-primary/70">Ponte Vedra Expertise</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-2xl font-bold text-primary">{localStats.projectsCompleted}</div>
                          <div className="text-sm text-primary/80">Luxury Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{localStats.yearsInPonteVedra}</div>
                          <div className="text-sm text-primary/80">Years in Ponte Vedra</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{localStats.averageRating}</div>
                          <div className="text-sm text-primary/80">Client Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{localStats.avgHomeValue}</div>
                          <div className="text-sm text-primary/80">Avg Home Value</div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-primary/80">
                        <div className="flex items-center gap-2">
                          <Waves className="w-4 h-4 text-primary" />
                          <span>Coastal Environment Expert</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Luxury Home Specialist</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Premium Material Access</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Concierge Service Level</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        Premium Service Contact
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Phone:</strong> <a href="tel:904-540-9693" className="text-primary hover:text-primary/80">904-540-9693</a>
                        </div>
                        <div>
                          <strong>Service Area:</strong> All Ponte Vedra communities
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>Flexible scheduling for luxury clients</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <Link 
                          href="/contact"
                          className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                        >
                          Request Premium Consultation
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Ponte Vedra Communities</h3>
                      <div className="grid grid-cols-1 gap-1 text-sm text-gray-700">
                        {ponteVedraAreas.map((area, index) => (
                          <div key={index} className="py-1">• {area}</div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        Complete Ponte Vedra area coverage
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
        title="Ponte Vedra Luxury Transformations"
        description="Premium concrete coating results from Ponte Vedra's most exclusive properties and demanding coastal environment."
      />

      {/* Value Propositions */}
      <ValuePropositionCards />

      {/* Local Testimonials */}
      <TestimonialsSection />

      <TrustBadges />
    </>
  );
}
