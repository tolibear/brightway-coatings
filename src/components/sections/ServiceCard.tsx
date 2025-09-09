import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  slug: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  slug,
  image,
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video bg-gray-200 rounded-t-lg">
          {/* Image placeholder - will be replaced with actual images */}
          <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-lg" />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full">
          <Link href={`/services/${slug}`}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
