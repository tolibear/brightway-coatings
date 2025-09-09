import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FAQSection from '@/components/sections/FAQSection';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import StructuredData from '@/components/SEO/StructuredData';
import { generateServiceStructuredData, generateFAQStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Truck, Zap, DollarSign, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Floor Coatings Jacksonville FL | Brightway',
  description: 'Heavy-duty commercial floor coatings in Jacksonville FL. Warehouses, retail, industrial facilities. High-traffic durability, chemical resistance. Licensed commercial contractor.',
  keywords: ['commercial floor coatings Jacksonville', 'industrial concrete coating FL', 'warehouse floor coating', 'retail floor coating', 'heavy duty coatings'],
};

const benefits = [
  {
    icon: Building,
    title: 'Heavy-Traffic Durability',
    description: 'Engineered to withstand forklifts, heavy machinery, and constant foot traffic without wearing or chipping.'
  },
  {
    icon: Truck,
    title: 'Chemical & Abrasion Resistant',
    description: 'Handles oils, solvents, acids, and mechanical wear that destroy ordinary concrete surfaces.'
  },
  {
    icon: Zap,
    title: 'Fast Installation',
    description: 'Minimize business disruption with quick installation schedules, often completed over weekends.'
  },
  {
    icon: DollarSign,
    title: 'Reduces Maintenance Costs',
    description: 'Eliminates concrete dust, simplifies cleaning, and reduces long-term maintenance expenses.'
  },
  {
    icon: Shield,
    title: 'Professional Appearance',
    description: 'Clean, uniform surfaces enhance your business image and create positive customer impressions.'
  },
  {
    icon: Clock,
    title: 'Minimal Downtime',
    description: 'Strategic scheduling and fast-cure systems get your business back to full operation quickly.'
  }
];

const industries = [
  {
    title: 'Manufacturing & Warehouses',
    description: 'Heavy-duty systems for production floors, loading docks, and storage areas with forklift traffic.',
    applications: ['Production floors', 'Loading docks', 'Warehouse aisles', 'Equipment areas']
  },
  {
    title: 'Retail & Showrooms',
    description: 'Attractive, durable surfaces for customer areas that handle high foot traffic and look professional.',
    applications: ['Sales floors', 'Display areas', 'Customer walkways', 'Service centers']
  },
  {
    title: 'Automotive & Service',
    description: 'Oil and chemical-resistant coatings perfect for service bays, dealerships, and automotive facilities.',
    applications: ['Service bays', 'Show rooms', 'Parts storage', 'Customer areas']
  },
  {
    title: 'Food & Beverage',
    description: 'Hygienic, easy-to-clean surfaces that meet health department standards and handle sanitizers.',
    applications: ['Production areas', 'Storage rooms', 'Loading zones', 'Prep kitchens']
  },
  {
    title: 'Healthcare & Labs',
    description: 'Non-porous surfaces that resist chemicals, facilitate cleaning, and maintain sanitary conditions.',
    applications: ['Lab floors', 'Storage areas', 'Corridors', 'Equipment rooms']
  },
  {
    title: 'Educational Facilities',
    description: 'Durable, safe surfaces for schools, universities, and training facilities with heavy daily use.',
    applications: ['Workshops', 'Cafeterias', 'Gymnasiums', 'Maintenance areas']
  }
];

const faqs = [
  {
    question: 'Can your coatings handle forklift and heavy equipment traffic?',
    answer: 'Yes. Our commercial-grade polyaspartic systems are specifically engineered for heavy traffic loads. We\'ve coated warehouses with constant forklift traffic, loading docks with pallet jack use, and manufacturing floors with heavy machinery.'
  },
  {
    question: 'How do you minimize disruption to business operations?',
    answer: 'We work with your schedule to minimize downtime. Many installations are completed over weekends or during low-activity periods. Our fast-cure systems allow areas to return to service quickly, often within 24 hours.'
  },
  {
    question: 'Do you provide different slip-resistance levels for different areas?',
    answer: 'Absolutely. We customize slip resistance based on each area\'s specific needs - smooth finishes for easy cleaning in some areas, textured surfaces for safety in others. We meet OSHA requirements for workplace safety.'
  },
  {
    question: 'What chemicals can the coating resist?',
    answer: 'Our commercial systems handle a wide range of industrial chemicals including oils, solvents, acids, cleaning chemicals, and automotive fluids. We can specify systems based on your specific chemical exposure needs.'
  },
  {
    question: 'How do you handle large commercial projects?',
    answer: 'We have the equipment, materials, and crew capacity for large-scale commercial installations. Projects are managed with detailed schedules, quality control checkpoints, and regular communication with facility managers.'
  },
  {
    question: 'What kind of warranty do you provide for commercial installations?',
    answer: 'Commercial projects receive comprehensive warranties covering materials and labor. Warranty terms are tailored to usage levels and maintenance agreements. We stand behind our work with responsive service support.'
  },
  {
    question: 'Can you work around existing equipment and operations?',
    answer: 'Yes. We regularly work in active facilities, carefully protecting equipment and coordinating with operations schedules. We can phase installations to keep critical areas operational during the coating process.'
  }
];

export default function CommercialFloorCoatingsPage() {
  const serviceData = generateServiceStructuredData(
    'Commercial Floor Coatings',
    'Heavy-duty commercial floor coatings in Jacksonville FL. Warehouses, retail, industrial facilities. High-traffic durability, chemical resistance. Licensed commercial contractor since 1990.'
  );
  
  const faqData = generateFAQStructuredData(faqs);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      
      <Hero
        title="Jacksonville Commercial Floor Coatings"
        subtitle="Professional-grade polyaspartic systems engineered for high-traffic commercial and industrial facilities. Licensed, insured, and trusted by Jacksonville businesses since 1990."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-671-2686"
        
      />

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Business - Engineered to Last
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Your business floors work harder than any surface in your facility. Constant foot traffic, 
                heavy equipment, chemical exposure, and daily wear create ongoing maintenance challenges that 
                drain your budget and disrupt operations. Damaged concrete doesn't just look unprofessional - 
                it creates safety hazards, harbor contaminants, and force expensive repairs.
              </p>
              
              <p>
                Our commercial polyaspartic floor coating systems solve these problems permanently. From 
                Jacksonville warehouses to Orange Park retail centers, we've helped hundreds of businesses 
                reduce maintenance costs, improve safety, and enhance their professional image with surfaces 
                that perform under the most demanding conditions.
              </p>

              <p>
                As Northeast Florida's commercial coating specialists, we understand business needs. Every 
                installation is scheduled to minimize disruption, completed with industrial-grade materials, 
                and backed by comprehensive warranties. Your operation gets back to full productivity quickly 
                with floors that will serve your business for decades.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-600" />
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

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Serving Jacksonville's Business Community
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {industries.map((industry, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">{application}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why Jacksonville Businesses Choose Brightway Coatings
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
                  <div className="text-sm text-gray-600 mb-3">Years in Business</div>
                  <p className="text-gray-700 text-sm">
                    Three decades of commercial experience serving Northeast Florida businesses with 
                    reliable, professional service.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600 mb-3">Commercial Projects</div>
                  <p className="text-gray-700 text-sm">
                    From small retail spaces to large warehouses, we have the experience to handle 
                    any commercial flooring challenge.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 mb-3">Service Support</div>
                  <p className="text-gray-700 text-sm">
                    Emergency response and ongoing support ensure your business floors perform when 
                    you need them most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Commercial Installation Process
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Pre-Installation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Site assessment and usage analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Custom system specification
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Detailed project timeline coordination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Equipment and area protection setup
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Installation & Completion</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Professional surface preparation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Precision coating application
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Quality control inspections
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    Maintenance training and documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by Northeast Florida Businesses
            </h2>
            
            <div className="bg-orange-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Serving commercial clients throughout:</strong> {businessInfo.serviceAreas.join(', ')}
              </p>
              <p className="text-gray-600">
                From Jacksonville's industrial corridors to St. Augustine's commercial districts, 
                we bring professional expertise to every business flooring project.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                "Commercial flooring isn't just about durability - it's about keeping your business 
                running smoothly. We understand the stakes and deliver solutions that perform."
              </p>
              <p className="font-semibold">- Paul Brightway, Commercial Division</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      
      <FAQSection faqs={faqs} title="Commercial Coating Questions" />

      <CTABand
        title="Upgrade Your Business Floors"
        description="Get heavy-duty commercial coating solutions that reduce costs and enhance your professional image"
        primaryCTA={ctaText.primary}
        
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
