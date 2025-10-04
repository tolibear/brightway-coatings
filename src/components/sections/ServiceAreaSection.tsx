import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Home, Award, Car } from 'lucide-react';
import { businessInfo } from '@/data/business';

const serviceRegions = [
  {
    region: "Jacksonville Metro",
    areas: [
      {
        name: "Jacksonville",
        description: "All zip codes including downtown, beaches, and surrounding neighborhoods",
        highlights: ["Urban homes", "Historic districts", "Commercial spaces"],
        driveTime: "15-45 min"
      },
      {
        name: "Mandarin", 
        description: "Premium residential community with luxury homes and established neighborhoods",
        highlights: ["Luxury garages", "Pool decks", "Outdoor entertainment areas"],
        driveTime: "20 min"
      },
      {
        name: "Orange Park",
        description: "Growing family community with mix of new and established homes",
        highlights: ["Family garages", "Workshop spaces", "Residential driveways"],
        driveTime: "25 min"
      }
    ]
  },
  {
    region: "St. Johns County",
    areas: [
      {
        name: "St. Johns",
        description: "Our home base - where Brightway Coatings was founded and we live",
        highlights: ["Our hometown", "Personal service", "Quick response times"],
        driveTime: "Home base",
        isHomeBase: true
      },
      {
        name: "Ponte Vedra",
        description: "Upscale coastal community requiring premium finishes and durability",
        highlights: ["High-end homes", "Salt air resistance", "Luxury finishes"],
        driveTime: "25 min"
      },
      {
        name: "Nocatee",
        description: "Master-planned community with modern homes and active families",
        highlights: ["New construction", "Family-friendly spaces", "Modern designs"],
        driveTime: "30 min"
      },
      {
        name: "Fleming Island",
        description: "Established community with mix of waterfront and golf course homes",
        highlights: ["Waterfront properties", "Golf cart storage", "Outdoor living"],
        driveTime: "35 min"
      }
    ]
  },
  {
    region: "Historic Coast",
    areas: [
      {
        name: "St. Augustine",
        description: "Historic city with unique homes requiring specialized coating solutions",
        highlights: ["Historic homes", "Tourism properties", "Specialized needs"],
        driveTime: "45 min"
      }
    ]
  }
];

const serviceStats = [
  {
    icon: Home,
    number: "8",
    label: "Cities & Communities Served"
  },
  {
    icon: Car,
    number: "45min",
    label: "Maximum Drive Time"
  },
  {
    icon: Award,
    number: "500+", 
    label: "Local Projects Completed"
  },
  {
    icon: Clock,
    number: "Same Day",
    label: "Quote Response Time"
  }
];

export default function ServiceAreaSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Proudly Serving Northeast Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            As St. Johns County locals, we know these communities personally. From historic St. Augustine 
            to modern Nocatee, we understand each area&rsquo;s unique needs and deliver solutions built for Florida living.
          </p>
          
          {/* Service Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {serviceStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Service Regions */}
        <div className="space-y-8 mb-12">
          {serviceRegions.map((region, regionIndex) => (
            <div key={regionIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {region.region}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.areas.map((area, areaIndex) => (
                  <Card key={areaIndex} className={`group hover:shadow-lg transition-all duration-300 border-2 ${area.isHomeBase ? 'border-green-200 bg-green-50' : 'hover:border-blue-200'}`}>
                    <CardContent className="p-6">
                      {/* Area Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className={`h-5 w-5 ${area.isHomeBase ? 'text-green-600' : 'text-blue-600'}`} />
                          <h4 className="font-bold text-lg text-gray-900">
                            {area.name}
                          </h4>
                        </div>
                        {area.isHomeBase && (
                          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                            HOME BASE
                          </span>
                        )}
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {area.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="mb-4">
                        <div className="text-xs font-medium text-gray-500 mb-2">
                          SPECIALTIES:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {area.highlights.map((highlight, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Drive Time */}
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-3 w-3" />
                        {area.driveTime} from our base
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Don&rsquo;t See Your Area Listed?
          </h3>
          <p className="text-gray-600 mb-6">
            We&rsquo;re always expanding our service area. Give us a call to discuss your project 
            - we may be able to accommodate special requests or longer-distance jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {businessInfo.phone}
              </a>
            </Button>
            <Button variant="outline" size="lg">
              Request Service Area Check
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            Licensed contractor serving Northeast Florida since 2024 • Free consultations within our service area
          </p>
        </div>
      </div>
    </section>
  );
}
