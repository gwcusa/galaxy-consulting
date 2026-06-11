import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, org, email, phone, topic, message } = await request.json();

    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Galaxy Consulting Website <onboarding@resend.dev>',
      to: 'info@galaxyconsultingllc.com',
      replyTo: email,
      subject: `Website Inquiry — ${topic}`,
      text: [
        `Name:         ${name}`,
        `Organization: ${org || 'Not provided'}`,
        `Email:        ${email}`,
        `Phone:        ${phone || 'Not provided'}`,
        `Topic:        ${topic}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}
