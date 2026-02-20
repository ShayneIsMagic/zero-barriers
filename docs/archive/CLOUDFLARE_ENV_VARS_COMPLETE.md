# Complete Environment Variables Setup for Cloudflare Pages

## 🎯 All Required Environment Variables

Add these three environment variables to Cloudflare Pages for the live site to work:

---

## 1. Web3Forms Access Key (Required for Contact Form)

**Variable Name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

**How to Get**:
1. Go to: https://web3forms.com
2. Enter email: sk@zerobarriers.io
3. Get access key from email inbox

**Value**: [Your access key from Web3Forms email]  
**Type**: Secret (recommended)

---

## 2. Google Analytics ID (Optional - for Analytics)

**Variable Name**: `NEXT_PUBLIC_GA_ID`

**Value**: `G-YHS2Y7L3C9`

**Type**: Plain text or Secret (your choice)  
**Source**: Google Analytics account

---

## 3. Google Tag Manager ID (Optional - for Tag Management)

**Variable Name**: `NEXT_PUBLIC_GTM_ID`

**Value**: `GTM-WL8K8XK`

**Type**: Plain text or Secret (your choice)  
**Source**: Google Tag Manager account

---

## How to Add to Cloudflare Pages

1. **Go to**: https://dash.cloudflare.com
2. **Navigate to**: Your Pages Project → **Settings** → **Environment variables**
3. **Find**: **Variables and Secrets** section
4. **For each variable**:
   - Click **"Add variable"** or **"+ Add variable"**
   - Enter the variable name (exactly as shown above)
   - Enter the value
   - Choose type (Secret for Web3Forms, your choice for GA/GTM)
   - Click **Save**
5. **Deploy**: Trigger a new deployment or wait for auto-deploy

---

## Current Values in env.template

Your `env.template` file contains these values for reference:

```bash
NEXT_PUBLIC_GA_ID=G-YHS2Y7L3C9
NEXT_PUBLIC_GTM_ID=GTM-WL8K8XK
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

**Note**: These are just templates. The actual values need to be in:
- `.env.local` (for local development - gitignored)
- Cloudflare Pages Environment Variables (for production)

---

## Verification

After adding all variables and deploying:

1. ✅ **Contact Form**: Submit a test form and check sk@zerobarriers.io inbox
2. ✅ **Google Analytics**: Check GA dashboard for page views
3. ✅ **Google Tag Manager**: Check GTM dashboard for container loading

---

## Security Best Practice

✅ **Never commit actual keys/IDs to git**  
✅ **Only store in**:
- `.env.local` file (gitignored - for local development)
- Cloudflare Pages Environment Variables (for production)

---

**All three variables should be added to Cloudflare Pages for full functionality!**
