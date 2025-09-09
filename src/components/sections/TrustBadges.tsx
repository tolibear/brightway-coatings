import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Zap, Award } from 'lucide-react';

interface TrustBadge {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully certified for your protection',
    highlight: 'FL License #123456',
  },
  {
    icon: Users,
    title: 'Family-Owned',
    description: '30+ years of craftsmanship',
    highlight: 'Since 1990',
  },
  {
    icon: Zap,
    title: '1-Day Install',
    description: 'Most residential jobs done same day',
    highlight: 'Same-Day Service',
  },
  {
    icon: Award,
    title: 'Lifetime Warranty',
    description: 'Premium polyaspartic systems',
    highlight: 'Materials & Labor',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Why Jacksonville Homeowners Choose Brightway
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Family-owned craftsmanship you can trust, backed by the industry's best warranties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <Badge className="bg-blue-600 text-white mb-3 px-3 py-1">
                    {badge.title}
                  </Badge>
                  
                  <div className="text-sm font-semibold text-orange-600 mb-2">
                    {badge.highlight}
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {badge.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            Serving Jacksonville, St. Johns, St. Augustine, Ponte Vedra, Orange Park, Fleming Island, 
            Nocatee, Mandarin, and Julington Creek with professional concrete coating services.
          </p>
        </div>
      </div>
    </section>
  );
}
