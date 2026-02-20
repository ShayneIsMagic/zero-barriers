# What Are Transform Rules?

## Quick Answer

**Transform Rules** are for **rewriting URLs and paths** - they're NOT related to your 403 error or security blocking.

**You don't need to configure this** to fix your 403 error.

---

## What Transform Rules Do

Transform Rules let you:
- **Rewrite URL paths** (e.g., `/old-page` → `/new-page`)
- **Modify query strings** (e.g., `?old=value` → `?new=value`)
- **Change HTTP headers**
- **Redirect or transform requests** before they reach your site

**Example use cases:**
- Moving content to new URLs
- Serving different content by country
- Aligning URLs with object storage structure
- URL cleanup/standardization

---

## Is This Related to Your 403 Error?

**NO - This is completely separate.**

Your 403 error is from:
- ✅ **Managed Rules blocking** (security issue)
- ✅ **Need to create Allow rule** (Security → WAF → Custom Rules)

Transform Rules are for:
- ❌ URL rewriting
- ❌ Path modifications
- ❌ Not security-related

---

## What You Should Focus On

**For your 403 error, you need:**

1. **Security → WAF → Custom Rules**
   - Create rule: Allow zerobarriers.io
   - Action: Skip
   - Skip: All managed rules

2. **Workers & Pages → zero-barriers → Custom domains**
   - Add zerobarriers.io (to fix Error 1000)

**NOT Transform Rules** - that's for URL rewriting, not security.

---

## When Would You Use Transform Rules?

You'd use Transform Rules if you needed to:
- Redirect `/old-url` to `/new-url`
- Serve different content based on country
- Rewrite paths for object storage
- Modify query strings

**But you don't need this for your current issues.**

---

## Summary

- ✅ **Transform Rules = URL rewriting** (not security)
- ❌ **Not related to 403 error**
- ❌ **Don't need to configure this**
- ✅ **Focus on:** Security → WAF → Custom Rules (for 403 fix)

---

**You can ignore Transform Rules - they won't help with your 403 error. Focus on the Security → WAF → Custom Rules we discussed earlier.**
