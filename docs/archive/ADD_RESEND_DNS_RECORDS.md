# Add Resend DNS Records to Cloudflare

## Nameservers Are Updated ✅

Now you need to add the Resend DNS verification records to Cloudflare DNS.

---

## Step 1: Access DNS in Cloudflare

1. Go to: https://dash.cloudflare.com
2. Click **"Websites"** in left sidebar
3. Click on **zerobarriers.io**
4. Click **"DNS"** tab at the top
5. You should see a list of DNS records and an **"Add record"** button

---

## Step 2: Add Resend DNS Records

Add these 4 DNS records:

### Record 1: DKIM

1. Click **"Add record"**
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `resend._domainkey`
   - **Content**: 
     ```
     p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB
     ```
   - **Proxy status**: DNS only (gray cloud, not orange)
   - **TTL**: Auto
3. Click **"Save"**

### Record 2: SPF (Feedback)

1. Click **"Add record"**
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `send`
   - **Content**: `feedback-smtp.us-east-1.amazonses.com`
   - **Proxy status**: DNS only
   - **TTL**: Auto
3. Click **"Save"**

### Record 3: SPF (Policy)

1. Click **"Add record"**
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `send`
   - **Content**: `v=spf1 include:amazonses.com ~all`
   - **Proxy status**: DNS only
   - **TTL**: Auto
3. Click **"Save"**

**Note**: You'll have TWO records with name `send` - that's correct! Both are needed.

### Record 4: DMARC

1. Click **"Add record"**
2. Fill in:
   - **Type**: `TXT`
   - **Name**: `_dmarc`
   - **Content**: `v=DMARC1; p=none;`
   - **Proxy status**: DNS only
   - **TTL**: Auto
3. Click **"Save"**

---

## Step 3: Wait for DNS Propagation

- Wait 5-30 minutes for DNS records to propagate
- Resend will automatically check the records

---

## Step 4: Verify in Resend

1. Go to: https://resend.com/domains
2. Check status of **zerobarriers.io**
3. It should show **"Verified"** when ready (may take 5-30 minutes)

---

## Step 5: After Domain Is Verified

Once Resend shows the domain as "Verified":

1. Update the function code to use your verified domain
2. Change `from` email to: `Zero Barriers <contact@zerobarriers.io>`
3. Change recipient back to: `sk@zerobarriers.io`
4. Form will then send emails to sk@zerobarriers.io!

---

## Important Notes

- Make sure **Proxy status** is **DNS only** (gray cloud) for all TXT records
- All 4 records must be added
- DNS propagation can take 5-30 minutes
- Resend will check automatically once records are added

---

**Once you've added all 4 records, let me know and I'll update the function code to use your verified domain!**
