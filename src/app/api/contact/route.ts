import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { businessInfo } from '@/data/business';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceType: z.string().min(1, 'Please select a service type'),
  projectSize: z.string().min(1, 'Please provide project size'),
  message: z.string().min(10, 'Please provide more details about your project'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactSchema.parse(body);
    
    // In a production environment, you would:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store in database
    // 3. Send to CRM
    // 4. Set up webhook notifications
    
    // For now, we'll simulate successful submission
    console.log('Contact form submission:', {
      ...validatedData,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Send success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We\'ll respond within 2 hours.',
      data: {
        submissionId: `BW${Date.now()}`,
        estimatedResponse: '2 hours',
        nextSteps: [
          'We\'ll review your project details',
          'Contact you via phone or email',
          'Schedule your free on-site consultation'
        ]
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Please check your form data and try again.',
        errors: error.issues
      }, { status: 400 });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      message: 'Something went wrong. Please call us at ' + businessInfo.phone + ' or try again later.',
      error: 'Internal server error'
    }, { status: 500 });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed'
  }, { status: 405 });
}
