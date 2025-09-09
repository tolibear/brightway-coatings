import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Home, Award, Users } from 'lucide-react';
import Link from 'next/link';

const aboutStats = [
  {
    icon: Users,
    number: "30+",
    label: "Years Combined Experience"
  },
  {
    icon: Home,
    number: "500+",
    label: "Local Projects Completed"
  },
  {
    icon: Award,
    number: "100%",
    label: "Customer Satisfaction"
  },
  {
    icon: Heart,
    number: "2nd",
    label: "Generation Family Business"
  }
];

export default function AboutCallout() {
  const aboutText = `
    Three decades ago, Paul started Brightway Coatings with a simple promise: treat every customer&rsquo;s home like our own. 
    Today, alongside his son, we continue that tradition throughout St. Johns County and Jacksonville. We&rsquo;re not the biggest 
    coating company in Northeast Florida, but we&rsquo;re the most meticulous. Every surface we transform reflects our family 
    name and reputation built on honest work, premium materials, and old-school craftsmanship. When you choose Brightway, 
    you&rsquo;re not just getting a floor coating - you&rsquo;re getting neighbors who stand behind their work with a handshake 
    and a lifetime warranty.
  `;
  
  // Count words (for development reference)
  const wordCount = aboutText.trim().split(/\s+/).length;

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
                {/* Word count for development reference */}
                {process.env.NODE_ENV === 'development' && (
                  <span className="text-xs text-gray-400 block mt-2">
                    Word count: {wordCount}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/about">
                    Our Complete Story
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:9046712686">
                    Meet the Team: 904-671-2686
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
