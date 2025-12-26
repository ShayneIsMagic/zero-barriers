# Verify Resend Setup - Troubleshooting

## Status: Resend Domain Verified ✅

You've confirmed that Resend domain is verified. If you're still getting 500 errors, check these:

---

## Checklist

### 1. Verify RESEND_API_KEY is Set in Cloudflare Pages

**Check:**
1. Go to: **Cloudflare Dashboard** → **Workers & Pages** → **zero-barriers**
2. Click: **Settings** → **Environment Variables**
3. **Look for:** `RESEND_API_KEY`
   - ✅ **If you see it:** Verify it's the correct key
   - ❌ **If you don't see it:** Add it now (see below)

**Add if missing:**
- **Variable name:** `RESEND_API_KEY`
- **Type:** Secret
- **Value:** Your Resend API key from https://resend.com/api-keys
- **Environment:** Production (or All)

---

### 2. Verify Email Address Format

**In the function code (`functions/api/contact.ts`), line 130:**
```typescript
from: 'Zero Barriers <contact@zerobarriers.io>',
```

**In Resend dashboard:**
- Go to: https://resend.com/domains
- Check that `zerobarriers.io` domain shows as **Verified**
- Check if you need to verify specific email addresses (like `contact@zerobarriers.io`)

**If needed, update the "from" address to match what's verified:**
- Could be: `contact@zerobarriers.io`
- Or: `noreply@zerobarriers.io`
- Or any email on the verified domain

---

### 3. Check Resend API Key Permissions

**Verify your API key:**
1. Go to: https://resend.com/api-keys
2. Check that the key:
   - ✅ Has permission to send emails
   - ✅ Is not expired
   - ✅ Is for the correct account

**If unsure, create a new key:**
1. Delete old key (if needed)
2. Create new key
3. Copy the new key
4. Update in Cloudflare Pages environment variables
5. Retry deployment

---

### 4. Test the Function Directly

**Test the API endpoint:**

Open browser console and run:
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    first_name: 'Test',
    last_name: 'User',
    phone: '555-1234',
    email: 'test@test.com',
    message: 'Test message'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

**Check the response:**
- If you see error details, they'll tell you what's wrong
- Look for messages about API keys, domains, or permissions

---

### 5. Check Cloudflare Function Logs

**View deployment logs:**
1. Go to: **Workers & Pages** → **zero-barriers** → **Deployments**
2. Click on latest deployment
3. Check **Logs** or **Function logs**
4. Look for errors mentioning:
   - `RESEND_API_KEY`
   - Resend API errors
   - Domain verification errors

---

## Common Issues & Solutions

### Issue 1: API Key Not Set
**Symptom:** 500 error, "Email service not configured"
**Fix:** Add `RESEND_API_KEY` to Cloudflare Pages environment variables

### Issue 2: Wrong Email Address Format
**Symptom:** 500 error, domain verification error
**Fix:** Update `from` address in `functions/api/contact.ts` to match verified email

### Issue 3: API Key Expired/Invalid
**Symptom:** 500 error, authentication error
**Fix:** Generate new API key in Resend and update in Cloudflare

### Issue 4: Domain Not Fully Verified
**Symptom:** 500 error, domain verification error
**Fix:** Double-check all DNS records are set correctly in Resend dashboard

---

## Quick Fix Steps

1. **Verify environment variable exists:**
   - Cloudflare Pages → Settings → Environment Variables
   - Confirm `RESEND_API_KEY` is there

2. **Verify API key is correct:**
   - https://resend.com/api-keys
   - Copy the key and compare (don't expose it!)

3. **Check domain verification:**
   - https://resend.com/domains
   - Confirm `zerobarriers.io` is verified

4. **Test with a simple email:**
   - Try sending from Resend dashboard manually
   - If that works, the issue is with the function code

5. **Retry deployment:**
   - Make a small commit or retry latest deployment
   - Check logs for errors

---

## Still Not Working?

**Check browser console:**
- Open DevTools (F12)
- Go to Console tab
- Submit form
- Look for detailed error messages
- Share the exact error message for further debugging

**Check Cloudflare Function logs:**
- Workers & Pages → zero-barriers → Deployments → Latest → Logs
- Look for Resend API errors
- Note the exact error message

---

## Summary

Since Resend domain is verified:
1. ✅ **Most likely:** `RESEND_API_KEY` not set in Cloudflare Pages
2. ✅ **Second most likely:** API key is wrong/expired
3. ✅ **Less likely:** Email address format issue

**Action:** Check Cloudflare Pages environment variables first!
