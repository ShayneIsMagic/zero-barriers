# Fix Favicon Issue

## The Problem

1. **Browser requests:** `favicon.ico` (default browser behavior)
2. **Your code has:** `/images/zero-barriers-logo.png` configured
3. **Missing:** No `favicon.ico` file exists
4. **Result:** 524 timeout error (Cloudflare trying to fetch non-existent file)

---

## The Solution

Next.js 13+ (App Router) expects favicon files in specific locations. We need to either:

### Option 1: Add favicon.ico to public/ (Quick Fix)

1. **Convert your logo to favicon.ico:**
   - Use an online converter: https://favicon.io/favicon-converter/
   - Upload: `public/images/zero-barriers-logo.png`
   - Download the favicon.ico
   - Place it in: `public/favicon.ico`

2. **Next.js will automatically serve it** from the public directory

---

### Option 2: Use Next.js App Router Favicon (Recommended)

Next.js 13+ supports `icon.png` or `favicon.ico` in the `app` directory:

1. **Create:** `src/app/icon.png` or `src/app/favicon.ico`
2. **Copy your logo there** (convert to .ico if needed)
3. **Next.js will automatically use it**

---

### Option 3: Update Metadata to Include Multiple Formats

Update `src/app/layout.tsx` to include proper favicon configuration:

```typescript
icons: {
  icon: [
    { url: '/images/zero-barriers-logo.png', type: 'image/png' },
    { url: '/favicon.ico', type: 'image/x-icon' }
  ],
  shortcut: '/images/zero-barriers-logo.png',
  apple: '/images/zero-barriers-logo.png',
},
```

---

## Quick Fix Steps

### Step 1: Create favicon.ico

1. **Go to:** https://favicon.io/favicon-converter/
2. **Upload:** `public/images/zero-barriers-logo.png`
3. **Download:** favicon.ico
4. **Place in:** `public/favicon.ico`

### Step 2: Update layout.tsx (Optional but Recommended)

Update the icons configuration to include both formats.

### Step 3: Deploy

1. **Commit the changes**
2. **Push to GitHub**
3. **Cloudflare Pages will auto-deploy**
4. **Favicon should work**

---

## Why This Happened

- **Browsers automatically request:** `/favicon.ico`
- **Your code only has:** PNG icon configured
- **No favicon.ico exists** → 404/524 error
- **The 524 timeout** suggests Cloudflare is trying to fetch it but the origin doesn't have it

---

## Current Configuration

**In `src/app/layout.tsx` (line 28-30):**
```typescript
icons: {
  icon: '/images/zero-barriers-logo.png',
},
```

**This works for modern browsers**, but older browsers and some tools still request `favicon.ico` directly.

---

## Best Solution

**Add `public/favicon.ico`** - this is the simplest fix that works everywhere.

1. Convert your logo to favicon.ico
2. Place in `public/favicon.ico`
3. Deploy
4. Done!

---

**The 524 timeout will go away once favicon.ico exists in your public directory.**
