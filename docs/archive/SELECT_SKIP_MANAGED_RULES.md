# Select "All managed rules" to Skip

## What You're Looking At

After selecting "Skip" as the action, Cloudflare is asking **which WAF components to skip** (bypass).

---

## The Answer

**Select: "All managed rules"** ✅

This will skip/bypass Managed Rules for requests to `zerobarriers.io`, which is exactly what you need!

---

## What Each Option Does

- **All managed rules** ✅ = Skip Managed Rules (this is what's blocking you!)
- **All remaining custom rules** = Skip other custom rules
- **All rate limiting rules** = Skip rate limiting
- **All Super Bot Fight Mode Rules** = Skip bot fight mode rules

**You want "All managed rules"** because that's what's causing your 403 errors.

---

## Complete Rule Configuration

```
Rule name: Allow zerobarriers.io

If incoming requests match:
  Field: Hostname
  Operator: equals
  Value: zerobarriers.io

Then:
  Action: Skip
  WAF components to skip: All managed rules ✅

Place at: First (if available)
```

---

## What This Does

When someone visits `zerobarriers.io`:
1. ✅ Your rule matches (hostname = zerobarriers.io)
2. ✅ Action = Skip
3. ✅ Skip = "All managed rules"
4. ✅ Managed Rules are bypassed for your domain
5. ✅ Request proceeds to your site (no 403!)

---

## After Selecting

1. **Select:** "All managed rules" (check the box)
2. **Deploy/Save** the rule
3. **Wait 1-2 minutes**
4. **Test:** `https://zerobarriers.io/`
5. **Should work now!** ✅

---

**Select "All managed rules" - that's what's blocking you, so skipping it will fix the 403 error!**
