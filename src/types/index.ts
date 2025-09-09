// Business Information Types
export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  serviceAreas: string[];
}

// Service Types
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  faqs: FAQ[];
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// SEO Meta Types
export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Testimonial Types
export interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

// Hero Variation Types
export interface HeroVariation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}
