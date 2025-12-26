# Contact Form Setup Guide - Web3Forms

## ✅ Setup: Web3Forms

**Why Web3Forms:**
- ✅ **Free Tier** - Unlimited submissions (completely free)
- ✅ **Perfect for Static Sites** - Works with Cloudflare Pages, GitHub Pages, Netlify, Vercel
- ✅ **No Backend Required** - Just add your access key
- ✅ **Built-in Spam Protection** - Automatic spam filtering
- ✅ **Email Notifications** - Get instant emails when forms are submitted
- ✅ **Privacy Friendly** - No tracking, GDPR compliant
- ✅ **Easy Setup** - 2 minutes to configure

## Setup Steps

### 1. Get Your Access Key
1. Go to **https://web3forms.com**
2. Enter your email address: `sk@zerobarriers.io`
3. Click "Get Your Access Key"
4. Check your email for the access key (it will look like: `abc123-def456-ghi789`)

### 2. Update the Contact Form Code
1. Open: `src/app/contact/page.tsx`
2. Find line ~19 where it says:
   ```javascript
   const accessKey = 'YOUR_ACCESS_KEY'
   ```
3. Replace `YOUR_ACCESS_KEY` with your actual access key from Web3Forms
   Example: `const accessKey = 'abc123-def456-ghi789'`

### 3. Email Configuration
- The form is configured to send emails to: `sk@zerobarriers.io`
- This is set automatically in the form code using the `to` field
- Make sure to use `sk@zerobarriers.io` when getting your access key from Web3Forms

### 4. Test the Form
1. Deploy your site
2. Submit a test form on the contact page
3. Check your email (sk@zerobarriers.io) - you should receive the submission

## Current Status

✅ The contact form code is already configured for Web3Forms
✅ Just needs your Web3Forms access key added to `.env.local`
✅ All form fields are properly named and will be included in the email
✅ Form includes subject line: "New Contact Form Submission from Zero Barriers"
✅ Emails will be sent to: `sk@zerobarriers.io`

## Form Fields Included

The form will send the following information:
- First Name
- Last Name
- Phone
- Email
- Company
- Website (optional)
- Message
- Page (hidden field: "Contact")

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com
- Support: support@web3forms.com

## Security

- Your access key is safe to use in frontend code (it's designed for this)
- Web3Forms includes automatic spam protection
- All submissions are encrypted in transit
