# Complete Site Fix - All Issues

## Current Issues

1. **403 Forbidden** - Managed Rules blocking zerobarriers.io
2. **Error 1000** - DNS pointing to prohibited IP
3. **Favicon 524** - Missing favicon.ico file
4. **Custom domain not configured** in Cloudflare Pages

---

## Fix 1: Create Allow Rule for Managed Rules (403 Fix)

### Step 1: Create Security Rule

1. **Go to:** Cloudflare Dashboard → **zerobarriers.io** → **Security** → **WAF** → **Custom Rules**
2. **Click:** `Create rule`
3. **Rule name:** `Allow zerobarriers.io`
4. **If incoming requests match:**
   - **Field:** `Hostname`
   - **Operator:** `equals`
   - **Value:** `zerobarriers.io`
5. **Then:**
   - **Action:** `Skip`
   - **WAF components to skip:** Check `All managed rules`
6. **Place at:** `First`
7. **Deploy**

**This fixes the 403 error.**

---

## Fix 2: Configure Custom Domain in Cloudflare Pages (Error 1000 Fix)

### Step 1: Remove Manual DNS Records

1. **Go to:** Cloudflare Dashboard → **zerobarriers.io** → **DNS** → **Records**
2. **Find and DELETE:**
   - Any **A record** for `zerobarriers.io` (root domain)
   - Any **CNAME record** for `zerobarriers.io` (root domain)
   - **Keep:** Subdomain records, email records (MX, TXT for Resend)

### Step 2: Add Custom Domain in Pages

1. **Go to:** Cloudflare Dashboard → **Workers & Pages** → **zero-barriers**
2. **Click:** **Custom domains** tab
3. **Click:** **"Add custom domain"** or **"Set up a custom domain"**
4. **Enter:** `zerobarriers.io`
5. **Click:** **Add domain**
6. **Cloudflare Pages will automatically:**
   - Create correct DNS records
   - Configure SSL/TLS
   - Point to your Pages deployment

**This fixes Error 1000.**

---

## Fix 3: Add Favicon (524 Fix)

### Option A: Create favicon.ico

1. **Go to:** https://favicon.io/favicon-converter/
2. **Upload:** `public/images/zero-barriers-logo.png`
3. **Download:** `favicon.ico`
4. **Place in:** `public/favicon.ico`
5. **Commit and push** to GitHub

### Option B: Use Next.js App Router Icon

1. **Copy:** `public/images/zero-barriers-logo.png`
2. **Rename to:** `icon.png`
3. **Place in:** `src/app/icon.png`
4. **Next.js will automatically use it**

**This fixes the 524 favicon error.**

---

## Fix 4: Verify Cloudflare Pages Configuration

### Check Build Settings

1. **Go to:** Workers & Pages → **zero-barriers** → **Settings** → **Builds & deployments**
2. **Verify:**
   - **Build command:** `npm run build` ✅
   - **Build output directory:** `out` (NOT `/dist`) ✅
   - **Root directory:** `/` ✅
   - **Node version:** `20` or `20.9.0` ✅

### Check Environment Variables

1. **Go to:** Workers & Pages → **zero-barriers** → **Settings** → **Environment Variables**
2. **Verify these exist:**
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` ✅
   - `NEXT_PUBLIC_GTM_ID` = `GTM-P34N6DXL` ✅
   - `NEXT_PUBLIC_GA_ID` = `G-YHS2Y7L3C9` ✅
   - `RESEND_API_KEY` ✅

---

## Complete Fix Checklist

### Immediate Actions:

- [ ] **Create Allow rule** (Security → WAF → Custom Rules) - Fixes 403
- [ ] **Add custom domain in Pages** (Workers & Pages → Custom domains) - Fixes Error 1000
- [ ] **Add favicon.ico** to public/ - Fixes 524
- [ ] **Verify build output directory** is `out` (not `/dist`)
- [ ] **Verify environment variables** are set correctly

### After Fixes:

- [ ] **Wait 2-5 minutes** for changes to propagate
- [ ] **Test:** `https://zerobarriers.io/` - Should work!
- [ ] **Test:** `https://zero-barriers.pages.dev/` - Should still work
- [ ] **Test contact form** - Should submit successfully

---

## Priority Order

1. **Fix 1: Allow Rule** (fixes 403) - **DO THIS FIRST**
2. **Fix 2: Custom Domain** (fixes Error 1000) - **DO THIS SECOND**
3. **Fix 3: Favicon** (fixes 524) - **Can do later, less critical**
4. **Fix 4: Verify Config** (ensures everything works) - **Check after fixes**

---

## Summary

**Do these 2 things immediately:**

1. **Security → WAF → Custom Rules → Create rule → Allow zerobarriers.io**
2. **Workers & Pages → zero-barriers → Custom domains → Add zerobarriers.io**

**Then add favicon.ico and verify configuration.**

---

**Start with Fix 1 and Fix 2 - those are the critical ones blocking your site!**
