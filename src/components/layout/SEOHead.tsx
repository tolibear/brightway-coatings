import Head from 'next/head';
import { generateSEOConfig } from '@/utils/seo';
import { SEOMeta } from '@/types';

interface SEOHeadProps extends SEOMeta {
  ogImage?: string;
  twitterImage?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
}

export default function SEOHead(props: SEOHeadProps) {
  const seoConfig = generateSEOConfig(props);
  
  return (
    <Head>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      
      {seoConfig.keywords && (
        <meta name="keywords" content={seoConfig.keywords} />
      )}
      
      {seoConfig.canonical && (
        <link rel="canonical" href={seoConfig.canonical} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={seoConfig.openGraph.title} />
      <meta property="og:description" content={seoConfig.openGraph.description} />
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      {seoConfig.openGraph.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content={seoConfig.twitter.card} />
      <meta name="twitter:title" content={seoConfig.twitter.title} />
      <meta name="twitter:description" content={seoConfig.twitter.description} />
      {seoConfig.twitter.images.map((image, index) => (
        <meta key={index} name="twitter:image" content={image} />
      ))}
      
      {/* Geographic and Local SEO */}
      <meta name="geo.region" content={seoConfig.other['geo.region']} />
      <meta name="geo.placename" content={seoConfig.other['geo.placename']} />
      <meta name="geo.position" content={seoConfig.other['geo.position']} />
      <meta name="ICBM" content={seoConfig.other['ICBM']} />
      
      {/* Structured Data */}
      {props.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props.structuredData),
          }}
        />
      )}
      
      {/* Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
