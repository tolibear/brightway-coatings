import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FlakeGallery from '@/components/sections/FlakeGallery';
import StructuredData from '@/components/SEO/StructuredData';
import { generateOpenGraphMetadata } from '@/utils/metadata';
import TransformationSetter from '@/components/TransformationSetter';

export const metadata: Metadata = {
  title: 'Concrete Coating Colors & Flakes | Brightway Coatings Jacksonville',
  description: "Explore our decorative flake color options for concrete coatings. From classic neutrals to bold statements, find the perfect color combination for your Jacksonville concrete project.",
  keywords: ['concrete coating colors', 'decorative flakes Jacksonville', 'epoxy floor colors', 'garage floor colors', 'polyaspartic colors Jacksonville'],
  ...generateOpenGraphMetadata({
    title: 'Concrete Coating Colors & Flakes | Brightway Coatings',
    description: 'Explore our decorative flake color options. From classic neutrals to bold statements, find the perfect color combination for your concrete project.',
    url: '/colors',
  }),
};

export default function ColorsPage() {
  return (
    <>
      <TransformationSetter 
        title="Ready to Choose Your Perfect Color?"
        subtitle="Explore our decorative flake options and transform your concrete surfaces with style that matches your home."
      />
      
      <Hero
        title="Choose Your Perfect Color"
        subtitle="Explore our premium decorative flake options and create a custom look that matches your style"
        description="From classic neutrals to bold statements, our decorative flake systems add beauty and texture to your concrete coating. Each color combination is designed to complement Jacksonville homes while providing superior durability."
        showVideo={false}
        showImage={false}
      />
      
      <FlakeGallery />
    </>
  );
}

