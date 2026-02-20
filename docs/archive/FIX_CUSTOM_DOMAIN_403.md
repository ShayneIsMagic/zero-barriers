# Fix: Custom Domain 403 Error

## Good News!

✅ **Your site works:** `https://zero-barriers.pages.dev/`  
✅ **Your deployment is fine**  
❌ **Managed Rules are blocking:** `zerobarriers.io`

---

## The Fix: Create Allow Rule

Since your Pages.dev URL works, the issue is just Managed Rules blocking your custom domain.

### Step 1: Re-enable Cloudflare (If Paused)

1. Go to: **Overview** page
2. Click: **"Resume Cloudflare"** or **"Unpause Cloudflare"**

---

### Step 2: Create Allow Rule for Your Domain

1. Go to: **Security → WAF → Custom Rules**
2. Click: **"Create rule"**
3. **Rule name:** `Allow zerobarriers.io`
4. **When incoming requests match:**
   - **Field:** `Hostname`
   - **Operator:** `equals`
   - **Value:** `zerobarriers.io`
5. **Then:** **Allow**
6. **Place at:** **First** (takes priority over Managed Rules)
7. Click: **Deploy**

---

### Step 3: Test

1. Wait 1-2 minutes
2. Go to: `https://zerobarriers.io/`
3. Should work now!

---

## About Nameservers

**You DO need nameservers set in GoDaddy** - that's how DNS works:

- **GoDaddy (registrar)** → Tells internet where DNS is
- **Cloudflare (DNS provider)** → Has your DNS records
- **Nameservers in GoDaddy** → Point to Cloudflare

**But for now, focus on fixing the Managed Rules blocking** - that's the immediate issue.

---

## Quick Action

1. **Re-enable Cloudflare** (if paused)
2. **Create Allow rule** (Security → WAF → Custom Rules)
3. **Test zerobarriers.io**

**That's it! Your site works on Pages.dev, so once Managed Rules stop blocking, zerobarriers.io will work too.**

---

**DO THIS: Security → WAF → Custom Rules → Create rule → Allow zerobarriers.io → Deploy**
