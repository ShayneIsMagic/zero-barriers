# Contact Form Troubleshooting Guide

## Quick Diagnostic Commands

### 1. Check if the form is loading correctly
```bash
# Test the contact page
curl -s http://localhost:3000/contact | grep -E "(cf-turnstile|Turnstile|form)" | head -5

# Check for Turnstile site key
curl -s http://localhost:3000/contact | grep "data-sitekey"
```

### 2. Test the API endpoint
```bash
# Test with fake data (should return CAPTCHA error)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&message=Test&cf-turnstile-response=test" \
  -v

# Expected response: {"error":"CAPTCHA verification failed"}
```

### 3. Check environment variables
```bash
# Verify .env.local exists and has keys
ls -la .env.local
head -10 .env.local

# Check if keys are properly formatted
grep -E "TURNSTILE_SITE_KEY|TURNSTILE_SECRET_KEY|RESEND_API_KEY" .env.local
```

### 4. Check CSP headers
```bash
# Test CSP configuration
curl -I http://localhost:3000/contact | grep -i "content-security-policy"

# Should include: challenges.cloudflare.com and api.resend.com
```

## Common Issues & Solutions

### Issue 1: Turnstile CAPTCHA not loading
**Symptoms:** No CAPTCHA widget visible, console errors about Turnstile
**Diagnosis:**
```bash
# Check if site key is present
curl -s http://localhost:3000/contact | grep "data-sitekey"

# Check CSP allows Turnstile
curl -I http://localhost:3000/contact | grep -i "content-security-policy" | grep "challenges.cloudflare.com"
```
**Solutions:**
- Verify site key in `.env.local`: `TURNSTILE_SITE_KEY=0x4AAAAAAB3leLaMnnM_ISQ0`
- Check CSP includes `https://challenges.cloudflare.com` in `script-src` and `frame-src`
- Ensure Turnstile domain is added in Cloudflare dashboard

### Issue 2: Form submission fails
**Symptoms:** Form submits but no email received, API returns errors
**Diagnosis:**
```bash
# Test API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&message=Test&cf-turnstile-response=test"

# Check server logs
npm run dev 2>&1 | grep -E "(error|Error|failed)"
```
**Solutions:**
- Verify Resend API key: `RESEND_API_KEY=re_homrbaxA_2PKR5RhtyNiEweuvWdZrMhmd`
- Check target email: `sk@zerobarriers.io`
- Verify CSP allows `https://api.resend.com` in `connect-src`

### Issue 3: CSP violations
**Symptoms:** Console errors about blocked resources, form not working
**Diagnosis:**
```bash
# Check current CSP
curl -I http://localhost:3000/contact | grep -i "content-security-policy"

# Look for blocked resources in browser console
```
**Solutions:**
- Update `public/_headers` CSP to include required domains
- For Turnstile: add `https://challenges.cloudflare.com` to `script-src` and `frame-src`
- For Resend: add `https://api.resend.com` to `connect-src`

### Issue 4: Environment variables not loading
**Symptoms:** API returns 500 errors, "undefined" in logs
**Diagnosis:**
```bash
# Check if .env.local exists
ls -la .env.local

# Verify file format
head -5 .env.local

# Check for syntax errors
node -e "require('dotenv').config({path: '.env.local'}); console.log(process.env.TURNSTILE_SITE_KEY)"
```
**Solutions:**
- Ensure `.env.local` exists in project root
- Verify no spaces around `=` in environment variables
- Restart development server after changes

### Issue 5: Email delivery issues
**Symptoms:** Form submits successfully but no email received
**Diagnosis:**
```bash
# Check Resend API key format
grep "RESEND_API_KEY" .env.local

# Test Resend API directly (replace with your key)
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"from":"noreply@zerobarriers.io","to":"sk@zerobarriers.io","subject":"Test","text":"Test message"}'
```
**Solutions:**
- Verify Resend API key is valid and active
- Check Resend dashboard for delivery status
- Ensure sender domain is verified in Resend
- Check spam folder for test emails

## Production Deployment Checklist

### Before deploying to Cloudflare Pages:
1. **Environment Variables in Cloudflare:**
   - `TURNSTILE_SITE_KEY=0x4AAAAAAB3leLaMnnM_ISQ0`
   - `TURNSTILE_SECRET_KEY=0x4AAAAAAB3leLQbj_4mwIb1aZb6Fe2WagE`
   - `RESEND_API_KEY=re_homrbaxA_2PKR5RhtyNiEweuvWdZrMhmd`

2. **CSP Headers:** Verify `public/_headers` includes all required domains

3. **Turnstile Configuration:**
   - Domain `zerobarriers.io` added in Cloudflare Turnstile dashboard
   - Challenge type set to "Managed"

4. **Resend Configuration:**
   - Domain `zerobarriers.io` verified in Resend dashboard
   - Sender `noreply@zerobarriers.io` configured

### Post-deployment testing:
```bash
# Test live site
curl -s https://zerobarriers.io/contact | grep "data-sitekey"

# Test API endpoint
curl -X POST https://zerobarriers.io/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&message=Test&cf-turnstile-response=test"
```

## Security Considerations

### Never commit sensitive data:
- `.env.local` is in `.gitignore`
- API keys are stored securely
- Turnstile secret key is server-side only

### Regular maintenance:
- Monitor Resend usage (5,000 emails/month free)
- Check Cloudflare Turnstile usage (unlimited free)
- Review CSP headers for new requirements

## Emergency Rollback

If contact form breaks completely:
1. **Temporary fix:** Add a simple mailto link
2. **Quick restore:** Revert to previous working commit
3. **Debug mode:** Enable detailed error logging

```bash
# Quick rollback
git log --oneline -10
git checkout <previous-working-commit>

# Enable debug logging
export DEBUG=*
npm run dev
```

## Support Resources

- **Cloudflare Turnstile:** https://developers.cloudflare.com/turnstile/
- **Resend Documentation:** https://resend.com/docs
- **Next.js API Routes:** https://nextjs.org/docs/api-routes/introduction
- **CSP Reference:** https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

## Contact Form Architecture

```
User Form → Turnstile CAPTCHA → Next.js API → Resend Email Service
    ↓              ↓                ↓              ↓
  Frontend    Bot Protection    Spam Filter    Email Delivery
```

**Key Files:**
- `src/app/contact/page.tsx` - Next.js contact form
- `src/app/contact.astro` - Astro contact form  
- `src/app/api/contact/route.ts` - API endpoint
- `public/_headers` - CSP configuration
- `.env.local` - Environment variables
- `cloudflare-worker.js` - Alternative backend

**Dependencies:**
- Cloudflare Turnstile (free)
- Resend (5,000 emails/month free)
- Next.js API routes
- CSP headers for security
