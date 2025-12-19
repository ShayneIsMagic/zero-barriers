# Add Web3Forms Key to Cloudflare Pages (Live Site)

## 🎯 Goal
Add the Web3Forms access key to Cloudflare Pages so the contact form works on the live site (https://zerobarriers.io).

---

## Step 1: Get Your Access Keys

### Web3Forms Access Key
1. Go to: **https://web3forms.com**
2. Enter your email: **sk@zerobarriers.io**
3. Click **"Get Your Access Key"** or **"Create your Form"**
4. Check your **Outlook inbox** (sk@zerobarriers.io) for an email from Web3Forms
5. Copy the access key from the email (it looks like: `abc123-def456-ghi789-xyz012`)

### Google Analytics IDs (Already Available)
- **GA ID**: `G-YHS2Y7L3C9` (from env.template)
- **GTM ID**: `GTM-WL8K8XK` (from env.template)

---

## Step 2: Add All Variables to Cloudflare Pages

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com
2. **Navigate to**: Your Pages Project → **Settings** → **Environment variables**
3. **Find**: **Variables and Secrets** section

### Add Variable 1: Web3Forms Access Key
4. **Click**: **"Add variable"** or **"+ Add variable"** button
5. **Fill in**:
   - **Variable name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
     - ⚠️ Must be exactly this (case-sensitive)
   - **Value**: [Paste your Web3Forms access key from email]
   - **Type**: Select **"Secret"** (recommended for security)
6. **Click**: **Save**

### Add Variable 2: Google Analytics ID
7. **Click**: **"Add variable"** again
8. **Fill in**:
   - **Variable name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-YHS2Y7L3C9`
   - **Type**: **Plain text** or **Secret** (your choice)
9. **Click**: **Save**

### Add Variable 3: Google Tag Manager ID
10. **Click**: **"Add variable"** again
11. **Fill in**:
    - **Variable name**: `NEXT_PUBLIC_GTM_ID`
    - **Value**: `GTM-WL8K8XK`
    - **Type**: **Plain text** or **Secret** (your choice)
12. **Click**: **Save**

---

---

## Step 3: Deploy

After saving the environment variable:

**Option A: Automatic**
- Cloudflare will automatically use the new variable on the next deployment
- Make a new commit and push, or trigger a manual deployment

**Option B: Manual Retry**
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **three dots menu** (⋮)
4. Click **"Retry deployment"**

---

## Step 4: Verify It Works

1. Go to: https://zerobarriers.io/contact
2. Fill out the contact form
3. Click Submit
4. You should see: "Thank you! Your message has been sent successfully."
5. **Check your Outlook inbox** (sk@zerobarriers.io)
6. You should receive an email with the form submission!

---

## Configuration Status (Already Done ✅)

### Contact Form
- ✅ Uses: `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- ✅ Sends to: sk@zerobarriers.io
- ✅ Subject: "New Contact Form Submission from Zero Barriers"
- ✅ Security: Honeypot + rate limiting enabled

### Google Analytics
- ✅ Uses: `process.env.NEXT_PUBLIC_GA_ID` (G-YHS2Y7L3C9)
- ✅ Configured in: `src/app/layout.tsx` and `src/components/Analytics.tsx`

### Google Tag Manager
- ✅ Uses: `process.env.NEXT_PUBLIC_GTM_ID` (GTM-WL8K8XK)
- ✅ Configured in: `src/components/GTM.tsx`

**Everything is ready** - you just need to add all three environment variables in Cloudflare!

---

## Troubleshooting

### Form shows "error sending message"
- Check that the variable name is exactly: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Verify the access key is correct (no extra spaces)
- Check browser console for specific error messages
- Ensure the deployment completed successfully

### "Web3Forms access key is not configured"
- The environment variable is not set in Cloudflare
- Double-check it's added in the correct project
- Make sure the variable name matches exactly
- Retry the deployment after adding the variable

### Form submits but no email received
- Check spam/junk folder in Outlook
- Verify the email address in Web3Forms matches sk@zerobarriers.io
- Check Web3Forms dashboard (if you have an account) for submission logs

---

## Security Note

✅ **Never commit access keys to git**  
✅ **Only store in**:
- Cloudflare Pages Environment Variables (for live site)
- `.env.local` file (for local development - this file is gitignored)

---

## Quick Checklist

- [ ] Get access key from https://web3forms.com (using sk@zerobarriers.io)
- [ ] Add to Cloudflare Pages → Settings → Environment Variables
- [ ] Variable name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- [ ] Type: Secret
- [ ] Save
- [ ] Trigger deployment (or wait for auto-deploy)
- [ ] Test form submission
- [ ] Verify email received in Outlook inbox

---

**Once completed, your contact form will work on the live site!** ✅
