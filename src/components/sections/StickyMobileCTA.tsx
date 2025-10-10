'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { useModal } from '@/contexts/ModalContext';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openQuoteModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300);
    };

    // Check if user has dismissed the CTA before
    const dismissed = localStorage.getItem('brightway-mobile-cta-dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('brightway-mobile-cta-dismissed', 'true');
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg">
        {/* Trust text */}
        <div className="bg-primary/5 px-4 py-2 text-center">
          <p className="text-xs text-primary/90 font-medium">
            Licensed • Family-Owned • Same Day Response
          </p>
          <button
            onClick={handleDismiss}
            className="absolute right-2 top-1 p-1 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* CTA buttons */}
        <div className="flex">
          <a
            href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
            className="flex-1 bg-secondary text-white py-4 px-4 flex items-center justify-center gap-2 font-semibold hover:bg-orange-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <div className="text-center">
              <div className="text-sm">Call Now</div>
              <div className="text-xs opacity-90">{businessInfo.phone}</div>
            </div>
          </a>
          
          <button
            onClick={openQuoteModal}
            className="flex-1 bg-primary text-white py-4 px-4 flex items-center justify-center gap-2 font-semibold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="text-center">
              <div className="text-sm">Get Quote</div>
              <div className="text-xs opacity-90">Free Estimate</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
