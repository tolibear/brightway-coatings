import { SEOMeta } from '@/types';
import { businessInfo } from '@/data/business';

interface SEOConfig extends SEOMeta {
  ogImage?: string;
  twitterImage?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
}

export function generateSEOConfig({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/og-default.jpg',
  twitterImage,
  type = 'website',
}: SEOConfig) {
  const fullTitle = title.includes(businessInfo.name) 
    ? title 
    : `${title} | ${businessInfo.name}`;

  const config = {
    title: fullTitle,
    description,
    canonical: canonical || undefined,
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      siteName: businessInfo.name,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: fullTitle,
      description,
      images: [twitterImage || ogImage],
    },
    keywords: keywords.join(', '),
    other: {
      'geo.region': 'US-FL',
      'geo.placename': 'Jacksonville, FL',
      'geo.position': '30.3322;-81.6557', // Jacksonville coordinates
      'ICBM': '30.3322, -81.6557',
    } as Record<string, string>,
  };

  return config;
}

// Generate Local Business structured data
export function generateLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '172 Little Bear Run',
      addressLocality: 'St Johns',
      addressRegion: 'FL',
      postalCode: '32259',
      addressCountry: 'US',
    },
    telephone: businessInfo.phone,
    email: businessInfo.email,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://brightway-coatings.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.1588,
      longitude: -81.4497,
    },
    areaServed: businessInfo.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    })),
    description: 'Family-owned concrete coating experts specializing in polyaspartic floor systems. Licensed, insured, and serving Jacksonville area for 30+ years.',
    priceRange: '$$',
    paymentAccepted: 'Cash, Check, Credit Card',
  };
}

// Generate Service structured data
export function generateServiceStructuredData(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'St Johns',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      telephone: businessInfo.phone,
    },
    areaServed: businessInfo.serviceAreas,
    serviceType: 'Concrete Coating',
    category: 'Home Improvement',
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
