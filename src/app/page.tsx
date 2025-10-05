import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import ValuePropositionCards from '@/components/sections/ValuePropositionCards';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ProcessSection from '@/components/sections/ProcessSection';
import FlakeGallery from '@/components/sections/FlakeGallery';
import AboutCallout from '@/components/sections/AboutCallout';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import TransformationSetter from '@/components/TransformationSetter';

export default function Home() {
  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your Concrete?"
        subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for 15 year durability, one-day installation, and unmatched craftsmanship."
      />
      
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Jacksonville's father-and-son epoxy team"
        subtitle="Jacksonville's premier concrete coating team delivering premium polyurea and epoxy concrete coatings. Transform Florida garages, patios, and pool decks with surfaces built to endure Northeast Florida's toughest conditions."
        showVideo={true}
        showImage={false}
        showTimAndPaul={true}
      />
      
      <ValuePropositionCards />
      
      <ServicesOverview />
      
      <ProcessSection />
      
      <FlakeGallery />
      
      <TrustBadges />
      
      <AboutCallout />
      
      <TestimonialsSection />
      
      <ServiceAreaSection />
    </>
  );
}