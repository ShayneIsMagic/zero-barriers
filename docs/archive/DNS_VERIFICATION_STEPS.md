# Quick DNS Verification Steps for Resend

## Add These 4 DNS Records to Cloudflare

### Record 1: DKIM
- **Type**: TXT
- **Name**: `resend._domainkey`
- **Value**: `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB`
- **TTL**: Auto

### Record 2: SPF (Feedback)
- **Type**: TXT
- **Name**: `send`
- **Value**: `feedback-smtp.us-east-1.amazonses.com`
- **Priority**: 10
- **TTL**: Auto

### Record 3: SPF (Policy)
- **Type**: TXT
- **Name**: `send`
- **Value**: `v=spf1 include:amazonses.com ~all`
- **TTL**: Auto

### Record 4: DMARC
- **Type**: TXT
- **Name**: `_dmarc`
- **Value**: `v=DMARC1; p=none;`
- **TTL**: Auto

---

## Where to Add

1. Go to: https://dash.cloudflare.com
2. Select domain: **zerobarriers.io**
3. Click **DNS** → **Add record**
4. Add each record above
5. Save each one

---

## After Adding

1. Wait 5-30 minutes
2. Go to: https://resend.com/domains
3. Check if `zerobarriers.io` shows "Verified"
4. Once verified, let me know and I'll update the code to use your domain!
