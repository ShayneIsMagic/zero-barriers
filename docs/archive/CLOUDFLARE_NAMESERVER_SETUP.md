# Cloudflare Nameserver Setup - Complete Guide

## Current Status ✅

**GoDaddy Nameservers Updated:**
- `haley.ns.cloudflare.com`
- `peyton.ns.cloudflare.com`

These are the correct Cloudflare nameservers. Now we need to ensure Cloudflare recognizes your domain.

---

## Step 1: Verify Domain is Added to Cloudflare

### Option A: Domain Already in Cloudflare

1. Go to: **https://dash.cloudflare.com**
2. Click **"Websites"** in the left sidebar
3. Look for **zerobarriers.io** in your domain list
4. Click on **zerobarriers.io**

### Option B: Add Domain to Cloudflare (If Not Already Added)

1. Go to: **https://dash.cloudflare.com**
2. Click **"Add a Site"** or **"Add Site"** button
3. Enter: `zerobarriers.io`
4. Click **"Add site"**
5. Select a plan (Free plan is fine)
6. Cloudflare will scan your existing DNS records
7. Click **"Continue"**

---

## Step 2: Verify Nameservers in Cloudflare

Once you're viewing your domain in Cloudflare:

1. **Check the Overview page** - You should see a section showing:
   - **"Nameservers"** or **"DNS Nameservers"**
   - It should show:
     - `haley.ns.cloudflare.com`
     - `peyton.ns.cloudflare.com`

2. **Status should show:**
   - ✅ **"Active"** or **"Active (DNS Only)"** - This means Cloudflare recognizes the nameservers
   - ⚠️ **"Pending"** - Nameservers are updating (wait 5-30 minutes)
   - ❌ **"Moved Away"** - Nameservers don't match (need to update)

---

## Step 3: If Cloudflare Shows Different Nameservers

If Cloudflare shows **different** nameservers (like `kiki.ns.cloudflare.com` and `yoxall.ns.cloudflare.com`):

### Option 1: Update Nameservers in Cloudflare (Recommended)

1. In Cloudflare dashboard, go to your domain
2. Look for **"Nameservers"** section
3. Click **"Change"** or **"Manage"**
4. Cloudflare may show an option to **"Update Nameservers"**
5. If available, click it and Cloudflare will update to the new nameservers

### Option 2: Re-add Domain (If Option 1 Doesn't Work)

1. Remove the domain from Cloudflare (if possible)
2. Re-add it - Cloudflare will assign the new nameservers automatically
3. Update GoDaddy again with the new nameservers

**Note:** Since you've already updated GoDaddy, Option 1 is preferred.

---

## Step 4: Verify Nameserver Propagation

After updating, verify the nameservers are correct:

1. **Wait 5-30 minutes** for DNS propagation
2. Go to: **https://lookup.icann.org/**
3. Enter: `zerobarriers.io`
4. Click **"Lookup"**
5. Check the **"Nameservers"** section

**Expected Result:**
- ✅ `haley.ns.cloudflare.com`
- ✅ `peyton.ns.cloudflare.com`

---

## Step 5: Cloudflare Status Check

Once nameservers are verified:

1. Go back to Cloudflare Dashboard
2. Your domain should show: **"Active"** status
3. Click **"DNS"** tab - you should see all your DNS records
4. All DNS records should be visible and manageable

---

## Common Issues & Solutions

### Issue: Cloudflare Shows "Pending" Status

**Solution:**
- Wait 5-30 minutes for DNS propagation
- Check nameservers at https://lookup.icann.org/
- If still pending after 30 minutes, verify nameservers are correct at GoDaddy

### Issue: Cloudflare Shows Old Nameservers

**Solution:**
- Cloudflare may need to detect the change automatically
- Wait 10-15 minutes
- If still showing old nameservers, contact Cloudflare support or re-add domain

### Issue: Domain Not Found in Cloudflare

**Solution:**
- Add the domain to Cloudflare (Step 1, Option B)
- Cloudflare will assign nameservers
- Update GoDaddy with the new nameservers (if different)

---

## What Happens Next

Once Cloudflare recognizes the nameservers:

1. ✅ **DNS Management** - All DNS records managed in Cloudflare
2. ✅ **Resend DNS Records** - Can add Resend verification records in Cloudflare DNS
3. ✅ **Email Delivery** - Form submissions will work properly
4. ✅ **Performance** - Cloudflare CDN benefits (if enabled)

---

## Quick Checklist

- [ ] Domain added to Cloudflare
- [ ] Nameservers in Cloudflare match GoDaddy (haley & peyton)
- [ ] Cloudflare shows "Active" status
- [ ] DNS records visible in Cloudflare DNS tab
- [ ] Nameservers verified at lookup.icann.org

---

## Need Help?

If Cloudflare doesn't recognize the nameservers after 30 minutes:

1. **Double-check GoDaddy** - Verify nameservers are saved correctly
2. **Check Cloudflare Support** - https://support.cloudflare.com
3. **Verify Nameservers** - Use https://lookup.icann.org/ to confirm

**The nameservers you have (haley & peyton) are correct - Cloudflare just needs to detect them!**
