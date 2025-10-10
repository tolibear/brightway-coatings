import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import TrustBadges from '@/components/sections/TrustBadges';
import FlakeGallery from '@/components/sections/FlakeGallery';
import ProcessSection from '@/components/sections/ProcessSection';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData, generateFAQStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Droplets, Shield, Palette, Home, Clock } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Patio Coatings Jacksonville FL | UV Resistant | Brightway',
  description: 'Transform your patio with UV-stable polyaspartic coatings in Jacksonville FL. Weather resistant, slip-resistant, beautiful finishes. Family-owned since 2024.',
  keywords: ['patio coating Jacksonville', 'concrete patio coating', 'outdoor floor coating FL', 'UV resistant coatings', 'weather resistant patio'],
};

const benefits = [
  {
    icon: Sun,
    title: 'UV Stable Formula',
    description: "Won't yellow, fade, or chalk under Florida's intense sun. Maintains color and clarity for decades."
  },
  {
    icon: Droplets,
    title: 'All-Weather Resistant',
    description: 'Handles Florida rain, humidity, and temperature swings without cracking, peeling, or deteriorating.'
  },
  {
    icon: Shield,
    title: 'Slip-Resistant Options',
    description: 'Textured finishes provide safe footing around pools and entertaining areas, even when wet.'
  },
  {
    icon: Palette,
    title: 'Beautiful Decorative Finishes',
    description: 'Transform plain concrete into stunning surfaces with custom colors and decorative flake systems.'
  },
  {
    icon: Home,
    title: 'Increases Property Value',
    description: 'Professional-grade coatings enhance your outdoor living space and boost home value significantly.'
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most patios completed in 1-2 days with minimal disruption to your daily routine.'
  }
];

const applications = [
  {
    title: 'Pool Surrounds',
    description: 'Create safe, beautiful areas around your pool with slip-resistant textures and cool-to-touch surfaces.'
  },
  {
    title: 'Outdoor Kitchens',
    description: 'Durable, easy-to-clean surfaces that handle food prep, grease, and entertaining demands.'
  },
  {
    title: 'Walkways & Paths',
    description: 'Connect outdoor spaces with attractive, low-maintenance pathways that complement your landscaping.'
  },
  {
    title: 'Entertainment Areas',
    description: 'Transform concrete patios into stunning outdoor rooms perfect for gatherings and relaxation.'
  },
  {
    title: 'Covered Lanais',
    description: 'Protected outdoor spaces get the same professional treatment with moisture-resistant systems.'
  },
  {
    title: 'Commercial Patios',
    description: 'Restaurant patios, retail spaces, and business areas benefit from durable, attractive coatings.'
  }
];

const faqs = [
  {
    question: 'Will the coating fade or yellow in Florida sun?',
    answer: 'No. Unlike epoxy, our polyaspartic patio coatings are UV stable and will not fade, yellow, or chalk under intense Florida sunshine. The color and clarity remain consistent for decades.'
  },
  {
    question: 'Can you make the surface slip-resistant for pool areas?',
    answer: 'Absolutely. We offer several slip-resistant texture options that provide excellent traction even when wet. These textures are comfortable for bare feet while providing safety around pools and spas.'
  },
  {
    question: 'How does the coating handle Florida weather extremes?',
    answer: "Our polyaspartic system is engineered for Florida's climate. It handles temperature swings, humidity, torrential rains, and UV exposure without cracking, peeling, or deteriorating."
  },
  {
    question: 'What color and design options are available?',
    answer: 'We offer solid colors, decorative flake systems, and custom blends. Popular choices include earth tones, coastal blues, and neutral grays that complement outdoor settings and landscaping.'
  },
  {
    question: 'How long before I can use my patio after installation?',
    answer: 'The surface is ready for foot traffic within hours of completion. Full cure and furniture placement typically occurs within 24 hours, depending on temperature and humidity.'
  },
  {
    question: 'Will the coating crack if the concrete underneath moves?',
    answer: 'Our polyaspartic system has excellent flexibility and can handle minor concrete movement. We also address any existing cracks during preparation to prevent future issues.'
  },
  {
    question: 'How do I maintain a coated patio?',
    answer: 'Maintenance is simple - regular sweeping and occasional mopping with mild soap and water. The non-porous surface resists stains and makes cleaning effortless.'
  }
];

export default function PatioCoatingsPage() {
  const serviceData = generateServiceStructuredData(
    'Patio Coatings',
    'UV-resistant polyaspartic patio coatings in Jacksonville FL. Weather resistant, slip-resistant options, 15 year warranty. Licensed family business since 2024.'
  );
  
  const faqData = generateFAQStructuredData(faqs);

  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your Patio?"
        subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for patio transformations with UV-resistant coatings, beautiful finishes, and unmatched durability."
      />
      
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      
      <Hero
        title="Jacksonville Patio Coatings"
        subtitle="UV-resistant polyurea and polyaspartic coatings that transform ordinary patios into beautiful, durable surfaces. Perfect for entertaining, poolside relaxation, and outdoor living."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-540-9693"
        
      />

      {/* Main Content Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Florida-Engineered Outdoor Coating Solutions
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Your patio should be an extension of your home - a beautiful, comfortable space for entertaining, 
                relaxation, and family gatherings. But Florida's harsh climate quickly deteriorates plain concrete, 
                leaving you with cracked, stained, and unsightly surfaces that detract from your outdoor enjoyment.
              </p>
              
              <p>
                Our premium poly patio coatings solve these problems permanently. Unlike traditional sealers 
                that fail within years, our UV-stable system maintains its beauty and protection decade after decade. 
                From Ponte Vedra beachfront properties to St. Johns County family homes, we've helped homeowners 
                create outdoor spaces they're proud to show off.
              </p>

              <p>
                Whether you're coating a simple concrete slab or transforming an elaborate outdoor kitchen area, 
                our father-and-son team brings 30+ years of home service expertise and 5+ years of coatings experience to every installation. We understand Florida's 
                unique challenges and engineer our systems specifically for long-term performance in our climate.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Patio Gallery Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jacksonville Patio Transformations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your outdoor living space with weather-resistant patio coatings. Beautiful, 
                durable surfaces perfect for Florida's year-round outdoor lifestyle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--1.jpg"
                    alt="Elegant patio makeover with weather resistant coating in St. Johns"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                    Elegant Design
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Elegant Patio Makeover</h3>
                  <p className="text-sm text-gray-600">Weather-resistant decorative finish</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-2.jpg"
                    alt="Outdoor entertainment space with premium patio coating in Nocatee"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                    Entertainment Ready
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Entertainment Space</h3>
                  <p className="text-sm text-gray-600">Perfect for hosting and family gatherings</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-4.jpg"
                    alt="Custom patio design with decorative coating system"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                    Custom Design
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Custom Patio Design</h3>
                  <p className="text-sm text-gray-600">Tailored to your outdoor lifestyle</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect for Every Outdoor Application
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {applications.map((application, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why Homeowners Choose Our Patio Coatings
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Superior Performance</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Won't fade, yellow, or peel in UV exposure</li>
                    <li>• Handles 100+ degree temperature swings</li>
                    <li>• Resists mold, mildew, and staining</li>
                    <li>• Maintains flexibility as concrete moves</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Beautiful Results</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Custom colors to match your home</li>
                    <li>• Decorative flake options available</li>
                    <li>• Professional, uniform appearance</li>
                    <li>• Increases property value significantly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Northeast Florida's Outdoor Coating Specialists
            </h2>
            
            <div className="bg-primary/5 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Serving the Jacksonville area since 2024:</strong> {businessInfo.serviceAreas.join(', ')}
              </p>
              <p className="text-gray-600">
                From oceanfront Ponte Vedra properties to inland St. Johns County homes, we understand 
                the unique challenges Florida weather presents to outdoor surfaces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1,500+</div>
                <div className="text-gray-600">Patios Transformed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">15</div>
                <div className="text-gray-600">Year UV Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">Licensed</div>
                <div className="text-gray-600">& Fully Insured</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                "We've coated patios from beachfront condos to countryside estates. Every installation gets 
                the same attention to detail because your satisfaction is our reputation in this community."
              </p>
              <p className="font-semibold">- Paul & Son, Brightway Coatings</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      
      <ProcessSection />
      
      <FAQSection faqs={faqs} title="Patio Coating Questions" />

      <FlakeGallery />
    </>
  );
}
