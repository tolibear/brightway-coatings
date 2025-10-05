'use client';

import Link from 'next/link';
import { businessInfo, ctaText } from '@/data/business';
import { MapPin, Phone, Mail, Clock, CheckCircle, Shield, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTransformation } from '@/contexts/TransformationContext';

const finalBenefits = [
  "15 year warranty included",
  "Free color consultation",
  "Licensed & fully insured",
  "One-day installation guarantee",
  "5+ years coatings experience",
  "Transparent, upfront pricing"
];

export default function Footer() {
  const { title, subtitle } = useTransformation();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section - formerly FinalCTASection */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading - Now Dynamic */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {title}
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            {/* Main CTA Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left: Benefits & Trust */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    What You Get With Brightway Coatings
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {finalBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      Licensed FL Contractor
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      Family-Owned Since 2024
                    </div>
                  </div>
                </div>
                
                {/* Right: Contact Options */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">
                      Get Your Free Quote Today
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Call now or schedule online - we&rsquo;ll visit your property within 48 hours 
                      with samples and provide an honest, upfront quote.
                    </p>
                  </div>
                  
                  {/* Primary Contact Options */}
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                      asChild
                    >
                      <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
                        <Phone className="mr-3 h-5 w-5" />
                        Call {businessInfo.phone} - Available Now
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg py-6"
                      asChild
                    >
                      <Link href="/contact">
                        Schedule Free Consultation <ArrowRight className="ml-3 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Secondary Options */}
                  <div className="text-center text-sm text-gray-300">
                    <p className="mb-2">Prefer to email? Contact us at:</p>
                    <a 
                      href={`mailto:${businessInfo.email}`} 
                      className="text-blue-300 hover:text-blue-200 underline"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Trust Line */}
            <div className="text-center mt-8">
              <p className="text-blue-200 text-sm">
                {ctaText.trust} • Free Quotes • No Obligation • Same-Day Response Guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Original Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info - Enhanced NAP */}
          <div>
            <h3 className="text-xl font-bold mb-4">{businessInfo.name}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Family-owned concrete coating experts serving Northeast Florida since 2024. 
              Licensed, insured, and trusted by local homeowners.
            </p>
            
            {/* NAP Information - Structured for SEO */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">{businessInfo.name}</p>
                  <p className="text-gray-300">{businessInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="text-blue-300 hover:text-blue-200 font-medium">
                  {businessInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-blue-300 hover:text-blue-200">
                  {businessInfo.email}
                </a>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-white">
                  <p className="font-medium text-gray-300">{businessInfo.hours}</p>
                  <p className="text-xs text-gray-300">Emergency calls welcome</p>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/garage-floor-coatings" className="text-gray-400 hover:text-white">Garage Floor Coatings</Link></li>
              <li><Link href="/services/patio-coatings" className="text-gray-400 hover:text-white">Patio Coatings</Link></li>
              <li><Link href="/services/pool-deck-coatings" className="text-gray-400 hover:text-white">Pool Deck Coatings</Link></li>
              <li><Link href="/services/residential-floor-coatings" className="text-gray-400 hover:text-white">Residential Floor Coatings</Link></li>
              <li><Link href="/services/commercial-floor-coatings" className="text-gray-400 hover:text-white">Commercial Floor Coatings</Link></li>
            </ul>
          </div>
          
          {/* Service Areas - Complete List */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <p className="text-xs text-gray-400 mb-3">Northeast Florida Communities</p>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              {businessInfo.serviceAreas.map((area, index) => (
                <li key={index} className="text-gray-300 hover:text-white text-xs">{area}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-300 mt-3">
              Don&rsquo;t see your area? <Link href="/contact" className="underline hover:no-underline">Contact us</Link>
            </p>
          </div>
          
          {/* Quick Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Your Free Quote</h4>
            <p className="text-sm text-gray-400 mb-4">
              Same-day response guaranteed. No obligation consultation with samples.
            </p>
            <div className="space-y-3">
              <a 
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                className="block bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                📞 Call {businessInfo.phone}
              </a>
              <Link 
                href="/contact"
                className="block border border-gray-600 text-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                📧 Email Quote Request
              </Link>
            </div>
            <p className="text-xs text-gray-300 mt-3 text-center">
              Available Mon-Fri 8 AM - 5 PM<br/>
              Emergency calls welcome
            </p>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-300">&copy; 2024 {businessInfo.name}. All rights reserved.</p>
            <p className="text-xs text-gray-300">
              Licensed FL Contractor #L24000469209 • Fully Insured • 15 Year Warranty • Family-Owned Since 2024
            </p>
            <p className="text-sm text-gray-400">
              Serving Jacksonville, St. Johns, St. Augustine & Surrounding Areas
            </p>
            <p className="text-xs text-gray-400">
              Polyurea & Polyaspartic Floor Coating Specialists • 1-Day Installation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
