# Help Resend Verify Your Domain

## What Resend Checks For

Resend verifies your domain by checking these DNS records:

1. **DKIM Record** (`resend._domainkey`)
2. **SPF Records** (`send` - 2 records)
3. **DMARC Record** (`_dmarc`)

---

## Step 1: Verify DNS Records Are Correctly Set

### Check Records Using Command Line

Run this command to check if DNS records are visible:

```bash
# Check DKIM record
dig TXT resend._domainkey.zerobarriers.io +short

# Check SPF records
dig TXT send.zerobarriers.io +short

# Check DMARC record
dig TXT _dmarc.zerobarriers.io +short
```

**Expected Results:**

1. **DKIM** should return:
   ```
   "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB"
   ```

2. **SPF** should return TWO records:
   ```
   "feedback-smtp.us-east-1.amazonses.com"
   "v=spf1 include:amazonses.com ~all"
   ```

3. **DMARC** should return:
   ```
   "v=DMARC1; p=none;"
   ```

---

## Step 2: Common Issues & Fixes

### Issue 1: Records Not Visible Yet

**Problem:** DNS records just added, not propagated yet.

**Solution:**
- Wait 5-30 minutes (can take up to 72 hours in rare cases)
- DNS propagation varies by location
- Try checking from different DNS servers

### Issue 2: Records Have Wrong Proxy Status

**Problem:** Records are "Proxied" (orange cloud) instead of "DNS only" (gray cloud).

**Solution:**
1. Go to Cloudflare Dashboard → DNS → Records
2. Find each Resend record
3. Click the orange cloud ☁️ to turn it gray (DNS only)
4. Wait 5-10 minutes for changes to propagate

### Issue 3: Record Name Incorrect

**Problem:** Record name doesn't match exactly.

**Check:**
- DKIM: Must be exactly `resend._domainkey` (not `_resend._domainkey` or `resend-domainkey`)
- SPF: Must be exactly `send` (not `@send` or `send.zerobarriers.io`)
- DMARC: Must be exactly `_dmarc` (not `dmarc` or `@_dmarc`)

### Issue 4: Record Content Has Extra Characters

**Problem:** Content has extra spaces, quotes, or line breaks.

**Solution:**
- Copy the exact content from the guide (no extra spaces)
- Remove any quotes if Cloudflare adds them automatically
- Make sure there are no line breaks in the content

### Issue 5: Multiple Conflicting Records

**Problem:** Multiple SPF or DMARC records exist.

**Solution:**
- You CAN have multiple `send` records (that's correct for Resend)
- You should only have ONE `_dmarc` record
- If you have multiple `_dmarc` records, remove duplicates

---

## Step 3: Manual Verification in Resend

### Trigger Verification Manually

1. Go to: https://resend.com/domains
2. Find your domain: **zerobarriers.io**
3. Click on the domain or click **"Verify"** button
4. Resend will check DNS records immediately

### What Resend Shows

**If verification fails:**
- Resend will show which record(s) are missing or incorrect
- Check the error message for specific issues
- Fix the records and click "Verify" again

**If verification succeeds:**
- Status changes to **"Verified"** ✅
- You can now send emails from your domain!

---

## Step 4: Verify Records in Cloudflare Dashboard

### Double-Check Each Record

1. Go to: https://dash.cloudflare.com
2. Click **Websites** → **zerobarriers.io** → **DNS**
3. Verify each record:

**Record 1: DKIM**
- Type: `TXT`
- Name: `resend._domainkey`
- Content: `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB`
- Proxy: **Gray cloud** (DNS only)

**Record 2: SPF Feedback**
- Type: `TXT`
- Name: `send`
- Content: `feedback-smtp.us-east-1.amazonses.com`
- Proxy: **Gray cloud** (DNS only)

**Record 3: SPF Policy**
- Type: `TXT`
- Name: `send`
- Content: `v=spf1 include:amazonses.com ~all`
- Proxy: **Gray cloud** (DNS only)

**Record 4: DMARC**
- Type: `TXT`
- Name: `_dmarc`
- Content: `v=DMARC1; p=none;`
- Proxy: **Gray cloud** (DNS only)

---

## Step 5: Use Online DNS Checkers

### Check from Multiple Sources

1. **MXToolbox:**
   - Go to: https://mxtoolbox.com/TXTLookup.aspx
   - Enter: `resend._domainkey.zerobarriers.io`
   - Check: `send.zerobarriers.io`
   - Check: `_dmarc.zerobarriers.io`

2. **DNS Checker:**
   - Go to: https://dnschecker.org/
   - Select: `TXT` record type
   - Enter each record name
   - Check if records are visible globally

3. **Google DNS:**
   - Use: `8.8.8.8` as DNS server
   - Command: `dig @8.8.8.8 TXT resend._domainkey.zerobarriers.io`

---

## Step 6: If Verification Still Fails

### Contact Resend Support

If all records are correct but verification still fails:

1. Go to: https://resend.com/support
2. Provide:
   - Domain: `zerobarriers.io`
   - Screenshot of DNS records from Cloudflare
   - Output from `dig` commands
   - Error message from Resend dashboard

### Common Resend Error Messages

**"DKIM record not found"**
- Check `resend._domainkey` record exists
- Verify content matches exactly
- Ensure proxy is "DNS only"

**"SPF record invalid"**
- Check both `send` records exist
- Verify content is correct
- Make sure no conflicting SPF records

**"DMARC record missing"**
- Add `_dmarc` TXT record
- Content: `v=DMARC1; p=none;`
- Ensure proxy is "DNS only"

---

## Quick Checklist

Before clicking "Verify" in Resend, ensure:

- [ ] All 4 DNS records are added in Cloudflare
- [ ] All records have **gray cloud** (DNS only), not orange
- [ ] Record names match exactly (case-sensitive)
- [ ] Record content matches exactly (no extra spaces)
- [ ] Waited at least 5-10 minutes after adding records
- [ ] Checked records with `dig` command or online tools
- [ ] No conflicting or duplicate records

---

## After Verification Succeeds

Once Resend shows **"Verified"**:

1. ✅ I'll update `functions/api/contact.ts` to use `contact@zerobarriers.io`
2. ✅ Change recipient to `sk@zerobarriers.io`
3. ✅ Form will send emails directly to your domain!

**Let me know when Resend shows "Verified" and I'll update the code!**
