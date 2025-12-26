# DNS Records to Add for Resend Domain Verification

## Domain: zerobarriers.io

Add these DNS records to verify your domain with Resend. Once verified, you'll be able to send emails to sk@zerobarriers.io.

---

## Step-by-Step Instructions

### 1. Go to Your DNS Provider

Since you're using Cloudflare Pages, you're likely using Cloudflare DNS:
- Go to: https://dash.cloudflare.com
- Select your domain: **zerobarriers.io**
- Click **DNS** in the left sidebar
- Click **Add record**

### 2. Add DKIM Record (Required)

**Type**: `TXT`  
**Name/Host**: `resend._domainkey`  
**Content/Value**: 
```
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB
```
**TTL**: Auto (or 3600)

**Important**: Make sure the name is exactly `resend._domainkey` (it should automatically append `.zerobarriers.io`)

### 3. Add SPF Record #1 (Required)

**Type**: `TXT`  
**Name/Host**: `send`  
**Content/Value**: 
```
feedback-smtp.us-east-1.amazonses.com
```
**Priority**: `10` (or leave blank if not applicable)  
**TTL**: Auto (or 3600)

### 4. Add SPF Record #2 (Required)

**Type**: `TXT`  
**Name/Host**: `send`  
**Content/Value**: 
```
v=spf1 include:amazonses.com ~all
```
**Priority**: Leave blank  
**TTL**: Auto (or 3600)

**Note**: If you already have an SPF record, you may need to combine them. Check your existing DNS records first.

### 5. Add DMARC Record (Recommended)

**Type**: `TXT`  
**Name/Host**: `_dmarc`  
**Content/Value**: 
```
v=DMARC1; p=none;
```
**TTL**: Auto (or 3600)

---

## Cloudflare DNS Screenshots Guide

In Cloudflare, for each record:

1. **Type**: Select from dropdown (TXT, MX, etc.)
2. **Name**: Enter the hostname (e.g., `resend._domainkey`)
3. **Content**: Paste the value
4. **Proxy status**: ☁️ Should be **DNS only** (gray cloud, not orange)
5. **TTL**: Auto
6. Click **Save**

---

## After Adding Records

1. **Wait 5-30 minutes** for DNS propagation
2. Go to Resend dashboard: https://resend.com/domains
3. Check the status of `zerobarriers.io`
4. It should show as **"Verified"** when ready

---

## Common Issues

### "Record already exists"
- If you already have an SPF record, you may need to merge it
- Check existing records first before adding

### "Verification failed"
- Double-check the exact values (no extra spaces)
- Make sure TTL is set (not blank)
- Wait longer for DNS propagation (can take up to 48 hours, but usually 5-30 minutes)

### "Domain not found"
- Make sure you added records to the correct domain
- Check you're logged into the right DNS provider account

---

## Once Verified

Once your domain shows as "Verified" in Resend:

1. The function code will need to be updated to use your domain
2. Change `from: 'Zero Barriers <onboarding@resend.dev>'` to `from: 'Zero Barriers <contact@zerobarriers.io>'`
3. Commit and push the change
4. Form submissions will then work!

---

## Quick Checklist

- [ ] Added DKIM record (`resend._domainkey`)
- [ ] Added SPF record #1 (`send` with feedback-smtp value)
- [ ] Added SPF record #2 (`send` with spf1 value)
- [ ] Added DMARC record (`_dmarc`)
- [ ] Waited 5-30 minutes for DNS propagation
- [ ] Checked Resend dashboard - domain shows "Verified"
- [ ] Updated function code to use verified domain
- [ ] Tested contact form

---

**Need help?** Check Resend docs: https://resend.com/docs/dashboard/domains/introduction
