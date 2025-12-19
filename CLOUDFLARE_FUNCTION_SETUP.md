# Cloudflare Pages Function Setup Guide

## Why Use Cloudflare Pages Functions?

✅ **Solves the build-time env var problem** - Functions have access to env vars at **runtime**  
✅ **Secure** - API keys never exposed to client code  
✅ **Works with static exports** - Functions run server-side  
✅ **Free** - Generous free tier on Cloudflare  

---

## Setup Steps

### Step 1: Get Resend API Key

1. Go to: https://resend.com
2. Sign up (free tier available)
3. Get your API key from dashboard
4. Copy the key (starts with `re_`)

### Step 2: Create the Function File

The function file is already created at: `functions/api/contact.ts`

This function:
- Receives POST requests at `/api/contact`
- Validates form data
- Sends email via Resend API
- Returns success/error response

### Step 3: Update Contact Form

Two options:

**Option A: Use the alternative implementation**
- The file `src/app/contact/page-cloudflare-function.tsx` is ready
- Back up current `page.tsx`
- Rename `page-cloudflare-function.tsx` to `page.tsx`

**Option B: Update current form**
- Change the fetch URL from `https://api.web3forms.com/submit` to `/api/contact`
- Send JSON instead of FormData
- Update response handling

### Step 4: Set Environment Variables in Cloudflare

Go to: **Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables**

Add:
- **Variable Name**: `RESEND_API_KEY`
- **Value**: Your Resend API key (starts with `re_`)
- **Type**: Secret

Optional:
- **Variable Name**: `CONTACT_EMAIL`
- **Value**: `sk@zerobarriers.io` (or leave empty to use default)
- **Type**: Secret or Plain text

### Step 5: Deploy

1. Commit and push the function file
2. Cloudflare Pages will automatically detect the `functions/` directory
3. Deploy

---

## Testing

1. Visit: https://zerobarriers.io/contact
2. Submit the form
3. Check browser console for errors
4. Check sk@zerobarriers.io inbox for email

---

## How It Works

```
Browser → POST /api/contact (JSON) → Cloudflare Function → Resend API → Email to sk@zerobarriers.io
```

1. User fills form and clicks submit
2. Form sends JSON to `/api/contact` endpoint
3. Cloudflare Pages Function receives request
4. Function reads `RESEND_API_KEY` from environment (runtime, not build time!)
5. Function sends email via Resend API
6. Function returns success/error response
7. Form shows success message

---

## Benefits Over Web3Forms

| Feature | Web3Forms | Cloudflare Function |
|---------|-----------|---------------------|
| Env vars at build time | ❌ Required | ✅ Not needed |
| Env vars at runtime | ❌ Not available | ✅ Available |
| Security | ✅ Good | ✅ Excellent |
| Customization | ⚠️ Limited | ✅ Full control |
| Cost | ✅ Free | ✅ Free tier |
| Setup complexity | ✅ Easy | ⚠️ Medium |

---

## Resend Free Tier

- 3,000 emails/month
- 100 emails/day
- Perfect for contact forms
- Easy API
- Good deliverability

---

## Troubleshooting

### Function not found (404)
- Check `functions/api/contact.ts` exists
- Verify function is deployed (check Cloudflare build logs)
- Function should be at `/api/contact` endpoint

### Email not sending
- Check `RESEND_API_KEY` is set in Cloudflare
- Verify key is correct (starts with `re_`)
- Check Resend dashboard for API logs
- Verify recipient email is correct

### CORS errors
- Function includes CORS headers
- Should work from any origin
- Check browser console for specific CORS errors

---

**Ready to implement? Let me know and I'll help you set it up!**
