import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData, generateFAQStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Clock, Star, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garage Floor Coatings Jacksonville FL | Brightway',
  description: 'Premium polyaspartic garage floor coatings in Jacksonville FL. Oil resistant, no hot tire pickup, lifetime warranty. Licensed family business since 1990.',
  keywords: ['garage floor coating Jacksonville', 'polyaspartic garage floors', 'garage floor epoxy Jacksonville', 'garage flooring FL', 'concrete garage floors'],
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
    title: 'Lifetime Warranty',
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
    title: 'Prime Coat Application',
    description: 'A specialized primer penetrates deep into the concrete, creating an unbreakable bond between your floor and coating system.'
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
    answer: 'Most residential garages are completed in a single day. We start early morning and typically finish by late afternoon. The floor is ready to walk on immediately and ready for vehicles the next morning.'
  },
  {
    question: 'Will the coating peel up from hot tires like epoxy does?',
    answer: 'No. This is one of the biggest advantages of polyaspartic over epoxy. Our polyaspartic system has excellent heat resistance and will not soften or peel from hot tires, even during Florida\'s hottest summer days.'
  },
  {
    question: 'Can you coat over existing epoxy that\'s failing?',
    answer: 'In many cases, yes. We evaluate each situation individually. If the existing epoxy is well-bonded, we can often apply our polyaspartic system over it. If it\'s failing or poorly bonded, we\'ll remove it first for the best long-term results.'
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
    answer: 'We provide a comprehensive lifetime warranty covering materials and labor. This covers delamination, excessive wear, and manufacturing defects. Normal wear from proper use is expected over many years.'
  }
];

export default function GarageFloorCoatingsPage() {
  const serviceData = generateServiceStructuredData(
    'Garage Floor Coatings',
    'Premium polyaspartic garage floor coatings in Jacksonville FL. Oil resistant, no hot tire pickup, lifetime warranty. Licensed family business since 1990.'
  );
  
  const faqData = generateFAQStructuredData(faqs);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      
      <Hero
        title="Jacksonville Garage Floor Coatings"
        subtitle="Family-owned experts delivering premium polyaspartic garage floor systems since 1990. Licensed, insured, and trusted by thousands of Jacksonville homeowners."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-671-2686"
        
      />

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Jacksonville Homeowners Choose Polyaspartic Over Epoxy
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Your garage floor takes a beating. Hot Florida sun, oil spills, chemical exposure, and constant traffic 
                demand a coating system that can handle it all. Traditional epoxy looks good initially but fails when 
                you need it most - peeling from hot tires, yellowing under UV exposure, and staining from automotive fluids.
              </p>
              
              <p>
                Our polyaspartic garage floor coatings solve these problems permanently. Engineered for Florida's harsh 
                climate, these premium systems deliver unmatched durability, chemical resistance, and visual appeal that 
                lasts decades, not years.
              </p>

              <p>
                As Jacksonville's leading <Link href="/services" className="text-blue-600 hover:text-blue-800 underline">concrete coating specialists</Link>, we've transformed thousands of garages throughout 
                St. Johns County, from Ponte Vedra to Orange Park. Every installation includes our comprehensive lifetime 
                warranty because we know our system will perform when others fail. Looking to coat other areas? We also specialize in 
                <Link href="/services/pool-deck-coatings" className="text-blue-600 hover:text-blue-800 underline"> pool deck coatings</Link> and 
                <Link href="/services/patio-coatings" className="text-blue-600 hover:text-blue-800 underline"> patio coatings</Link> using the same premium polyaspartic systems.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Proven 4-Step Installation Process
            </h2>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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

      {/* Local Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by St. Johns County Families Since 1990
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Lifetime Warranty</div>
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
