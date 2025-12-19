# Where to Add Resend API Key

## Quick Answer

**Add the Resend API key to Cloudflare Pages Environment Variables**

---

## Step-by-Step Instructions

### Step 1: Get Your Resend API Key

1. Go to: https://resend.com
2. Sign up (if you don't have an account) - free tier available
3. Log in to your dashboard
4. Click **API Keys** in the sidebar
5. Click **Create API Key**
6. Give it a name (e.g., "Zero Barriers Contact Form")
7. **Copy the key immediately** (starts with `re_`) - you can't see it again!

### Step 2: Add to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Log in if needed

2. **Navigate to Your Pages Project**
   - Click **Pages** in the left sidebar
   - Click on your project: **zero-barriers**

3. **Go to Settings**
   - Click **Settings** tab (at the top)
   - Scroll down to **Environment Variables** section

4. **Add the Variable**
   - Under **Production** environment (or the environment you're using)
   - Click **Add variable**
   - Fill in:
     - **Variable name**: `RESEND_API_KEY`
     - **Value**: Paste your Resend API key (starts with `re_`)
     - **Type**: Select **Secret** (recommended)
   - Click **Save**

5. **Repeat for Preview (Optional)**
   - If you want it to work in preview deployments too, add the same variable under **Preview** environment

---

## Important Notes

✅ **Variable Name Must Be**: `RESEND_API_KEY` (exact spelling, case-sensitive)  
✅ **Type**: Secret (recommended) or Plain text  
✅ **Environment**: Add to Production (and Preview if needed)  
✅ **After adding**: You may need to trigger a new deployment for the function to pick up the new variable  

---

## Verify It's Set

1. After adding, you should see `RESEND_API_KEY` in your environment variables list
2. If marked as **Secret**, you'll see `••••••••` instead of the actual key (this is correct!)
3. Test the form to confirm it's working

---

## What Happens Next

Once you add the key:
- The Cloudflare Pages Function (`functions/api/contact.ts`) will be able to access it
- The function uses `context.env.RESEND_API_KEY` to get the value
- Form submissions will send emails via Resend API
- Emails will go to: sk@zerobarriers.io

---

## Troubleshooting

### Key not working?
- Make sure variable name is exactly `RESEND_API_KEY`
- Check that you copied the full key (starts with `re_`)
- Verify you added it to the correct environment (Production/Preview)
- Try triggering a new deployment after adding the variable

### Can't see the key after saving?
- If marked as **Secret**, this is normal - Cloudflare hides it for security
- You can't view secret values after saving
- If you need to update it, delete and re-add the variable
