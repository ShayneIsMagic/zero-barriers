# Verify Nameservers Are Updated

## Check if Nameservers Are Correct

### Quick Check Tool

1. Go to: https://lookup.icann.org/
2. Enter: `zerobarriers.io`
3. Click "Lookup"
4. Look at the **"Nameservers"** section

**What you should see:**
- ✅ `haley.ns.cloudflare.com`
- ✅ `peyton.ns.cloudflare.com`

**What you might still see (old):**
- ❌ `kiki.ns.cloudflare.com`
- ❌ `yoxall.ns.cloudflare.com`
- ❌ GoDaddy nameservers

---

## After Nameservers Are Updated

Once nameservers show the correct ones (haley and peyton):

1. **Wait 5-10 minutes** for Cloudflare to detect the change
2. **Go to Cloudflare Dashboard** → Websites → zerobarriers.io
3. **Check the Overview page** - it should show domain as "Active" or "Active" status
4. **Click "DNS" tab** - you should now see DNS records section
5. **Add Resend DNS records** (DKIM, SPF, DMARC) in the DNS tab

---

## If Nameservers Are Correct

If the lookup shows `haley.ns.cloudflare.com` and `peyton.ns.cloudflare.com`:
- ✅ Nameservers are updated correctly!
- ⏳ Wait a few minutes for Cloudflare to sync
- 📋 Then add Resend DNS records in Cloudflare DNS tab

---

## If Nameservers Are NOT Updated Yet

If you still see old nameservers:
- Changes might still be propagating (can take 5-30 minutes)
- Or the update didn't complete - try updating again at GoDaddy

---

**Check the lookup tool and let me know what nameservers it shows!**
