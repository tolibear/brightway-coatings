import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Home, Award, Users } from 'lucide-react';
import Link from 'next/link';

const aboutStats = [
  {
    icon: Users,
    number: "30+",
    label: "Years Home Service Experience"
  },
  {
    icon: Home,
    number: "5+",
    label: "Years Coatings Experience"
  },
  {
    icon: Award,
    number: "98%",
    label: "Customer Satisfaction Rate"
  },
  {
    icon: Heart,
    number: "3rd",
    label: "Generation American Family"
  }
];

export default function AboutCallout() {
  const aboutText = `
    Brightway Coatings was founded on a legacy of hard work, family, and a commitment to excellence. Our story began with Paul, 
    who immigrated from Ukraine at the age of six, started working alongside his father in the family construction services business. 
    After spending 30+ years honing his skills, Paul went on to start his own construction services company, continuing the tradition 
    of quality and craftmanship. Now, as a third generation American, Paul has the privilege of working alongside his son, Tim, in the 
    same way he once worked with his father. Tim grew up in the business, and together they launched Brightway Coatings, focusing on 
    providing high-quality concrete coatings for residential and commercial customers. At Brightway Coatings, we're more than just a 
    business, we're a family.
  `;
  

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  A Family Legacy of Craftsmanship
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {aboutText}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/about">
                    Our Complete Story
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:9045409693">
                    Meet the Team: 904-540-9693
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Stats & Visual */}
            <div className="space-y-6">
              {/* Family Values Card */}
              <Card className="bg-blue-50 border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    Father & Son Partnership
                  </h3>
                  <p className="text-gray-700">
                    Two generations working side-by-side, combining experience with innovation 
                    to deliver unmatched quality in every installation.
                  </p>
                </CardContent>
              </Card>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 text-center">
                        <div className="mb-2 flex justify-center">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-600">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
