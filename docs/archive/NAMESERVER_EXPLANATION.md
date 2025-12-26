# Why Nameservers Must Be Updated at Registrar

## The Simple Answer

**Nameservers are set at your domain REGISTRAR** (where you bought/registered the domain), not in DNS settings.

- **GoDaddy** = Your registrar (where you bought zerobarriers.io)
- **Cloudflare** = Your DNS provider (manages DNS records)

The nameservers at GoDaddy tell the internet: "For zerobarriers.io, look at Cloudflare's DNS servers (haley and peyton)"

---

## Can Cloudflare Update Them Automatically?

**If GoDaddy is your registrar:**
- ❌ Cloudflare cannot directly change nameservers at GoDaddy
- ✅ You must update them in GoDaddy's interface
- ✅ Cloudflare just tells you what to set

**If Cloudflare is your registrar:**
- ✅ You can update nameservers directly in Cloudflare
- ✅ But you'd see a "Registrar" section in Cloudflare

---

## Quick Check: Who Is Your Registrar?

Check where you bought/registered the domain:
- If bought at **GoDaddy** → Update nameservers at GoDaddy
- If bought at **Cloudflare** → Update nameservers at Cloudflare
- If bought elsewhere → Update nameservers there

---

## What Cloudflare Is Showing You

Cloudflare is saying:
- "Your domain is pointing to old nameservers (kiki, yoxall)"
- "Please update to new nameservers (haley, peyton)"
- "Update them at your registrar (GoDaddy in your case)"

---

## Bottom Line

Since your domain is registered at GoDaddy, you need to update the nameservers in GoDaddy's interface. Cloudflare can't do it for you because GoDaddy controls the domain registration.

**It's a quick update in GoDaddy** - just replace the old Cloudflare nameservers with the new ones.
