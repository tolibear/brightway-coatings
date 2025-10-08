import { Button } from '@/components/ui/button';
import { businessInfo, ctaText } from '@/data/business';
import ImagePlaceholder from '@/components/ui/image-placeholder';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  showVideo?: boolean;
  showImage?: boolean;
  showTimAndPaul?: boolean;
  imageDescription?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  showVideo = false,
  showImage = false,
  showTimAndPaul = false,
  imageDescription = 'Professional garage floor coating installation in Jacksonville',
  ctaPrimary = ctaText.primary,
  ctaSecondary = ctaText.secondary,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white -mt-16 pt-16">
      {showVideo && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Elegant gradient background while video loads/if unavailable */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-90"></div>
          
          {/* Animated background pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Background video element */}
          <video
            className="w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/Epoxy_Flooring_Video_Ready_optimized.mp4" type="video/mp4" />
          </video>
          
          {/* Soft gradient overlay - left and right fade to center */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-70"></div>
        </div>
      )}
      
      {showImage && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
          <div className="w-full h-full">
            <img 
              src="/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--4.jpg"
              alt={imageDescription}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      )}
      
      <div className="relative container mx-auto px-4 py-32 md:py-40 lg:py-48">
        {showTimAndPaul ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
                {subtitle}
              </h2>
              {description && (
                <p className="text-lg mb-8 text-gray-200">
                  {description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {ctaPrimary}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
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

            {/* Image Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg aspect-square relative group">
                <a 
                  href="/about"
                  className="block w-full h-full relative"
                >
                  <img
                    src="/images/Home Page/tim-and-paul.png"
                    alt="Tim and Paul - Father and son team behind Brightway Coatings Jacksonville"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-2 transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl cursor-pointer"
                    loading="eager"
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-sm font-medium">
                    <span className="text-primary">Read our story</span>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
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
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {ctaPrimary}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
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
        )}
      </div>
    </section>
  );
}
