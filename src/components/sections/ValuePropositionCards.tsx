import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Award, Users, Sparkles } from 'lucide-react';

const valueProps = [
  {
    icon: Sparkles,
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
    title: "1-Day Installation",
    description: "Most residential concrete coating projects completed in just one day. Walk on your new floors the same evening with our advanced fast-cure polyaspartic systems."
  }
];

export default function ValuePropositionCards() {
  return (
    <section className="relative py-32 bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-repeat" 
          style={{
            backgroundImage: "url('/images/Flakes/Comet/comet.png')",
            backgroundSize: "600px 600px"
          }}
        ></div>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-white text-3xl md:text-4xl font-bold">
            Why Jacksonville Homeowners Choose Brightway for Concrete Coatings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Five key advantages that make us Jacksonville's most trusted concrete coating specialists
          </p>
        </div>
        
        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {valueProps.slice(0, 3).map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card key={index} className="bg-gray-800 border border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center card-content-enhanced h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-700 rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-4 flex-grow-0">
                    {prop.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">
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
              <Card key={index + 3} className="bg-gray-800 border border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center card-content-enhanced h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-700 rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-4 flex-grow-0">
                    {prop.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">
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
