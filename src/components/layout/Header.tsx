'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/business';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <Link 
              href="/" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </Link>
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
          
          {/* CTA Button */}
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
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
