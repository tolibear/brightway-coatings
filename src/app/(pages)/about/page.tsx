import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Shield, Clock, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Family-Owned Concrete Coatings Jacksonville',
  description: 'Meet the family behind Jacksonville\'s premier concrete coating company. 30+ years of father-and-son craftsmanship, licensed and insured, serving St. Johns County with pride.',
  keywords: ['about Brightway Coatings', 'family concrete coating business Jacksonville', 'Paul Brightway owner', 'St Johns concrete contractors', 'family business FL'],
};

const familyValues = [
  {
    icon: Heart,
    title: 'Family-First Approach',
    description: 'We treat every customer like family, taking pride in transforming their homes with care and attention to detail.'
  },
  {
    icon: Users,
    title: 'Father-and-Son Team',
    description: 'Three generations of craftsmanship working together to deliver the highest quality installations.'
  },
  {
    icon: Award,
    title: 'Decades of Excellence',
    description: 'Over 30 years perfecting our craft and building lasting relationships throughout Northeast Florida.'
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full professional licensing and comprehensive insurance protection for complete peace of mind.'
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'On-time installations, clear communication, and respectful treatment of your home and property.'
  },
  {
    icon: Home,
    title: 'Local Community',
    description: 'We live and work in St. Johns County, supporting local families and building community connections.'
  }
];

const milestones = [
  {
    year: '1990',
    title: 'The Beginning',
    description: 'Paul Brightway started the company with a commitment to quality craftsmanship and customer satisfaction.'
  },
  {
    year: '2000',
    title: 'Growing Reputation',
    description: 'Word-of-mouth referrals led to expanded services throughout Jacksonville and surrounding communities.'
  },
  {
    year: '2010',
    title: 'Technology Evolution',
    description: 'Adopted advanced polyaspartic coating systems, moving beyond traditional epoxy to deliver superior results.'
  },
  {
    year: '2020',
    title: 'Next Generation',
    description: 'The next generation joined the business, bringing fresh energy while maintaining family traditions.'
  }
];

export default function AboutPage() {
  return (
    <>
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="The Brightway Family Story"
        subtitle="From humble beginnings to Northeast Florida's most trusted concrete coating specialists, discover the family values that drive everything we do."
        ctaPrimary={ctaText.primary}
        ctaSecondary={ctaText.secondary}
      />

      {/* Family Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Building Trust, One Floor at a Time
              </h2>
              
              <p>
                In 1990, Paul Brightway had a simple vision: deliver concrete coating services with the care 
                and attention you'd give your own family's home. What started as a one-man operation has grown 
                into Northeast Florida's premier concrete transformation company, but our commitment to family 
                values remains unchanged.
              </p>
              
              <p>
                For over three decades, we've watched Jacksonville grow and change, and we've been honored to 
                be part of that journey. From the first garage floor we coated in St. Johns to the hundreds 
                of pool decks, patios, and driveways we transform each year, every project carries the weight 
                of our family name and reputation. You can see examples of our craftsmanship in our 
                <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 underline">project portfolio</Link>.
              </p>

              <p>
                What makes us different isn't just our advanced polyaspartic coating systems or our lifetime 
                warranties - it's the fact that we live and work in this community. We shop at the same stores, 
                our kids attend the same schools, and we understand what it means to invest in a home that will 
                serve your family for generations.
              </p>

              <p>
                Today, the Brightway name represents more than just concrete coatings. It represents honest 
                craftsmanship, reliable service, and the peace of mind that comes from working with people 
                who genuinely care about your satisfaction. When you choose Brightway Coatings, you're not 
                just hiring contractors - you're partnering with neighbors who take personal pride in making 
                your home more beautiful, functional, and valuable.
              </p>

              <p>
                As we look toward the future, our mission remains the same: treat every customer like family, 
                deliver work we'd be proud to show our own neighbors, and continue building the trust that has 
                made us Jacksonville's choice for premium concrete transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Values Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Values That Guide Us
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {familyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-lg">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Journey Through the Years
            </h2>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Promise to You
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
              <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                "When you invite us into your home, you're trusting us with more than just a flooring project. 
                You're trusting us with your family's comfort, safety, and investment. That's a responsibility 
                we never take lightly."
              </p>
              <p className="font-semibold text-lg">- The Brightway Family</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
                <div className="text-gray-600">Happy Families Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years in Business</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Family-Owned & Operated</div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Proudly Serving Northeast Florida
              </h3>
              <p className="text-gray-600 mb-4">
                Our family serves your family throughout:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {businessInfo.serviceAreas.map((area, index) => (
                  <div key={index} className="font-medium text-gray-700">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <CTABand
        title="Ready to Experience the Brightway Difference?"
        description="Join thousands of satisfied Jacksonville families who chose quality, reliability, and family values"
        primaryCTA={ctaText.primary}
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
