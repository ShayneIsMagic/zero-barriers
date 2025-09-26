import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Spam protection checks
    const honeypot = formData.get('website');
    if (honeypot) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Verify Turnstile
    const turnstileResponse = formData.get('cf-turnstile-response');
    if (!turnstileResponse) {
      return NextResponse.json({ error: 'CAPTCHA verification required' }, { status: 400 });
    }

    // Verify Turnstile with Cloudflare
    const turnstileVerification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET,
        response: turnstileResponse,
        remoteip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
      })
    });

    const turnstileResult = await turnstileVerification.json();
    if (!turnstileResult.success) {
      return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
    }

    // Extract form data
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company') || 'Not provided';
    const phone = formData.get('phone') || 'Not provided';
    const message = formData.get('message');

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Enhanced spam keyword detection
    const spamKeywords = [
      'viagra', 'casino', 'lottery', 'bitcoin', 'crypto', 'investment', 'loan', 'debt',
      'click here', 'make money', 'work from home', 'get rich', 'free money', 'win money',
      'guaranteed', 'no risk', 'limited time', 'act now', 'urgent', 'congratulations',
      'winner', 'prize', 'claim', 'verify', 'confirm', 'update', 'suspended', 'expired',
      'pharmacy', 'pills', 'medication', 'prescription', 'weight loss', 'diet', 'supplements'
    ];
    const messageText = message.toString().toLowerCase();
    const nameText = name.toString().toLowerCase();
    const emailText = email.toString().toLowerCase();
    
    // Check for spam in message, name, and email
    const allText = `${messageText} ${nameText} ${emailText}`;
    if (spamKeywords.some(keyword => allText.includes(keyword))) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Check for excessive repetition (bot behavior)
    const words = messageText.split(/\s+/);
    const wordCounts = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const maxRepeats = Math.max(...Object.values(wordCounts));
    if (maxRepeats > 5) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Check for suspicious patterns
    const suspiciousPatterns = [
      /https?:\/\/[^\s]+/g, // URLs
      /[A-Z]{3,}/g, // Excessive caps
      /[!]{3,}/g, // Excessive exclamation marks
      /\d{4,}/g // Long number sequences
    ];
    
    const suspiciousMatches = suspiciousPatterns.reduce((count, pattern) => {
      return count + (allText.match(pattern) || []).length;
    }, 0);
    
    if (suspiciousMatches > 3) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Time-based submission check (minimum 3 seconds between submissions)
    const submissionTime = Date.now();
    
    // This would need to be stored in a database or cache in production
    // For now, we'll rely on the rate limiting in the Cloudflare Worker
    
    // Check for form completion time (too fast = bot)
    const formStartTime = request.headers.get('x-form-start-time');
    if (formStartTime) {
      const timeDiff = submissionTime - parseInt(formStartTime);
      if (timeDiff < 2000) { // Less than 2 seconds = likely bot
        return NextResponse.json({ error: 'Submission too fast' }, { status: 400 });
      }
    }

    // Email content
    const emailContent = `
New contact form submission from Zero Barriers website:

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}

Message:
${message}

Submitted: ${new Date().toISOString()}
IP: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'}
User Agent: ${request.headers.get('user-agent') || 'unknown'}
    `;

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'noreply@zerobarriers.io',
        to: 'sk@zerobarriers.io',
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #25c536; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #25c536; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #25c536; margin-top: 10px; }
    .footer { background: #f5f5f5; padding: 15px; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Contact Form Submission - Zero Barriers</h2>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Name:</div>
      <div class="value">${name}</div>
    </div>
    <div class="field">
      <div class="label">Email:</div>
      <div class="value">${email}</div>
    </div>
    <div class="field">
      <div class="label">Company:</div>
      <div class="value">${company}</div>
    </div>
    <div class="field">
      <div class="label">Phone:</div>
      <div class="value">${phone}</div>
    </div>
    <div class="field">
      <div class="label">Message:</div>
      <div class="message-box">${message}</div>
    </div>
  </div>
  <div class="footer">
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>IP Address:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'}</p>
  </div>
</body>
</html>
        `
      })
    });

    if (!emailResponse.ok) {
      console.error('Email sending failed:', await emailResponse.text());
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Send auto-responder to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'noreply@zerobarriers.io',
        to: email.toString(),
        subject: 'Thank you for contacting Zero Barriers',
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #25c536; color: white; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 14px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank you for your interest!</h1>
  </div>
  <div class="content">
    <p>Hi ${name},</p>
    <p>Thank you for reaching out to Zero Barriers. We've received your message and will get back to you within 24 hours.</p>
    <p>In the meantime, feel free to explore our case studies and learn more about how we help businesses achieve rapid, substantial, and sustainable growth.</p>
    <p>Best regards,<br><strong>Zero Barriers Team</strong></p>
  </div>
  <div class="footer">
    <p>Zero Barriers | Transforming Business Growth</p>
    <p>Phone: 801-997-0457 | Email: sk@zerobarriers.io</p>
  </div>
</body>
</html>
        `
      })
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://zerobarriers.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
