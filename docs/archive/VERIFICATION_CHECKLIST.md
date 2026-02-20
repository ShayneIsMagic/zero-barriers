# Verification Checklist: Nameservers & DNS Records

## ✅ Step 1: Verify Nameservers Are Updated

### Check Nameservers

1. Go to: **https://lookup.icann.org/**
2. Enter: `zerobarriers.io`
3. Click **"Lookup"**
4. Check the **"Nameservers"** section

**Expected Result:**
- ✅ `haley.ns.cloudflare.com`
- ✅ `peyton.ns.cloudflare.com`

**If you still see:**
- ❌ `kiki.ns.cloudflare.com` or `yoxall.ns.cloudflare.com` → Wait 5-30 minutes for propagation
- ❌ GoDaddy nameservers → Update not complete, try again

---

## ✅ Step 2: Verify DNS Records in Cloudflare

### Check DNS Records Are Added

1. Go to: **https://dash.cloudflare.com**
2. Click **"Websites"** → **zerobarriers.io**
3. Click **"DNS"** tab
4. Verify you see these **4 Resend DNS records**:

**Required Records:**

1. **DKIM Record:**
   - Type: `TXT`
   - Name: `resend._domainkey`
   - Content: `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB`
   - Proxy: **DNS only** (gray cloud ☁️)

2. **SPF Record (Feedback):**
   - Type: `TXT`
   - Name: `send`
   - Content: `feedback-smtp.us-east-1.amazonses.com`
   - Proxy: **DNS only** (gray cloud ☁️)

3. **SPF Record (Policy):**
   - Type: `TXT`
   - Name: `send` (yes, same name - that's correct!)
   - Content: `v=spf1 include:amazonses.com ~all`
   - Proxy: **DNS only** (gray cloud ☁️)

4. **DMARC Record:**
   - Type: `TXT`
   - Name: `_dmarc`
   - Content: `v=DMARC1; p=none;`
   - Proxy: **DNS only** (gray cloud ☁️)

**Important:** All records must have **gray cloud** (DNS only), NOT orange cloud (Proxied).

---

## ✅ Step 3: Verify Domain in Resend

### Check Domain Verification Status

1. Go to: **https://resend.com/domains**
2. Log in to your Resend account
3. Find **zerobarriers.io** in the domains list
4. Check the status

**Status Options:**
- ⏳ **"Pending"** or **"Verifying"** → DNS records are propagating (wait 5-30 minutes)
- ✅ **"Verified"** → Domain is ready! Proceed to Step 4
- ❌ **"Failed"** or **"Error"** → Check DNS records are correct and wait longer

**If still pending after 30 minutes:**
- Double-check all 4 DNS records are exactly as shown above
- Make sure all records have gray cloud (DNS only)
- Wait up to 24 hours for full propagation

---

## ✅ Step 4: Update Contact Form Function (After Verification)

### Once Resend Shows "Verified"

After the domain shows as **"Verified"** in Resend, I'll update the contact form function to:

1. **Change sender email** from `onboarding@resend.dev` to `contact@zerobarriers.io`
2. **Change recipient email** from `shayne@devpipeline.com` to `sk@zerobarriers.io`

This will allow the form to send emails directly to `sk@zerobarriers.io` using your verified domain.

---

## Quick Status Check

Run these checks and report back:

- [ ] Nameservers show `haley.ns.cloudflare.com` and `peyton.ns.cloudflare.com` at lookup.icann.org
- [ ] All 4 Resend DNS records are visible in Cloudflare DNS tab
- [ ] All DNS records have gray cloud (DNS only) status
- [ ] Resend domain status shows "Verified" (or "Pending" if just added)

---

## Next Steps After Verification

Once Resend shows **"Verified"**:

1. ✅ I'll update `functions/api/contact.ts` with the verified domain
2. ✅ Form will send to `sk@zerobarriers.io` automatically
3. ✅ No more temporary email addresses needed!

**Let me know the status of each step above!**
