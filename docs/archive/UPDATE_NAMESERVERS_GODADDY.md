# Update Nameservers at GoDaddy to Match Cloudflare

## What Cloudflare Shows

Cloudflare wants you to use these nameservers:
- `haley.ns.cloudflare.com`
- `peyton.ns.cloudflare.com`

And remove these old ones:
- `kiki.ns.cloudflare.com`
- `yoxall.ns.cloudflare.com`

---

## Steps to Update in GoDaddy

### 1. Go to GoDaddy Domain Settings

1. Go to: https://dcc.godaddy.com
2. Find your domain: **zerobarriers.io**
3. Click on it to open domain settings

### 2. Find Nameservers Section

Look for **"Nameservers"** or **"DNS"** section. It might be:
- A tab at the top
- A section in the domain settings page
- Under "Additional Settings" or "Manage DNS"

### 3. Update Nameservers

1. Click **"Change"** or **"Manage"** next to Nameservers
2. Select **"Custom"** or **"I'll use my own nameservers"**
3. Delete the old nameservers:
   - Remove: `kiki.ns.cloudflare.com`
   - Remove: `yoxall.ns.cloudflare.com`
4. Add the new Cloudflare nameservers:
   - Add: `haley.ns.cloudflare.com`
   - Add: `peyton.ns.cloudflare.com`
5. Click **"Save"** or **"Update"**

### 4. Wait for Propagation

- Wait 5-30 minutes for changes to propagate
- Cloudflare will detect the change automatically
- Your domain should then fully sync with Cloudflare DNS

---

## After Nameservers Are Updated

Once nameservers are updated:

1. **Go to Cloudflare Dashboard**
2. Click **"Websites"** in left sidebar
3. Click on **zerobarriers.io**
4. Click **"DNS"** tab
5. You'll now see all DNS records managed in Cloudflare
6. **Add the Resend DNS records here**

---

## Quick Visual Guide

In GoDaddy, it should look something like this:

```
Nameservers
├─ [Change] or [Manage]
   ├─ Custom nameservers
   │  ├─ Nameserver 1: [haley.ns.cloudflare.com]
   │  └─ Nameserver 2: [peyton.ns.cloudflare.com]
   └─ [Save]
```

---

## If You Can't Find Nameservers in GoDaddy

Sometimes it's under:
- **"DNS"** → **"Nameservers"**
- **"Advanced DNS"** → **"Nameservers"**
- **Domain Settings** → Scroll down to **"Nameservers"**
- **"Manage"** button → Look for Nameservers tab

---

**Once you update the nameservers and they propagate, the domain will be fully managed in Cloudflare DNS, and you can add the Resend DNS records there!**
