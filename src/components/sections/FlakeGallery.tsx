import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Sparkles, Eye, ArrowRight } from 'lucide-react';

const flakeOptions = [
  {
    name: "Classic Gray Blend",
    description: "Timeless combination of gray and black flakes with subtle white accents",
    colors: ["#4A5568", "#2D3748", "#E2E8F0"],
    popularity: "Most Popular",
    bestFor: "Garages, workshops"
  },
  {
    name: "Coastal Blue Mix", 
    description: "Ocean-inspired blues with white and gray for a coastal Florida feel",
    colors: ["#3182CE", "#4299E1", "#F7FAFC"],
    popularity: "Trending",
    bestFor: "Pool decks, patios"
  },
  {
    name: "Sunset Blend",
    description: "Warm browns and tans with gold accents for rich, natural appeal",
    colors: ["#D69E2E", "#C05621", "#F7FAFC"],
    popularity: "Premium",
    bestFor: "Living areas, showrooms"
  },
  {
    name: "Charcoal Storm",
    description: "Bold charcoal with metallic silver flakes for modern industrial look",
    colors: ["#2D3748", "#4A5568", "#CBD5E0"],
    popularity: "Bold Choice",
    bestFor: "Commercial, modern homes"
  },
  {
    name: "Forest Green Mix",
    description: "Natural greens with earth tones for outdoor-inspired spaces",
    colors: ["#38A169", "#2F855A", "#F0FDF4"],
    popularity: "Nature Lover",
    bestFor: "Patios, garden rooms"
  },
  {
    name: "Desert Sand",
    description: "Warm beiges and browns mimicking Florida&rsquo;s natural landscape",
    colors: ["#D69E2E", "#B7791F", "#FFFAF0"],
    popularity: "Elegant",
    bestFor: "Residential, upscale areas"
  }
];

export default function FlakeGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Custom Colors & Decorative Flakes
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Transform your concrete into a work of art with our extensive selection of decorative flakes and custom color combinations. 
            Each blend creates unique patterns and depth that make your floor truly one-of-a-kind.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <Sparkles className="h-4 w-4" />
              <span>100+ Color Combinations</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Eye className="h-4 w-4" />
              <span>Hides Imperfections</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Palette className="h-4 w-4" />
              <span>Custom Match Available</span>
            </div>
          </div>
        </div>
        
        {/* Flake Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {flakeOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden">
              <div className="relative">
                {/* Color Preview */}
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {option.colors.map((color, colorIndex) => (
                      <div 
                        key={colorIndex}
                        className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{backgroundColor: color}}
                      />
                    ))}
                  </div>
                  
                  {/* Flake Effect Simulation */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Popularity Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {option.popularity}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {option.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="text-xs text-green-700 font-medium mb-4">
                    Best for: {option.bestFor}
                  </div>
                  
                  {/* Color Dots */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Colors:</span>
                    <div className="flex gap-1">
                      {option.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{backgroundColor: color}}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to See Your Custom Design?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our design team will bring physical flake samples to your consultation, so you can see exactly 
            how your chosen colors will look in your space with your lighting conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Color Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View More Examples
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Free color matching • Over 100 combinations • Bring your inspiration photos
          </p>
        </div>
      </div>
    </section>
  );
}
