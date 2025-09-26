# 🧪 Contact Form Testing Guide

## ✅ Current Status

- **Email Updated**: Now sends to `sk@zerobarriers.io` ✅
- **Linter Status**: Clean (0 errors, 5 minor warnings in service worker) ✅
- **Build Status**: Successful ✅
- **Ready for Testing**: Yes ✅

## 🧪 How to Test Your Contact Form

### Prerequisites for Testing

1. **Get Your API Keys** (if not done yet):
   - **Cloudflare Turnstile**: https://dash.cloudflare.com/profile/api-tokens
   - **Resend Email**: https://resend.com

2. **Update Contact Forms**:
   - Replace `YOUR_SITE_KEY` with your actual Turnstile site key
   - Add environment variables to your hosting platform

### Test Cases

#### ✅ Test 1: Valid Form Submission
**What to test**: Normal, legitimate form submission
**Steps**:
1. Go to your contact page
2. Fill out the form with:
   - **Name**: `Test User`
   - **Email**: `test@example.com`
   - **Company**: `Test Company`
   - **Phone**: `555-123-4567`
   - **Message**: `This is a test message to verify the contact form is working properly.`
3. Complete the CAPTCHA
4. Click "Send Message"
5. **Expected Result**: Success message appears, email sent to `sk@zerobarriers.io`

#### ❌ Test 2: Spam Keyword Detection
**What to test**: Spam protection blocks inappropriate content
**Steps**:
1. Fill out the form with spam content:
   - **Message**: `Click here to make money fast!!!`
2. Submit the form
3. **Expected Result**: Form submission blocked, error message shown

#### ❌ Test 3: Honeypot Field
**What to test**: Hidden field catches bots
**Steps**:
1. Use browser developer tools to make the honeypot field visible
2. Fill out the honeypot field
3. Submit the form
4. **Expected Result**: Form submission blocked

#### ❌ Test 4: Rate Limiting
**What to test**: Prevents rapid-fire submissions
**Steps**:
1. Submit the form multiple times quickly
2. **Expected Result**: After 5 submissions, further submissions blocked

#### ✅ Test 5: CAPTCHA Verification
**What to test**: CAPTCHA is required and working
**Steps**:
1. Fill out the form
2. Try to submit without completing CAPTCHA
3. **Expected Result**: Submission blocked until CAPTCHA completed

## 🔧 Local Testing Setup

### Option 1: Test with Environment Variables
Create `.env.local` file:
```env
TURNSTILE_SECRET=your_secret_key
RESEND_API_KEY=your_api_key
```

Then run:
```bash
npm run dev
```

### Option 2: Test API Endpoint Directly
```bash
curl -X POST http://localhost:3000/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "message=Test message" \
  -F "cf-turnstile-response=test"
```

## 📧 Email Testing

### What Emails You'll Receive

1. **Contact Form Notification** (to `sk@zerobarriers.io`):
   - Professional HTML email with form details
   - Includes name, email, company, phone, message
   - Timestamp and IP address

2. **Auto-responder** (to the person who submitted):
   - Thank you message
   - Professional Zero Barriers branding
   - Confirmation that you'll respond within 24 hours

### Email Content Preview

**Notification Email**:
```
Subject: New Contact Form Submission from Test User

Name: Test User
Email: test@example.com
Company: Test Company
Phone: 555-123-4567

Message:
This is a test message to verify the contact form is working properly.

Submitted: [timestamp]
IP Address: [user's IP]
```

**Auto-responder Email**:
```
Subject: Thank you for contacting Zero Barriers

Hi Test User,

Thank you for reaching out to Zero Barriers. We've received your message and will get back to you within 24 hours.

Best regards,
Zero Barriers Team
```

## 🚨 Troubleshooting

### Common Issues and Solutions

#### Issue: CAPTCHA not appearing
**Solution**: 
- Check that Turnstile site key is correctly set
- Verify domain is added to Turnstile configuration
- Check browser console for JavaScript errors

#### Issue: Form submission fails
**Solution**:
- Check environment variables are set correctly
- Verify Resend API key is valid
- Check browser console for error messages

#### Issue: No emails received
**Solution**:
- Check Resend dashboard for delivery status
- Verify email address `sk@zerobarriers.io` is correct
- Check spam folder
- Ensure Resend domain is verified

#### Issue: Spam protection too aggressive
**Solution**:
- Review keyword list in `/src/app/api/contact/route.ts`
- Adjust spam detection thresholds
- Test with legitimate business messages

## 📊 Testing Checklist

- [ ] Valid form submission works
- [ ] CAPTCHA appears and functions
- [ ] Spam keywords are blocked
- [ ] Honeypot field works
- [ ] Rate limiting functions
- [ ] Email notifications sent to `sk@zerobarriers.io`
- [ ] Auto-responder emails sent to users
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
- [ ] Error handling works properly

## 🎯 Success Criteria

Your contact form is working correctly when:
- ✅ Legitimate messages are sent successfully
- ✅ Spam is blocked effectively
- ✅ Emails are delivered to `sk@zerobarriers.io`
- ✅ Users receive confirmation emails
- ✅ Form works on all devices and browsers
- ✅ No JavaScript errors in console
- ✅ Fast loading and responsive design

## 🚀 Ready for Production

Once all tests pass:
1. Deploy to your hosting platform
2. Monitor email delivery
3. Track form submissions
4. Adjust spam filters if needed
5. Monitor performance and security

Your contact form is now ready for production use! 🎉
