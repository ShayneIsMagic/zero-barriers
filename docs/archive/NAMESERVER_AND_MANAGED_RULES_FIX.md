# Fix: Nameservers + Managed Rules

## The Issue

You said it worked when:
- ✅ Cloudflare nameservers were set
- ✅ GoDaddy nameservers were deleted

**Now you have:**
- ❌ Managed Rules blocking (403 errors)
- ⚠️ Possible nameserver/DNS issue

---

## Step 1: Verify Nameservers Are Correct

### Check in Cloudflare:

1. Go to: **Cloudflare Dashboard → zerobarriers.io → Overview**
2. Look for **"Nameservers"** section
3. Should show:
   - `haley.ns.cloudflare.com`
   - `peyton.ns.cloudflare.com`
4. Status should be **"Active"** or **"Active (DNS Only)"**

### Check in GoDaddy:

1. Go to: **GoDaddy Domain Manager**
2. Find: **zerobarriers.io**
3. Go to: **Nameservers** section
4. Should show:
   - `haley.ns.cloudflare.com`
   - `peyton.ns.cloudflare.com`
5. **NO GoDaddy nameservers should be listed**

### If Nameservers Are Wrong:

1. **In GoDaddy:** Update nameservers to Cloudflare's
2. **Wait 5-30 minutes** for propagation
3. **Verify in Cloudflare** that it shows "Active"

---

## Step 2: Fix Managed Rules Blocking

Even with correct nameservers, Managed Rules are still blocking. Fix this:

### Create Allow Rule:

1. **Re-enable Cloudflare** (if you paused it):
   - Overview → Resume Cloudflare

2. **Go to:** Security → WAF → Custom Rules

3. **Click:** "Create rule"

4. **Rule name:** `Allow zerobarriers.io`

5. **When incoming requests match:**
   - **Field:** `Hostname`
   - **Operator:** `equals`
   - **Value:** `zerobarriers.io`

6. **Then:** **Allow**

7. **Place at:** **First** (so it takes priority)

8. **Deploy** the rule

---

## Step 3: Verify Everything

### Check Nameservers:
- ✅ Cloudflare shows correct nameservers
- ✅ GoDaddy shows Cloudflare nameservers (not GoDaddy's)
- ✅ Status is "Active" in Cloudflare

### Check Security:
- ✅ Allow rule created for zerobarriers.io
- ✅ Managed Rules won't block your domain anymore

---

## Why This Happened

**Possible causes:**
1. **Nameservers changed** (someone updated them, or they reverted)
2. **Managed Rules updated** (Cloudflare updated rules, became more aggressive)
3. **Both** (nameserver issue + Managed Rules blocking)

---

## Complete Fix Checklist

- [ ] Verify Cloudflare nameservers in Cloudflare dashboard
- [ ] Verify Cloudflare nameservers in GoDaddy (delete any GoDaddy nameservers)
- [ ] Wait for nameserver propagation (5-30 minutes)
- [ ] Re-enable Cloudflare (if paused)
- [ ] Create Allow rule for zerobarriers.io
- [ ] Test your site

---

## Quick Action Plan

1. **Check nameservers in both places** (Cloudflare + GoDaddy)
2. **Fix nameservers if wrong**
3. **Create Allow rule** (Security → WAF → Custom Rules)
4. **Test site**

---

**First: Verify nameservers are correct in both Cloudflare and GoDaddy. Then create the Allow rule to bypass Managed Rules.**
