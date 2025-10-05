'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import Hero from '@/components/sections/Hero';
import CTABand from '@/components/sections/CTABand';
import TrustBadges from '@/components/sections/TrustBadges';
import { ctaText, businessInfo } from '@/data/business';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calculator } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceType: z.string().min(1, 'Please select a service type'),
  projectSize: z.string().min(1, 'Please provide project size'),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const serviceTypes = [
  'Garage Floor Coating',
  'Pool Deck Coating', 
  'Patio Coating',
  'Commercial Flooring',
  'Residential Flooring',
  'Other - Explain in Message'
];

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us Today',
    content: businessInfo.phone,
    href: `tel:${businessInfo.phone}`,
    description: 'Free estimates and quick responses'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: businessInfo.email,
    href: `mailto:${businessInfo.email}`,
    description: 'Send project details and photos'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    content: businessInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`,
    description: 'Family-owned and local since 2024'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: businessInfo.hours,
    href: null,
    description: 'Emergency services available'
  }
];

export default function ContactPageClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    details?: {
      submissionId?: string;
      estimatedResponse?: string;
      nextSteps?: string[];
    };
  }>({ type: null, message: '' });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      projectSize: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        form.reset(); // Clear the form on success
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        title="Get Your Free Estimate Today"
        subtitle="Family-owned experts serving Jacksonville and Northeast Florida since 2024. Quick responses, honest estimates, and quality craftsmanship you can trust."
        ctaPrimary="Call Now: 904-540-9693"
        ctaSecondary="Send Message Below"
      />

      {/* Contact Information Cards */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Multiple Ways to Reach Us
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {info.href ? (
                        <a href={info.href} className="font-medium text-blue-600 hover:text-blue-800 block">
                          {info.content}
                        </a>
                      ) : (
                        <div className="font-medium">{info.content}</div>
                      )}
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                The fastest way to get started is with a quick phone call. We can often provide 
                ballpark estimates over the phone and schedule your free on-site consultation within 24 hours.
              </p>
              <p className="text-gray-600">
                For detailed project information, photos, or specific questions, use the contact form below 
                and we'll respond with a comprehensive proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-gray-600">
                The more details you provide, the more accurate our initial estimate will be. 
                Include photos if possible for the most precise quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-blue-600" />
                      Free Project Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="(904) 123-4567" type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Type *</FormLabel>
                                <FormControl>
                                  <select 
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    {...field}
                                  >
                                    <option value="">Select a service...</option>
                                    {serviceTypes.map((service) => (
                                      <option key={service} value={service}>
                                        {service}
                                      </option>
                                    ))}
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="projectSize"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Approximate Square Footage *</FormLabel>
                                <FormControl>
                                  <Input placeholder="500 sq ft" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Details *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe your project, timeline, any specific requirements, and the best time to contact you. Include photos if emailing separately."
                                  className="min-h-32"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-800">
                            <strong>Quick Response Promise:</strong> We typically respond to all inquiries within 2 hours during business hours. 
                            For urgent projects, call us directly at {businessInfo.phone}.
                          </p>
                        </div>

                        {/* Form Status Messages */}
                        {submitStatus.type === 'success' && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="ml-3">
                                <h3 className="text-sm font-medium text-green-800">Message Sent Successfully!</h3>
                                <p className="text-sm text-green-700 mt-1">{submitStatus.message}</p>
                                {submitStatus.details?.nextSteps && (
                                  <ul className="mt-3 list-disc list-inside text-sm text-green-700">
                                    {submitStatus.details.nextSteps.map((step: string, index: number) => (
                                      <li key={index}>{step}</li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {submitStatus.type === 'error' && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-800">Error Sending Message</h3>
                                <p className="text-sm text-red-700 mt-1">{submitStatus.message}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        <Button 
                          type="submit" 
                          className="w-full md:w-auto px-8 py-3" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Send My Project Details
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Quick Response</h4>
                        <p className="text-gray-600 text-xs">We'll contact you within 2 hours to discuss your project</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Free Consultation</h4>
                        <p className="text-gray-600 text-xs">On-site visit to assess your space and provide accurate estimate</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Detailed Proposal</h4>
                        <p className="text-gray-600 text-xs">Written estimate with material options and timeline</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Service Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">We proudly serve:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {businessInfo.serviceAreas.map((area, index) => (
                        <div key={index} className="text-sm font-medium text-gray-700">
                          {area}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700 mb-1">100%</div>
                      <div className="text-sm text-green-600">Free Estimates</div>
                      <p className="text-xs text-green-600 mt-2">No obligation. No pressure. Just honest advice.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Find Us in St. Johns County
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Located in the heart of Northeast Florida, we're perfectly positioned to serve 
              Jacksonville and surrounding communities with fast, reliable service.
            </p>

            {/* Google Maps Integration */}
            <div className="mb-8">
              <GoogleMap 
                className="rounded-lg shadow-lg"
                height="400px"
                zoom={14}
                showInfoWindow={true}
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Convenient Location</h3>
              <p className="text-gray-600">
                Our centrally located office allows us to provide quick service throughout Northeast Florida. 
                Most estimates can be scheduled within 24 hours, and we often complete residential projects 
                in a single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <CTABand
        title="Ready to Get Started?"
        description="The sooner we connect, the sooner you'll have the beautiful floors you've been dreaming of"
        primaryCTA="Call Now: 904-540-9693"
        secondaryCTA={ctaText.primary}
      />
    </>
  );
}
