import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Square, Clock, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ponte Vedra Beach Garage Floor Transformation | Brightway Portfolio',
  description: 'See this stunning garage floor coating transformation in Ponte Vedra Beach, FL. Charcoal and silver decorative flakes with polyaspartic coating by Brightway Coatings.',
  keywords: ['Ponte Vedra garage floor coating', 'garage transformation portfolio', 'charcoal silver flakes', 'polyaspartic garage coating Ponte Vedra'],
};

const projectDetails = {
  title: 'Modern Garage Transformation',
  location: 'Ponte Vedra Beach, FL',
  date: 'March 2024',
  category: 'Garage Floor Coating',
  size: '650 sq ft',
  duration: '1 Day',
  client: 'The Johnson Family',
  challenge: 'Old stained concrete with oil spots and cracks',
  solution: 'Complete surface preparation with polyaspartic system and decorative flakes',
  features: ['Oil Resistant', '1-Day Install', 'Custom Flakes', '15 Year Warranty', 'UV Stable', 'Chemical Resistant'],
  materials: [
    'Polyaspartic primer system',
    'Charcoal and silver decorative flakes',
    'High-performance topcoat',
    'Non-slip additives'
  ],
  beforeDescription: 'Heavily stained concrete with multiple oil stains, surface cracks, and years of wear from vehicle traffic. The homeowners were embarrassed to have their garage door open.',
  afterDescription: 'Stunning transformation with a modern charcoal and silver flake system that complements the home\'s contemporary architecture. The surface is now oil-resistant and easy to maintain.',
  testimonial: {
    quote: "We couldn't be happier with the results. Our garage went from being an eyesore to the most beautiful part of our home. The one-day installation was incredible - we parked our cars that same evening!",
    author: "Sarah Johnson",
    title: "Homeowner"
  }
};

export default function PonteVedraGarageProject() {
  const serviceData = generateServiceStructuredData(
    projectDetails.title,
    `${projectDetails.beforeDescription} ${projectDetails.afterDescription}`
  );

  return (
    <>
      <StructuredData data={serviceData} />
      
      <Hero
        title={projectDetails.title}
        subtitle={`${projectDetails.location} • ${projectDetails.date}`}
        description="A complete garage floor transformation showcasing the power of professional polyaspartic coatings"
        showImage={true}
        imageDescription="Before and after comparison of garage floor coating transformation"
        ctaPrimary="Get Your Free Quote"
        ctaSecondary="Call 904-540-9693"
      />

      {/* Back to Portfolio */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Project Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Before & After Images */}
                <div>
                  <h2 className="mb-6 text-gray-900">Before & After</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-700">Before</h3>
                      <ImagePlaceholder
                        alt={`Before: ${projectDetails.beforeDescription}`}
                        aspectRatio="landscape"
                        variant="gray"
                        className="w-full"
                        showCaption={true}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">After</h3>
                      <ImagePlaceholder
                        alt={`After: ${projectDetails.afterDescription}`}
                        aspectRatio="landscape"
                        variant="blue"
                        className="w-full"
                        showCaption={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Story */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="mb-6 text-gray-900">The Challenge</h2>
                  <p className="leading-relaxed text-gray-700 mb-6">
                    {projectDetails.beforeDescription}
                  </p>
                  
                  <h2 className="mb-6 text-gray-900">The Solution</h2>
                  <p className="leading-relaxed text-gray-700 mb-6">
                    {projectDetails.afterDescription}
                  </p>

                  <p className="leading-relaxed text-gray-700">
                    Our team began with thorough surface preparation, diamond grinding the concrete to create the perfect profile for adhesion. 
                    All cracks were properly filled and leveled. We then applied our premium polyaspartic primer system, followed by the 
                    customer's chosen charcoal and silver decorative flakes, and finished with a high-performance clear topcoat for 
                    maximum durability and visual appeal.
                  </p>
                </div>

                {/* Process Photos */}
                <div>
                  <h2 className="mb-6 text-gray-900">Installation Process</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <ImagePlaceholder
                      alt="Surface preparation and diamond grinding"
                      aspectRatio="landscape"
                      variant="blue"
                      showCaption={true}
                    />
                    <ImagePlaceholder
                      alt="Primer application and decorative flake installation"
                      aspectRatio="landscape"
                      variant="blue"
                      showCaption={true}
                    />
                    <ImagePlaceholder
                      alt="Final topcoat application and finishing"
                      aspectRatio="landscape"
                      variant="blue"
                      showCaption={true}
                    />
                  </div>
                </div>
              </div>

              {/* Project Specs */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">Location:</span>
                          <span className="text-gray-600">{projectDetails.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">Date:</span>
                          <span className="text-gray-600">{projectDetails.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Square className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">Size:</span>
                          <span className="text-gray-600">{projectDetails.size}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">Duration:</span>
                          <span className="text-gray-600">{projectDetails.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Features</h3>
                      <div className="space-y-2">
                        {projectDetails.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Materials Used</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {projectDetails.materials.map((material, index) => (
                          <li key={index}>• {material}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-gray-900">What Our Customer Says</h2>
            <Card className="bg-white">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  &ldquo;{projectDetails.testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{projectDetails.testimonial.author}</div>
                  <div className="text-gray-600">{projectDetails.testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900">Similar Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-blue-600">Garage</Badge>
                  <ImagePlaceholder
                    alt="Multi-car garage system in Nocatee"
                    aspectRatio="landscape"
                    variant="blue"
                    className="w-full mb-4"
                  />
                  <h3 className="font-semibold mb-2">Multi-Car Garage System</h3>
                  <p className="text-sm text-gray-600 mb-3">Nocatee, FL • 950 sq ft</p>
                  <Link 
                    href="/portfolio/nocatee-multi-car-garage" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-green-600">Pool Deck</Badge>
                  <ImagePlaceholder
                    alt="Luxury pool deck coating in Jacksonville"
                    aspectRatio="landscape"
                    variant="blue"
                    className="w-full mb-4"
                  />
                  <h3 className="font-semibold mb-2">Luxury Pool Deck Coating</h3>
                  <p className="text-sm text-gray-600 mb-3">Jacksonville, FL • 1,200 sq ft</p>
                  <Link 
                    href="/portfolio/jacksonville-luxury-pool-deck" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-orange-600">Patio</Badge>
                  <ImagePlaceholder
                    alt="Elegant patio makeover in St. Augustine"
                    aspectRatio="landscape"
                    variant="blue"
                    className="w-full mb-4"
                  />
                  <h3 className="font-semibold mb-2">Elegant Patio Makeover</h3>
                  <p className="text-sm text-gray-600 mb-3">St. Augustine, FL • 800 sq ft</p>
                  <Link 
                    href="/portfolio/st-augustine-patio-makeover" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/portfolio" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <CTABand
        title="Ready for Your Own Transformation?"
        description="Get the same professional results as this Ponte Vedra Beach project with a free consultation"
        primaryCTA={ctaText.primary}
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
