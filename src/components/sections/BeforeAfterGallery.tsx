import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import Link from 'next/link';

interface BeforeAfterImage {
  beforeAlt: string;
  afterAlt: string;
  location: string;
  service: string;
}

interface BeforeAfterGalleryProps {
  title?: string;
  description?: string;
  showCTA?: boolean;
}

const galleryImages: BeforeAfterImage[] = [
  {
    beforeAlt: 'Stained concrete garage floor before coating in Nocatee',
    afterAlt: 'Beautiful polyaspartic garage floor coating with decorative flakes in Nocatee',
    location: 'Nocatee',
    service: 'Garage Floor Coating'
  },
  {
    beforeAlt: 'Cracked patio concrete before repair and coating in Ponte Vedra',
    afterAlt: 'Restored patio with slip-resistant coating in Ponte Vedra',
    location: 'Ponte Vedra',
    service: 'Patio Coating'
  },
  {
    beforeAlt: 'Dated pool deck surface before renovation in St. Augustine',
    afterAlt: 'Modern pool deck with decorative coating in St. Augustine',
    location: 'St. Augustine', 
    service: 'Pool Deck Coating'
  },
  {
    beforeAlt: 'Plain residential concrete floor before transformation in Jacksonville',
    afterAlt: 'Elegant residential floor coating with custom flakes in Jacksonville',
    location: 'Jacksonville',
    service: 'Residential Coating'
  }
];

/**
 * BeforeAfterGallery component showcasing transformation results
 * 
 * @param props - BeforeAfterGalleryProps
 * @returns JSX.Element
 */
export default function BeforeAfterGallery({
  title = 'Real Jacksonville Transformations',
  description = 'See the dramatic difference our premium coatings make for homeowners throughout Northeast Florida.',
  showCTA = true
}: BeforeAfterGalleryProps) {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="space-y-4 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Before Image */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Before</h4>
                        <ImagePlaceholder
                          alt={image.beforeAlt}
                          aspectRatio="square"
                          variant="gray"
                          className="w-full"
                        />
                      </div>
                      
                      {/* After Image */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">After</h4>
                        <ImagePlaceholder
                          alt={image.afterAlt}
                          aspectRatio="square"
                          variant="blue"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center pt-2">
                      <h3 className="font-semibold text-gray-900">{image.service}</h3>
                      <p className="text-sm text-gray-600">{image.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {showCTA && (
            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
              <p className="text-sm text-gray-600 mt-3">
                See more transformations from across Northeast Florida
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
