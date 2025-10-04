import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Phone, Mail, Calendar, FileText, Home, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/business';

export const metadata: Metadata = {
  title: 'Thank You | Contact Received - Brightway Coatings',
  description: 'Thank you for contacting Brightway Coatings. We\'ll respond within 24 hours with your free quote and next steps.',
  robots: 'noindex, follow', // Prevent indexing of thank you pages
};

const nextSteps = [
  {
    icon: Clock,
    title: 'Response Within 24 Hours',
    description: 'Tim or Paul will contact you within one business day to discuss your project and schedule a free on-site consultation.',
    timeline: 'Within 24 hours',
  },
  {
    icon: Calendar,
    title: 'Free On-Site Consultation',
    description: 'We\'ll visit your property to assess the surfaces, show samples, and provide an accurate quote with no hidden fees.',
    timeline: '2-3 days',
  },
  {
    icon: FileText,
    title: 'Detailed Written Quote',
    description: 'Receive a comprehensive proposal including materials, labor, timeline, and warranty information.',
    timeline: 'Same day as consultation',
  },
  {
    icon: Shield,
    title: 'Installation Scheduling',
    description: 'Once approved, we\'ll schedule your installation typically within 1-2 weeks, with most jobs completed in one day.',
    timeline: '1-2 weeks',
  },
];

const additionalResources = [
  {
    icon: Home,
    title: 'View Our Portfolio',
    description: 'Browse recent projects and see the quality of our work',
    link: '/portfolio',
    linkText: 'See Projects',
  },
  {
    icon: FileText,
    title: 'Learn About Services',
    description: 'Explore all our concrete coating solutions',
    link: '/services',
    linkText: 'View Services',
  },
  {
    icon: Phone,
    title: 'Have Questions?',
    description: 'Call us directly for immediate assistance',
    link: `tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`,
    linkText: 'Call Now',
  },
];

export default function ThankYouPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          {/* Success Message */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You for Choosing Brightway!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your request has been received and we're excited to help transform your concrete surfaces. 
              Here's what happens next in our proven process.
            </p>

            {/* Contact confirmation */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-green-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Message Delivered Successfully</span>
              </div>
              <p className="text-sm text-gray-600">
                We'll respond to your inquiry within 24 hours during business hours (Mon-Fri 8 AM - 5 PM)
              </p>
            </div>
          </div>

          {/* Next Steps Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Your Project Timeline
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="border border-blue-200 hover:border-blue-300 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      <div className="bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        Step {index + 1}: {step.timeline}
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Need Immediate Help */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="border border-orange-200 bg-orange-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-6">
                  For urgent questions or to speak directly with Tim or Paul, call us now. We're always happy to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call {businessInfo.phone}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Us
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Business Hours: {businessInfo.hours}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              While You Wait, Explore More
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      
                      <Button variant="outline" size="sm" asChild>
                        <Link href={resource.link}>
                          {resource.linkText}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Trust Reinforcement */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Jacksonville Families Trust Brightway
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-gray-600">Years Home Service</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Coatings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15 Yr</div>
                  <div className="text-sm text-gray-600">Warranty</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Licensed FL Contractor #L24000469209 • Fully Insured • Family-Owned Since 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
