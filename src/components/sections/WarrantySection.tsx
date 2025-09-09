import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Clock, Award, Users, Star } from 'lucide-react';
import { businessInfo } from '@/data/business';

interface WarrantyFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const warrantyFeatures: WarrantyFeature[] = [
  {
    icon: Shield,
    title: 'Lifetime Material Warranty',
    description: 'Premium polyaspartic systems guaranteed against delamination, cracking, and coating failure',
  },
  {
    icon: Award,
    title: 'Labor Protection',
    description: 'Full installation warranty covers workmanship and application for complete peace of mind',
  },
  {
    icon: CheckCircle,
    title: 'Manufacturer Backing',
    description: 'Industry-leading coating manufacturers stand behind every gallon with comprehensive coverage',
  },
  {
    icon: Clock,
    title: 'Same-Day Resolution',
    description: 'Any warranty claims addressed within 24 hours with immediate scheduling for repairs',
  },
  {
    icon: Users,
    title: 'Local Guarantee',
    description: 'Family business rooted in St. Johns County - we\'ll be here to honor our warranty commitments',
  },
  {
    icon: Star,
    title: 'Performance Promise',
    description: 'If your floors don\'t exceed expectations, we make it right - no questions asked',
  },
];

export default function WarrantySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Industry's Best Warranty Protection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Lifetime Warranty, Guaranteed Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your investment is protected by the most comprehensive warranty in the industry. 
            We guarantee your satisfaction and stand behind every installation with a lifetime commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {warrantyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-blue-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Warranty Details */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What's Covered Under Your Lifetime Warranty
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Material Defects</p>
                    <p className="text-sm text-gray-600">Coating delamination, cracking, or premature wear</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Installation Quality</p>
                    <p className="text-sm text-gray-600">Workmanship and application standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Performance Standards</p>
                    <p className="text-sm text-gray-600">UV resistance, chemical resistance, and durability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Aesthetic Quality</p>
                    <p className="text-sm text-gray-600">Color consistency and finish appearance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">
                Simple Warranty Process
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Call us:</strong> {businessInfo.phone}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Schedule:</strong> Free inspection within 24 hours
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Resolution:</strong> Complete repair or replacement at no cost
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 font-medium text-center">
                  "We guarantee your complete satisfaction or we make it right - no exceptions."
                </p>
                <p className="text-xs text-blue-600 text-center mt-1">
                  - Paul Brightway, Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
