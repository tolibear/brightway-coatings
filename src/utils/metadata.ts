import { Metadata } from 'next';

interface OpenGraphConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  siteName?: string;
}

export function generateOpenGraphMetadata(config: OpenGraphConfig): Metadata {
  const {
    title,
    description,
    url,
    image = '/images/Logos/light-2.png',
    type = 'website',
    siteName = 'Brightway Coatings',
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwaycoatings.com';
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@BrightwayCoatings',
      site: '@BrightwayCoatings',
    },
  };
}

export function mergeMetadata(base: Metadata, og: Metadata): Metadata {
  return {
    ...base,
    ...og,
  };
}


