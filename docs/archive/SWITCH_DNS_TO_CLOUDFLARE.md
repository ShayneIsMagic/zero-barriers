# Switch DNS from GoDaddy to Cloudflare

## The Issue

Your domain is still using **GoDaddy's nameservers**, so DNS is managed there. To use Cloudflare DNS, you need to change the nameservers to Cloudflare's.

---

## Step-by-Step: Switch to Cloudflare DNS

### Step 1: Add Domain to Cloudflare (if not already there)

1. Go to: https://dash.cloudflare.com
2. Click **"Websites"** or **"Add a site"** in the left sidebar
3. Enter: `zerobarriers.io`
4. Click **"Add site"**
5. Select a plan (Free plan is fine)
6. Cloudflare will scan your existing DNS records

### Step 2: Get Cloudflare Nameservers

After adding the domain, Cloudflare will show you **2 nameservers** like:
- `alfonso.ns.cloudflare.com`
- `karla.ns.cloudflare.com`

**IMPORTANT**: Write these down! They'll be specific to your account.

### Step 3: Update Nameservers at GoDaddy

1. Go to: https://dcc.godaddy.com (GoDaddy Domain Manager)
2. Find your domain: **zerobarriers.io**
3. Click on it
4. Look for **"Nameservers"** section
5. Click **"Change"** or **"Manage"**
6. Select **"Custom"** or **"I'll use my own nameservers"**
7. Enter the 2 Cloudflare nameservers you got from Step 2
8. Click **"Save"**

### Step 4: Wait for Propagation

- Wait 5-30 minutes (sometimes up to 24 hours)
- DNS changes take time to propagate
- You can check status at: https://www.whatsmydns.net/#NS/zerobarriers.io

### Step 5: Verify Nameservers Changed

1. Wait 10-15 minutes
2. Check: https://lookup.icann.org/
3. Enter: `zerobarriers.io`
4. Look at "Nameservers" - they should show Cloudflare nameservers (not GoDaddy)

---

## Once Nameservers Are Changed

### You'll See Domain in Cloudflare

1. Go to Cloudflare Dashboard
2. Click **"Websites"** in left sidebar
3. You should now see **zerobarriers.io** listed
4. Click on it
5. Click **"DNS"** tab
6. You can now add DNS records here!

### Add Resend DNS Records

Once the domain is in Cloudflare DNS, add the 4 DNS records for Resend:
1. DKIM record
2. SPF records (x2)
3. DMARC record

---

## Important Notes

- **Cloudflare Pages** ≠ **Cloudflare DNS**
- Your site can be on Cloudflare Pages, but DNS can still be at GoDaddy
- To use Cloudflare DNS, nameservers must point to Cloudflare

---

## Quick Check: Are Nameservers Already Changed?

1. Go to: https://lookup.icann.org/
2. Enter: `zerobarriers.io`
3. Check "Nameservers"
   - If they contain "cloudflare.com" → Already using Cloudflare DNS! ✅
   - If they contain "godaddy.com" or "secureserver" → Still using GoDaddy DNS ❌

---

## If Nameservers Are Already Cloudflare

If nameservers already point to Cloudflare but you don't see the domain in Cloudflare:

1. Make sure you're logged into the correct Cloudflare account
2. Check if domain was added to a different Cloudflare account
3. Try adding the domain again (it will detect existing setup)

---

## After Switching to Cloudflare DNS

Once nameservers are updated and domain shows in Cloudflare DNS:
- All DNS records will be managed in Cloudflare
- GoDaddy DNS settings will be ignored
- You can add Resend DNS records in Cloudflare
