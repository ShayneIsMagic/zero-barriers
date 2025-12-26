# Contact Form Maintenance Guide

## Overview

This guide explains how to maintain and update the contact form configuration for the Zero Barriers website. The contact form uses **Resend** (primary) and **Web3Forms** (fallback) to send emails.

---

## How the Contact Form Works

The contact form uses a **dual-submission** approach:

1. **Primary Method:** Cloudflare Pages Function → Resend API
   - More secure (API key stored in Cloudflare environment variables)
   - Uses your verified domain: `contact@zerobarriers.io`
   - Sends to: `sk@zerobarriers.io` (or as configured)

2. **Fallback Method:** Web3Forms API
   - Activates automatically if primary method fails (e.g., 403 error)
   - Requires access key in environment variables
   - Also sends to: `sk@zerobarriers.io`

---

## Configuration Locations

### 1. Email Recipient (Where emails are sent)

**Location:** Cloudflare Pages Environment Variables

**Variable Name:** `CONTACT_EMAIL`

**Current Value:** `sk@zerobarriers.io`

**How to Update:**

1. Go to: **Cloudflare Dashboard** → **Pages** → **zero-barriers** → **Settings** → **Environment Variables**
2. Find or add: `CONTACT_EMAIL`
3. Update the value to your desired email address
4. Click **Save**
5. **Trigger a new deployment:**
   - Go to **Deployments** tab
   - Click **"Retry deployment"** on the latest deployment
   - OR make any commit to trigger automatic rebuild

**Alternative Location (Code Default):**

If `CONTACT_EMAIL` is not set, the code defaults to `sk@zerobarriers.io` in:
- File: `functions/api/contact.ts` (line 76)
- File: `src/app/contact/page.tsx` (line 91, for Web3Forms fallback)

---

### 2. Resend API Key

**Location:** Cloudflare Pages Environment Variables

**Variable Name:** `RESEND_API_KEY`

**How to Update:**

1. Get your Resend API key:
   - Go to: https://resend.com/api-keys
   - Copy your API key

2. Update in Cloudflare:
   - Go to: **Cloudflare Dashboard** → **Pages** → **zero-barriers** → **Settings** → **Environment Variables**
   - Find: `RESEND_API_KEY`
   - Update the value with your new API key
   - Click **Save**
   - **No rebuild needed** (environment variables are available at runtime)

---

### 3. Web3Forms Access Key (Fallback)

**Location:** Cloudflare Pages Environment Variables

**Variable Name:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

**Current Status:** Optional (only needed if primary method fails)

**How to Update:**

1. Get your Web3Forms access key:
   - Go to: https://web3forms.com
   - Enter email: `sk@zerobarriers.io`
   - Get access key from email

2. Update in Cloudflare:
   - Go to: **Cloudflare Dashboard** → **Pages** → **zero-barriers** → **Settings** → **Environment Variables**
   - Find or add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Update the value
   - Click **Save**
   - **Trigger a new deployment** (this variable is embedded at build time)

---

### 4. Sender Email Address (From field)

**Location:** Code file

**File:** `functions/api/contact.ts`

**Line:** 112

**Current Value:**
```typescript
from: 'Zero Barriers <contact@zerobarriers.io>',
```

**How to Update:**

1. Edit: `functions/api/contact.ts`
2. Find line 112
3. Update the email address and display name:
   ```typescript
   from: 'Your Display Name <your-email@zerobarriers.io>',
   ```
4. Save the file
5. Commit and push to GitHub
6. Cloudflare Pages will auto-deploy

**Note:** The email address must use your verified domain (`@zerobarriers.io`). To use a different domain, you'll need to verify it in Resend first.

---

### 5. Email Subject Line

**Location:** Code file

**File:** `functions/api/contact.ts`

**Line:** 115

**Current Value:**
```typescript
subject: 'New Contact Form Submission from Zero Barriers',
```

**How to Update:**

1. Edit: `functions/api/contact.ts`
2. Find line 115
3. Update the subject line
4. Save, commit, and push to GitHub

**Also update in:** `src/app/contact/page.tsx` (line 90) for Web3Forms fallback consistency.

---

### 6. Success Message (User-facing)

**Location:** Code file

**File:** `src/app/contact/page.tsx`

**Line:** 222

**Current Value:**
```
✅ Thank you! Your form submission was received successfully. We'll get back to you soon.
```

**How to Update:**

1. Edit: `src/app/contact/page.tsx`
2. Find line 222 (inside the success message div)
3. Update the message text
4. Save, commit, and push to GitHub

---

## Quick Reference: Common Updates

### Change Email Recipient

**Example:** Change from `sk@zerobarriers.io` to `info@zerobarriers.io`

1. Cloudflare Dashboard → Pages → zero-barriers → Settings → Environment Variables
2. Update `CONTACT_EMAIL` to `info@zerobarriers.io`
3. Save
4. Retry deployment

### Change Sender Display Name

**Example:** Change from "Zero Barriers" to "Zero Barriers Support"

1. Edit `functions/api/contact.ts`
2. Change line 112:
   ```typescript
   from: 'Zero Barriers Support <contact@zerobarriers.io>',
   ```
3. Commit and push

### Change Email Subject

**Example:** Change to "New Inquiry from Website"

1. Edit `functions/api/contact.ts`
2. Change line 115:
   ```typescript
   subject: 'New Inquiry from Website',
   ```
3. Also update line 90 in `src/app/contact/page.tsx` (for Web3Forms consistency)
4. Commit and push

---

## Environment Variables Summary

| Variable | Location | Purpose | Requires Rebuild? |
|----------|----------|---------|-------------------|
| `CONTACT_EMAIL` | Cloudflare Pages | Email recipient | No (runtime) |
| `RESEND_API_KEY` | Cloudflare Pages | Resend API authentication | No (runtime) |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Cloudflare Pages | Web3Forms fallback key | Yes (build time) |

**Note:** Variables without `NEXT_PUBLIC_` prefix are only available at runtime in Cloudflare Functions. Variables with `NEXT_PUBLIC_` prefix are embedded into the JavaScript bundle at build time.

---

## Testing Changes

After making any changes:

1. **Wait for deployment to complete** (if rebuild was required)
2. Go to: https://zerobarriers.io/contact
3. Fill out the form with a test submission
4. Submit the form
5. Check for:
   - ✅ Success message appears
   - ✅ Email arrives at the configured recipient address
   - ✅ Email has correct sender, subject, and content

---

## Troubleshooting

### Emails Not Arriving

1. **Check Resend Dashboard:**
   - Go to: https://resend.com/emails
   - Check if emails are being sent and delivered

2. **Check Environment Variables:**
   - Verify `RESEND_API_KEY` is set correctly
   - Verify `CONTACT_EMAIL` is set correctly (or default is correct)

3. **Check Spam Folder:**
   - Emails might be going to spam

4. **Check Domain Verification:**
   - Go to: https://resend.com/domains
   - Ensure `zerobarriers.io` shows "Verified"

### Form Shows Error Message

1. **Check Console:**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

2. **Check Cloudflare Function Logs:**
   - Go to: Cloudflare Dashboard → Pages → zero-barriers → Functions
   - Check logs for errors

3. **Verify Web3Forms Fallback:**
   - If primary method fails, check if Web3Forms fallback is configured
   - Verify `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set and site was rebuilt

---

## Important Notes

- **Never commit API keys or access keys** to the codebase
- **Always use environment variables** for sensitive information
- **Test changes** on a test submission before relying on production
- **Monitor Resend dashboard** for email delivery status
- **Domain must be verified** in Resend before emails can be sent from `@zerobarriers.io`

---

## Support

For issues with:
- **Resend:** https://resend.com/support
- **Web3Forms:** https://web3forms.com/contact
- **Cloudflare Pages:** Cloudflare Dashboard → Support

---

**Last Updated:** This guide reflects the current setup as of the last code update.
