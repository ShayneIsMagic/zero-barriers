# Resend Email Service Setup

## Why Resend?

- ✅ Simple API
- ✅ Free tier: 3,000 emails/month, 100/day
- ✅ Good deliverability
- ✅ Easy integration with Cloudflare Functions
- ✅ API keys can be scoped for security

---

## Setup Steps

### Step 1: Create Resend Account

1. Go to: https://resend.com
2. Sign up (free)
3. Verify your email

### Step 2: Get API Key

1. Go to Resend Dashboard
2. Navigate to **API Keys**
3. Click **Create API Key**
4. Give it a name (e.g., "Zero Barriers Contact Form")
5. Copy the key (starts with `re_`)
6. **Save it** - you can't see it again!

### Step 3: Add to Cloudflare Pages

1. Go to: **Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables**
2. Click **Add variable**
3. Fill in:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Type**: Secret
4. Click **Save**

### Step 4: Verify Domain (Optional but Recommended)

**For production, you should verify your domain:**

1. In Resend Dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `zerobarriers.io`
4. Add DNS records Resend provides to your domain DNS
5. Wait for verification
6. Update the `from` email in `functions/api/contact.ts` to use your verified domain

**For testing:**
- Can use `onboarding@resend.dev` (default, works immediately)
- Limited to 100 emails/day with default domain

---

## Update Function After Domain Verification

Once your domain is verified, update `functions/api/contact.ts`:

Change:
```typescript
from: 'Zero Barriers <onboarding@resend.dev>',
```

To:
```typescript
from: 'Zero Barriers Contact <contact@zerobarriers.io>',
```

---

## Testing

1. Submit the contact form
2. Check sk@zerobarriers.io inbox
3. Email should arrive within seconds
4. Check Resend dashboard for email logs

---

## Security Notes

- ✅ API key stored as Secret in Cloudflare (encrypted)
- ✅ API key never exposed to client
- ✅ Function runs server-side only
- ✅ Rate limiting handled by Cloudflare + form

---

## Troubleshooting

### Emails not sending
- Check `RESEND_API_KEY` is set correctly in Cloudflare
- Verify API key in Resend dashboard (make sure it's active)
- Check Resend dashboard logs for errors
- Verify recipient email is correct

### Domain verification
- Required for production use
- Without verification, limited to 100 emails/day
- Check DNS records are correct
- Wait up to 24 hours for DNS propagation

---

## Cost

- **Free tier**: 3,000 emails/month, 100/day
- Perfect for contact forms
- No credit card required for free tier
