# Add Resend DNS Records in Cloudflare

## You're on the Right Page! ✅

You're at: **Cloudflare Dashboard → zerobarriers.io → DNS → Records**

This is exactly where you need to add the Resend DNS records.

---

## Step-by-Step: Add the 4 DNS Records

### Record 1: DKIM

1. Click **"Add record"** button (usually at the top right)
2. Fill in the form:
   - **Type**: Select `TXT` from dropdown
   - **Name**: Enter `resend._domainkey`
   - **Content**: Paste this (the long string):
     ```
     p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB
     ```
   - **Proxy status**: Click the cloud icon to make it **DNS only** (gray cloud, not orange)
   - **TTL**: Leave as **Auto** (or select **3600**)
3. Click **"Save"**

### Record 2: SPF (Feedback)

1. Click **"Add record"** again
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `send`
   - **Content**: `feedback-smtp.us-east-1.amazonses.com`
   - **Proxy status**: **DNS only** (gray cloud)
   - **TTL**: Auto
3. Click **"Save"**

### Record 3: SPF (Policy)

1. Click **"Add record"** again
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `send` (yes, same name as Record 2 - that's correct!)
   - **Content**: `v=spf1 include:amazonses.com ~all`
   - **Proxy status**: **DNS only** (gray cloud)
   - **TTL**: Auto
3. Click **"Save"**

**Note**: You'll have TWO records with name `send` - that's correct! Both are needed.

### Record 4: DMARC

1. Click **"Add record"** again
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `_dmarc`
   - **Content**: `v=DMARC1; p=none;`
   - **Proxy status**: **DNS only** (gray cloud)
   - **TTL**: Auto
3. Click **"Save"**

---

## Important: Proxy Status

**For all 4 records**, make sure the **Proxy status** is set to **DNS only** (gray cloud ☁️, not orange 🟠).

- **Gray cloud** = DNS only (correct for email verification)
- **Orange cloud** = Proxied (wrong - will break email verification)

---

## After Adding All 4 Records

1. **Wait 5-30 minutes** for DNS propagation
2. Go to: https://resend.com/domains
3. Check status of **zerobarriers.io**
4. It should show **"Verified"** when ready

---

## Verify Records Are Added

After saving, you should see all 4 records in your DNS records list:

- `resend._domainkey` (TXT)
- `send` (TXT) - you'll see this twice (both records)
- `_dmarc` (TXT)

---

## Once Domain Is Verified in Resend

After Resend shows the domain as "Verified":

1. I'll update the function code to use `contact@zerobarriers.io` as sender
2. Change recipient back to `sk@zerobarriers.io`
3. Form will send emails directly to sk@zerobarriers.io!

---

**You're all set! Add the 4 records above and let me know when Resend shows the domain as verified.**
