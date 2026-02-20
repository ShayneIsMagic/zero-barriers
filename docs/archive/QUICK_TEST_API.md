# Quick Test - Contact API

## Test Code (Copy & Paste into Browser Console)

**Test on pages.dev (works now):**
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

**OR test on zerobarriers.io (after fixing 522):**
```javascript
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

## How to Test

1. **Open browser console** (F12 or Cmd+Option+I)
2. **Go to:** Any page on your site (or `https://zero-barriers.pages.dev`)
3. **Paste the test code above**
4. **Press Enter**
5. **Check the response** in the console

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
**Meaning:** Everything is working! ✅

---

### ❌ 400 Bad Request:
```json
{
  "success": false,
  "error": "Missing required fields"
}
```
**Meaning:** Missing required fields (first_name, last_name, email, or message)

---

### ❌ 403 Forbidden:
```
403 Forbidden
```
**Meaning:** Managed Rules blocking - need to check Allow rule

---

### ❌ 500 Internal Server Error:
```json
{
  "success": false,
  "error": "Email service not configured. Please contact the site administrator."
}
```
**Meaning:** Missing `RESEND_API_KEY` in Cloudflare Pages environment variables

---

### ❌ 522 Connection Timeout:
```
522 Connection Timeout
```
**Meaning:** Custom domain not connected to Cloudflare Pages - use pages.dev URL instead

---

## Quick Summary

**Paste this in console:**
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

**Then share the response you get!**
