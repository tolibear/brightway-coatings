import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import TrustBadges from '@/components/sections/TrustBadges';
import FlakeGallery from '@/components/sections/FlakeGallery';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData, generateFAQStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Droplets, Sparkles, TrendingUp, Shield, Clock } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Residential Floor Coatings Jacksonville FL | Brightway',
  description: 'Complete residential floor coating solutions in Jacksonville FL. Basements, sunrooms, workshops, driveways. Moisture protection, easy maintenance. Family-owned since 2024.',
  keywords: ['residential floor coatings Jacksonville', 'home concrete coating FL', 'basement floor coating', 'sunroom flooring', 'driveway coating'],
};

const benefits = [
  {
    icon: Home,
    title: 'Whole-Home Solutions',
    description: 'From basements to sunrooms, we coat every concrete surface in your home with lasting protection.'
  },
  {
    icon: Droplets,
    title: 'Moisture Protection',
    description: 'Seals concrete against water damage, preventing mold, mildew, and structural deterioration.'
  },
  {
    icon: Sparkles,
    title: 'Easy Maintenance',
    description: 'Non-porous surfaces resist stains and clean easily, saving hours of scrubbing and maintenance.'
  },
  {
    icon: TrendingUp,
    title: 'Increases Home Value',
    description: 'Professional coatings enhance appearance and functionality, boosting property value significantly.'
  },
  {
    icon: Shield,
    title: 'Long-Term Protection',
    description: 'Guards against oil stains, chemical spills, and wear that damage plain concrete over time.'
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most residential areas completed quickly with minimal disruption to your daily routine.'
  }
];

const applications = [
  {
    title: 'Basement Floors',
    description: 'Transform damp, musty basements into clean, dry spaces perfect for storage, workshops, or recreation.',
    features: ['Moisture vapor barrier', 'Mold and mildew resistance', 'Temperature regulation', 'Easy cleaning']
  },
  {
    title: 'Sunroom & Enclosed Patios',
    description: 'Create beautiful indoor-outdoor spaces with coatings that handle temperature swings and UV exposure.',
    features: ['UV-stable formula', 'Temperature flexibility', 'Decorative options', 'Slip resistance']
  },
  {
    title: 'Workshop & Utility Areas',
    description: 'Protect floors from oil, chemicals, and heavy equipment while maintaining a professional appearance.',
    features: ['Chemical resistance', 'Impact durability', 'Easy cleanup', 'Bright, clean look']
  },
  {
    title: 'Laundry & Storage Rooms',
    description: 'Seal concrete against moisture while creating attractive, functional spaces throughout your home.',
    features: ['Water resistance', 'Stain protection', 'Bright appearance', 'Dust elimination']
  },
  {
    title: 'Driveways',
    description: 'Enhance curb appeal with decorative coatings that protect against oil stains and weather damage.',
    features: ['Oil stain resistance', 'Weather protection', 'Decorative finishes', 'Easy maintenance']
  },
  {
    title: 'Walkways & Entryways',
    description: "Create welcoming, slip-resistant pathways that complement your home's exterior design.",
    features: ['Slip resistance', 'Decorative options', 'Weather durability', 'Professional appearance']
  }
];

const faqs = [
  {
    question: 'Can you coat basement floors with moisture issues?',
    answer: 'Yes, but proper preparation is essential. We test for moisture levels and use specialized primers when needed. Our coatings can serve as a moisture vapor barrier, but severe water intrusion issues should be addressed first.'
  },
  {
    question: 'What areas of my home can be coated?',
    answer: 'We coat any concrete surface: basements, sunrooms, workshops, laundry rooms, storage areas, driveways, walkways, and patios. Each area gets a system designed for its specific use and exposure conditions.'
  },
  {
    question: 'How do you handle temperature changes in enclosed spaces?',
    answer: 'Our polyaspartic system maintains flexibility through temperature swings. Unlike rigid epoxy that can crack, our coating moves with the concrete as it expands and contracts.'
  },
  {
    question: 'Will the coating work in high-humidity areas like Florida?',
    answer: "Absolutely. Our system is specifically designed for Florida's climate. The non-porous surface prevents moisture absorption and resists mold and mildew growth."
  },
  {
    question: "Can you match colors to my home's interior design?",
    answer: 'We offer a wide range of solid colors and decorative flake systems. We can help you choose options that complement your existing décor and design preferences.'
  },
  {
    question: 'How long do residential coatings typically last?',
    answer: "With proper maintenance, our residential coatings last decades. We provide 15 year warranties because we're confident in the long-term performance of our polyaspartic systems."
  },
  {
    question: 'Do you handle furniture and equipment moving?',
    answer: "We can help move lighter items, but large furniture and equipment should be removed before we arrive. We'll provide specific preparation instructions based on your project."
  }
];

export default function ResidentialFloorCoatingsPage() {
  const serviceData = generateServiceStructuredData(
    'Residential Floor Coatings',
    'Complete residential floor coating solutions in Jacksonville FL. Basements, sunrooms, workshops, driveways. Moisture protection, easy maintenance. Licensed family business since 2024.'
  );
  
  const faqData = generateFAQStructuredData(faqs);

  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your Home?"
        subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for residential transformations with durable, beautiful surfaces throughout your home."
      />
      
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      
      <Hero
        title="Jacksonville Residential Floor Coatings"
        subtitle="Transform your home's concrete surfaces - whether in basements, workshops, or living areas - into durable, stylish spaces built to last. Our industrial-grade coatings lock out humidity and create sleek, easy to clean finishes that stand up to Florida's climate and busy lifestyles."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-540-9693"
        
      />

      {/* Main Content Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Home Floor Protection Solutions
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Your home's concrete surfaces work hard every day, but they don't have to look worn out. From 
                basement moisture problems to garage oil stains, from sunroom temperature swings to driveway 
                weather damage, unprotected concrete creates ongoing maintenance headaches and reduces your 
                property value.
              </p>
              
              <p>
                Our comprehensive residential coating systems solve these problems permanently. We've helped 
                Jacksonville homeowners transform basements into dry, comfortable spaces, turn 
                sunrooms into year-round retreats, and create stunning driveways that boost curb appeal 
                throughout St. Johns County and beyond.
              </p>

              <p>
                As a family-owned business since 2024, we understand that your home is your biggest investment. 
                That's why we use only premium polyaspartic systems with 15 year warranty protection. Every 
                surface gets the same meticulous attention to detail, whether it's a small utility room or 
                an expansive basement renovation.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
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

      {/* Applications Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Residential Coating Applications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {applications.map((application, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{application.title}</h3>
                    <p className="text-gray-600 mb-4">{application.description}</p>
                    <div className="space-y-2">
                      {application.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why Homeowners Choose Brightway for Residential Coatings
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Specialized Expertise</h4>
                  <p className="text-gray-700 text-sm">
                    30+ years specializing in residential concrete coatings. We understand home environments 
                    and deliver solutions that work long-term.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Family-Owned Trust</h4>
                  <p className="text-gray-700 text-sm">
                    Local family business with deep community roots. We live here, work here, and stand 
                    behind every installation with lifetime warranties.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Complete Solutions</h4>
                  <p className="text-gray-700 text-sm">
                    One contractor for your entire home. From moisture problems to decorative finishes, 
                    we handle everything with consistent quality.
                  </p>
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
              Protecting Jacksonville Homes Since 2024
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
                <div className="text-gray-600 text-sm">Years Home Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Coatings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Licensed</div>
                <div className="text-gray-600 text-sm">& Fully Insured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">15 Year</div>
                <div className="text-gray-600 text-sm">Warranty</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Proudly serving neighborhoods throughout Northeast Florida:</strong>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {businessInfo.serviceAreas.map((area, index) => (
                  <div key={index} className="font-medium text-gray-700">{area}</div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                "Every home is different, but every homeowner deserves the same level of craftsmanship and 
                attention to detail. That's been our standard for over three decades."
              </p>
              <p className="font-semibold">- The Brightway Family Team</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      
      <FAQSection faqs={faqs} title="Residential Coating Questions" />

      <FlakeGallery />
    </>
  );
}
