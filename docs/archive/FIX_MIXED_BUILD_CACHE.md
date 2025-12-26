# Fix Mixed Build Content - Cache Issues

## The Problem: "Half Old Build" Symptoms

You're seeing:
- Some new content appears
- Some old content still showing
- Mixed/new pages loading with old styles or scripts
- Inconsistent site behavior

**This is a caching issue** - Cloudflare and/or browser is serving cached old files alongside new ones.

---

## Root Causes

### 1. Cloudflare Cache Not Cleared
- Cloudflare CDN is serving cached old HTML/CSS/JS files
- New deployment uploaded new files, but cache still serves old ones

### 2. Browser Cache
- Your browser cached old JavaScript/CSS files
- Hard refresh needed to get new files

### 3. Build Output Directory Mismatch (Possible)
- If Cloudflare is still pointing to wrong output directory
- Old files in one location, new files in another

---

## Solutions (Do ALL of these)

### Solution 1: Clear Cloudflare Cache

**Method A: Cloudflare Dashboard**
1. **Go to:** Cloudflare Dashboard → **zerobarriers.io** → **Caching** → **Configuration**
2. **Click:** **"Purge Everything"** or **"Custom Purge"**
3. **Select:** **"Purge Everything"**
4. **Click:** **Purge**

**Method B: Purge Cache in Pages**
1. **Go to:** Workers & Pages → **zero-barriers** → **Settings** → **Custom domains**
2. **If available:** Look for "Purge cache" option
3. **OR:** Go to domain-level cache settings (see Method A)

---

### Solution 2: Hard Refresh Browser

**Clear your browser cache:**

**Chrome/Edge (Mac):**
- `Cmd + Shift + R` (hard refresh)
- OR: `Cmd + Option + E` (clear cache)

**Chrome/Edge (Windows):**
- `Ctrl + Shift + R` (hard refresh)
- `Ctrl + F5` (hard refresh)

**Firefox:**
- `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

**Safari:**
- `Cmd + Option + E` (empty caches)

**Or use DevTools:**
1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

---

### Solution 3: Verify Build Output Directory

**Check Cloudflare Pages settings:**

1. **Go to:** Workers & Pages → **zero-barriers** → **Settings** → **Builds & deployments**
2. **Verify:** Build output directory is `out` (NOT `dist`)
3. **If it's `dist`:** Change it to `out` and trigger new deployment

**Why:** Next.js exports to `out/` directory. If Cloudflare is looking in `dist/`, it might be serving old files.

---

### Solution 4: Check Deployment Status

**Verify latest deployment:**

1. **Go to:** Workers & Pages → **zero-barriers** → **Deployments**
2. **Check:** Latest deployment status should be **"Success"**
3. **Check:** Latest deployment should show your recent commit (`cfef59d`)
4. **If older deployment is active:** Click on latest deployment → **"Retry deployment"**

---

### Solution 5: Force New Deployment

**Trigger a fresh build:**

1. **Make a small change** (add a space, update a comment)
2. **Commit and push** to GitHub
3. **Cloudflare will automatically rebuild**
4. **Wait for deployment to complete**

**Quick test commit:**
```bash
git commit --allow-empty -m "Force rebuild to clear cache"
git push
```

---

## Step-by-Step Fix Process

### Step 1: Clear Cloudflare Cache (5 seconds)
1. Cloudflare Dashboard → **zerobarriers.io** → **Caching** → **Purge Everything**
2. Click **Purge**

### Step 2: Verify Build Output (30 seconds)
1. Workers & Pages → **zero-barriers** → **Settings** → **Builds & deployments**
2. Check: Build output directory = `out` (not `dist`)
3. If wrong, fix it and save

### Step 3: Hard Refresh Browser (10 seconds)
1. Close all tabs with your site
2. Open new tab
3. Press `Cmd + Shift + R` (or `Ctrl + Shift + R`)

### Step 4: Test Site (1 minute)
1. Visit: `https://zero-barriers.pages.dev/`
2. Check if content is consistent
3. Open DevTools → Network tab → Check "Disable cache"
4. Reload page

### Step 5: If Still Mixed, Force Rebuild (2 minutes)
1. Make empty commit: `git commit --allow-empty -m "Force rebuild"`
2. Push: `git push`
3. Wait for deployment
4. Clear cache again (Step 1)
5. Hard refresh browser (Step 3)

---

## Prevention

### Add Cache-Busting Headers

**File:** `public/_headers`

Already configured! Your headers include cache control rules.

**For static assets:**
```
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

**This means:**
- Static assets (JS/CSS) cached for 1 year with immutable flag
- HTML pages should have shorter cache

**Check if HTML cache is too long:**
- Cloudflare → **Caching** → **Configuration**
- Check **Browser Cache TTL** for HTML
- Should be "Respect Existing Headers" or "2 hours"

---

## Quick Diagnostic

**Test if it's cache:**

1. **Open DevTools** (F12)
2. **Network tab**
3. **Check:** "Disable cache" checkbox
4. **Reload page**
5. **If site looks correct:** It's a cache issue ✅
6. **If still mixed:** Different problem (check deployment)

---

## Expected After Fix

**You should see:**
- ✅ All pages have consistent styling
- ✅ All JavaScript functions work correctly
- ✅ Contact form works
- ✅ No mixed old/new content
- ✅ Console shows no errors about missing resources

---

## Summary

**Most likely fix:**
1. **Purge Cloudflare cache** (Method A above)
2. **Hard refresh browser** (`Cmd + Shift + R`)
3. **Verify build output = `out`** (not `dist`)

**If still issues:**
4. **Force new deployment** (empty commit)
5. **Clear cache again**
6. **Hard refresh again**

---

**Start with Solution 1 and 2 - that fixes 90% of mixed build issues!**
