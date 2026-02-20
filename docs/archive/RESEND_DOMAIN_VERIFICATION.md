# Resend Domain Verification Required

## Current Issue

The contact form is working, but Resend API is returning this error:

> "You can only send testing emails to your own email address (shayne@devpipeline.com). To send emails to other recipients, please verify a domain at resend.com/domains, and change the `from` address to an email using this domain."

## What This Means

- ✅ Your Resend API key is working correctly
- ✅ The Cloudflare Function is deployed and working
- ⚠️  You're using Resend's default domain (`onboarding@resend.dev`)
- ⚠️  Default domain only allows sending to your verified email (shayne@devpipeline.com)
- ❌ Can't send to `sk@zerobarriers.io` until domain is verified

## Solution: Verify Your Domain

### Step 1: Add Domain in Resend

1. Go to: https://resend.com/domains
2. Click **Add Domain**
3. Enter: `zerobarriers.io`
4. Click **Add Domain**

### Step 2: Add DNS Records

Resend will show you DNS records to add. You need to add them to your domain's DNS:

**Typical records needed:**
- `_resend._domainkey` (TXT record) - for DKIM
- `resend._domainkey` (TXT record) - for DKIM  
- Other records as shown

**Where to add:**
- If using Cloudflare DNS: Cloudflare Dashboard → Your Domain → DNS → Records
- If using another DNS provider: Add records there

### Step 3: Wait for Verification

- Resend will verify the DNS records (usually takes 5-30 minutes)
- Status will change to "Verified" in Resend dashboard

### Step 4: Update Function Code

Once verified, update `functions/api/contact.ts`:

Change:
```typescript
from: 'Zero Barriers <onboarding@resend.dev>',
```

To:
```typescript
from: 'Zero Barriers Contact <contact@zerobarriers.io>',
// OR
from: 'Zero Barriers <noreply@zerobarriers.io>',
```

### Step 5: Redeploy

Commit and push the change, and Cloudflare will automatically redeploy.

---

## Alternative: Temporary Workaround

If you want to test immediately without domain verification:

### Option A: Send to Verified Email (Temporary)

Update `CONTACT_EMAIL` environment variable in Cloudflare Pages to:
- `shayne@devpipeline.com` (your verified email)

Emails will go there until domain is verified.

### Option B: Use Different Email Service

Consider using Web3Forms as fallback (already implemented) while verifying domain.

---

## Current Status

- ✅ Form submission works
- ✅ Cloudflare Function deployed
- ✅ Resend API key configured
- ⏳ Waiting for domain verification to send to sk@zerobarriers.io

---

## After Domain Verification

Once `zerobarriers.io` is verified in Resend:

1. Update `from` email in `functions/api/contact.ts` to use your domain
2. Commit and push
3. Form will work and send to `sk@zerobarriers.io`

---

**Questions?** Check Resend documentation: https://resend.com/docs/dashboard/domains/introduction
