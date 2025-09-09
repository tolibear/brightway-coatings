import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import Link from 'next/link';

const portfolioProjects = [
  {
    id: 1,
    title: "Mandarin Garage Transformation",
    location: "Mandarin, Jacksonville",
    service: "Garage Floor Coating",
    completedDate: "December 2023",
    rating: 5,
    beforeImage: "/images/portfolio/garage-before-1.jpg", // Placeholder
    afterImage: "/images/portfolio/garage-after-1.jpg", // Placeholder
    description: "Complete garage makeover with decorative flakes and high-gloss polyaspartic finish. Transformed from oil-stained concrete to showroom quality.",
    testimonialSnippet: "Absolutely stunning results! My garage looks better than most showrooms now.",
    customerName: "Mike R."
  },
  {
    id: 2,
    title: "Ponte Vedra Pool Deck Coating",
    location: "Ponte Vedra Beach",
    service: "Pool Deck Coating", 
    completedDate: "November 2023",
    rating: 5,
    beforeImage: "/images/portfolio/pool-before-1.jpg", // Placeholder
    afterImage: "/images/portfolio/pool-after-1.jpg", // Placeholder
    description: "Slip-resistant pool deck coating with cool-touch technology. Perfect for Florida heat with elegant stone-look finish.",
    testimonialSnippet: "Safe, beautiful, and stays cool even in summer heat. Exceeded expectations!",
    customerName: "Sarah & Tom M."
  },
  {
    id: 3,
    title: "St. Augustine Patio Makeover",
    location: "St. Augustine",
    service: "Decorative Patio Coating",
    completedDate: "October 2023", 
    rating: 5,
    beforeImage: "/images/portfolio/patio-before-1.jpg", // Placeholder
    afterImage: "/images/portfolio/patio-after-1.jpg", // Placeholder
    description: "Custom color patio coating with decorative broadcast system. UV-stable finish that won't fade in Florida sun.",
    testimonialSnippet: "Our patio is now the focal point of our backyard. Guests can't stop complimenting it!",
    customerName: "Jennifer L."
  }
];

export default function PortfolioPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Recent Jacksonville Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we&rsquo;ve transformed concrete surfaces throughout Northeast Florida. 
            Every project showcases our commitment to quality and customer satisfaction.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                {/* Before/After Image Container */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Before Image (left half) */}
                    <div className="w-1/2 relative bg-gray-300">
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        BEFORE
                      </div>
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <span className="text-sm">Before Image</span>
                      </div>
                      {/* Placeholder for actual image */}
                      {/* <Image src={project.beforeImage} alt={`${project.title} before`} fill className="object-cover" /> */}
                    </div>
                    {/* After Image (right half) */}
                    <div className="w-1/2 relative bg-blue-100">
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        AFTER
                      </div>
                      <div className="flex items-center justify-center h-full text-blue-600">
                        <span className="text-sm">After Image</span>
                      </div>
                      {/* Placeholder for actual image */}
                      {/* <Image src={project.afterImage} alt={`${project.title} after`} fill className="object-cover" /> */}
                    </div>
                  </div>
                </div>
                
                {/* Service Badge */}
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded">
                  {project.service}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({project.rating}.0)</span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.completedDate}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm italic text-blue-800">
                    &ldquo;{project.testimonialSnippet}&rdquo;
                  </p>
                  <p className="text-xs text-blue-600 mt-1 font-medium">
                    - {project.customerName}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Over 500+ successful installations throughout Northeast Florida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/portfolio">
                View Complete Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
