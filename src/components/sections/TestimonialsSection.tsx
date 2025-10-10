'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Joe Phoebus III",
    location: "Jacksonville",
    service: "Workshop Floor Coating",
    date: "June 2025",
    rating: 5,
    quote: "Shoutout to Brightway Coatings for the awesome job! Family owned and operated by Paul and his sons. They were very knowledgeable and professional, answering all our questions about the project we were planning. We are very happy with the amazing job they did on our workshop floor! It looks great and we are happy, happy customers!",
    highlight: "Family Business Excellence",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-1.jpg"
  },
  {
    name: "Richard Olszewski",
    location: "Jacksonville",
    service: "Garage Floor Coating",
    date: "June 2025",
    rating: 5,
    quote: "Paul and Son's knocked it out of the park on my garage. Very respectful and took the time to explain the process. I would highly recommend them for any floor system needs.",
    highlight: "Professional Service",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-2.jpg"
  },
  {
    name: "Jeffrey Blanton",
    location: "Jacksonville",
    service: "Garage Floor Coating",
    date: "May 2025",
    rating: 5,
    quote: "Tim and Paul @ Brightway Coatings came out THE SAME DAY because I had just bought the place and needed to move in!!!! Cracked oil covered 2 car garage and adjoining single car garage. I did my research. Same material but a fraction of the Shark coating cost. Got the two top coats for a smidge extra. Definitely worth it. I highly recommend it. Even came out just to double check their work and make sure everything was tip top shape.",
    highlight: "Same Day Service",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-3.jpg"
  },
  {
    name: "Austin Beard",
    location: "Jacksonville",
    service: "Garage Floor Coating",
    date: "May 2025",
    rating: 5,
    quote: "Awesome company! Paul and Tim were great to work with. They were friendly, punctual, and hard working. My garage looks brand new!",
    highlight: "Outstanding Results",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-4.jpg"
  },
  {
    name: "Yelena Burshtynskiy",
    location: "Jacksonville",
    service: "Garage Floor Coating",
    date: "February 2025",
    rating: 5,
    quote: "We had an excellent experience with Brightway Coatings Company! Reliable, nice, polite crew who showed up on time, communicated really well, answered all the questions, did an exceptional work and cleaned up after the job. Love the variety of colors that were introduced to us. The suggestions on our garage were excellent by the professionals, the quality of the product really made a difference for the older garage to look amazing! Thank you for going above and beyond with your work!",
    highlight: "Exceptional Quality",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-5.jpg"
  },
  {
    name: "Ray Torres",
    location: "Jacksonville",
    service: "Garage Floor Coating",
    date: "March 2025",
    rating: 5,
    quote: "Paul and Timothy did an amazing job on my garage floor! I am very happy with their work. They were very knowledgeable and detailed. I would highly recommend!!",
    highlight: "Amazing Results",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-6.jpg"
  },
  {
    name: "Palm Coast Cycle Traders",
    location: "Palm Coast",
    service: "Commercial Floor Coating",
    date: "April 2025",
    rating: 5,
    quote: "Excellent experience with this small family owned company. They are very knowledgeable, very professional and very skilled at floor coatings. I was given a referral to use them to repair a bad job from another flooring company. Brightway did a fantastic job. Very neat and clean. Great communication. On time. Fair prices. I will use them again and so should you!",
    highlight: "Problem Solving Experts",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-7.jpg"
  },
  {
    name: "Valentin Borishkevich",
    location: "Jacksonville",
    service: "Garage Floor Coating",
    date: "April 2025",
    rating: 5,
    quote: "Tim and Paul at Brightway Coatings did an amazing job on my garage floor. The flake system they installed looks fantastic and really gives the space a clean, polished look. They were professional, on time, and clearly take pride in their work. We couldn't be happier with the result—highly recommend these guys if you're looking to upgrade your garage floor!",
    highlight: "Flake System Specialists",
    photo: "/images/Reviews/Testimonial Vids- Pics/testimonial-vids--pics-8.jpg"
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
    <section className="py-32 bg-gradient-to-b from-blue-50 via-slate-50 to-white">
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
                      ? 'bg-primary'
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
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Quote className="h-5 w-5 text-primary" />
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
                        <div className="flex items-start gap-4">
                          {/* Customer Photo */}
                          <div className="flex-shrink-0">
                            <img 
                              src={testimonial.photo}
                              alt={`${testimonial.name} - satisfied Brightway Coatings customer`}
                              className="w-12 h-12 rounded-full object-cover shadow-md"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Customer Details */}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                  {testimonial.name}
                                </h4>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {testimonial.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {testimonial.date}
                                  </div>
                                </div>
                                <div className="text-xs text-primary font-medium">
                                  {testimonial.service}
                                </div>
                              </div>
                              
                              {/* Highlight Badge */}
                              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full text-center flex-shrink-0">
                                {testimonial.highlight}
                              </div>
                            </div>
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
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-gray-600">Projects Serviced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied customers throughout Jacksonville, St. Johns, and St. Augustine
          </p>
          <p className="text-sm text-gray-500">
            Licensed FL Contractor #L24000469209 • Fully Insured • 15 Year Warranty • Family-Owned Since 2024
          </p>
        </div>
      </div>
    </section>
  );
}
