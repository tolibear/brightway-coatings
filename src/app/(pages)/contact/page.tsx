import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Contact | Free Estimates Jacksonville FL | Brightway',
  description: 'Get your free concrete coating estimate today! Contact Jacksonville\'s premier floor coating specialists. Quick response, honest pricing, family-owned since 2024.',
  keywords: ['contact Brightway Coatings', 'free estimate Jacksonville', 'concrete coating quote', 'garage floor estimate FL', '904-540-9693'],
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={generateLocalBusinessStructuredData()} />
      <ContactPageClient />
    </>
  );
}