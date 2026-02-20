# Quick Fix: 403 Error - Lower Security Level

## ⚡ 5-Minute Fix

Follow these exact steps to fix the 403 error blocking your site:

---

## Step 1: Open Cloudflare Dashboard

1. Go to: **https://dash.cloudflare.com**
2. Sign in to your account

---

## Step 2: Select Your Domain

1. Click **"Websites"** in the left sidebar (or you'll see your domains list)
2. Click on **zerobarriers.io**

---

## Step 3: Go to Security Settings

1. In the left sidebar, click **"Security"**
2. Click **"Settings"** (should be at the top of the Security section)

---

## Step 4: Find Security Level

1. Scroll down until you see **"Security Level"**
2. You'll see a dropdown/selector with options like:
   - Essentially Off
   - Low
   - Medium
   - High
   - I'm Under Attack!

---

## Step 5: Change Security Level

1. **Click the dropdown** for Security Level
2. **Select "Medium"** (recommended - good balance)
   - OR select "Low" if you want less security temporarily
3. Click **Save** or the change will auto-save

---

## Step 6: Wait and Test

1. **Wait 2-3 minutes** for changes to propagate
2. **Try accessing your site:** https://zerobarriers.io/
3. **It should work now!** ✅

---

## If You Don't See "Security Level"

If you don't see "Security Level" in Security → Settings:

1. Try: **Security** → **WAF** → Look for Security Level there
2. Or: **Security** → **Bots** → Check Bot Fight Mode settings
3. Or: Look in the main **Security** dashboard for any security controls

---

## Recommended Setting

**Set Security Level to "Medium"** - This provides:
- ✅ Good protection against attacks
- ✅ Allows legitimate visitors
- ✅ Balanced security

**Avoid:**
- ❌ "High" - Can block legitimate users
- ❌ "I'm Under Attack!" - Blocks almost everything (only use during actual attacks)

---

## That's It!

After changing to "Medium" and waiting 2-3 minutes, your site should be accessible again.

If it's still blocked after 5 minutes, let me know and we'll check other settings.
