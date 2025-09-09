import { Button } from '@/components/ui/button';
import { businessInfo, ctaText } from '@/data/business';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  showVideo?: boolean;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  showVideo = false,
  ctaPrimary = ctaText.primary,
  ctaSecondary = ctaText.secondary,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {showVideo && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Elegant gradient background while video loads/if unavailable */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-90"></div>
          
          {/* Animated background pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Future video element - ready for when video is available */}
          {/* 
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-concrete-coating.mp4" type="video/mp4" />
          </video>
          */}
        </div>
      )}
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
            {subtitle}
          </h2>
          {description && (
            <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {ctaPrimary}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
                {ctaSecondary}
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            {ctaText.trust}
          </p>
        </div>
      </div>
    </section>
  );
}
