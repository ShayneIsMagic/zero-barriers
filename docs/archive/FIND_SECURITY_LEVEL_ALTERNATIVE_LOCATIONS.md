# Can't Find Security Level? Try These Locations

## Security Level Might Be In Different Places

Cloudflare's interface can vary, so the Security Level might be in one of these locations:

---

## Location 1: Security → WAF → Settings

1. Go to: **Cloudflare Dashboard** → **zerobarriers.io** → **Security**
2. Click **"WAF"** (Web Application Firewall)
3. Look for **"Settings"** tab or section
4. Security Level might be there

---

## Location 2: Security → Overview

1. Go to: **Cloudflare Dashboard** → **zerobarriers.io** → **Security**
2. Click **"Overview"** (or just stay on the main Security page)
3. Look for **"Security Level"** card/widget on the page
4. It might be displayed prominently on the overview

---

## Location 3: Security → Settings (But Different Section)

1. Go to: **Cloudflare Dashboard** → **zerobarriers.io** → **Security** → **Settings**
2. **Look for these sections:**
   - Security Features
   - Browser Integrity Check
   - Challenge Passage
   - Security Level might be near these

---

## Location 4: Use Search in Cloudflare Dashboard

1. In Cloudflare Dashboard, look for a **search bar** at the top
2. Type: **"Security Level"**
3. It should show you where it is

---

## Location 5: Check All Security Sections

Go through each section under Security and check:

1. **Security** → **Overview** - Check here first
2. **Security** → **WAF** - Check here
3. **Security** → **Bots** - Might be here
4. **Security** → **Settings** - Check all subsections
5. **Security** → **Page Rules** - Not here, but check others

---

## Alternative: Check What's Blocking You

Instead of finding Security Level, you can also:

### Option A: Check WAF Rules

1. Go to: **Security** → **WAF** → **Custom Rules**
2. Look for rules that are **"Blocking"** or have action **"Block"**
3. Temporarily disable suspicious rules

### Option B: Check Bot Protection

1. Go to: **Security** → **Bots**
2. Look for **"Bot Fight Mode"** or **"Super Bot Fight Mode"**
3. If enabled, try disabling it temporarily

### Option C: Check Firewall Rules

1. Go to: **Security** → **WAF** → **Firewall rules**
2. Look for rules blocking all traffic
3. Check the actions taken

---

## What to Look For

When searching for Security Level, look for:

- A **dropdown** or **selector** with options like:
  - Essentially Off
  - Low
  - Medium
  - High
  - I'm Under Attack!

- It might be labeled as:
  - "Security Level"
  - "Security Settings"
  - "Security Features"
  - "Threat Protection Level"

---

## If You Still Can't Find It

### Option 1: Take a Screenshot

1. Go to: **Security** section
2. Take a screenshot of what you see
3. This will help identify where Security Level is in your interface

### Option 2: Check Cloudflare Help

1. In Cloudflare Dashboard, look for **"Help"** or **"?"** icon
2. Search for: "Security Level"
3. It will show you where it is

### Option 3: Check Your Cloudflare Plan

Some Cloudflare plans have Security Level in different locations:
- **Free plan**: Usually in Security → Overview or Security → Settings
- **Pro plan**: Might be in Security → WAF → Settings
- **Business/Enterprise**: Can vary

---

## Quick Workaround: Lower All Security Settings

If you can't find Security Level specifically, try temporarily lowering other security settings:

1. **Security** → **Bots** → Disable "Bot Fight Mode" (temporarily)
2. **Security** → **WAF** → Check Custom Rules, disable blocking rules temporarily
3. **Security** → **Settings** → Lower any security thresholds you see

Then test your site. If it works, gradually re-enable settings to find what was blocking you.

---

## Most Common Location

Based on Cloudflare's typical interface, Security Level is usually:

**Security → Overview** (main Security page)

Look for a card or section that says "Security Level" with a dropdown.

---

**Try Location 2 first (Security → Overview) - that's where it usually is!**
