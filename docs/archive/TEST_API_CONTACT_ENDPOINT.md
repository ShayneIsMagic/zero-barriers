# Test API Contact Endpoint

## What This Test Does

This JavaScript code tests the `/api/contact` Cloudflare Pages Function endpoint:

```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    name: 'Test',
    email: 'test@test.com',
    message: 'Test message'
  })
}).then(r => r.text()).then(console.log).catch(console.error)
```

---

## Is This the Same Issue?

**YES - This is testing the same 403 blocking issue!**

The `/api/contact` endpoint is being blocked by Managed Rules, just like the main site.

---

## What You'll See

### If Still Blocked (403):
```json
{"success":false,"error":"..."}
```
OR
```
403 Forbidden
```

### If Working:
```json
{"success":true,"message":"Thank you! Your message has been sent successfully."}
```

---

## The Fix

**The same Allow rule will fix this too!**

The rule we created:
- **Match:** `Hostname equals zerobarriers.io`
- **Action:** `Skip`
- **Skip:** `All managed rules`

**This applies to ALL requests** to `zerobarriers.io`, including:
- ✅ Main pages (`/`, `/contact`, etc.)
- ✅ API endpoints (`/api/contact`)
- ✅ All routes

---

## Test Results

### If You Get 403:
- Managed Rules are still blocking
- Make sure the Allow rule is:
  - ✅ Created
  - ✅ Active/Enabled
  - ✅ Placed at "First" (takes priority)
  - ✅ Waiting 2-3 minutes for propagation

### If You Get Success:
- ✅ Allow rule is working!
- ✅ Managed Rules are being skipped
- ✅ Site should be working

---

## Additional Fix for API Endpoint

If the Allow rule doesn't fix the API endpoint specifically, you can also:

### Create Specific API Allow Rule:

1. **Security → WAF → Custom Rules → Create rule**
2. **Name:** `Allow API Contact Endpoint`
3. **Match:** 
   - **Field:** `URI Path`
   - **Operator:** `equals`
   - **Value:** `/api/contact`
4. **Action:** `Skip`
5. **Skip:** `All managed rules`
6. **Deploy**

**But the main Allow rule for the hostname should cover this too.**

---

## Summary

- ✅ **Same issue** - Managed Rules blocking
- ✅ **Same fix** - Allow rule for `zerobarriers.io`
- ✅ **Test this** - Will show if the fix worked

**Run the test and see what you get - if it's still 403, the Allow rule needs to be checked/updated.**
