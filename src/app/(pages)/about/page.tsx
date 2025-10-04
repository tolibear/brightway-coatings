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
  description: 'Meet the family behind Jacksonville\'s premier concrete coating company. 30+ years home service experience, 5+ years coatings expertise, licensed and insured, serving St. Johns County with pride.',
  keywords: ['about Brightway Coatings', 'family concrete coating business Jacksonville', 'Paul and Tim Brightway owners', 'St Johns concrete contractors', 'family business FL'],
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
    title: '15 Year Warranty',
    description: 'Comprehensive warranty coverage backed by premium materials and professional installation.'
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
    year: '1980s',
    title: 'The Immigration',
    description: 'Paul immigrated from Ukraine at the age of six, started working alongside his father in the family construction services business.'
  },
  {
    year: '1990s-2020',
    title: 'Building Experience',
    description: 'After spending 30+ years honing his skills, Paul went on to start his own construction services company, continuing the tradition of quality and craftsmanship.'
  },
  {
    year: '2024',
    title: 'Brightway Coatings Founded',
    description: 'Paul and his son Tim launched Brightway Coatings, focusing on providing high-quality concrete coatings for residential and commercial customers.'
  },
  {
    year: 'Today',
    title: 'Third Generation American',
    description: 'Paul has the privilege of working alongside his son, Tim, in the same way he once worked with his father. At Brightway Coatings, we\'re more than just a business, we\'re a family.'
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
                A Family Legacy of Craftsmanship
              </h2>
              
              <p>
                Brightway Coatings was founded on a legacy of hard work, family, and a commitment to excellence. 
                Our story began with Paul, who immigrated from Ukraine at the age of six, started working alongside 
                his father in the family construction services business.
              </p>
              
              <p>
                After spending 30+ years honing his skills, Paul went on to start his own construction services 
                company, continuing the tradition of quality and craftsmanship. Now, as a third generation American, 
                Paul has the privilege of working alongside his son, Tim, in the same way he once worked with his father.
              </p>

              <p>
                Tim grew up in the business, and together they launched Brightway Coatings in 2024, focusing on 
                providing high-quality concrete coatings for residential and commercial customers throughout Jacksonville 
                and Northeast Florida. You can see examples of our craftsmanship in our 
                <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 underline">project portfolio</Link>.
              </p>

              <p>
                At Brightway Coatings, we're more than just a business, we're a family. We take pride in building 
                lasting relationships with our customers, and we treat every project as an opportunity to deliver 
                the highest quality work while building trust and connection.
              </p>

              <p>
                This is why our core values are centered around quality craftsmanship and a relational approach to 
                doing business, rather than just transactional interactions. When you choose Brightway Coatings, 
                you're partnering with a father-and-son team that brings 30+ years of home service expertise and 
                5+ years of specialized coatings experience to every project.
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
                "We take pride in building lasting relationships with our customers, and we treat every project 
                as an opportunity to deliver the highest quality work while building trust and connection. This is 
                why our core values are centered around quality craftsmanship and a relational approach to doing 
                business, rather than just transactional interactions."
              </p>
              <p className="font-semibold text-lg">- Paul & Tim, Brightway Coatings</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years Home Service Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Coatings Expertise</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction Rate</div>
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
        description="Join satisfied Jacksonville families who chose quality, reliability, and family values"
        primaryCTA={ctaText.primary}
        secondaryCTA={ctaText.secondary}
      />
    </>
  );
}
