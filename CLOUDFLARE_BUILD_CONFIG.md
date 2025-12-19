# Cloudflare Pages Build Configuration

## ❌ Issues Found

### 1. Build Output Directory is Wrong

**Current**: `/dist`  
**Should be**: `/out`

Next.js with `output: 'export'` generates static files in the `out/` directory, not `dist/`.

### 2. Environment Variable Names are Wrong

**Current**: `PUBLIC_GTM_ID`  
**Should be**: `NEXT_PUBLIC_GTM_ID`

Next.js only exposes environment variables to the browser that start with `NEXT_PUBLIC_`. Without this prefix, the variables won't be accessible in your React components.

### 3. Missing Required Environment Variables

You need these environment variables in Cloudflare Pages:

**Required:**
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` - For contact form submissions

**Optional (for analytics):**
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager (you have this but wrong name)
- `NEXT_PUBLIC_GA_ID` - Google Analytics

---

## ✅ Correct Cloudflare Pages Settings

### Build Configuration

**Build command:**
```
npm run build
```

**Build output directory:**
```
out
```
*(NOT /dist - just `out` without the slash)*

**Root directory:**
```
/
```
*(or leave empty)*

**Node version:**
```
20
```
*(or `20.9.0` - required for Next.js 16)*

### Environment Variables

Add these in Cloudflare Pages → Settings → Environment Variables:

| Variable Name | Value | Required |
|--------------|-------|----------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Your Web3Forms access key | ✅ Yes |
| `NEXT_PUBLIC_GTM_ID` | `GTM-WL8K8XK` | ⚠️ Optional |
| `NEXT_PUBLIC_GA_ID` | `G-YHS2Y7L3C9` | ⚠️ Optional |

**Note**: 
- Your current `PUBLIC_GTM_ID` with value `G-YHS2Y7L3C9` appears to be a Google Analytics ID, not GTM ID
- The GTM ID should be `GTM-WL8K8XK` (from env.template)
- The GA ID should be `G-YHS2Y7L3C9`

---

## 🔧 How to Fix in Cloudflare Dashboard

1. **Go to**: https://dash.cloudflare.com/bfd99742e5e9804d4e10694282eea664/workers-and-pages
2. **Select your Pages project**
3. **Go to**: Settings → Builds & deployments
4. **Update**:
   - Build output directory: Change from `/dist` to `out`
   - Node version: Set to `20` or `20.9.0`
5. **Go to**: Settings → Environment Variables
6. **Delete** the incorrect `PUBLIC_GTM_ID` variable
7. **Add** these variables:

   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = [your access key from web3forms.com]
   NEXT_PUBLIC_GA_ID = G-YHS2Y7L3C9
   NEXT_PUBLIC_GTM_ID = GTM-WL8K8XK
   ```

8. **Save** all changes
9. **Trigger a new deployment** (or wait for next auto-deploy)

---

## 📝 Summary of Changes Needed

1. ✅ Change build output directory: `/dist` → `out`
2. ✅ Set Node version: `20` or `20.9.0`
3. ✅ Fix environment variable names: Add `NEXT_PUBLIC_` prefix
4. ✅ Add missing `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
5. ✅ Fix variable values (GA vs GTM IDs)

After making these changes, your build should succeed!
