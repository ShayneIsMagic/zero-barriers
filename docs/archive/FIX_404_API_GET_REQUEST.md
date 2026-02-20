# Fix 404 Error on GET /api/contact

## The Problem

**Error:** `GET https://zero-barriers.pages.dev/api/contact 404 (Not Found)`

**Cause:** The Cloudflare Pages Function only handles POST requests. When something tries to access `/api/contact` with a GET request (like browser dev tools or navigation), it gets a 404.

---

## The Fix

**Added a GET handler** that returns a helpful 405 (Method Not Allowed) error message instead of 404.

**Now the function handles:**
- ✅ **POST** - Form submissions (working)
- ✅ **GET** - Returns helpful error message (405 instead of 404)
- ✅ **OPTIONS** - CORS preflight (already working)

---

## What Changed

**File:** `functions/api/contact.ts`

**Added:**
```typescript
// Handle GET requests (helpful error message)
export async function onRequestGet() {
  return new Response(
    JSON.stringify({ 
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests. Please use the contact form to submit data.',
      allowedMethods: ['POST']
    }),
    {
      status: 405,
      headers: { 
        'Content-Type': 'application/json',
        'Allow': 'POST, OPTIONS',
        ...corsHeaders 
      },
    }
  )
}
```

---

## Next Steps

1. **Commit and push** the updated function
2. **Wait for Cloudflare Pages to redeploy**
3. **Test again** - GET requests will now return 405 (Method Not Allowed) instead of 404

---

## Testing

**After deployment, test:**

```javascript
// This should now return 405 (Method Not Allowed) instead of 404
fetch('https://zero-barriers.pages.dev/api/contact')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error)
```

**Expected response:**
```json
{
  "error": "Method not allowed",
  "message": "This endpoint only accepts POST requests. Please use the contact form to submit data.",
  "allowedMethods": ["POST"]
}
```

**POST requests still work normally:**
```javascript
fetch('https://zero-barriers.pages.dev/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    first_name: 'Test',
    last_name: 'User',
    phone: '555-1234',
    email: 'test@test.com',
    message: 'Test message'
  })
}).then(r => r.json()).then(console.log).catch(console.error)
```

---

## Summary

✅ **Fixed:** GET requests now return 405 (Method Not Allowed) instead of 404
✅ **No breaking changes:** POST requests still work exactly the same
✅ **Better UX:** Clearer error message when wrong method is used

**Commit and push to deploy the fix!**
