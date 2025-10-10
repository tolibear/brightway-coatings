'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import StructuredData from '@/components/SEO/StructuredData';
import { generateLocalBusinessStructuredData } from '@/utils/seo';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Square, ArrowRight } from 'lucide-react';
import TransformationSetter from '@/components/TransformationSetter';

// Real project data based on actual completed projects
const portfolioProjects = [
  {
    id: 1,
    title: 'Cappuccino Flake Garage Transformation',
    location: 'Jacksonville, FL',
    date: '2024',
    category: 'Garage',
    size: '700 sq ft',
    description: 'Stunning garage transformation featuring our popular Cappuccino flake system with polyaspartic coating. Rich brown tones create a warm, sophisticated finish.',
    mainImage: '/images/Portfolio/Cappuccino job, /cappuccino-job--1.jpg',
    imageGallery: [
      '/images/Portfolio/Cappuccino job, /cappuccino-job--1.jpg',
      '/images/Portfolio/Cappuccino job, /cappuccino-job--2.jpg',
      '/images/Portfolio/Cappuccino job, /cappuccino-job--3.jpg',
      '/images/Portfolio/Cappuccino job, /cappuccino-job--4.jpg'
    ],
    features: ['Cappuccino Flakes', '1-Day Install', 'Oil Resistant', '15 Year Warranty'],
    slug: 'cappuccino-flake-garage-transformation',
    hasDetailPage: true,
    hasVideo: true,
    videoSrc: '/images/Portfolio/Cappuccino job, /cappuccino-job--video-1.mp4'
  },
  {
    id: 2,
    title: 'Luxury Pool Deck Coating',
    location: 'St. Augustine, FL',
    date: '2024',
    category: 'Pool Deck',
    size: '1,200 sq ft',
    description: 'Premium pool deck transformation with slip-resistant coating system. Cool to the touch and UV stable for years of Florida sun exposure.',
    mainImage: '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-1.jpg',
    imageGallery: [
      '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-1.jpg',
      '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-2.jpg',
      '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-3.jpg',
      '/images/Portfolio/Luxury pool deck coating/luxury-pool-deck-coating-4.jpg'
    ],
    features: ['Slip Resistant', 'UV Stable', 'Cool Surface', 'Chemical Resistant'],
    slug: 'luxury-pool-deck-coating',
    hasDetailPage: true
  },
  {
    id: 3,
    title: 'Quicksilver Garage with Bentley',
    location: 'Ponte Vedra, FL',
    date: '2024',
    category: 'Garage',
    size: '650 sq ft',
    description: 'High-end garage featuring Quicksilver metallic flake system. Perfect complement to luxury vehicles with mirror-like finish and superior durability.',
    mainImage: '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--1.jpg',
    imageGallery: [
      '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--1.jpg',
      '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--2.jpg',
      '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--3.jpg',
      '/images/Portfolio/Quicksilver job, Bentley car /quicksilver-job-bentley-car--4.jpg'
    ],
    features: ['Quicksilver Flakes', 'Mirror Finish', 'Luxury Grade', 'Show Car Ready'],
    slug: 'quicksilver-garage-bentley',
    hasDetailPage: true
  },
  {
    id: 4,
    title: 'Tidal Wave Warehouse Floor',
    location: 'Green Cove Springs, FL',
    date: '2024',
    category: 'Commercial',
    size: '8,000 sq ft',
    description: 'Heavy-duty commercial flooring with Tidal Wave decorative system. Built for high traffic and industrial use while maintaining aesthetic appeal.',
    mainImage: '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-1.jpg',
    imageGallery: [
      '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-1.jpg',
      '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-2.jpg',
      '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-3.jpg',
      '/images/Portfolio/Tidal wave job, warehouse /tidal-wave-job-warehouse-4.jpg'
    ],
    features: ['Heavy Duty', 'High Traffic', 'Chemical Resistant', 'Industrial Grade'],
    slug: 'tidal-wave-warehouse-floor',
    hasDetailPage: false
  },
  {
    id: 5,
    title: 'Elegant Patio Makeover',
    location: 'St. Johns, FL',
    date: '2024',
    category: 'Patio',
    size: '800 sq ft',
    description: 'Stunning outdoor entertainment space transformation with decorative coating system. Weather-resistant and easy to maintain for years of enjoyment.',
    mainImage: '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--1.jpg',
    imageGallery: [
      '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--1.jpg',
      '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--2.jpg',
      '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--3.jpg',
      '/images/Portfolio/Elegant patio makeover /elegant-patio-makeover--4.jpg'
    ],
    features: ['Weather Resistant', 'Easy Clean', 'Decorative Finish', 'Entertainment Ready'],
    slug: 'elegant-patio-makeover',
    hasDetailPage: false
  },
  {
    id: 6,
    title: 'Three Car Garage System',
    location: 'Fleming Island, FL',
    date: '2024',
    category: 'Garage',
    size: '900 sq ft',
    description: 'Large three-car garage with premium coating system. Spacious layout accommodates multiple vehicles with room for storage and workspace.',
    mainImage: '/images/Portfolio/Three car garage/three-car-garage-1.jpg',
    imageGallery: [
      '/images/Portfolio/Three car garage/three-car-garage-1.jpg',
      '/images/Portfolio/Three car garage/three-car-garage-2.jpg',
      '/images/Portfolio/Three car garage/three-car-garage-3.jpg',
      '/images/Portfolio/Three car garage/three-car-garage-4.jpg'
    ],
    features: ['Large Space', 'Multi-Vehicle', 'Storage Ready', 'Professional Grade'],
    slug: 'three-car-garage-system',
    hasDetailPage: false
  },
  {
    id: 7,
    title: 'Outdoor Entertainment Space',
    location: 'Nocatee, FL',
    date: '2024',
    category: 'Patio',
    size: '600 sq ft',
    description: 'Perfect entertaining space with custom decorative coating. Designed for hosting family gatherings and outdoor events with style and functionality.',
    mainImage: '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-1.jpg',
    imageGallery: [
      '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-1.jpg',
      '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-2.jpg',
      '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-3.jpg',
      '/images/Portfolio/Outdoor entertainment space/outdoor-entertainment-space-4.jpg'
    ],
    features: ['Custom Design', 'Entertainment Ready', 'Family Friendly', 'Low Maintenance'],
    slug: 'outdoor-entertainment-space',
    hasDetailPage: false
  },
  {
    id: 8,
    title: 'Gravel Flake Development Project',
    location: 'Orange Park, FL',
    date: '2024',
    category: 'Residential',
    size: '1,100 sq ft',
    description: 'Large residential project featuring Gravel flake system. Natural stone appearance with superior durability for high-traffic residential areas.',
    mainImage: '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-1.jpg',
    imageGallery: [
      '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-1.jpg',
      '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-2.jpg',
      '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-3.jpg',
      '/images/Portfolio/Gravel job, Borishkevich developement/gravel-job-borishkevich-developement-4.jpg'
    ],
    features: ['Gravel Flakes', 'Natural Look', 'Large Area', 'Residential Grade'],
    slug: 'gravel-flake-development',
    hasDetailPage: false
  },
  {
    id: 9,
    title: 'Black Metallic LSC Project',
    location: 'Jacksonville, FL',
    date: '2024',
    category: 'Garage',
    size: '500 sq ft',
    description: 'Sleek black metallic finish creates a sophisticated, modern look. Perfect for contemporary homes seeking a premium garage transformation.',
    mainImage: '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-1.jpg',
    imageGallery: [
      '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-1.jpg',
      '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-2.jpg',
      '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-3.jpg',
      '/images/Portfolio/Black Metallic job, LSC/black-metallic-job-lsc-4.jpg'
    ],
    features: ['Black Metallic', 'Modern Design', 'Premium Finish', 'Contemporary Style'],
    slug: 'black-metallic-lsc-project',
    hasDetailPage: false
  },
  {
    id: 10,
    title: 'Comet Flake Military Veteran Project',
    location: 'Orange Park, FL',
    date: '2024',
    category: 'Garage',
    size: '600 sq ft',
    description: 'Honoring our military veterans with a Comet flake system installation. Patriotic service with premium results for those who served our country.',
    mainImage: '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-1.jpg',
    imageGallery: [
      '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-1.jpg',
      '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-2.jpg',
      '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-3.jpg',
      '/images/Portfolio/Comet job, Military vet job/comet-job-military-vet-job-4.jpg'
    ],
    features: ['Comet Flakes', 'Veteran Discount', 'Patriotic Service', 'Quality Installation'],
    slug: 'comet-military-veteran-project',
    hasDetailPage: false
  },
  {
    id: 11,
    title: 'Modern Garage Transformation',
    location: 'St. Johns, FL',
    date: '2024',
    category: 'Garage',
    size: '550 sq ft',
    description: "Contemporary garage makeover with clean lines and modern aesthetic. Transform your garage into a space you're proud to show off.",
    mainImage: '/images/Portfolio/Modern garage transformation /modern-garage-transformation--1.jpg',
    imageGallery: [
      '/images/Portfolio/Modern garage transformation /modern-garage-transformation--1.jpg',
      '/images/Portfolio/Modern garage transformation /modern-garage-transformation--2.jpg'
    ],
    features: ['Modern Design', 'Clean Lines', 'Contemporary Look', 'Space Enhancement'],
    slug: 'modern-garage-transformation',
    hasDetailPage: false
  },
  {
    id: 12,
    title: 'Resort Style Pool Deck',
    location: 'Ponte Vedra Beach, FL',
    date: '2024',
    category: 'Pool Deck',
    size: '900 sq ft',
    description: 'Resort-quality pool deck transformation brings vacation vibes to your backyard. Cool, slip-resistant surface perfect for Florida poolside living.',
    mainImage: '/images/Portfolio/Resort style pool/resort-style-pool-1.jpg',
    imageGallery: [
      '/images/Portfolio/Resort style pool/resort-style-pool-1.jpg'
    ],
    features: ['Resort Quality', 'Vacation Vibes', 'Slip Resistant', 'Cool Surface'],
    slug: 'resort-style-pool-deck',
    hasDetailPage: false
  }
];

const categories = ['All', 'Garage', 'Pool Deck', 'Patio', 'Commercial', 'Residential'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(12);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  // Projects to display (for "Load More" functionality)
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <>
      <TransformationSetter 
        title="Ready to See Your Project Here?"
        subtitle="Join these satisfied Northeast Florida homeowners who transformed their spaces with Brightway Coatings. Your stunning transformation is next."
      />
      
      <StructuredData data={generateLocalBusinessStructuredData()} />
      
      <Hero
        title="Our Work Speaks for Itself"
        subtitle="Browse our portfolio of completed projects featuring garage floors, pool decks, patios, and commercial installations. See the Brightway difference in every transformation."
        ctaPrimary={ctaText.primary}
        
        ctaSecondary="Call Now: 904-540-9693"
        
      />

      {/* Portfolio Introduction */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Trust, One Floor at a Time
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Each project represents a family who trusted us with their home improvement investment. 
              From simple garage upgrades to complex commercial installations, we bring the same 
              attention to detail and commitment to excellence to every job.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-600">Years Home Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Years Coatings Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Project Gallery
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
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleProjects(12); // Reset visible count when changing filter
                  }}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* Results count */}
            <div className="text-center text-gray-600 mb-8">
              Showing {displayedProjects.length} of {filteredProjects.length} projects
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {displayedProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {/* Real project image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.mainImage} 
                        alt={`${project.title} - ${project.location}`}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                      {project.hasVideo && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          📹 Video
                        </div>
                      )}
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Square className="w-4 h-4" />
                        {project.size}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* View Details Button */}
                    {project.hasDetailPage ? (
                      <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                        <Link href={`/portfolio/${project.slug}`} className="flex items-center justify-center gap-2">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    ) : (
                      <div className="text-center py-2">
                        <span className="text-xs text-gray-500">Detailed page coming soon</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-16">
                <Button 
                  onClick={loadMore}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                >
                  Load More Projects ({filteredProjects.length - visibleProjects} remaining)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Serving Northeast Florida Communities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our project portfolio spans across Northeast Florida, from coastal communities 
              to suburban neighborhoods. Wherever you are, we bring the same quality and 
              professionalism to your concrete transformation.
            </p>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {businessInfo.serviceAreas.map((area, index) => (
                  <div key={index} className="font-medium text-gray-700 py-2">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every project in our portfolio started with a free consultation and quote. 
              We'll assess your space, discuss your vision, and provide a detailed proposal 
              for your concrete transformation.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm">We visit your property to assess the space and understand your vision.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Proposal</h3>
                <p className="text-gray-600 text-sm">Detailed quote with material options, timeline, and warranty information.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Professional Install</h3>
                <p className="text-gray-600 text-sm">Expert installation with minimal disruption to your daily routine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
    </>
  );
}
