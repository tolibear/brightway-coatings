import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import TrustBadges from '@/components/sections/TrustBadges';
import FlakeGallery from '@/components/sections/FlakeGallery';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData, generateFAQStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Droplet, Thermometer, Footprints, Star, Clock } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Pool Deck Coatings Jacksonville FL | Slip Resistant',
  description: 'Safe, beautiful pool deck coatings in Jacksonville FL. Slip-resistant, chlorine resistant, cool-to-touch surfaces. Licensed pool coating specialists since 2024.',
  keywords: ['pool deck coating Jacksonville', 'pool deck resurfacing FL', 'slip resistant pool deck', 'cool deck coating', 'pool surround coating'],
};

const benefits = [
  {
    icon: Shield,
    title: 'Slip-Resistant Safety',
    description: 'Textured surfaces provide excellent traction for wet feet, reducing slip and fall accidents around your pool.'
  },
  {
    icon: Droplet,
    title: 'Chlorine & Chemical Resistant',
    description: 'Handles constant exposure to pool chemicals, salt water, and cleaning products without deteriorating.'
  },
  {
    icon: Thermometer,
    title: 'Cool-to-Touch Surface',
    description: 'Special formulation stays cooler than concrete, providing comfort for bare feet on hot Florida days.'
  },
  {
    icon: Footprints,
    title: 'Bare-Foot Comfortable',
    description: "Smooth, splinter-free surface that's comfortable to walk on while providing necessary traction."
  },
  {
    icon: Star,
    title: 'UV Fade Resistant',
    description: 'Maintains color and appearance despite constant sun exposure and reflection from pool water.'
  },
  {
    icon: Clock,
    title: 'Quick Installation',
    description: 'Most pool decks completed in 1-2 days, minimizing disruption to your swimming schedule.'
  }
];

const safetyFeatures = [
  {
    title: 'Slip-Resistant Texture',
    description: 'Our textured finish provides excellent grip even when wet, meeting or exceeding safety standards for pool areas.',
    icon: '🦶'
  },
  {
    title: 'Chemical Compatibility',
    description: 'Engineered to handle chlorine, bromine, salt, and other pool chemicals without degradation or discoloration.',
    icon: '🧪'
  },
  {
    title: 'Temperature Control',
    description: 'Reflects heat rather than absorbing it, keeping surfaces comfortable for bare feet throughout the day.',
    icon: '🌡️'
  },
  {
    title: 'Easy Maintenance',
    description: 'Non-porous surface prevents algae growth and makes cleaning simple with regular hosing and occasional scrubbing.',
    icon: '🧽'
  }
];

const poolTypes = [
  'In-ground swimming pools',
  'Above-ground pool surrounds',
  'Spa and hot tub areas',
  'Pool equipment areas',
  'Diving board platforms',
  'Pool house patios'
];

const faqs = [
  {
    question: 'Will the coating be slippery when wet?',
    answer: 'No. Safety is our top priority. We apply textured finishes specifically designed for wet environments. The surface provides excellent traction even when soaking wet, meeting safety standards for commercial pool facilities.'
  },
  {
    question: 'How does the coating handle pool chemicals?',
    answer: 'Our polyaspartic pool deck coatings are formulated specifically for chemical resistance. They handle chlorine, bromine, salt water, and cleaning chemicals without fading, staining, or deteriorating.'
  },
  {
    question: 'Will the surface be too hot to walk on barefoot?',
    answer: 'Our cool-deck technology reflects heat rather than absorbing it. While no surface stays completely cool in Florida sun, our coating remains significantly more comfortable than plain concrete or many other materials.'
  },
  {
    question: 'Can you coat around existing pool coping and equipment?',
    answer: 'Yes. We work carefully around existing coping, ladders, handrails, and equipment. Our system bonds well to properly prepared concrete regardless of the surrounding fixtures.'
  },
  {
    question: 'How long before we can use the pool after installation?',
    answer: 'The coating is ready for foot traffic within hours. However, we recommend waiting 24 hours before heavy use and returning pool equipment to service to ensure complete cure.'
  },
  {
    question: 'What if there are cracks in the existing deck?',
    answer: 'We address all cracks during preparation. Minor cracks are filled and sealed. Larger structural issues are repaired before coating to prevent future problems.'
  },
  {
    question: 'How do you clean algae or stains from the coated surface?',
    answer: 'The non-porous surface makes cleaning easy. Most stains and algae rinse away with a hose. Stubborn spots respond well to mild pressure washing or scrubbing with pool deck cleaners.'
  }
];

export default function PoolDeckCoatingsPage() {
  const serviceData = generateServiceStructuredData(
    'Pool Deck Coatings',
    'Safe, slip-resistant pool deck coatings in Jacksonville FL. Chlorine resistant, cool-to-touch surfaces, 15 year warranty. Licensed pool coating specialists since 2024.'
  );
  
  const faqData = generateFAQStructuredData(faqs);

  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your Pool Deck?"
        subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for safe, beautiful pool deck transformations with slip-resistant surfaces and unmatched durability."
      />
      
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      
      <Hero
        title="Jacksonville Pool Deck Coatings"
        subtitle="As Jacksonville's pool coating specialists since 2024, we understand the unique demands pool environments place on surface coatings. Our polyaspartic system is specifically formulated for wet areas, delivering the traction, chemical resistance, and temperature control that make pools safer and more enjoyable."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-540-9693"
        
      />

      {/* Main Content Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Safety and Comfort Around Your Pool
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Your pool should be a place of relaxation and fun, not worry about slips, burns, or maintenance headaches. 
                Florida's intense sun makes concrete pool decks dangerously hot, while constant moisture creates slippery 
                conditions that lead to accidents. Traditional concrete also absorbs pool chemicals, leading to staining, 
                deterioration, and costly repairs.
              </p>
              
              <p>
                Our specialized pool deck coatings solve these problems with engineered surfaces that prioritize safety 
                and comfort. From Ponte Vedra Beach resort pools to backyard family pools in St. Johns County, we've 
                installed slip-resistant, chemical-resistant surfaces that keep swimmers safe while looking beautiful 
                year after year.
              </p>

              <p>
                As <Link href="/about" className="text-primary hover:text-primary/80 underline">Jacksonville's pool coating specialists since 2024</Link>, we understand the unique demands pool environments 
                place on surface coatings. Our polyaspartic system is specifically formulated for wet areas, delivering 
                the traction, chemical resistance, and temperature control that make pools safer and more enjoyable. Planning 
                a complete outdoor makeover? Consider our <Link href="/services/patio-coatings" className="text-primary hover:text-primary/80 underline">patio coatings</Link> for 
                surrounding entertainment areas.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
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

      {/* Pool Deck Gallery Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jacksonville Pool Deck Transformations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our slip-resistant, cool-touch pool deck coatings transform ordinary concrete into 
                beautiful, safe surfaces perfect for Florida pool living.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Home Page/Vilano beach pool deck /vilano-beach-pool-deck--3.jpg"
                    alt="Vilano Beach pool deck coating transformation - slip resistant and cool touch"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                    Vilano Beach
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Coastal Pool Deck</h3>
                  <p className="text-sm text-gray-600">Cool-touch surface with slip-resistant texture</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-2.jpg"
                    alt="Luxury pool deck coating with chemical resistance in St. Augustine"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                    Luxury Grade
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Luxury Pool Deck</h3>
                  <p className="text-sm text-gray-600">Premium coating with UV resistance</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/Portfolio/Resort style pool/resort-style-pool-1.jpg"
                    alt="Resort style pool deck with professional coating in Ponte Vedra Beach"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                    Resort Style
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Resort Style Pool</h3>
                  <p className="text-sm text-gray-600">Large area application with tropical finish</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Engineered for Pool Environments
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{feature.icon}</span>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Perfect for All Pool Applications
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Pool Types We Serve:</h4>
                  <ul className="space-y-2">
                    {poolTypes.map((type, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary/50 rounded-full mr-3"></span>
                        <span className="text-gray-700">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Why Pool Owners Choose Us:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 5+ years of pool coating experience</li>
                    <li>• Licensed and insured for your protection</li>
                    <li>• Specialized equipment for textured finishes</li>
                    <li>• Understanding of pool chemistry effects</li>
                    <li>• 15 year warranty on materials and labor</li>
                    <li>• Fast installation to minimize pool downtime</li>
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
              Trusted by Pool Owners Throughout Northeast Florida
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Licensed</div>
                <div className="text-gray-600">& Fully Insured</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15 Year</div>
                <div className="text-gray-600">Warranty</div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Serving pool owners across Jacksonville:</strong> {businessInfo.serviceAreas.join(', ')}
              </p>
              <p className="text-gray-600">
                From luxury resort pools to family backyard pools, we bring the same professional expertise 
                to every installation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                "Why Pool Owners Choose Us: 5+ years of pool coating experience, Licensed and insured for your protection, 
                Specialized equipment for textured finishes, Understanding of pool chemistry effects, 15 year warranty on materials and labor, 
                Fast installation to minimize pool downtime"
              </p>
              <p className="font-semibold">- Paul & Tim, Brightway Coatings</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      
      <FAQSection faqs={faqs} title="Pool Deck Coating Questions" />

      <FlakeGallery />
    </>
  );
}
