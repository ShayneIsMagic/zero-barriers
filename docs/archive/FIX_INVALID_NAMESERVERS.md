# Fix "Invalid Nameservers" in Cloudflare

## Current Issue

Cloudflare shows: **"Invalid nameservers"** for `zerobarriers.io`

This means Cloudflare doesn't recognize the nameservers you set at GoDaddy.

---

## Solution: Get Correct Nameservers from Cloudflare

### Step 1: Get Cloudflare's Assigned Nameservers

1. Go to: **https://dash.cloudflare.com**
2. Click on **zerobarriers.io** domain
3. Look at the **Overview** page
4. Find the **"Nameservers"** section
5. Cloudflare will show you the **correct nameservers** it expects

**They might be:**
- `haley.ns.cloudflare.com` and `peyton.ns.cloudflare.com` (what you have)
- OR different ones like `kiki.ns.cloudflare.com` and `yoxall.ns.cloudflare.com`
- OR completely different ones

### Step 2: Compare with GoDaddy

**If Cloudflare shows DIFFERENT nameservers than what's at GoDaddy:**

1. **Copy the nameservers from Cloudflare** (the ones it shows in the dashboard)
2. **Go back to GoDaddy**
3. **Update GoDaddy** to use the nameservers Cloudflare shows
4. **Save** at GoDaddy
5. **Wait 5-30 minutes** for propagation

**If Cloudflare shows THE SAME nameservers (haley & peyton):**

1. Cloudflare may just need time to detect the change
2. Wait 10-15 minutes
3. Refresh the Cloudflare dashboard
4. If still showing "Invalid", try Step 3 below

---

## Step 3: Force Cloudflare to Recognize Nameservers

### Option A: Re-scan Nameservers

1. In Cloudflare dashboard, go to your domain
2. Look for **"DNS"** tab
3. Click **"DNS"**
4. Cloudflare may show a button to **"Re-check nameservers"** or **"Verify nameservers"**
5. Click it to force Cloudflare to check again

### Option B: Remove and Re-add Domain

**⚠️ Only do this if Option A doesn't work:**

1. In Cloudflare, remove the domain (if possible)
2. Re-add it: **"Add a Site"** → Enter `zerobarriers.io`
3. Cloudflare will assign new nameservers
4. Update GoDaddy with the NEW nameservers Cloudflare assigns
5. Wait for propagation

---

## Step 4: Verify Nameservers Match

After updating, verify:

1. **GoDaddy** should show the nameservers Cloudflare assigned
2. **Cloudflare** should show "Active" status (not "Invalid nameservers")
3. **Verify at lookup.icann.org** - should match what Cloudflare expects

---

## Quick Fix Checklist

- [ ] Check what nameservers Cloudflare expects (in dashboard)
- [ ] Compare with what's at GoDaddy
- [ ] Update GoDaddy to match Cloudflare's expected nameservers
- [ ] Wait 5-30 minutes
- [ ] Check Cloudflare dashboard - should show "Active"
- [ ] Verify at lookup.icann.org

---

## Most Likely Solution

Since you have `haley.ns.cloudflare.com` and `peyton.ns.cloudflare.com` at GoDaddy:

1. **Check Cloudflare dashboard** - does it show these same nameservers?
2. **If YES** - Just wait 10-15 minutes, Cloudflare should detect them
3. **If NO** - Update GoDaddy to use the nameservers Cloudflare shows

**The key is: GoDaddy nameservers MUST match what Cloudflare expects for your domain.**

---

## Need Help?

If still showing "Invalid" after 30 minutes:

1. **Screenshot** the nameservers section from Cloudflare dashboard
2. **Screenshot** the nameservers from GoDaddy
3. **Compare them** - they must match exactly
4. If they match but still invalid, contact Cloudflare support

**The nameservers Cloudflare shows in the dashboard are the ones you MUST use at GoDaddy.**
