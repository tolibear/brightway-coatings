import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Search, Wrench, CheckCircle, Clock, Shield, Award, Users } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Free Consultation & Quote",
    duration: "30-45 minutes",
    description: "We visit your property for detailed assessment and provide honest, upfront pricing. No surprises, no pressure - just professional advice from local experts.",
    highlights: ["On-site evaluation", "Transparent pricing", "Custom recommendations", "Same-day quote"]
  },
  {
    step: 2,
    icon: Search,
    title: "Surface Preparation", 
    duration: "2-4 hours",
    description: "Meticulous concrete preparation, diamond grinding, Thorough vacuuming, Crack repair. Proper prep work is critical - we never skip steps that ensure long-term adhesion and performance.",
    highlights: ["Moisture testing", "Diamond grinding", "Thorough vacuum", "Crack repair"]
  },
  {
    step: 3,
    icon: Wrench,
    title: "Professional Installation",
    duration: "4-6 hours", 
    description: "Application of premium polyurea coating system with decorative flakes and Polyaspartic topcoat. Our experienced team works efficiently while maintaining the highest quality standards.",
    highlights: ["Base coat application", "Decorative Flake broadcast", "Polyaspartic top coat", "Seamless finish"]
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Final Inspection & Walkthrough",
    duration: "15-30 minutes",
    description: "Thorough quality inspection and customer walkthrough. We provide care instructions and warranty documentation, ensuring you&rsquo;re 100% satisfied with your new floor.",
    highlights: ["Quality inspection", "Care instructions", "Warranty activation", "Customer approval"]
  }
];

const processFeatures = [
  {
    icon: Clock,
    title: "One-Day Completion",
    description: "Most residential projects finished in a single day with minimal disruption to your routine."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full liability coverage and proper licensing for complete peace of mind during installation."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Father-and-son craftsmen with 5+ years of coatings experience, 30+ years home service expertise."
  },
  {
    icon: Award,
    title: "15 Year Warranty",
    description: "Comprehensive warranty coverage backed by premium materials and professional installation."
  }
];

export default function ProcessSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-25">
        <div 
          className="w-full h-full bg-repeat" 
          style={{
            backgroundImage: "url('/images/Flakes/Cappuccino /cappucino.png')",
            backgroundSize: "600px 600px"
          }}
        ></div>
      </div>
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Proven 4-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final walkthrough, we&rsquo;ve perfected every step 
            to deliver exceptional results with minimal disruption to your schedule
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === processSteps.length - 1;
              
              return (
                <div key={step.step} className="relative">
                  {/* Connection Line */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-300 z-0" 
                         style={{transform: 'translateX(-50%)', width: 'calc(100% - 2rem)'}} />
                  )}
                  
                  <Card className="relative z-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 h-full">
                    <CardContent className="p-6">
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {step.duration}
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="space-y-1">
                        {step.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-green-700">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Process Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Why Our Process Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to experience our professional process firsthand?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              Call 904-540-9693
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
