import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Award, Users, Zap } from 'lucide-react';

const valueProps = [
  {
    icon: Clock,
    title: "One-Day Installation",
    description: "Most residential floors completed in a single day. No week-long disruption to your life - just beautiful, durable results fast.",
    words: 42
  },
  {
    icon: Zap,
    title: "Superior Polyaspartic Technology", 
    description: "Advanced coating system outperforms traditional epoxy. UV-resistant, impact-proof, and chemical-resistant for Florida's toughest conditions.",
    words: 38
  },
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description: "Complete peace of mind with proper licensing, full insurance coverage, and lifetime warranty. Your investment is protected every step.",
    words: 43
  },
  {
    icon: Users,
    title: "Three Decades of Craftsmanship",
    description: "Father-and-son team with over 30 years combined experience. Meticulous attention to detail in every Jacksonville installation.",
    words: 36
  },
  {
    icon: Award,
    title: "Lifetime Durability Promise",
    description: "Built to last decades, not years. Our polyaspartic system handles heavy traffic, hot tires, and harsh weather without fading or chipping.",
    words: 44
  }
];

export default function ValuePropositionCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Jacksonville Trusts Brightway Coatings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five key advantages that make us different from other concrete coating companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                  {/* Word count for reference during development */}
                  {process.env.NODE_ENV === 'development' && (
                    <span className="text-xs text-gray-400 mt-2 block">
                      {prop.words} words
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
