/**
 * Cloudflare Pages Function to handle contact form submissions
 * 
 * This function receives form submissions and sends emails via Resend API.
 * Environment variables are available at runtime (not build time).
 * 
 * Required Environment Variables (set in Cloudflare Pages):
 * - RESEND_API_KEY: Your Resend API key
 * - CONTACT_EMAIL: sk@zerobarriers.io (or use default)
 */

interface Env {
  RESEND_API_KEY?: string
  CONTACT_EMAIL?: string
}

interface ContactFormData {
  first_name: string
  last_name: string
  phone: string
  email: string
  company?: string
  website?: string
  message: string
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context

  // CORS headers for cross-origin requests
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle OPTIONS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  try {
    // Parse form data
    const formData: ContactFormData = await request.json()

    // Validate required fields
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      )
    }

    // Check if Resend API key is configured
    const resendApiKey = env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured')
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service not configured. Please contact the site administrator.' 
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      )
    }

    // Get recipient email - using verified domain
    const recipientEmail = env.CONTACT_EMAIL || 'sk@zerobarriers.io'

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${formData.first_name} ${formData.last_name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      ${formData.website ? `<p><strong>Website:</strong> ${formData.website}</p>` : ''}
      <hr>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `

    const emailText = `
New Contact Form Submission

From: ${formData.first_name} ${formData.last_name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}\n` : ''}${formData.website ? `Website: ${formData.website}\n` : ''}

Message:
${formData.message}
    `.trim()

    // Send email via Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Using verified domain - update once DNS records are added and domain is verified in Resend
        // For now using default domain (only works for testing to verified email)
        // Once domain verified, change to: 'Zero Barriers <contact@zerobarriers.io>'
        from: 'Zero Barriers <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: formData.email,
        subject: 'New Contact Form Submission from Zero Barriers',
        html: emailHtml,
        text: emailText,
      }),
    })

    if (!resendResponse.ok) {
      let errorData: any
      try {
        errorData = await resendResponse.json()
      } catch {
        errorData = await resendResponse.text()
      }
      
      console.error('Resend API error:', JSON.stringify(errorData, null, 2))
      console.error('Resend API status:', resendResponse.status, resendResponse.statusText)
      
      // Provide more helpful error messages based on common issues
      let errorMessage = 'Failed to send email. Please try again later.'
      if (typeof errorData === 'object' && errorData.message) {
        errorMessage = errorData.message
      } else if (typeof errorData === 'string' && errorData.includes('domain')) {
        errorMessage = 'Email domain not verified. Please verify your domain in Resend.'
      }
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: errorMessage,
          details: process.env.NODE_ENV === 'development' ? errorData : undefined
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      )
    }

    const resendData = await resendResponse.json()
    console.log('Resend API success:', resendData.id)

    // Success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.',
        id: resendData.id 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  }
}
