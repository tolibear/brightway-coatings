import { Button } from '@/components/ui/button';
import { businessInfo, ctaText } from '@/data/business';

interface CTABandProps {
  title: string;
  description: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  backgroundColor?: 'blue' | 'gray' | 'white';
}

export default function CTABand({
  title,
  description,
  primaryCTA = ctaText.primary,
  secondaryCTA = ctaText.secondary,
  backgroundColor = 'blue',
}: CTABandProps) {
  const bgClasses = {
    blue: 'bg-primary text-white',
    gray: 'bg-gray-900 text-white',
    white: 'bg-gray-50 text-gray-900',
  };

  return (
    <section className={`py-16 ${bgClasses[backgroundColor]}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button 
            size="lg"
            variant={backgroundColor === 'white' ? 'default' : 'secondary'}
            asChild
          >
            <a href="/contact">{primaryCTA}</a>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className={backgroundColor === 'white' ? 'border-gray-900' : 'border-white'}
            asChild
          >
            <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
              {secondaryCTA}
            </a>
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-80">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-1">98% Customer Satisfaction</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-current opacity-50"></div>
          <div>30+ Years Home Service • 5+ Years Coatings</div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-current opacity-50"></div>
          <div>Same-Day Response Guaranteed</div>
        </div>
      </div>
    </section>
  );
}
