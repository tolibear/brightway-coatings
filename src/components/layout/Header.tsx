'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/business';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {businessInfo.name}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
              className="hidden sm:block text-blue-600 font-semibold hover:text-blue-700"
            >
              {businessInfo.phone}
            </a>
            <Button>
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
