# Fix 522 Error - Custom Domain Not Connected

## The Problem

**522 = Connection Timeout** - Cloudflare cannot reach your origin server.

**This means:** The custom domain `zerobarriers.io` is not properly connected to your Cloudflare Pages deployment.

**Evidence:**
- ❌ `https://zerobarriers.io/` → 522 error
- ✅ `https://zero-barriers.pages.dev/` → Works (this confirms Pages deployment is fine)

---

## The Solution: Add Custom Domain in Cloudflare Pages

### Step 1: Go to Custom Domains Settings

1. **Open:** Cloudflare Dashboard
2. **Click:** **Workers & Pages** (left sidebar)
3. **Click:** **zero-barriers** project
4. **Click:** **Custom domains** tab

---

### Step 2: Add Custom Domain

1. **Look for:** "Add custom domain" or "Set up a custom domain" button
2. **Click it**
3. **Enter:** `zerobarriers.io`
4. **Click:** **Add domain** or **Continue**

---

### Step 3: Cloudflare Will Auto-Configure

**Cloudflare Pages will automatically:**
- ✅ Create the correct DNS records
- ✅ Configure SSL/TLS certificate
- ✅ Point `zerobarriers.io` to your Pages deployment
- ✅ Set up HTTPS

**You should see:**
- Status: "Active" or "Pending" (wait 2-5 minutes)
- SSL/TLS: "Active" (may take a few minutes)

---

### Step 4: Wait for Propagation

**After adding the domain:**
1. **Wait 2-5 minutes** for DNS/SSL to propagate
2. **Refresh:** `https://zerobarriers.io/`
3. **Should work!** ✅

---

## If "Add Custom Domain" Button is Missing

**Check these:**

1. **Is the domain in your Cloudflare account?**
   - Go to: **Overview** → Check if `zerobarriers.io` is listed
   - If not, you need to add it to Cloudflare first

2. **Are nameservers correct?**
   - Go to: **zerobarriers.io** → **DNS** → Check nameservers
   - Should be Cloudflare nameservers (e.g., `*.ns.cloudflare.com`)

3. **Is the domain active?**
   - Go to: **Overview** → Check domain status
   - Should be "Active"

---

## Verify DNS Records

**After adding custom domain, check DNS:**

1. **Go to:** **zerobarriers.io** → **DNS** → **Records**
2. **You should see:**
   - A record or CNAME for `zerobarriers.io` pointing to Pages
   - Created automatically by Cloudflare Pages

**DO NOT manually create DNS records** - Let Cloudflare Pages do it!

---

## Troubleshooting

### Still Getting 522 After Adding Domain?

1. **Check deployment status:**
   - Go to: **Workers & Pages** → **zero-barriers** → **Deployments**
   - Ensure latest deployment is **"Success"**

2. **Check custom domain status:**
   - Go to: **Custom domains** tab
   - Status should be **"Active"** (not "Pending" or "Error")

3. **Wait longer:**
   - SSL certificate generation can take 5-10 minutes
   - DNS propagation can take up to 15 minutes

4. **Clear browser cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

## Quick Checklist

- [ ] Go to: **Workers & Pages** → **zero-barriers** → **Custom domains**
- [ ] Click: **"Add custom domain"**
- [ ] Enter: `zerobarriers.io`
- [ ] Click: **Add domain**
- [ ] Wait 2-5 minutes
- [ ] Test: `https://zerobarriers.io/`
- [ ] Should work! ✅

---

## Summary

**The 522 error means the custom domain isn't connected to Pages.**

**Fix: Add `zerobarriers.io` as a custom domain in Cloudflare Pages settings.**

**After adding, wait 2-5 minutes and test again!**
