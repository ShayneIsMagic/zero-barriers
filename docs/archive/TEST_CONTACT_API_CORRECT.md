# Test Contact API - Correct Code

## Your Current Code (WRONG Field Names)

```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    name: 'Test',          // ❌ WRONG - should be first_name and last_name
    email: 'test@test.com', // ✅ Correct
    message: 'Test message' // ✅ Correct
  })
}).then(r => r.text()).then(console.log).catch(console.error)
```

**This will return:** `400 Bad Request - Missing required fields`

---

## ✅ Correct Test Code

**Use this instead:**

```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    first_name: 'Test',     // ✅ Required
    last_name: 'User',      // ✅ Required
    phone: '555-1234',      // ✅ Optional but recommended
    email: 'test@test.com', // ✅ Required
    message: 'Test message' // ✅ Required
  })
}).then(r => r.text()).then(console.log).catch(console.error)
```

---

## Expected Responses

### ✅ Success (200 OK):
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully.",
  "id": "re_abc123..."
}
```
**This means everything is working!** ✅

---

### ❌ 400 Bad Request:
```json
{
  "success": false,
  "error": "Missing required fields"
}
```
**This means:**
- You're missing `first_name`, `last_name`, `email`, or `message`
- Use the correct test code above

---

### ❌ 403 Forbidden:
```
403 Forbidden
```
**This means:**
- Managed Rules are still blocking
- Allow rule not working or not active
- Need to check/update the Allow rule

---

### ❌ 500 Internal Server Error:
```json
{
  "success": false,
  "error": "Email service not configured. Please contact the site administrator."
}
```
**This means:**
- ✅ Allow rule is working (no 403)
- ✅ Function is accessible
- ❌ `RESEND_API_KEY` not set in Cloudflare Pages environment variables

---

### ❌ 522 Connection Timeout:
```
522 Connection Timeout
```
**This means:**
- ❌ Custom domain not connected to Cloudflare Pages
- ❌ You need to add `zerobarriers.io` as a custom domain
- **Try testing on:** `https://zero-barriers.pages.dev/api/contact` instead

---

## Important: Where to Test

**Since you're getting 522 errors on `zerobarriers.io`:**

### Option 1: Test on pages.dev (Works Now)
```javascript
// Test on the pages.dev URL (this works!)
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
}).then(r => r.text()).then(console.log).catch(console.error)
```

### Option 2: Test on zerobarriers.io (After Fixing 522)
```javascript
// Test on custom domain (after adding custom domain in Pages)
fetch('https://zerobarriers.io/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    first_name: 'Test',
    last_name: 'User',
    phone: '555-1234',
    email: 'test@test.com',
    message: 'Test message'
  })
}).then(r => r.text()).then(console.log).catch(console.error)
```

---

## What Each Response Means

| Response | Meaning | Action |
|----------|---------|--------|
| **200 + success:true** | ✅ Everything working! | None - it's working! |
| **400** | ❌ Wrong field names | Use correct test code |
| **403** | ❌ Allow rule issue | Check/update Allow rule |
| **500** | ❌ Missing RESEND_API_KEY | Add environment variable |
| **522** | ❌ Custom domain not connected | Add domain in Pages settings |

---

## Quick Test Steps

1. **Use the correct test code** (with `first_name`, `last_name`, etc.)
2. **Test on `zero-barriers.pages.dev`** first (since that works)
3. **Check the response** you get
4. **Share the response** with me so I can help fix any issues

---

## Summary

**Use this correct test code:**
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
}).then(r => r.text()).then(console.log).catch(console.error)
```

**Run it and let me know what response you get!**
