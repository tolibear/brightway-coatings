'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { Menu, ChevronDown } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { useModal } from '@/contexts/ModalContext';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate 10% of viewport height
      const scrollThreshold = window.innerHeight * 0.1;
      const scrolled = window.scrollY > scrollThreshold;
      setIsScrolled(scrolled);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetQuote = () => {
    setIsMobileMenuOpen(false);
    openQuoteModal();
  };

  return (
    <header 
      className={`sticky top-0 z-50 -mb-24 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-gray-200 shadow-sm' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative h-[81px] w-[325px] transition-opacity duration-300"
          >
            <Image
              src={isScrolled ? '/images/Logos/light-2.png' : '/images/Logos/dark-2.png'}
              alt={`${businessInfo.name} Logo`}
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors duration-300 font-normal h-auto px-0 py-0",
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary data-[state=open]:text-primary' 
                        : 'text-white/90 hover:text-white data-[state=open]:text-white'
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              View our complete range of coating solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/garage-floor-coatings"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Garage Floor Coatings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Transform your garage with durable polyaspartic coatings
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/patio-coatings"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Patio Coatings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Beautiful, slip-resistant outdoor surfaces
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/pool-deck-coatings"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Pool Deck Coatings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Cool, safe surfaces perfect for poolside
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/commercial-floor-coatings"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Commercial Coatings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Heavy-duty solutions for businesses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/residential-floor-coatings"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Residential Coatings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Premium finishes for your home
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link 
              href="/portfolio" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
              className={`hidden sm:block font-semibold transition-colors duration-300 ${
                isScrolled 
                  ? 'text-primary hover:text-primary/80' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {businessInfo.phone}
            </a>
            <Button 
              onClick={openQuoteModal}
              className={`hidden md:inline-flex transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              Get Free Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <div>
                    <button
                      onClick={() => {
                        const servicesMenu = document.getElementById('mobile-services-menu');
                        const chevron = document.getElementById('mobile-services-chevron');
                        if (servicesMenu && chevron) {
                          servicesMenu.classList.toggle('hidden');
                          chevron.classList.toggle('rotate-180');
                        }
                      }}
                      className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors"
                    >
                      Services
                      <ChevronDown id="mobile-services-chevron" className="h-4 w-4 transition-transform duration-200" />
                    </button>
                    <div id="mobile-services-menu" className="hidden mt-2 ml-4 space-y-2">
                      <Link 
                        href="/services" 
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      <Link 
                        href="/services/garage-floor-coatings" 
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Garage Floor Coatings
                      </Link>
                      <Link 
                        href="/services/patio-coatings" 
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Patio Coatings
                      </Link>
                      <Link 
                        href="/services/pool-deck-coatings" 
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Pool Deck Coatings
                      </Link>
                      <Link 
                        href="/services/commercial-floor-coatings" 
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Commercial Coatings
                      </Link>
                      <Link 
                        href="/services/residential-floor-coatings" 
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Residential Coatings
                      </Link>
                    </div>
                  </div>
                  <Link 
                    href="/portfolio" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-4 border-t">
                    <Button 
                      onClick={handleGetQuote}
                      className="w-full mb-3"
                    >
                      Get Free Quote
                    </Button>
                    <a 
                      href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="block text-center w-full py-2 px-4 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors font-medium"
                    >
                      Call {businessInfo.phone}
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
