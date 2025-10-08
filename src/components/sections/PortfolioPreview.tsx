import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import Link from 'next/link';

const portfolioProjects = [
  {
    id: 1,
    title: "Green Cove Shop Transformation",
    location: "Green Cove Springs, Jacksonville",
    service: "Shop Floor Coating",
    completedDate: "May 2025",
    rating: 5,
    beforeImage: "/images/Home Page/Green cove shop transformation /green-cove-shop-transformation--1.jpg",
    afterImage: "/images/Home Page/Green cove shop transformation /green-cove-shop-transformation--8.jpg",
    description: "Complete shop makeover with decorative flakes and commercial grade polyaspartic finish. Transformed from oil-stained concrete to showroom quality.",
    testimonialSnippet: "Shoutout to Brightway Coatings for the awesome job! Family owned and operated by Paul and his sons. They were very knowledgeable and professional, answering all our questions about the project we were planning. We are very happy with the amazing job they did on our workshop floor! It looks great and we are happy, happy customers!",
    customerName: "Joe Phoebus III"
  },
  {
    id: 2,
    title: "Vilano Beach Pool Deck Coating",
    location: "Vilano Beach",
    service: "Pool Deck Coating", 
    completedDate: "July 2025",
    rating: 5,
    beforeImage: "/images/Home Page/Vilano beach pool deck /vilano-beach-pool-deck--1.jpg",
    afterImage: "/images/Home Page/Vilano beach pool deck /vilano-beach-pool-deck--7.jpg",
    description: "Slip-resistant pool deck coating with cool-touch technology. Perfect for Florida heat with elegant stone-look finish.",
    testimonialSnippet: "Safe, beautiful, and stays cool even in summer heat. Exceeded expectations!",
    customerName: "Ronald Fossati"
  },
  {
    id: 3,
    title: "Deer Creek Garage Makeover",
    location: "Deer Creek, Jacksonville",
    service: "Garage Floor Coating",
    completedDate: "January 2025", 
    rating: 5,
    beforeImage: "/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--1.jpg",
    afterImage: "/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--6.jpg",
    description: "Tim and Paul at Brightway Coatings did an amazing job on my garage floor. The flake system they installed looks fantastic and really gives the space a clean, polished look.",
    testimonialSnippet: "Tim and Paul were professional, on time, and clearly take pride in their work. We couldn't be happier with the result—highly recommend these guys if you're looking to upgrade your garage floor!",
    customerName: "Valentin Borishkevich"
  }
];

export default function PortfolioPreview() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
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
                    <div className="w-1/2 relative overflow-hidden">
                      <img 
                        src={project.beforeImage} 
                        alt={`${project.title} before transformation - ${project.location}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        BEFORE
                      </div>
                    </div>
                    {/* After Image (right half) */}
                    <div className="w-1/2 relative overflow-hidden">
                      <img 
                        src={project.afterImage} 
                        alt={`${project.title} after transformation - ${project.location}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        AFTER
                      </div>
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
                
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary/90 transition-colors">
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
                
                <div className="bg-primary/5 p-3 rounded-lg mb-4">
                  <p className="text-sm italic text-primary/80">
                    &ldquo;{project.testimonialSnippet}&rdquo;
                  </p>
                  <p className="text-xs text-primary mt-1 font-medium">
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
