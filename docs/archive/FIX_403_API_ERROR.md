# Fix 403 Error on /api/contact Endpoint

## Problem

The Cloudflare Pages Function at `/api/contact` is returning **403 Forbidden**. This prevents the contact form from working.

## Possible Causes

1. **Cloudflare Bot Protection** - Blocking the request before it reaches the function
2. **Cloudflare WAF Rules** - Web Application Firewall blocking the endpoint
3. **Function Not Deployed** - Function might not be properly deployed
4. **Route Configuration** - Function route not recognized

## Solutions

### Solution 1: Check Function Deployment (First Check)

1. Go to: **Cloudflare Dashboard → Pages → zero-barriers → Functions**
2. Check if `api/contact` function is listed
3. Check deployment logs for any function deployment errors
4. Verify the function file is in the repository: `functions/api/contact.ts`

### Solution 2: Disable Bot Protection for API Routes

1. Go to: **Cloudflare Dashboard → zerobarriers.io → Security → Bots**
2. Look for **"API Shield"** or **"Bot Fight Mode"**
3. Create a rule to **allow** requests to `/api/*` paths
4. Or temporarily disable bot protection to test

### Solution 3: Check Cloudflare WAF Rules

1. Go to: **Cloudflare Dashboard → zerobarriers.io → Security → WAF**
2. Check if any custom rules are blocking `/api/*` paths
3. Create an exception rule for `/api/contact`

### Solution 4: Verify Function Code

The function should be at: `functions/api/contact.ts`

It should export:
```typescript
export async function onRequestPost(context: { request: Request; env: Env })
```

### Solution 5: Test Function Directly

Try accessing the function with a test request:
```bash
curl -X POST https://zerobarriers.io/api/contact \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Test","last_name":"User","email":"test@example.com","message":"Test"}'
```

---

## Immediate Workaround

Until the 403 is fixed, the form will fall back to Web3Forms (if configured). However, to fix the primary method:

1. **Check Cloudflare Dashboard** - Functions section
2. **Check Security Settings** - Bot protection/WAF
3. **Redeploy** - May need to trigger a new deployment

---

## Most Likely Fix

The 403 is likely caused by **Cloudflare Bot Protection** blocking POST requests to `/api/*`. 

**Recommended action:**
1. Go to Cloudflare Dashboard
2. Security → Bots
3. Add exception for `/api/contact` endpoint
4. Or adjust bot protection sensitivity

---

## Alternative: Use Cloudflare Workers Instead

If Pages Functions continue to have issues, we could migrate to Cloudflare Workers, which have more explicit routing and less aggressive bot protection by default.
