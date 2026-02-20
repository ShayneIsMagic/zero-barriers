# Fix: Managed Rules Are Blocking Your Site

## The Problem

**Managed Rules** (Cloudflare's automatic security rules) are blocking your site with 403 errors.

---

## Solution: Check and Adjust Managed Rules

### Step 1: Go to Managed Rules

1. Go to: **Security → WAF → Managed Rules**
2. You'll see a list of managed rulesets

---

## Step 2: Find Which Rule Is Blocking

### Option A: Check Security Events for Specific Rule

1. Go to: **Security → Events**
2. Find the blocked request
3. Look at the **"Service" or "Rule" column**
4. Note which specific managed rule is blocking

### Option B: Check All Managed Rulesets

Common managed rulesets to check:
- **Cloudflare Managed Ruleset** (most common)
- **Cloudflare OWASP Core Ruleset**
- **Cloudflare Exposed Credentials Check**
- Others listed

---

## Step 3: Adjust the Blocking Rule

### Option 1: Temporarily Disable the Ruleset (Quick Test)

1. In **Managed Rules**, find the ruleset that's blocking
2. Click on it
3. **Temporarily disable** the entire ruleset
4. **Test your site**
5. **If it works**, re-enable and adjust sensitivity instead (see Option 2)

### Option 2: Lower Sensitivity (Better Long-Term)

1. Click on the **ruleset that's blocking**
2. Look for **"Sensitivity"** or **"Action"** settings
3. Change from **"Block"** to **"Log"** or **"Challenge"**
4. OR lower the sensitivity level
5. **Save** changes
6. **Test your site**

### Option 3: Create Exception Rule (Best Solution)

1. Go to: **Security → WAF → Custom Rules**
2. Click **"Create rule"**
3. **Rule name:** `Allow zerobarriers.io`
4. **When incoming requests match:**
   - **Field:** `Hostname`
   - **Operator:** `equals`
   - **Value:** `zerobarriers.io`
5. **Then:** **Allow**
6. **Deploy** the rule
7. This allows traffic to your domain while keeping other protections

---

## Most Likely: Cloudflare Managed Ruleset

**Check this first:**

1. **Security → WAF → Managed Rules**
2. Find **"Cloudflare Managed Ruleset"**
3. Click on it
4. Check if any rules are set to **"Block"**
5. Either:
   - **Temporarily disable** the ruleset to test
   - **Change action** from "Block" to "Log" or "Challenge"
   - **Lower sensitivity**

---

## Quick Fix: Create Allow Rule

**Fastest solution:**

1. **Security → WAF → Custom Rules → Create rule**
2. **Name:** `Allow All Traffic to zerobarriers.io`
3. **Match:** `Hostname equals zerobarriers.io`
4. **Action:** **Allow** (this takes priority)
5. **Deploy**

This allows all traffic to your domain while keeping other protections active.

---

## Why This Happened

Managed Rules can automatically adjust based on:
- Traffic patterns
- Threat intelligence
- Automatic updates from Cloudflare
- Changes in Cloudflare's security rules

**Something triggered the rules to be more aggressive**, blocking legitimate traffic.

---

## Recommended Approach

1. **Create an Allow rule** for your domain (Option 3 above)
2. **This bypasses Managed Rules** for your specific domain
3. **Keep Managed Rules active** for other domains/protection
4. **This is the safest fix** that won't break other security

---

## After Fixing

1. **Test your site** - should work now
2. **Monitor Security Events** - see if legitimate traffic gets through
3. **Keep the Allow rule** or adjust Managed Rules sensitivity as needed

---

**DO THIS: Go to Security → WAF → Custom Rules → Create rule → Allow traffic to zerobarriers.io**
