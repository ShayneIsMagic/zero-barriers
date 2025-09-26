# Cloudflare Contact Form Migration Setup Guide

## Overview
This guide will help you migrate from Web3Forms to a Cloudflare-based contact form solution with enterprise-grade security and zero cost for most use cases.

## Phase 1: Cloudflare Setup

### Step 1: Enable Cloudflare for Your Domain
1. Sign up for Cloudflare (if not already done)
2. Go to [cloudflare.com](https://cloudflare.com)
3. Create free account
4. Add your domain (zerobarriers.io)
5. Update DNS Settings:
   - Point your domain's nameservers to Cloudflare
   - Ensure your website is proxied through Cloudflare (orange cloud icon)

### Step 2: Set Up Cloudflare Turnstile (Free CAPTCHA)
1. Go to Cloudflare Dashboard → Turnstile
2. Create new site
3. Copy Site Key and Secret Key
4. Add your domain to allowed domains
5. Choose "Managed" challenge type for best UX

**Update the site key in your forms:**
- Replace `YOUR_SITE_KEY` in both contact forms with your actual Turnstile site key

## Phase 2: Email Service Setup

### Step 3: Set Up Resend (Recommended)
1. Go to [resend.com](https://resend.com)
2. Sign up for free account (5,000 emails/month free)
3. Verify your domain (zerobarriers.io)
4. Get your API key
5. Add the API key to your environment variables

### Alternative Email Services:
- **Mailgun**: 5,000 free emails/month
- **SendGrid**: 100 free emails/day

## Phase 3: Environment Variables

### For Next.js (Local Development)
Create `.env.local` file:
```env
TURNSTILE_SECRET=your_turnstile_secret_key
RESEND_API_KEY=your_resend_api_key
```

### For Cloudflare Workers
Add these secrets in Cloudflare Dashboard → Workers → Your Worker → Settings → Variables:
- `TURNSTILE_SECRET`: Your Turnstile secret key
- `RESEND_API_KEY`: Your Resend API key

## Phase 4: Deployment Options

### Option A: Next.js API Route (Current Implementation)
The contact form is already set up to use `/api/contact` endpoint. This works with:
- Vercel deployment
- Netlify with Next.js
- Any Next.js hosting

### Option B: Cloudflare Workers (Recommended for Cloudflare)
1. Go to Cloudflare Dashboard → Workers & Pages
2. Create new Worker
3. Name it "contact-form-handler"
4. Copy the code from `cloudflare-worker.js`
5. Deploy the worker
6. Set up custom domain route: `zerobarriers.io/api/contact`

## Phase 5: Testing

### Test Cases to Verify:
1. **Valid form submission** - Should send email and show success message
2. **Invalid email format** - Should show validation error
3. **Empty required fields** - Should show validation error
4. **Honeypot field filled** - Should block submission (spam protection)
5. **Multiple rapid submissions** - Should be rate limited
6. **CAPTCHA verification** - Should require valid CAPTCHA

### Monitoring:
- Check Cloudflare Worker/Pages logs
- Monitor email delivery in Resend dashboard
- Track form submission analytics

## Phase 6: Advanced Features

### Rate Limiting
The Cloudflare Worker includes built-in rate limiting:
- 5 submissions per hour per IP address
- Uses Cloudflare KV storage for tracking

### Spam Protection
Multiple layers of spam protection:
1. **Honeypot field** - Hidden field that bots fill
2. **Turnstile CAPTCHA** - Cloudflare's free CAPTCHA
3. **Keyword filtering** - Blocks common spam keywords
4. **Rate limiting** - Prevents rapid submissions

### Email Templates
Professional HTML email templates for:
- Contact form notifications (to you)
- Auto-responder emails (to users)

## Cost Comparison

### Current (Web3Forms):
- Free tier: 250 submissions/month
- Paid: $9/month for 1,000 submissions

### New (Cloudflare + Resend):
- Cloudflare Workers: 100k requests/day (free)
- Resend: 5,000 emails/month (free)
- **Total: $0/month for most small businesses**

## Security Benefits

1. **DDoS Protection**: Cloudflare's global network
2. **Bot Protection**: Turnstile CAPTCHA
3. **Rate Limiting**: Built-in request limiting
4. **Honeypot**: Hidden field spam trap
5. **Content Filtering**: Keyword-based spam detection
6. **IP Blocking**: Automatic malicious IP blocking

## Troubleshooting

### Common Issues:
1. **Turnstile not loading**: Check site key and domain configuration
2. **Emails not sending**: Verify Resend API key and domain verification
3. **CORS errors**: Ensure proper CORS headers in worker
4. **Rate limiting**: Check KV storage configuration

### Debug Steps:
1. Check browser console for JavaScript errors
2. Monitor Cloudflare Worker logs
3. Verify environment variables are set correctly
4. Test email delivery in Resend dashboard

## Next Steps

1. Set up Cloudflare Turnstile and get your keys
2. Set up Resend account and get API key
3. Update the site key in both contact forms
4. Deploy and test the implementation
5. Monitor performance and adjust as needed

This solution provides enterprise-grade security and reliability at zero cost for most use cases!
