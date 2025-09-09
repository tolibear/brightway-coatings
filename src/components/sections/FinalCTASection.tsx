import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Clock, Shield, Award, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { businessInfo, ctaText } from '@/data/business';

const urgencyReasons = [
  {
    icon: Calendar,
    title: "Book Before February",
    subtitle: "Lock in 2023 pricing"
  },
  {
    icon: Clock,
    title: "Same-Week Installation",
    subtitle: "January availability filling fast"
  },
  {
    icon: Award,
    title: "Free Color Upgrade",
    subtitle: "Premium flakes included this month"
  }
];

const finalBenefits = [
  "Lifetime warranty included",
  "Free color consultation",
  "Licensed & fully insured",
  "One-day installation guarantee",
  "30+ years local experience",
  "Transparent, upfront pricing"
];

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Concrete?
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
              Join 500+ satisfied Northeast Florida homeowners who chose Brightway Coatings 
              for lifetime durability, one-day installation, and unmatched craftsmanship.
            </p>
            
            {/* 5-Star Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0</span>
              <span className="text-blue-200">(500+ reviews)</span>
            </div>
          </div>
          
          {/* Urgency Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {urgencyReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-blue-400/30 hover:bg-white/15 transition-all">
                  <CardContent className="p-4 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                    <p className="text-blue-200 text-sm">{reason.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
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
                    Family-Owned Since 1990
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
                    className="w-full border-white text-white hover:bg-white hover:text-gray-900 text-lg py-6"
                  >
                    Schedule Free Consultation <ArrowRight className="ml-3 h-5 w-5" />
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
  );
}
