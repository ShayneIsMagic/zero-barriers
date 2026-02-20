# Cloudflare Pages Setup Checklist

## ✅ Repository Configuration (Already Done)

All code-side configuration is correct:
- ✅ `next.config.js` - Configured for static export
- ✅ `package.json` - Has engines field (Node >=20.9.0)
- ✅ `.nvmrc` - Specifies Node 20.9.0
- ✅ `.node-version` - Specifies Node 20.9.0
- ✅ Build command: `npm run build` (correct)
- ✅ Output directory: Next.js creates `out/` (documented)

---

## ⚠️ REQUIRED: Cloudflare Dashboard Configuration

You need to manually configure these in Cloudflare Pages dashboard:

### Step 1: Build Configuration

Go to: **Settings → Builds & deployments → Build configuration**

1. **Build command:**
   ```
   npm run build
   ```
   *(Should already be set correctly)*

2. **Build output directory:**
   ```
   out
   ```
   ⚠️ **CHANGE FROM**: `dist`  
   ✅ **CHANGE TO**: `out`  
   *(This is critical - Next.js exports to `out/`, not `dist/`)*

3. **Root directory:**
   ```
   /
   ```
   *(Leave as is or set to `/`)*

4. **Node version:**
   ```
   20
   ```
   *(or `20.9.0` - Required for Next.js 16)*

### Step 2: Environment Variables

Go to: **Settings → Environment Variables**

**Delete this variable:**
- ❌ `PUBLIC_GTM_ID` (wrong prefix, delete it)

**Add/Update these variables:**

| Type | Variable Name | Value | Required |
|------|---------------|-------|----------|
| Secret | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Get from https://web3forms.com | ✅ **Yes** |
| Secret | `NEXT_PUBLIC_GTM_ID` | `GTM-WL8K8XK` | ⚠️ Optional |
| Secret | `NEXT_PUBLIC_GA_ID` | `G-YHS2Y7L3C9` | ⚠️ Optional |

**Important Notes:**
- All environment variables MUST start with `NEXT_PUBLIC_` to be accessible in the browser
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is **required** for the contact form to work
- Get your Web3Forms key from: https://web3forms.com (use email: sk@zerobarriers.io)

### Step 3: Save & Deploy

1. **Save** all configuration changes
2. **Trigger new deployment**:
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest failed deployment
   - OR push a new commit to trigger auto-deploy

---

## 📋 Quick Copy-Paste Reference

### Build Output Directory
```
out
```

### Environment Variables to Add

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=[your_key_from_web3forms.com]
NEXT_PUBLIC_GTM_ID=GTM-WL8K8XK
NEXT_PUBLIC_GA_ID=G-YHS2Y7L3C9
```

### Node Version
```
20
```

---

## ✅ Verification

After configuring, check build logs should show:
- ✅ Node version: `nodejs@20.x.x` or higher
- ✅ Build command: `npm run build`
- ✅ Next.js compilation: `✓ Compiled successfully`
- ✅ Output directory: Files in `out/` directory
- ✅ No errors about missing environment variables

---

## 🆘 If Build Still Fails

1. **Check build logs** for specific error messages
2. **Verify** Node version is 20.x (not 18.x)
3. **Verify** build output directory is `out` (not `dist`)
4. **Verify** environment variables have `NEXT_PUBLIC_` prefix
5. **Clear build cache** if option available in dashboard

---

**All repository code is ready. Just need to update Cloudflare dashboard settings!**
