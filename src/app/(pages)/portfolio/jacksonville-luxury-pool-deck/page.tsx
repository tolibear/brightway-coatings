import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Square, Clock, CheckCircle, ArrowLeft, Thermometer } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Jacksonville Luxury Pool Deck Coating Project | Brightway Portfolio',
  description: 'Premium slip-resistant pool deck coating transformation in Jacksonville, FL. Cool-surface polyaspartic coating with coastal blue finish by Brightway Coatings.',
  keywords: ['Jacksonville pool deck coating', 'slip resistant pool deck', 'cool surface coating', 'coastal blue pool deck', 'luxury pool area Jacksonville'],
};

const projectDetails = {
  title: 'Luxury Pool Deck Coating',
  location: 'Riverside, Jacksonville, FL',
  date: 'February 2024',
  category: 'Pool Deck Coating',
  size: '1,200 sq ft',
  duration: '2 Days',
  client: 'The Martinez Family',
  challenge: 'Hot, slippery concrete deck that was dangerous around the pool and uncomfortable to walk on barefoot',
  solution: 'Complete pool deck resurfacing with slip-resistant, cool-surface polyaspartic system',
  features: ['Slip Resistant', 'Cool Surface Technology', 'UV Stable', 'Chemical Resistant', 'Easy Maintenance', '15-Year Warranty'],
  materials: [
    'Specialized pool deck primer',
    'Cool-surface polyaspartic base coat',
    'Coastal blue pigmentation',
    'Non-slip texture additives',
    'UV-resistant clear topcoat'
  ],
  temperature: '15°F cooler than original concrete',
  beforeDescription: 'Standard concrete pool deck that became dangerously hot in Florida sun and slippery when wet. Multiple family members had slipped, and the surface was too hot to walk on comfortably during summer months.',
  afterDescription: 'Beautiful coastal blue finish with integrated slip-resistant texture. The cool-surface technology keeps the deck comfortable to walk on even in direct sunlight, while the textured finish provides excellent traction around the pool.',
  testimonial: {
    quote: "The difference is incredible! Our kids can now run around the pool area safely, and we don't have to worry about burning our feet. The color is absolutely beautiful and matches our coastal design perfectly.",
    author: "Maria Martinez",
    title: "Homeowner"
  }
};

export default function JacksonvillePoolDeckProject() {
  const serviceData = generateServiceStructuredData(
    projectDetails.title,
    `${projectDetails.beforeDescription} ${projectDetails.afterDescription}`
  );

  return (
    <>
      <TransformationSetter 
        title="Ready for a Transformation Like This?"
        subtitle="See yourself in this success story. Contact us today to start your own stunning transformation with Brightway Coatings."
      />
      
      <StructuredData data={serviceData} />
      
      <Hero
        title={projectDetails.title}
        subtitle={`${projectDetails.location} • ${projectDetails.date}`}
        description="A complete pool deck transformation featuring cool-surface technology and slip-resistant finish"
        showImage={true}
        imageDescription="Beautiful pool deck with coastal blue cool-surface coating"
        ctaPrimary="Get Your Free Quote"
        ctaSecondary="Call 904-540-9693"
      />

      {/* Back to Portfolio */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
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
                  <h2 className="mb-6 text-gray-900">Before & After Transformation</h2>
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
                      <h3 className="text-lg font-semibold mb-3 text-primary">After</h3>
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

                {/* Temperature Comparison */}
                <Card className="bg-primary/5 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Thermometer className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-bold text-primary/70">Cool Surface Technology</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">145°F</div>
                        <div className="text-sm text-gray-700">Original Concrete Temperature</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">130°F</div>
                        <div className="text-sm text-gray-700">Cool-Surface Coating Temperature</div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      {projectDetails.temperature} cooler surface temperature in direct Florida sunlight
                    </p>
                  </CardContent>
                </Card>

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
                    We began with thorough cleaning and minor crack repair of the existing pool deck. Our specialized 
                    pool deck primer was applied to ensure maximum adhesion in the high-moisture environment. The 
                    cool-surface base coat was tinted with coastal blue pigments and enhanced with non-slip texture 
                    additives for safety. Finally, a UV-resistant clear topcoat was applied to protect the finish 
                    from chlorine, sun exposure, and pool chemicals.
                  </p>
                </div>

                {/* Safety Features */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Safety Enhancements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">Slip-resistant texture</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">Cool walking surface</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">Chemical resistant finish</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">Easy to clean and maintain</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Process Photos */}
                <div>
                  <h2 className="mb-6 text-gray-900">Installation Process</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <ImagePlaceholder
                      alt="Pool deck cleaning and surface preparation"
                      aspectRatio="landscape"
                      variant="blue"
                      showCaption={true}
                    />
                    <ImagePlaceholder
                      alt="Cool-surface base coat and texture application"
                      aspectRatio="landscape"
                      variant="blue"
                      showCaption={true}
                    />
                    <ImagePlaceholder
                      alt="Final UV-resistant topcoat application"
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
                      <h3 className="text-lg font-bold mb-4">Features & Benefits</h3>
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

                  <Card className="bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-2 text-primary/70">Pool Area Specialist</h3>
                      <p className="text-sm text-primary/80">
                        Certified for pool deck applications with specialized knowledge of pool chemistry and safety requirements.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="bg-primary/5">
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
            <h2 className="text-center mb-12 text-gray-900">More Pool Deck Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-green-600">Pool Deck</Badge>
                  <ImagePlaceholder
                    alt="Resort-style pool area in Mandarin"
                    aspectRatio="landscape"
                    variant="blue"
                    className="w-full mb-4"
                  />
                  <h3 className="font-semibold mb-2">Resort-Style Pool Area</h3>
                  <p className="text-sm text-gray-600 mb-3">Mandarin, FL • 1,800 sq ft</p>
                  <Link 
                    href="/portfolio/mandarin-resort-pool-area" 
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-primary">Garage</Badge>
                  <ImagePlaceholder
                    alt="Modern garage transformation in Ponte Vedra"
                    aspectRatio="landscape"
                    variant="blue"
                    className="w-full mb-4"
                  />
                  <h3 className="font-semibold mb-2">Modern Garage Transformation</h3>
                  <p className="text-sm text-gray-600 mb-3">Ponte Vedra Beach, FL • 650 sq ft</p>
                  <Link 
                    href="/portfolio/ponte-vedra-garage-transformation" 
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-secondary">Patio</Badge>
                  <ImagePlaceholder
                    alt="Outdoor entertainment space in St. Johns"
                    aspectRatio="landscape"
                    variant="blue"
                    className="w-full mb-4"
                  />
                  <h3 className="font-semibold mb-2">Outdoor Entertainment Space</h3>
                  <p className="text-sm text-gray-600 mb-3">St. Johns, FL • 600 sq ft</p>
                  <Link 
                    href="/portfolio/st-johns-entertainment-patio" 
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/portfolio" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
    </>
  );
}
