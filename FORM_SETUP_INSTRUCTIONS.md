# Fix: Form Not Sending

## Problem
The console shows: `Web3Forms access key is not configured`

## Solution

### Step 1: Get Your Web3Forms Access Key
1. Go to https://web3forms.com
2. Enter your email: `sk@zerobarriers.io`
3. Click "Get Your Access Key"
4. Check your email for the access key (looks like: `abc123-def456-ghi789`)

### Step 2: Add Access Key to .env.local
1. Create or open `.env.local` in the root of your project (same level as `package.json`)
2. Add this line (replace with your actual key):
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
3. Save the file

### Step 3: Restart Your Dev Server
**IMPORTANT**: You must restart your development server for environment variables to load:
1. Stop your current dev server (Ctrl+C or Cmd+C)
2. Run `npm run dev` again

### Step 4: Test the Form
1. Go to the contact page
2. Fill out and submit the form
3. Check your email (sk@zerobarriers.io) for the submission

## Verify It's Working
- The console error should be gone
- Form submissions should show "Success!" message
- You should receive emails at sk@zerobarriers.io

## Example .env.local File
```
NEXT_PUBLIC_GA_ID=G-YHS2Y7L3C9
NEXT_PUBLIC_GTM_ID=GTM-WL8K8XK
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=abc123-def456-ghi789
```

**Note**: The `.env.local` file is already in `.gitignore`, so your access key won't be committed to git.
