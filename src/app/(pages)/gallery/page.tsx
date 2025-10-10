'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText } from '@/data/business';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

// Gallery images organized by category
const galleryImages = [
  // Garage
  { id: 1, src: '/images/Portfolio/Cappuccino job, /cappuccino-job--1.jpg', category: 'Garage', title: 'Cappuccino Garage Transformation' },
  { id: 2, src: '/images/Portfolio/Cappuccino job, /cappuccino-job--2.jpg', category: 'Garage', title: 'Cappuccino Flake Detail' },
  { id: 3, src: '/images/Portfolio/Cappuccino job, /cappuccino-job--3.jpg', category: 'Garage', title: 'Cappuccino Finish' },
  { id: 4, src: '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--1.jpg', category: 'Garage', title: 'Quicksilver with Bentley' },
  { id: 5, src: '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--2.jpg', category: 'Garage', title: 'Quicksilver Detail' },
  { id: 6, src: '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--3.jpg', category: 'Garage', title: 'Quicksilver Metallic Flake' },
  { id: 7, src: '/images/Portfolio/Three car garage/three-car-garage-1.jpg', category: 'Garage', title: 'Three Car Garage' },
  { id: 8, src: '/images/Portfolio/Three car garage/three-car-garage-2.jpg', category: 'Garage', title: 'Large Garage Space' },
  { id: 9, src: '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-1.jpg', category: 'Garage', title: 'Black Metallic Finish' },
  { id: 10, src: '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-2.jpg', category: 'Garage', title: 'Modern Black Garage' },
  { id: 11, src: '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-1.jpg', category: 'Garage', title: 'Comet Flake System' },
  { id: 12, src: '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-2.jpg', category: 'Garage', title: 'Comet Detail' },
  { id: 13, src: '/images/Portfolio/Modern garage transformation /modern-garage-transformation--1.jpg', category: 'Garage', title: 'Modern Garage' },
  { id: 14, src: '/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--1.jpg', category: 'Garage', title: 'Deer Creek Garage' },
  { id: 15, src: '/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--4.jpg', category: 'Garage', title: 'Deer Creek Complete' },
  
  // Pool Deck
  { id: 16, src: '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-1.jpg', category: 'Pool Deck', title: 'Luxury Pool Deck' },
  { id: 17, src: '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-2.jpg', category: 'Pool Deck', title: 'Pool Deck Detail' },
  { id: 18, src: '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-3.jpg', category: 'Pool Deck', title: 'Pool Surround' },
  { id: 19, src: '/images/Portfolio/Resort style pool/resort-style-pool-1.jpg', category: 'Pool Deck', title: 'Resort Style Pool' },
  { id: 20, src: '/images/Home Page/Vilano beach pool deck /vilano-beach-pool-deck-1.jpg', category: 'Pool Deck', title: 'Vilano Beach Pool' },
  { id: 21, src: '/images/Home Page/Vilano beach pool deck /vilano-beach-pool-deck-2.jpg', category: 'Pool Deck', title: 'Coastal Pool Deck' },
  
  // Patio
  { id: 22, src: '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--1.jpg', category: 'Patio', title: 'Elegant Patio' },
  { id: 23, src: '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--2.jpg', category: 'Patio', title: 'Patio Detail' },
  { id: 24, src: '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--3.jpg', category: 'Patio', title: 'Outdoor Living' },
  { id: 25, src: '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-1.jpg', category: 'Patio', title: 'Entertainment Space' },
  { id: 26, src: '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-2.jpg', category: 'Patio', title: 'Outdoor Entertaining' },
  
  // Commercial
  { id: 27, src: '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-1.jpg', category: 'Commercial', title: 'Warehouse Floor' },
  { id: 28, src: '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-2.jpg', category: 'Commercial', title: 'Commercial Installation' },
  { id: 29, src: '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-3.jpg', category: 'Commercial', title: 'Industrial Coating' },
  { id: 30, src: '/images/Home Page/Green cove shop transformation /green-cove-shop-transformation-1.jpg', category: 'Commercial', title: 'Shop Transformation' },
  { id: 31, src: '/images/Home Page/Green cove shop transformation /green-cove-shop-transformation-2.jpg', category: 'Commercial', title: 'Commercial Space' },
  
  // Residential
  { id: 32, src: '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-1.jpg', category: 'Residential', title: 'Gravel Flake System' },
  { id: 33, src: '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-2.jpg', category: 'Residential', title: 'Residential Coating' },
  { id: 34, src: '/images/Portfolio/Tuxedo job, Russian guy job/tuxedo-job-russian-guy-job-1.jpg', category: 'Residential', title: 'Tuxedo Flake' },
  { id: 35, src: '/images/Portfolio/Tuxedo job, Russian guy job/tuxedo-job-russian-guy-job-2.jpg', category: 'Residential', title: 'Tuxedo Detail' },
  { id: 36, src: '/images/Portfolio/Driveway project /driveway-project--1.jpg', category: 'Residential', title: 'Driveway Coating' },
];

const categories = ['All', 'Garage', 'Pool Deck', 'Patio', 'Commercial', 'Residential'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <>
      <TransformationSetter 
        title="Ready to See Your Project Here?"
        subtitle="Join these satisfied Northeast Florida homeowners who transformed their spaces with Brightway Coatings. Your stunning transformation is next."
      />
      
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Our Work Gallery"
        subtitle="Browse our collection of completed projects. From garage floors to pool decks, see the quality and craftsmanship in every installation."
        ctaPrimary={ctaText.primary}
        ctaSecondary="Call Now: 904-540-9693"
      />

      {/* Gallery */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Project Gallery
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 cursor-pointer transition-colors ${
                    selectedCategory === category 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'hover:bg-primary/5'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* Results count */}
            <div className="text-center text-gray-600 mb-8">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </div>

            {/* Image Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <TrustBadges />
    </>
  );
}

