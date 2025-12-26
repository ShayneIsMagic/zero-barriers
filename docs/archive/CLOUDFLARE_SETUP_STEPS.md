# Step-by-Step: Cloudflare Pages Configuration

## 🎯 Goal
Configure Cloudflare Pages to successfully build and deploy your Next.js site.

## 📍 Where to Go
https://dash.cloudflare.com/bfd99742e5e9804d4e10694282eea664/workers-and-pages

---

## Step 1: Fix Build Output Directory (CRITICAL)

1. Click on your Pages project
2. Go to **Settings** tab
3. Scroll to **Builds & deployments** section
4. Find **Build configuration**
5. Look for **Build output directory** field
6. **CHANGE**: `dist` → `out`
7. Click **Save**

**Why**: Next.js with `output: 'export'` generates files in `out/` directory, not `dist/`.

---

## Step 2: Set Node Version

1. In the same **Build configuration** section
2. Look for **Node version** or **Environment** section
3. If there's a Node version field, set it to: `20`
4. Click **Save**

**Why**: Next.js 16 requires Node.js >=20.9.0, but Cloudflare defaults to Node 18.

**Note**: If there's no Node version field, the `.nvmrc` file we added should help, but you may need to check Cloudflare documentation or support.

---

## Step 3: Update Environment Variables

1. Still in **Settings** tab
2. Scroll to **Environment variables** section
3. Find **Variables and Secrets** subsection

### Delete Wrong Variable:
4. Find `PUBLIC_GTM_ID` in the list
5. Click the **delete/trash icon** next to it
6. Confirm deletion

### Add Required Variables:

7. Click **Add variable** or **+ Add variable**

#### Variable 1: Web3Forms Access Key (REQUIRED)
- **Type**: Secret
- **Name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- **Value**: [Get from https://web3forms.com]
  - Go to https://web3forms.com
  - Enter email: `sk@zerobarriers.io`
  - Get access key from email
  - Paste it here
- Click **Save**

#### Variable 2: Google Analytics (Optional)
- **Type**: Secret
- **Name**: `NEXT_PUBLIC_GA_ID`
- **Value**: `G-YHS2Y7L3C9`
- Click **Save**

#### Variable 3: Google Tag Manager (Optional)
- **Type**: Secret
- **Name**: `NEXT_PUBLIC_GTM_ID`
- **Value**: `GTM-WL8K8XK`
- Click **Save**

**Important**: 
- ✅ All variables MUST start with `NEXT_PUBLIC_`
- ✅ `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is REQUIRED for contact form
- ❌ Don't use `PUBLIC_` prefix (wrong for Next.js)

---

## Step 4: Verify Build Command

1. In **Build configuration** section
2. Check **Build command** field
3. Should be: `npm run build`
4. If different, change it to: `npm run build`
5. Click **Save**

---

## Step 5: Deploy

After saving all changes:

### Option A: Automatic Deploy
- Cloudflare will auto-detect changes on next git push
- Push a commit to `main` branch to trigger

### Option B: Manual Retry
1. Go to **Deployments** tab
2. Find the latest (failed) deployment
3. Click the **three dots** menu
4. Click **Retry deployment**

---

## ✅ Success Indicators

After deployment, check the build logs. You should see:

✅ **Node version**: `nodejs@20.x.x` or `nodejs@22.x.x`  
✅ **Build starts**: `npm run build`  
✅ **Next.js version**: `▲ Next.js 16.1.0`  
✅ **Compilation**: `✓ Compiled successfully`  
✅ **Routes generated**: Lists all your pages  
✅ **Deployment**: `Success` status  

---

## ❌ Common Errors & Fixes

### Error: "Node.js version 18.17.1"
**Fix**: Set Node version to `20` in build configuration

### Error: "Cannot find module" or "Build output not found"
**Fix**: Change build output directory from `dist` to `out`

### Error: "Web3Forms access key is not configured"
**Fix**: Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable

### Error: "Environment variable not accessible"
**Fix**: Make sure variable names start with `NEXT_PUBLIC_` prefix

---

## 📞 Need Help?

- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Web3Forms Setup: https://web3forms.com
- Check build logs in Cloudflare dashboard for specific errors

---

**After completing these steps, your site should build and deploy successfully!**
