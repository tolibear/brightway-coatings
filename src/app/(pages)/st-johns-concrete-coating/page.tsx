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
import { MapPin, Phone, Clock, Star, CheckCircle, Users, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'St. Johns Concrete Coating & Epoxy Floor Company | Brightway Local',
  description: 'Local St. Johns concrete coating specialists. Garage epoxy floors, pool decks, patios. Family-owned & operated right here in St. Johns, FL since 2024. Free estimates.',
  keywords: [
    'concrete coating St Johns FL',
    'epoxy floors St Johns',
    'garage floor coating St Johns',
    'pool deck coating St Johns',
    'patio coating St Johns Florida',
    'local concrete contractors St Johns',
    'polyaspartic coatings St Johns'
  ],
};

const stJohnsNeighborhoods = [
  'Nocatee', 'Durbin Crossing', 'RiverTown', 'Julington Creek',
  'Fruit Cove', 'Switzerland', 'Hastings', 'Ponte Vedra',
  'World Golf Hall of Fame', 'St. Johns Golf & Country Club'
];

const localStats = {
  projectsCompleted: '98%',
  yearsInStJohns: '5+',
  averageRating: '15 Yr',
  responseTime: 'Same day'
};

export default function StJohnsCoatingPage() {
  return (
    <>
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="St. Johns' Own Concrete Coating Experts"
        subtitle="Your local neighbors delivering premium polyurea, polyaspartic and epoxy coating solutions. Based right here in St. Johns County, serving our community since 2024."
        description="When you choose Brightway Coatings, you're supporting a local St. Johns family business that lives and works in your community. We understand your needs because we share them."
        showImage={true}
        imageDescription="Local St. Johns concrete coating project with beautiful results"
        ctaPrimary="Get Free Local Quote"
        ctaSecondary="Call 904-540-9693"
      />

      {/* Local Business Emphasis */}
      <section className="bg-blue-50 border-b-2 border-blue-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Home className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">Locally Owned & Operated</h3>
            </div>
            <p className="text-lg text-blue-800">
              Located at 172 Little Bear Run, St Johns, FL 32259 - We're not just your contractors, we're your neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* St. Johns-Specific Introduction */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-gray-900">
                  Why St. Johns County Trusts Their Local Experts
                </h2>
                
                <div className="prose prose-xl max-w-none mb-8">
                  <p className="leading-relaxed text-gray-700">
                    For over three decades, the Brightway family has called St. Johns County home. We've watched our community 
                    grow from rural farmland to one of Florida's most desirable places to live. Through it all, we've been 
                    here providing reliable concrete coating services to our friends and neighbors.
                  </p>
                  
                  <p className="leading-relaxed text-gray-700">
                    Living and working in St. Johns County means we understand the specific challenges our area presents. 
                    From the sandy soil conditions in Nocatee to the historic homes in downtown St. Augustine, 
                    we've developed specialized techniques that ensure lasting results in our unique environment.
                  </p>

                  <p className="leading-relaxed text-gray-700">
                    When you choose Brightway Coatings, you're not just getting a contractor - you're getting a neighbor 
                    who cares about the quality of their work because their reputation depends on it. We shop at the same 
                    stores, attend the same events, and share the same pride in our beautiful St. Johns County community.
                  </p>
                </div>

                {/* Community Involvement */}
                <Card className="bg-green-50 border-green-200 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Community Involvement</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-green-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>St. Johns Chamber of Commerce</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Local School Fundraising Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Nocatee Community Events</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Youth Sports Team Sponsor</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* St. Johns Portfolio Preview */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Recent St. Johns County Projects</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-blue-600">Garage</Badge>
                        <ImagePlaceholder
                          alt="Garage floor coating in Nocatee St. Johns"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Nocatee Family Home</h4>
                        <p className="text-sm text-gray-600">Premium flake system, 950 sq ft</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-green-600">Pool Deck</Badge>
                        <ImagePlaceholder
                          alt="Pool deck coating in Julington Creek"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Julington Creek Estate</h4>
                        <p className="text-sm text-gray-600">Cool-surface system, 1,400 sq ft</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-3 bg-orange-600">Patio</Badge>
                        <ImagePlaceholder
                          alt="Patio coating in Fruit Cove"
                          aspectRatio="landscape"
                          variant="blue"
                          className="w-full mb-3"
                        />
                        <h4 className="font-semibold mb-1">Fruit Cove Retreat</h4>
                        <p className="text-sm text-gray-600">Entertainment ready, 600 sq ft</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center mt-6">
                    <Link 
                      href="/portfolio" 
                      className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Full St. Johns Portfolio →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Local Business Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-4 text-blue-900">Local St. Johns Stats</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.projectsCompleted}</div>
                          <div className="text-sm text-blue-800">Local Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.yearsInStJohns}</div>
                          <div className="text-sm text-blue-800">Years in St. Johns</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.averageRating}</div>
                          <div className="text-sm text-blue-800">Local Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{localStats.responseTime}</div>
                          <div className="text-sm text-blue-800">Local Response</div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-blue-800">
                        <div className="flex items-center gap-2">
                          <Home className="w-4 h-4 text-blue-600" />
                          <span>Local St. Johns Family</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>30+ Years Same Address</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>Licensed Florida Contractor</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>Active Community Member</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Local Contact
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Address:</strong><br />
                          172 Little Bear Run<br />
                          St Johns, FL 32259
                        </div>
                        <div>
                          <strong>Phone:</strong> <a href="tel:904-540-9693" className="text-blue-600 hover:text-blue-800">904-540-9693</a>
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
                          Get Local Quote
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">St. Johns Communities</h3>
                      <div className="grid grid-cols-1 gap-1 text-sm text-gray-700">
                        {stJohnsNeighborhoods.map((area, index) => (
                          <div key={index} className="py-1">• {area}</div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        Complete St. Johns County coverage
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
        title="St. Johns County Transformations"
        description="Beautiful concrete coating results from right here in your own St. Johns County neighborhoods."
      />

      {/* Value Propositions */}
      <ValuePropositionCards />

      {/* Local Testimonials */}
      <TestimonialsSection />

      <TrustBadges />

      <CTABand
        title="Support Your Local St. Johns Business"
        description="Choose your neighbors for quality concrete coating with guaranteed local support"
        primaryCTA="Get Free Local Quote"
        secondaryCTA="Call 904-540-9693"
      />
    </>
  );
}
