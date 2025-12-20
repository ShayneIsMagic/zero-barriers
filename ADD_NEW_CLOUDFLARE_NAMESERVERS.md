# Add NEW Cloudflare Nameservers to GoDaddy

## What You Need to Do

You removed the old nameservers. Now add the **NEW** Cloudflare nameservers that Cloudflare assigned.

---

## Steps to Add New Nameservers in GoDaddy

### 1. Go to GoDaddy Domain DNS Settings

1. Go to: https://dcc.godaddy.com
2. Find domain: **zerobarriers.io**
3. Click on it
4. Go to **"DNS"** or **"Nameservers"** section

### 2. Add the NEW Cloudflare Nameservers

1. Click **"Change"** or **"Add"** or **"Set Custom Nameservers"**
2. Select **"Custom"** or **"I'll use my own nameservers"**
3. Add these TWO nameservers:

   **Nameserver 1:**
   ```
   haley.ns.cloudflare.com
   ```

   **Nameserver 2:**
   ```
   peyton.ns.cloudflare.com
   ```

4. Click **"Save"** or **"Update"**

### 3. Wait for Propagation

- Wait 5-30 minutes
- Cloudflare will automatically detect the new nameservers
- Domain should sync fully with Cloudflare DNS

---

## What This Does

- ✅ Updates from old Cloudflare nameservers (kiki, yoxall) to new ones (haley, peyton)
- ✅ Keeps DNS management in Cloudflare
- ✅ Allows Cloudflare to fully manage your domain DNS

---

## After Nameservers Are Added

Once the new nameservers are set:

1. **Cloudflare will show domain as active**
2. **Go to Cloudflare Dashboard** → Websites → zerobarriers.io
3. **Click "DNS" tab** - you'll see all DNS records
4. **Add Resend DNS records there** (DKIM, SPF, DMARC)

---

## Important

Make sure you add BOTH nameservers:
- `haley.ns.cloudflare.com`
- `peyton.ns.cloudflare.com`

Both are required for DNS to work properly.
