// Cloudflare Worker for Zero Barriers Contact Form
// Deploy this to Cloudflare Workers and set up the route: zerobarriers.io/api/contact

const contactFormHandler = {
  async fetch(request, env) {
    // Handle CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': 'https://zerobarriers.io',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const formData = await request.formData();
      
      // Spam protection checks
      const honeypot = formData.get('website');
      if (honeypot) {
        return new Response(JSON.stringify({ error: 'Spam detected' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Verify Turnstile
      const turnstileResponse = formData.get('cf-turnstile-response');
      if (!turnstileResponse) {
        return new Response(JSON.stringify({ error: 'CAPTCHA verification required' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const turnstileVerification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET,
          response: turnstileResponse,
          remoteip: request.headers.get('CF-Connecting-IP')
        })
      });

      const turnstileResult = await turnstileVerification.json();
      if (!turnstileResult.success) {
        return new Response(JSON.stringify({ error: 'CAPTCHA verification failed' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Extract form data
      const name = formData.get('name');
      const email = formData.get('email');
      const company = formData.get('company') || 'Not provided';
      const phone = formData.get('phone') || 'Not provided';
      const message = formData.get('message');

      // Validate required fields
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Spam keyword detection
      const spamKeywords = ['viagra', 'casino', 'lottery', 'bitcoin', 'crypto', 'investment', 'loan', 'debt'];
      const messageText = message.toString().toLowerCase();
      
      if (spamKeywords.some(keyword => messageText.includes(keyword))) {
        return new Response(JSON.stringify({ error: 'Spam detected' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Rate limiting check (basic implementation)
      const clientIP = request.headers.get('CF-Connecting-IP');
      const rateLimitKey = `rate_limit_${clientIP}`;
      const rateLimitData = await env.CONTACT_FORM_KV.get(rateLimitKey);
      
      if (rateLimitData) {
        const { count, timestamp } = JSON.parse(rateLimitData);
        const now = Date.now();
        const timeDiff = now - timestamp;
        
        // Reset counter after 1 hour
        if (timeDiff > 3600000) {
          await env.CONTACT_FORM_KV.put(rateLimitKey, JSON.stringify({ count: 1, timestamp: now }), { expirationTtl: 3600 });
        } else if (count >= 5) {
          return new Response(JSON.stringify({ error: 'Too many requests' }), { 
            status: 429,
            headers: { 'Content-Type': 'application/json' }
          });
        } else {
          await env.CONTACT_FORM_KV.put(rateLimitKey, JSON.stringify({ count: count + 1, timestamp }), { expirationTtl: 3600 });
        }
      } else {
        await env.CONTACT_FORM_KV.put(rateLimitKey, JSON.stringify({ count: 1, timestamp: Date.now() }), { expirationTtl: 3600 });
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
IP: ${clientIP}
User Agent: ${request.headers.get('User-Agent') || 'unknown'}
      `;

      // Send email using Resend
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
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
    <p><strong>IP Address:</strong> ${clientIP}</p>
  </div>
</body>
</html>
          `
        })
      });

      if (!emailResponse.ok) {
        console.error('Email sending failed:', await emailResponse.text());
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Send auto-responder to user
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
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

      return new Response(JSON.stringify({ success: true }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://zerobarriers.io'
        }
      });

    } catch (error) {
      console.error('Contact form error:', error);
      return new Response(JSON.stringify({ error: 'Server error' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

export default contactFormHandler;
