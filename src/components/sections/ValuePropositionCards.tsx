import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Award, Users, Zap } from 'lucide-react';

const valueProps = [
  {
    icon: Zap,
    title: "Advanced Polyurea & Polyaspartic Systems", 
    description: "Our premium Polyurea and polyaspartic coating systems outperform traditional garage floor epoxy. UV-resistant, impact-proof, and chemical-resistant for Jacksonville's demanding climate."
  },
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description: "Complete peace of mind with proper licensing, full insurance coverage, and 15 year warranty. Your investment is protected every step."
  },
  {
    icon: Users,
    title: "Jacksonville's Most Experienced Team",
    description: "Father-and-son coatings specialists with over 30 years of home service experience, 5 of those in the coatings industry. Meticulous attention to detail in every concrete coating installation."
  },
  {
    icon: Award,
    title: "15 Year Durability Promise",
    description: "Built to last decades, not years. Our systems handle heavy traffic, hot tires, and harsh weather without fading or chipping."
  },
  {
    icon: Clock,
    title: "Complete Concrete Coating Solutions",
    description: "From residential garages to commercial warehouses, we deliver custom coating solutions engineered for your specific needs and environment"
  }
];

export default function ValuePropositionCards() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-gray-900">
            Why Jacksonville Homeowners Choose Brightway for Concrete Coatings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five key advantages that make us Jacksonville's most trusted concrete coating specialists
          </p>
        </div>
        
        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {valueProps.slice(0, 3).map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 h-full">
                <CardContent className="p-8 text-center card-content-enhanced h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 flex-grow-0">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {valueProps.slice(3, 5).map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card key={index + 3} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 h-full">
                <CardContent className="p-8 text-center card-content-enhanced h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 flex-grow-0">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
