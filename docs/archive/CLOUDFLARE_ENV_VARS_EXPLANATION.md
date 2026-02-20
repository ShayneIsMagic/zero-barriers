# Environment Variables: Local vs Cloudflare Pages

## The Problem

**You have:** `RESEND_API_KEY` in `.env.local` ✅  
**But:** Cloudflare Pages Functions can't access `.env.local` ❌

---

## Why `.env.local` Doesn't Work for Cloudflare Pages

### Local Development (Works)
- `.env.local` → Used by Next.js during `npm run dev`
- Environment variables are available in the browser/build
- **Only works on your local machine**

### Cloudflare Pages (Doesn't Work)
- `.env.local` → **NOT uploaded to Cloudflare** (it's in `.gitignore`)
- Cloudflare Pages Functions run on Cloudflare's servers
- They need environment variables set **in Cloudflare Dashboard**

---

## Solution: Add Environment Variables in Cloudflare Pages

### Step 1: Go to Cloudflare Pages Settings

1. **Open:** Cloudflare Dashboard
2. **Go to:** **Workers & Pages** → **zero-barriers**
3. **Click:** **Settings** tab
4. **Click:** **Environment Variables** section

---

### Step 2: Add RESEND_API_KEY

1. **Click:** **"Add variable"** or **"Add environment variable"**
2. **Fill in:**
   - **Variable name:** `RESEND_API_KEY`
   - **Type:** Secret (click the lock icon)
   - **Value:** Copy the value from your `.env.local` file
   - **Environment:** Production (or All environments)
3. **Click:** **Save**

---

### Step 3: Verify It's Set

**You should see:**
- ✅ `RESEND_API_KEY` listed in Environment Variables
- ✅ Status shows "Value encrypted" or similar
- ✅ Environment shows "Production" (or "All")

---

### Step 4: Trigger Deployment

**After adding the variable:**

1. **Option A: Retry Latest Deployment**
   - Go to: **Deployments** tab
   - Click on latest deployment
   - Click **"Retry deployment"**

2. **Option B: Make a Small Change**
   - Make any small commit (add a space, update a comment)
   - Push to GitHub
   - Cloudflare will auto-deploy

---

## How Environment Variables Work

### Next.js Build-Time Variables (`NEXT_PUBLIC_*`)
- **Set in:** Cloudflare Pages → Environment Variables
- **When:** During build (embedded in JavaScript)
- **Available in:** Browser/client-side code
- **Example:** `NEXT_PUBLIC_GA_ID`

### Cloudflare Functions Runtime Variables
- **Set in:** Cloudflare Pages → Environment Variables
- **When:** At runtime (when function executes)
- **Available in:** Cloudflare Functions only
- **Example:** `RESEND_API_KEY`

---

## Important Notes

### `.env.local` is Local Only
- ✅ Use for local development
- ❌ **NOT** used by Cloudflare Pages
- ❌ **NOT** uploaded to GitHub (in `.gitignore`)
- ❌ **NOT** available to Functions

### Cloudflare Environment Variables
- ✅ Set in Cloudflare Dashboard
- ✅ Available to Functions at runtime
- ✅ Secure (encrypted as "Secrets")
- ✅ Can be different per environment (Production, Preview)

---

## Verification Checklist

After adding `RESEND_API_KEY` in Cloudflare:

- [ ] Variable name: `RESEND_API_KEY` (exact, case-sensitive)
- [ ] Type: Secret (encrypted)
- [ ] Value: Matches your `.env.local` value
- [ ] Environment: Production (or All)
- [ ] Deployment retried or new deployment triggered
- [ ] Test contact form after deployment

---

## Quick Fix Steps

1. **Copy your Resend API key** from `.env.local`
2. **Go to:** Cloudflare Pages → zero-barriers → Settings → Environment Variables
3. **Add:** `RESEND_API_KEY` with the value from `.env.local`
4. **Save**
5. **Retry deployment** or push a new commit
6. **Test contact form**

---

## Summary

**`.env.local` = Local development only**  
**Cloudflare Pages Environment Variables = Production/Cloudflare Functions**

**You need BOTH:**
- ✅ `.env.local` for local development (you have this)
- ✅ Cloudflare Pages environment variables for production (you need to add this)

**Action:** Add `RESEND_API_KEY` in Cloudflare Pages → Settings → Environment Variables
