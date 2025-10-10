import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { businessInfo } from '@/data/business';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceType: z.string().min(1, 'Please select a service type'),
  projectSize: z.string().min(1, 'Please provide project size'),
  message: z.string().min(10, 'Please provide more details about your project'),
  source: z.string().optional(), // Track if from modal or contact page
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactSchema.parse(body);
    
    // Get source information
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const submissionSource = validatedData.source || 'contact_page';
    
    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Brightway Coatings Website <noreply@brightwaycoatings.com>',
          to: [businessInfo.email],
          replyTo: validatedData.email,
          subject: `New ${submissionSource === 'quote_modal' ? 'Quote Request' : submissionSource === 'consultation_modal' ? 'Consultation Request' : 'Contact Form'}: ${validatedData.serviceType}`,
          html: `
            <h2>New Lead from Brightway Coatings Website</h2>
            <p><strong>Source:</strong> ${submissionSource === 'quote_modal' ? 'Quick Quote Modal' : submissionSource === 'consultation_modal' ? 'Consultation Modal' : 'Contact Page Form'}</p>
            <hr />
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
            
            <h3>Project Details</h3>
            <p><strong>Service Type:</strong> ${validatedData.serviceType}</p>
            <p><strong>Project Size:</strong> ${validatedData.projectSize}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            
            <hr />
            <p><small>Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</small></p>
            <p><small>IP: ${ip}</small></p>
            <p><small>User Agent: ${userAgent}</small></p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the request if email fails, just log it
      }
    } else {
      // Log to console if no Resend API key (development mode)
      console.log('📧 Contact form submission (no Resend API key):', {
        ...validatedData,
        submittedAt: new Date().toISOString(),
        source: submissionSource,
        userAgent,
        ip,
      });
    }

    // Send success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll respond within 24 hours.",
      data: {
        submissionId: `BW${Date.now()}`,
        estimatedResponse: '24 hours',
        nextSteps: [
          "We'll review your project details",
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
