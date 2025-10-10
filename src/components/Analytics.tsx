'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics 4 tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId) return;

    const url = pathname + searchParams.toString();
    
    // Track page views
    if (window.gtag) {
      window.gtag('config', gaId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, gaId]);

  if (!gaId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track conversions
export function trackConversion(conversionType: 'quote' | 'consultation' | 'phone' | 'form') {
  trackEvent('conversion', 'Lead Generation', conversionType, 1);
}

// Track phone clicks
export function trackPhoneClick(phoneNumber: string) {
  trackEvent('click', 'Phone Call', phoneNumber);
  trackConversion('phone');
}

// Track form submissions
export function trackFormSubmission(formType: 'quote_modal' | 'consultation_modal' | 'contact_page') {
  trackEvent('submit', 'Form', formType);
  
  if (formType === 'quote_modal') {
    trackConversion('quote');
  } else if (formType === 'consultation_modal') {
    trackConversion('consultation');
  } else {
    trackConversion('form');
  }
}

// Track CTA clicks
export function trackCTAClick(ctaText: string, location: string) {
  trackEvent('click', 'CTA Button', `${ctaText} - ${location}`);
}

