import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Spam protection - honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // Options include:
    // 1. EmailJS (client-side or server-side)
    // 2. Resend (recommended for Next.js)
    // 3. SendGrid
    // 4. Nodemailer with SMTP

    // Example with Resend (uncomment and add RESEND_API_KEY to .env):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'New Look Website <noreply@newlookpaving.com>',
      to: 'newlook7@myyahoo.com',
      subject: `New Contact Form Submission - ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service Interest:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    */

    // Log the submission (for development)
    console.log("Contact Form Submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // For now, we'll simulate a successful submission
    // In production, replace this with actual email sending

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}

