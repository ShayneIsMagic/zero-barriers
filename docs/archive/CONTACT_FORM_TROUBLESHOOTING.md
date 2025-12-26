# Contact Form Troubleshooting - 500 Error

## The Problem

**Error:** `api/contact:1  Failed to load resource: the server responded with a status of 500 ()`

**Console Messages:**
- `Cloudflare Function not available, trying Web3Forms fallback`
- `No form submission method available`

---

## Root Cause

The **Cloudflare Pages Function** is returning a **500 error**, which means:

1. ✅ Function is deployed and accessible
2. ❌ Function is failing during execution
3. ❌ Most likely: **`RESEND_API_KEY` environment variable is missing**

---

## Solution: Configure Environment Variables

### Step 1: Check Cloudflare Pages Environment Variables

1. **Go to:** Cloudflare Dashboard → **Workers & Pages** → **zero-barriers**
2. **Click:** **Settings** tab → **Environment Variables**
3. **Check if you see:**
   - ✅ `RESEND_API_KEY` - **Required!**
   - ✅ `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` - **Recommended (fallback)**

---

### Step 2: Add Missing Environment Variables

#### A. Add Resend API Key (Required)

1. **Get your Resend API key:**
   - Go to: https://resend.com/api-keys
   - Copy your API key

2. **Add to Cloudflare Pages:**
   - **Variable name:** `RESEND_API_KEY`
   - **Type:** Secret
   - **Value:** Your Resend API key
   - **Save**

3. **Verify Resend domain:**
   - Go to: https://resend.com/domains
   - Ensure `zerobarriers.io` is verified
   - If not verified, follow Resend's DNS setup instructions

#### B. Add Web3Forms Key (Fallback - Recommended)

1. **Get your Web3Forms access key:**
   - Go to: https://web3forms.com
   - Enter email: `sk@zerobarriers.io`
   - Get your access key

2. **Add to Cloudflare Pages:**
   - **Variable name:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Type:** Secret
   - **Value:** Your Web3Forms access key
   - **Save**

---

### Step 3: Trigger New Deployment

**After adding environment variables:**

1. **Option A: Automatic (Recommended)**
   - Make a small commit and push
   - Cloudflare will auto-deploy

2. **Option B: Manual**
   - Go to: **Deployments** tab
   - Click on latest deployment
   - Click **"Retry deployment"**

**Note:** Environment variables take effect immediately for Functions (runtime), but you may want to trigger a rebuild to ensure everything is fresh.

---

## Why This Happens

**The function code checks:**
```typescript
const resendApiKey = env.RESEND_API_KEY
if (!resendApiKey) {
  return new Response(JSON.stringify({ 
    success: false, 
    error: 'Email service not configured. Please contact the site administrator.' 
  }), { status: 500 })
}
```

**If `RESEND_API_KEY` is missing:** Function returns 500 error → Form tries Web3Forms fallback → Web3Forms key also missing → "No form submission method available"

---

## Quick Fix Checklist

- [ ] Go to Cloudflare Pages → zero-barriers → Settings → Environment Variables
- [ ] Add `RESEND_API_KEY` (get from resend.com/api-keys)
- [ ] Verify Resend domain is verified (resend.com/domains)
- [ ] Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (optional but recommended)
- [ ] Trigger new deployment or retry latest deployment
- [ ] Test contact form again

---

## Testing After Fix

**Test the contact form:**

1. Fill out the form
2. Submit
3. **Should see:** Success message with email confirmation
4. **Check:** Email received at `sk@zerobarriers.io`

**If still getting errors:**

- Check Cloudflare Pages deployment logs
- Look for Resend API errors
- Verify domain is verified in Resend

---

## Summary

**The 500 error = Missing `RESEND_API_KEY` in Cloudflare Pages environment variables.**

**Fix:** Add the environment variable and verify your Resend domain is set up correctly.
