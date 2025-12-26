# DNS and Site Testing Guide

## Commands to Run

Run these commands to check your DNS and site status:

---

## Command 1: Check DNS with nslookup

```bash
nslookup zerobarriers.io
```

### What to Look For:

**✅ CORRECT (Cloudflare Pages):**
```
Name: zerobarriers.io
Addresses: [Cloudflare IP addresses]
Aliases: zerobarriers.io -> zero-barriers.pages.dev
```

**OR should show:**
```
Canonical name = zero-barriers.pages.dev
```

**❌ WRONG (Error 1000):**
```
Address: 192.0.2.1 (or other Cloudflare IP directly)
```
If you see a direct Cloudflare IP, that's causing Error 1000.

---

## Command 2: Check DNS with dig

```bash
dig zerobarriers.io
```

### What to Look For:

**✅ CORRECT:**
```
;; ANSWER SECTION:
zerobarriers.io.    IN    CNAME    zero-barriers.pages.dev.
```

**OR:**
```
zerobarriers.io.    IN    A    [IP addresses]
```
(If A records, they should be Cloudflare Pages IPs, not direct Cloudflare IPs)

**❌ WRONG:**
- Shows A record pointing to `192.0.2.1` or similar Cloudflare IP
- This causes Error 1000

---

## Command 3: Test Pages.dev URL

```bash
curl -I https://zero-barriers.pages.dev
```

### What to Look For:

**✅ WORKING:**
```
HTTP/2 200
content-type: text/html
server: cloudflare
```

**❌ NOT WORKING:**
```
HTTP/2 403
HTTP/2 500
HTTP/2 404
```

---

## What the Results Tell You

### If nslookup/dig shows CNAME to pages.dev:
- ✅ DNS is configured correctly for Cloudflare Pages
- ✅ Should work once you fix the 403 error

### If nslookup/dig shows A record to Cloudflare IP:
- ❌ This is causing Error 1000
- ❌ Need to remove manual DNS record
- ❌ Need to add custom domain in Cloudflare Pages

### If curl shows 200:
- ✅ Your site is deployed and working
- ✅ Just need to fix DNS/403 issues

### If curl shows 403:
- ❌ Managed Rules are blocking
- ❌ Need to create Allow rule

---

## Expected Results

### After Fixes:

**nslookup:**
```
zerobarriers.io -> zero-barriers.pages.dev
```

**dig:**
```
CNAME zero-barriers.pages.dev
```

**curl:**
```
HTTP/2 200
```

---

## If Results Show Problems

### DNS Points to Wrong IP (Error 1000):
1. **Remove manual DNS record** (DNS → Records)
2. **Add custom domain in Pages** (Workers & Pages → Custom domains)

### Site Returns 403:
1. **Create Allow rule** (Security → WAF → Custom Rules)
2. **Skip Managed Rules** for zerobarriers.io

---

**Run these commands and share the results - I'll help you interpret them and fix any issues!**
