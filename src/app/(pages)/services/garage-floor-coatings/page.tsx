import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import FlakeGallery from '@/components/sections/FlakeGallery';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData, generateFAQStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Clock, Star, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garage Floor Concrete Coating Jacksonville FL | Brightway Coatings',
  description: 'Jacksonville\'s premier garage floor concrete coatings. Premium polyurea and polyaspartic systems. Oil resistant, no hot tire pickup, 15 year warranty. Licensed family business since 2024.',
  keywords: ['garage floor coating Jacksonville', 'concrete coating Jacksonville', 'garage floor polyurea Jacksonville', 'polyaspartic garage floors Jacksonville', 'garage flooring Jacksonville FL'],
};

const benefits = [
  {
    icon: Shield,
    title: 'Oil & Chemical Resistant',
    description: 'Spilled motor oil, brake fluid, and antifreeze wipe away easily without staining or damage.'
  },
  {
    icon: Clock,
    title: '1-Day Installation',
    description: 'Most residential garages are completed in a single day. Use your garage the next morning.'
  },
  {
    icon: Star,
    title: 'No Hot Tire Pickup',
    description: 'Unlike epoxy, polyaspartic won\'t peel or stick to hot tires from summer driving.'
  },
  {
    icon: Award,
    title: '15 Year Warranty',
    description: 'We stand behind our work with comprehensive warranty protection for materials and labor.'
  },
  {
    icon: CheckCircle,
    title: 'Custom Decorative Flakes',
    description: 'Choose from dozens of flake combinations to match your home and personal style.'
  },
  {
    icon: Users,
    title: 'Licensed & Insured',
    description: 'Full licensing and insurance protection gives you peace of mind during installation.'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Surface Preparation',
    description: 'We diamond grind your concrete to create the perfect profile for maximum adhesion. Any cracks or holes are filled and leveled.'
  },
  {
    step: 2,
    title: 'Base Coat Application',
    description: 'A specialized Polyurea base coat penetrates deep into the concrete, creating an unbreakable bond between your floor and coating system.'
  },
  {
    step: 3,
    title: 'Decorative Flake Installation',
    description: 'Your chosen flake blend is broadcast evenly across the surface, creating texture and visual appeal throughout your garage.'
  },
  {
    step: 4,
    title: 'Topcoat Protection',
    description: 'A clear polyaspartic topcoat seals everything together, providing the durability and chemical resistance you need.'
  }
];

const faqs = [
  {
    question: 'How long does a garage floor coating installation take?',
    answer: 'Most residential garages are completed in a single day. We start 8AM and typically finish by 5PM. The floor is ready to walk on in 24 hours and vehicles ready to drive in 72 hours.'
  },
  {
    question: 'Will the coating peel up from hot tires like epoxy does?',
    answer: 'No. This is one of the biggest advantages of polyaspartic over polyurea. Our polyaspartic system has excellent heat resistance and will not soften or peel from hot tires, even during Florida\'s hottest summer days.'
  },
  {
    question: 'Can you coat over existing epoxy that\'s failing?',
    answer: 'Absolutely not. Every coating we install must be poured on fresh ground concrete. If there are any previous failed epoxy coatings we make sure to professionally remove them and continue with our grind prep.'
  },
  {
    question: 'What happens if I spill oil or other fluids on the floor?',
    answer: 'Simply wipe it up. Our polyaspartic coating is non-porous and chemical resistant. Motor oil, brake fluid, antifreeze, and other automotive fluids will not stain or penetrate the surface.'
  },
  {
    question: 'How do I choose decorative flake colors?',
    answer: 'We bring sample boards showing popular flake combinations that work well with different home styles. Many customers choose neutral blends that complement their home\'s exterior or go with bold colors that hide dirt and tire marks.'
  },
  {
    question: 'Is the coating slippery when wet?',
    answer: 'No more than regular concrete. The decorative flakes actually provide texture that improves traction. For additional slip resistance, we can add texture additives to the topcoat.'
  },
  {
    question: 'What kind of warranty do you provide?',
    answer: 'We provide a comprehensive 15 year warranty covering materials and labor. This covers delamination, cracking and yellowing of coating. Normal wear from proper use is expected over many years.'
  }
];

export default function GarageFloorCoatingsPage() {
  const serviceData = generateServiceStructuredData(
    'Garage Floor Coatings',
    'Premium polyurea and polyaspartic garage floor coatings in Jacksonville FL. Oil resistant, no hot tire pickup, 15 year warranty. Licensed family business since 2024.'
  );
  
  const faqData = generateFAQStructuredData(faqs);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      
      <Hero
        title="Jacksonville garage concrete coating specialists"
        subtitle="Jacksonville's family owned garage floor coating experts delivering premium polyurea and polyaspartic systems since 2020. Licensed, insured, and trusted by Jacksonville homeowners for superior coating installation."
        showImage={true}
        imageDescription="Beautiful garage floor polyurea coating with decorative flakes in Jacksonville home"
        ctaPrimary={ctaText.primary}
        ctaSecondary="Call Now: 904-540-9693"
      />

      {/* Main Content Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-8 text-gray-900">
                Why Jacksonville Homeowners Choose Our Advanced Polyurea and Polyaspartic Systems
              </h2>
            </div>
            
            <div className="prose prose-xl max-w-none mb-16">
              <div className="grid md:grid-cols-1 gap-8 text-lg">
                <p className="leading-relaxed">
                  Your Jacksonville garage floor takes a beating from Florida's harsh conditions. Hot sun, oil spills, chemical exposure, and constant traffic 
                  demand a durable poly concrete coating system that can handle it all. Traditional garage floor epoxy looks good initially but fails when 
                  you need it most - peeling from hot tires, yellowing under Jacksonville's intense UV exposure, and staining from automotive fluids.
                </p>
                
                <p className="leading-relaxed">
                  Our advanced Polyurea and polyaspartic garage floor systems solve these problems permanently. Engineered specifically for Jacksonville's harsh 
                  climate, these premium concrete coatings deliver unmatched durability, chemical resistance, and visual appeal that 
                  lasts decades, not years - far superior to basic garage epoxy options.
                </p>

                <p className="leading-relaxed">
                  As Jacksonville's leading <Link href="/services" className="text-blue-600 hover:text-blue-800 underline font-medium">epoxy and concrete coating specialists</Link>, we've transformed thousands of Jacksonville area garages throughout 
                  Northeast Florida, from downtown Jacksonville to Ponte Vedra to Orange Park. Every epoxy floor installation includes our comprehensive lifetime 
                  warranty because we know our garage floor epoxy systems will perform when traditional epoxy fails. Looking to coat other areas? We also specialize in 
                  <Link href="/services/pool-deck-coatings" className="text-blue-600 hover:text-blue-800 underline font-medium"> Jacksonville pool deck coatings</Link> and 
                  <Link href="/services/patio-coatings" className="text-blue-600 hover:text-blue-800 underline font-medium"> Jacksonville patio coatings</Link> using the same premium epoxy and polyaspartic systems.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 card-content-enhanced h-full flex flex-col">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 flex-grow-0">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed flex-grow">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jacksonville Garage Transformations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the dramatic difference our polyaspartic garage floor coatings make. From oil-stained concrete 
                to showroom-quality floors that resist everything life throws at them.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--1.jpg"
                    alt="Deer Creek garage transformation - before and after garage floor coating in Jacksonville"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    Deer Creek
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Residential Garage Makeover</h3>
                  <p className="text-sm text-gray-600">Decorative flake system with oil-resistant finish</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Cappuccino job, /cappuccino-job--1.jpg"
                    alt="Cappuccino flake garage floor coating transformation in Jacksonville"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    Cappuccino Flakes
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Cappuccino Flake System</h3>
                  <p className="text-sm text-gray-600">Warm brown tones with premium durability</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--1.jpg"
                    alt="Quicksilver garage floor coating for luxury car storage in Ponte Vedra"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    Luxury Grade
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Quicksilver Luxury Finish</h3>
                  <p className="text-sm text-gray-600">Perfect for high-end vehicle storage</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-gray-900">
                Our Proven 4-Step Installation Process
              </h2>
            </div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2 flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={
                          index === 0 ? '/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--2.jpg' :
                          index === 1 ? '/images/Portfolio/Cappuccino job, /cappuccino-job--5.jpg' :
                          index === 2 ? '/images/Portfolio/Three car garage/three-car-garage-2.jpg' :
                          '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--4.jpg'
                        }
                        alt={`Step ${step.step}: ${step.title} - Professional garage floor coating process in Jacksonville`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Jacksonville Area Coverage
              </h3>
              <p className="text-center text-gray-600 mb-4">
                We proudly serve homeowners throughout Northeast Florida, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {businessInfo.serviceAreas.map((area, index) => (
                  <div key={index} className="font-medium text-gray-700">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FlakeGallery />

      {/* Local Trust Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by St. Johns County Families Since 2024
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Coatings Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">15 Year Warranty</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                "We live and work in this community. When you choose Brightway Coatings, you're supporting a local 
                family business that stands behind every installation. Our reputation depends on your satisfaction."
              </p>
              <p className="font-semibold">- Paul Brightway, Owner</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      
      <FAQSection faqs={faqs} title="Garage Floor Coating Questions" />

      <CTABand
        title="Ready to Transform Your Garage?"
        description="Join thousands of satisfied Jacksonville homeowners with a premium polyaspartic garage floor"
        primaryCTA={ctaText.primary}
        
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
