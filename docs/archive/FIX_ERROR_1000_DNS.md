# Fix Error 1000: DNS Points to Prohibited IP

## The Problem

**Error 1000** means a DNS record is pointing to a Cloudflare IP address instead of your origin server (Cloudflare Pages).

For Cloudflare Pages, you should **NOT** manually create DNS records - Cloudflare Pages manages this automatically.

---

## The Solution: Configure Custom Domain in Cloudflare Pages

### Step 1: Remove Manual DNS Records

1. **Go to:** Cloudflare Dashboard → **zerobarriers.io** → **DNS** → **Records**
2. **Look for:**
   - **A record** for `zerobarriers.io` pointing to a Cloudflare IP (like `192.0.2.1` or similar)
   - **CNAME record** for `zerobarriers.io` pointing to Cloudflare
   - **ANY record** for `zerobarriers.io` that you created manually
3. **Delete these records** (click the trash icon)
4. **Keep only:**
   - DNS records for subdomains (if needed)
   - DNS records for email (MX, TXT for Resend, etc.)
   - **DO NOT have A or CNAME for the root domain `zerobarriers.io`**

---

### Step 2: Add Custom Domain in Cloudflare Pages

1. **Go to:** Cloudflare Dashboard → **Workers & Pages** → **zero-barriers** (your Pages project)
2. **Click:** **Custom domains** tab (or **Settings** → **Custom domains**)
3. **Click:** **"Add custom domain"** or **"Set up a custom domain"**
4. **Enter:** `zerobarriers.io`
5. **Click:** **Add domain** or **Continue**
6. **Cloudflare Pages will automatically:**
   - Create the correct DNS records
   - Configure SSL/TLS
   - Point to your Pages deployment

---

### Step 3: Verify DNS Records

After adding the custom domain in Pages:

1. **Go to:** **DNS** → **Records**
2. **You should see:**
   - A record for `zerobarriers.io` pointing to Cloudflare Pages IPs (automatically created)
   - OR CNAME record pointing to your Pages deployment
   - **These are created by Cloudflare Pages** - don't delete them!

---

## Common Mistakes

### ❌ Wrong: Manual DNS Record
```
Type: A
Name: zerobarriers.io
Content: 192.0.2.1 (Cloudflare IP - WRONG!)
```

### ✅ Correct: Managed by Cloudflare Pages
```
Type: A (or CNAME)
Name: zerobarriers.io
Content: [Automatically set by Cloudflare Pages]
Proxy: Proxied (orange cloud)
```

---

## Step-by-Step Fix

### 1. Check Current DNS Records

1. **Go to:** Cloudflare Dashboard → **zerobarriers.io** → **DNS** → **Records**
2. **Find any A or CNAME records for `zerobarriers.io`** (root domain)
3. **Note what they point to**

### 2. Remove Manual Records (If Any)

If you see A or CNAME records for `zerobarriers.io` that you created:
1. **Delete them** (trash icon)
2. **These should be managed by Cloudflare Pages**

### 3. Add Domain in Pages

1. **Workers & Pages** → **zero-barriers** → **Custom domains**
2. **Add:** `zerobarriers.io`
3. **Cloudflare will auto-configure DNS**

### 4. Wait for Propagation

- Wait 5-30 minutes for DNS changes
- Cloudflare Pages will show domain status
- Should show "Active" when ready

---

## Why This Happened

**You likely:**
- Created a manual A or CNAME record for `zerobarriers.io`
- Pointed it to a Cloudflare IP (wrong!)
- Should have used Cloudflare Pages custom domain feature instead

**Cloudflare Pages needs to manage the DNS** for the custom domain automatically.

---

## Verification

After fixing:

1. **DNS Records:**
   - `zerobarriers.io` should be managed by Cloudflare Pages
   - Should show as "Proxied" (orange cloud)
   - Should NOT point to a Cloudflare IP directly

2. **Pages Custom Domain:**
   - Should show `zerobarriers.io` as "Active"
   - Should be connected to your deployment

3. **Test:**
   - Go to: `https://zerobarriers.io/`
   - Should work without Error 1000

---

## Summary

1. **Delete manual DNS records** for `zerobarriers.io` (if you created them)
2. **Add custom domain in Cloudflare Pages** (Workers & Pages → zero-barriers → Custom domains)
3. **Let Cloudflare Pages manage DNS** automatically
4. **Wait for propagation**
5. **Test your site**

---

**DO THIS: Go to Workers & Pages → zero-barriers → Custom domains → Add zerobarriers.io**
