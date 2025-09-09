import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Car, Home, Waves, Building, Palette } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Car,
    title: "Garage Floor Coatings",
    slug: "/services/garage-floor-coatings",
    description: "Transform your garage into a showroom with slip-resistant polyaspartic coatings. Handles hot tires, oil spills, and heavy traffic while adding significant home value with stunning visual appeal.",
    words: 37,
    highlight: "Hot Tire Resistant"
  },
  {
    icon: Palette,
    title: "Decorative Patio Coatings",
    slug: "/services/patio-coatings", 
    description: "Create beautiful outdoor living spaces with UV-stable coatings that won't fade or peel. Custom colors and decorative flakes turn concrete patios into entertainment-ready surfaces that last decades.",
    words: 35,
    highlight: "UV-Stable & Fade-Proof"
  },
  {
    icon: Waves,
    title: "Pool Deck Coatings",
    slug: "/services/pool-deck-coatings",
    description: "Safety meets style with slip-resistant pool deck surfaces. Cool to the touch even in Florida heat, these coatings provide secure footing around water while resisting chlorine and pool chemicals completely.",
    words: 35,
    highlight: "Cool-Touch Technology"
  },
  {
    icon: Home,
    title: "Residential Floor Coatings", 
    slug: "/services/residential-floor-coatings",
    description: "Whole-home concrete transformation for basements, workshops, and living areas. Moisture-barrier protection prevents mold while creating easy-to-clean surfaces perfect for Florida's humid climate and active lifestyles.",
    words: 33,
    highlight: "Moisture Protection"
  },
  {
    icon: Building,
    title: "Commercial Floor Coatings",
    slug: "/services/commercial-floor-coatings", 
    description: "Industrial-strength solutions for warehouses, showrooms, and retail spaces. Chemical-resistant formulations withstand heavy equipment, constant foot traffic, and harsh cleaning protocols while maintaining professional appearance.",
    words: 31,
    highlight: "Heavy-Duty Performance"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Complete Concrete Coating Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From residential garages to commercial warehouses, we deliver custom polyaspartic solutions 
            engineered for your specific needs and environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="h-8 w-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {service.highlight}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button 
                      asChild
                      variant="ghost" 
                      className="w-full group-hover:bg-blue-50 transition-colors"
                    >
                      <Link href={service.slug} className="flex items-center justify-center gap-2">
                        Learn More 
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Word count for reference during development */}
                  {process.env.NODE_ENV === 'development' && (
                    <span className="text-xs text-gray-400 mt-2 text-center">
                      {service.words} words
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Not sure which coating is right for you?
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
