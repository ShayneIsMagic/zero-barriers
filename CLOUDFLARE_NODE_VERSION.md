# Cloudflare Pages Node.js Version Configuration

## Problem

Cloudflare Pages is using Node.js 18.17.1, but Next.js 16.1.0 requires Node.js >=20.9.0.

## Solution

### Option 1: Configure in Cloudflare Dashboard (Recommended)

1. Go to your Cloudflare Pages project:
   https://dash.cloudflare.com/bfd99742e5e9804d4e10694282eea664/workers-and-pages

2. Navigate to: **Settings** → **Builds & deployments**

3. Under **Build configuration**, set:
   - **Node version**: `20.9.0` or `20` (for latest 20.x)

4. Save the changes

5. Trigger a new deployment (or it will auto-deploy on next push)

### Option 2: Files Added to Repository

I've added the following files to help Cloudflare detect the Node version:

- `.nvmrc` - Contains `20.9.0`
- `.node-version` - Contains `20.9.0`  
- `package.json` - Added `engines` field specifying Node >=20.9.0

These files help build systems detect the required Node version, but Cloudflare Pages may still require explicit configuration in the dashboard.

### Option 3: Use Compatibility Date (Alternative)

If the above doesn't work, you can also try:

1. In Cloudflare Pages settings
2. Look for **Compatibility date** or **Compatibility flags**
3. Set compatibility date to a recent date (this enables newer Node.js versions)

## Verify

After configuring, check the build logs to confirm it's using Node.js 20.x:
```
Detected the following tools from environment: npm@x.x.x, nodejs@20.x.x
```

## Current Status

- ✅ `.nvmrc` file created with `20.9.0`
- ✅ `.node-version` file created with `20.9.0`
- ✅ `package.json` engines field updated
- ⏳ **Action Required**: Configure Node version in Cloudflare Dashboard
