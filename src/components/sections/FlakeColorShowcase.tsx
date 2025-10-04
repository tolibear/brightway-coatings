import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FlakeOption {
  name: string;
  description: string;
  baseColor: string;
  flakeColors: string[];
  popular?: boolean;
  style: 'modern' | 'classic' | 'industrial' | 'elegant';
}

interface FlakeColorShowcaseProps {
  title?: string;
  description?: string;
  showCTA?: boolean;
}

const flakeOptions: FlakeOption[] = [
  {
    name: "Granite Storm",
    description: "Popular blend of gray, black, and white flakes for a sophisticated, timeless look",
    baseColor: "#4a5568",
    flakeColors: ["#2d3748", "#f7fafc", "#718096"],
    popular: true,
    style: "classic"
  },
  {
    name: "Sunset Canyon",
    description: "Warm oranges, browns, and golds create a rich, welcoming appearance",
    baseColor: "#c05621",
    flakeColors: ["#dd6b20", "#744210", "#fbd38d"],
    popular: false,
    style: "modern"
  },
  {
    name: "Ocean Breeze",
    description: "Cool blues and whites with silver accents for a fresh, coastal feel",
    baseColor: "#2b6cb0",
    flakeColors: ["#3182ce", "#f7fafc", "#a0aec0"],
    popular: true,
    style: "modern"
  },
  {
    name: "Forest Trail",
    description: "Earthy greens and browns with tan highlights for a natural outdoor look",
    baseColor: "#38a169",
    flakeColors: ["#48bb78", "#744210", "#d69e2e"],
    popular: false,
    style: "classic"
  },
  {
    name: "Charcoal Elite",
    description: "Premium black and silver combination for modern, industrial sophistication",
    baseColor: "#1a202c",
    flakeColors: ["#2d3748", "#a0aec0", "#f7fafc"],
    popular: true,
    style: "industrial"
  },
  {
    name: "Sedona Red",
    description: "Rich terra cotta with cream and brown accents for southwestern elegance",
    baseColor: "#c53030",
    flakeColors: ["#e53e3e", "#fbb6ce", "#744210"],
    popular: false,
    style: "elegant"
  },
  {
    name: "Arctic White",
    description: "Clean white base with subtle gray and silver flakes for minimalist appeal",
    baseColor: "#f7fafc",
    flakeColors: ["#e2e8f0", "#a0aec0", "#718096"],
    popular: true,
    style: "modern"
  },
  {
    name: "Desert Sage",
    description: "Muted greens and beiges with gold highlights for a serene, organic feel",
    baseColor: "#68d391",
    flakeColors: ["#9ae6b4", "#d69e2e", "#f7fafc"],
    popular: false,
    style: "elegant"
  }
];

/**
 * FlakeColorShowcase component displaying decorative flake options
 * 
 * @param props - FlakeColorShowcaseProps
 * @returns JSX.Element
 */
export default function FlakeColorShowcase({
  title = "Choose Your Perfect Color Combination",
  description = "Every coating includes your choice of decorative flakes to match your style and home's aesthetic. All color combinations are included at no extra cost.",
  showCTA = true
}: FlakeColorShowcaseProps) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-gray-900">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {flakeOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 h-full ${
                  option.popular ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Color Preview */}
                  <div className="mb-6 relative">
                    <div
                      className="w-full h-32 rounded-lg overflow-hidden relative"
                      style={{ backgroundColor: option.baseColor }}
                    >
                      {/* Flake Effect Simulation */}
                      <div className="absolute inset-0 opacity-80">
                        {option.flakeColors.map((flakeColor, flakeIndex) => (
                          <div key={flakeIndex} className="absolute inset-0">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute rounded-full opacity-70"
                                style={{
                                  backgroundColor: flakeColor,
                                  width: Math.random() * 6 + 3 + 'px',
                                  height: Math.random() * 6 + 3 + 'px',
                                  left: Math.random() * 90 + '%',
                                  top: Math.random() * 90 + '%',
                                  transform: `rotate(${Math.random() * 360}deg)`,
                                }}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                      
                      {/* Popular Badge */}
                      {option.popular && (
                        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    {/* Style Badge */}
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full capitalize">
                      {option.style}
                    </div>
                  </div>

                  {/* Flake Name & Description */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 mb-3">
                      {option.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Color Palette */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Color Palette:</span>
                      <div className="flex space-x-1">
                        <div
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: option.baseColor }}
                          title="Base Color"
                        />
                        {option.flakeColors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: color }}
                            title={`Flake Color ${colorIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {showCTA && (
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Can't Decide? We'll Help You Choose
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our color experts will bring samples to your home and help you select the perfect combination 
                that complements your space and personal style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Schedule Free Color Consultation</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a href="tel:904-540-9693">Call 904-540-9693</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
