# Fix HTTP 522 Error - Connection Timed Out

## The Problem

**HTTP 522** = Cloudflare can't reach your origin server (Cloudflare Pages).

**What this means:**
- ✅ DNS is correct (pointing to Cloudflare Pages IPs)
- ✅ Pages.dev works (HTTP 200)
- ❌ Custom domain `zerobarriers.io` not connected to Pages deployment

---

## The Fix: Connect Custom Domain in Cloudflare Pages

### Step 1: Go to Cloudflare Pages

1. **Go to:** Cloudflare Dashboard → **Workers & Pages** → **zero-barriers**

### Step 2: Add Custom Domain

1. **Click:** **Custom domains** tab (or **Settings** → **Custom domains**)
2. **Click:** **"Add custom domain"** or **"Set up a custom domain"**
3. **Enter:** `zerobarriers.io`
4. **Click:** **Add domain** or **Continue**

### Step 3: Wait for Configuration

Cloudflare Pages will:
- ✅ Connect the domain to your deployment
- ✅ Configure SSL/TLS automatically
- ✅ Update DNS records if needed
- ⏳ Takes 2-5 minutes

---

## Why This Happens

**HTTP 522** occurs when:
- Custom domain exists in DNS
- But not connected to Cloudflare Pages deployment
- Cloudflare tries to route traffic but can't find the deployment

**The fix:** Connect the domain in Cloudflare Pages settings.

---

## After Adding Custom Domain

1. **Wait 2-5 minutes** for configuration
2. **Check status** in Custom domains tab:
   - Should show: **"Active"** or **"Connected"**
   - Should show SSL certificate status
3. **Test:** `curl -I https://zerobarriers.io`
   - Should return: **HTTP/2 200** (not 522)

---

## If Still Getting 522 After Adding Domain

### Check Deployment Status:

1. **Go to:** **Deployments** tab
2. **Check latest deployment:**
   - Status should be: **"Success"** or **"Active"**
   - Should not be: **"Failed"** or **"Building"**

### Check Custom Domain Status:

1. **Go to:** **Custom domains** tab
2. **Check `zerobarriers.io` status:**
   - Should be: **"Active"**
   - Should show SSL certificate
   - Should not show errors

---

## Summary

**The 522 error means the custom domain isn't connected to your Pages deployment.**

**Fix:**
1. **Workers & Pages** → **zero-barriers** → **Custom domains**
2. **Add:** `zerobarriers.io`
3. **Wait 2-5 minutes**
4. **Test again**

**This should fix the 522 error and your site will work!**
