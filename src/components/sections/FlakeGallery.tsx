import { Button } from '@/components/ui/button';
import { Palette, ArrowRight } from 'lucide-react';

const flakeColors = [
  {
    name: "Cappucino",
    image: "/images/Home Page/Flake colors/flake-colors-1.jpg"
  },
  {
    name: "Tuxedo", 
    image: "/images/Home Page/Flake colors/flake-colors-2.jpg"
  },
  {
    name: "Gravel",
    image: "/images/Home Page/Flake colors/flake-colors-3.jpg"
  },
  {
    name: "Quicksilver",
    image: "/images/Home Page/Flake colors/flake-colors-4.jpg"
  },
  {
    name: "Comet",
    image: "/images/Home Page/Flake colors/flake-colors-5.jpg"
  },
  {
    name: "Tidal Wave",
    image: "/images/Home Page/Flake colors/flake-colors-6.jpg"
  }
];

export default function FlakeGallery() {
  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="h-8 w-8 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Decorative Flake Gallery
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your concrete with our stunning flake combinations. Each design creates unique patterns and depth.
          </p>
        </div>
        
        {/* Flake Colors Grid - 2 rows × 3 columns */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {flakeColors.map((flake, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg border-2 border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300">
              {/* Full-size Flake Image */}
              <img 
                src={flake.image} 
                alt={`${flake.name} decorative flake pattern`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              
              {/* Overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Flake Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-base text-white text-center">
                  {flake.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to See Your Custom Design?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team brings physical flake samples to your consultation, so you can see exactly 
            how your chosen colors will look in your space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Color Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              View Portfolio
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Free color matching • 100+ combinations • Custom designs available
          </p>
        </div>
      </div>
    </section>
  );
}
