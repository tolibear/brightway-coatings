'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mike & Jennifer Rodriguez",
    location: "Mandarin, Jacksonville",
    service: "Garage Floor Coating",
    date: "November 2023",
    rating: 5,
    quote: "Our garage went from embarrassing to showcase quality in just one day. Paul and his son were meticulous with every detail - from the prep work to the final coat. Three months later, it still looks perfect despite heavy use. Worth every penny and more.",
    highlight: "Quality & Transformation"
  },
  {
    name: "Sarah Chen",
    location: "Ponte Vedra Beach",
    service: "Pool Deck Coating", 
    date: "October 2023",
    rating: 5,
    quote: "The professionalism was outstanding from start to finish. They arrived exactly on time, protected all our landscaping, and cleaned up completely. The cool-touch coating is a game-changer in Florida heat - no more burning feet by the pool!",
    highlight: "Customer Service & Innovation"
  },
  {
    name: "Tom Harrison",
    location: "Fleming Island", 
    service: "Patio Coating",
    date: "September 2023",
    rating: 5,
    quote: "I was skeptical about the one-day promise, but they delivered exactly as promised. Started at 8 AM, finished by 5 PM with a gorgeous patio that has transformed our outdoor entertaining. My wife loves the decorative flakes - very elegant look.",
    highlight: "Timeliness & Results"
  },
  {
    name: "David & Maria Santos",
    location: "St. Augustine",
    service: "Garage & Workshop Floors",
    date: "August 2023", 
    rating: 5,
    quote: "Our neighbor recommended Brightway after their amazing results. Now I see why - this is true craftsmanship from a local family business. The floor handles everything I throw at it in my woodworking shop. Built to last by people who care.",
    highlight: "Local Trust & Durability"
  },
  {
    name: "Linda Thompson",
    location: "Nocatee",
    service: "Residential Floor Coating",
    date: "December 2023",
    rating: 5,
    quote: "Two years later and our basement floor still looks brand new. Best investment we made in our home. The moisture protection has been perfect through Florida's humid summers. Paul stands behind his work - that means everything to me.",
    highlight: "Long-term Value & Warranty"
  },
  {
    name: "Robert & Jessica Wilson",
    location: "Orange Park",
    service: "Commercial Floor Coating",
    date: "January 2024",
    rating: 5,
    quote: "We needed our auto shop floor redone over a weekend to minimize downtime. Brightway delivered beyond expectations - professional, efficient, and the floor can handle heavy equipment and constant traffic. Excellent communication throughout the project.",
    highlight: "Commercial Excellence"
  },
  {
    name: "Marcus Jefferson",
    location: "Julington Creek",
    service: "Garage Floor Coating",
    date: "February 2024",
    rating: 5,
    quote: "After getting three quotes, Brightway offered the best value and materials. The polyaspartic system was exactly what I needed - no peeling like my neighbor's epoxy from another company. Fast installation and beautiful results.",
    highlight: "Superior Materials"
  },
  {
    name: "Amanda & Chris Taylor",
    location: "St. Johns",
    service: "Pool Deck Coating",
    date: "March 2024",
    rating: 5,
    quote: "Living where they work makes a difference. Paul lives right here in St. Johns and genuinely cares about his reputation in the community. The slip-resistant coating is perfect for our kids, and it stays cool even in summer heat.",
    highlight: "Local Expertise"
  },
  {
    name: "Steven Martinez",
    location: "Downtown Jacksonville",
    service: "Patio Coating",
    date: "April 2024",
    rating: 5,
    quote: "My historic home's concrete patio was cracking and stained from years of weather. The restoration and coating work was flawless - they matched the aesthetic of my 1920s home perfectly while providing modern protection.",
    highlight: "Historic Restoration"
  },
  {
    name: "Karen & Bill Anderson",
    location: "Middleburg",
    service: "Residential Floor Coating",
    date: "May 2024",
    rating: 5,
    quote: "We've been in this house for 15 years and always hated our concrete floors. This transformation exceeded our expectations - elegant, durable, and maintenance-free. Should have done this years ago!",
    highlight: "Home Transformation"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);

  useEffect(() => {
    const updateTestimonialsPerView = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerView(1); // Mobile: 1 testimonial
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerView(2); // Tablet: 2 testimonials
      } else {
        setTestimonialsPerView(3); // Desktop: 3 testimonials
      }
    };

    updateTestimonialsPerView();
    window.addEventListener('resize', updateTestimonialsPerView);
    return () => window.removeEventListener('resize', updateTestimonialsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Jacksonville Neighbors Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Real testimonials from real customers throughout Northeast Florida. 
            Every review represents a neighbor who trusted us with their home and received exceptional results.
          </p>
          
          {/* Overall Rating Display */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">({testimonials.length} reviews)</span>
          </div>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="flex items-center gap-2"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * testimonialsPerView)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / testimonialsPerView) === index
                      ? 'bg-blue-600'
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="flex items-center gap-2"
              disabled={currentIndex >= maxIndex}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 md:px-4 w-full md:w-1/2 lg:w-1/3"
                  style={{ minWidth: `${100 / testimonialsPerView}%` }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon & Rating */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Quote className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonial Quote */}
                      <blockquote className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      
                      {/* Customer Info */}
                      <div className="border-t pt-4 mt-auto">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {testimonial.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {testimonial.date}
                              </div>
                            </div>
                            <div className="text-xs text-blue-600 font-medium">
                              {testimonial.service}
                            </div>
                          </div>
                          
                          {/* Highlight Badge */}
                          <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full text-center">
                            {testimonial.highlight}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Northeast Florida Installations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied customers throughout Jacksonville, St. Johns, and St. Augustine
          </p>
          <p className="text-sm text-gray-500">
            Licensed FL Contractor • Fully Insured • Lifetime Warranty • Family-Owned Since 1990
          </p>
        </div>
      </div>
    </section>
  );
}
