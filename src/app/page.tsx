import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import ValuePropositionCards from '@/components/sections/ValuePropositionCards';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import ProcessSection from '@/components/sections/ProcessSection';
import FlakeGallery from '@/components/sections/FlakeGallery';
import AboutCallout from '@/components/sections/AboutCallout';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';

export default function Home() {
  return (
    <>
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Jacksonville's premier concrete coating experts"
        subtitle="Jacksonville's trusted father-and-son team delivering premium polyurea and epoxy concrete coatings. Transform Florida garages, patios, and pool decks with surfaces built to endure Northeast Florida's toughest conditions."
        showVideo={true}
        showImage={true}
        imageDescription="Professional polyurea and epoxy floor coating installation in Jacksonville home showing beautiful garage transformation"
      />
      
      <TrustBadges />
      
      <ValuePropositionCards />
      
      <ServicesOverview />
      
      <PortfolioPreview />
      
      <ProcessSection />
      
      <FlakeGallery />
      
      <AboutCallout />
      
      <TestimonialsSection />
      
      <ServiceAreaSection />
      
      <FinalCTASection />
    </>
  );
}