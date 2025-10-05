'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-gray-200 shadow-sm' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}
          >
            {businessInfo.name}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
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
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {businessInfo.phone}
            </a>
            <Button 
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
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
