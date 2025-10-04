import Link from 'next/link';
import { businessInfo } from '@/data/business';
import { MapPin, Phone, Mail, Clock, Award, Shield, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
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
                <div className="text-gray-300">
                  <p className="font-medium">{businessInfo.hours}</p>
                  <p className="text-xs text-gray-400">Emergency calls welcome</p>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-green-400">
                <Shield className="h-3 w-3" />
                <span>Licensed FL Contractor #L24000469209</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-400">
                <Award className="h-3 w-3" />
                <span>Fully Insured • 15 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-400">
                <Star className="h-3 w-3" />
                <span>Family-Owned Since 2024</span>
              </div>
            </div>
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
            <p className="text-xs text-gray-500 mb-3">Northeast Florida Communities</p>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              {businessInfo.serviceAreas.map((area, index) => (
                <li key={index} className="text-gray-300 hover:text-white text-xs">{area}</li>
              ))}
            </ul>
            <p className="text-xs text-blue-400 mt-3">
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
            <p className="text-xs text-gray-500 mt-3 text-center">
              Available Mon-Fri 8 AM - 5 PM<br/>
              Emergency calls welcome
            </p>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 {businessInfo.name}. All rights reserved.</p>
              <p className="text-xs mt-1">
                Licensed FL Contractor • Fully Insured • Family-Owned Since 2024
              </p>
            </div>
            <div className="text-right text-sm text-gray-400">
              <p>Serving Jacksonville, St. Johns, St. Augustine & Surrounding Areas</p>
              <p className="text-xs mt-1">
                Polyurea & Polyaspartic Floor Coating Specialists • 15 Year Warranty • 1-Day Installation
              </p>
            </div>
          </div>
          
          {/* Team Contact Section */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center mb-6">
              <h4 className="font-semibold text-lg mb-2">Meet the Team</h4>
              <p className="text-sm text-gray-400">Father-and-son partnership delivering quality craftsmanship</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Tim's Contact */}
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                  T
                </div>
                <h5 className="font-semibold text-lg mb-1">Tim</h5>
                <p className="text-sm text-gray-400 mb-4">Lead Coatings Specialist</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <a href="tel:9045409693" className="text-blue-300 hover:text-blue-200">
                      904-540-9693
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <a href="mailto:timbrightwaycoatings@gmail.com" className="text-blue-300 hover:text-blue-200 text-xs">
                      timbrightwaycoatings@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Paul's Contact */}
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                  P
                </div>
                <h5 className="font-semibold text-lg mb-1">Paul</h5>
                <p className="text-sm text-gray-400 mb-4">Master Craftsman</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-orange-400" />
                    <a href="tel:9046712686" className="text-orange-300 hover:text-orange-200">
                      904-671-2686
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-orange-400" />
                    <a href="mailto:paulbrightwayepoxy@gmail.com" className="text-orange-300 hover:text-orange-200 text-xs">
                      paulbrightwayepoxy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
