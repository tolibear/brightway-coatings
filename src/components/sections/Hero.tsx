'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { businessInfo, ctaText } from '@/data/business';
import { useModal } from '@/contexts/ModalContext';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  showVideo?: boolean;
  showImage?: boolean;
  showTimAndPaul?: boolean;
  showQuoteForm?: boolean;
  imageDescription?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  showVideo = false,
  showImage = false,
  showTimAndPaul = false,
  showQuoteForm = false,
  imageDescription = 'Professional garage floor coating installation in Jacksonville',
  ctaPrimary = ctaText.primary,
  ctaSecondary = ctaText.secondary,
}: HeroProps) {
  const { openQuoteModal } = useModal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    projectType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.projectType,
          message: `Zip Code: ${formData.zipCode}`,
          projectSize: 'Not specified',
          source: 'hero_form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          zipCode: '',
          projectType: '',
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white -mt-16 pt-16">
      {showVideo && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Elegant gradient background while video loads/if unavailable */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-90"></div>
          
          {/* Animated background pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Background video element */}
          <video
            className="w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/Epoxy_Flooring_Video_Ready_optimized.mp4" type="video/mp4" />
          </video>
          
          {/* Soft gradient overlay - left and right fade to center */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-70"></div>
        </div>
      )}
      
      {showImage && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
          <div className="w-full h-full">
            <img 
              src="/images/Home Page/Deer creek garage makeover /deer-creek-garage-makeover--4.jpg"
              alt={imageDescription}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      )}
      
      <div className="relative container mx-auto px-4 py-32 md:py-40 lg:py-48">
        {showQuoteForm ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
                {subtitle}
              </h2>
              {description && (
                <p className="text-lg mb-8 text-gray-200">
                  {description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                  asChild
                >
                  <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
                    Call {businessInfo.phone}
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                {ctaText.trust}
              </p>
            </div>

            {/* Quote Form Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
                {submitSuccess ? (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your request and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
                    <p className="text-gray-600 mb-6">Get a free estimate in 24 hours</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-50 border-gray-300 text-gray-900"
                          />
                        </div>
                        <div>
                          <Input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-50 border-gray-300 text-gray-900"
                          />
                        </div>
                      </div>
                      
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-900"
                      />
                      
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-900"
                      />
                      
                      <Input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-900"
                      />
                      
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <option value="">Select Project Type</option>
                        <option value="Garage">Garage</option>
                        <option value="Patio">Patio</option>
                        <option value="Driveway">Driveway</option>
                        <option value="Pool Deck">Pool Deck</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500">
                        We respond within 24 hours
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : showTimAndPaul ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
                {subtitle}
              </h2>
              {description && (
                <p className="text-lg mb-8 text-gray-200">
                  {description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openQuoteModal} size="lg" className="bg-primary hover:bg-primary/90">
                  {ctaPrimary}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                  asChild
                >
                  <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
                    {ctaSecondary}
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                {ctaText.trust}
              </p>
            </div>

            {/* Image Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg aspect-square relative group">
                <a 
                  href="/about"
                  className="block w-full h-full relative"
                >
                  <img
                    src="/images/Home Page/tim-and-paul.png"
                    alt="Tim and Paul - Father and son team behind Brightway Coatings Jacksonville"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-2 transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl cursor-pointer"
                    loading="eager"
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-sm font-medium">
                    <span className="text-primary">Read our story</span>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
              {subtitle}
            </h2>
            {description && (
              <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openQuoteModal} size="lg" className="bg-primary hover:bg-primary/90">
                {ctaPrimary}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
                  {ctaSecondary}
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              {ctaText.trust}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
