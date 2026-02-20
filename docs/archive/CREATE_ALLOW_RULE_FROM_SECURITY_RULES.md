# Create Allow Rule - From Security Rules Page

## What You're Looking At

You're on the **Security Rules** page. I can see:
- **Custom rules:** 0/5 used - No Custom rules created
- **Rate limiting rules:** 0/1 used
- **Managed rules:** 0 active (but they're still blocking - this might be a display issue)

---

## Step-by-Step: Create Allow Rule

### Step 1: Create Custom Rule

1. **Look for:** `Custom rules` section
2. **Click:** `Create rule` button (should be visible in that section)

---

### Step 2: Configure the Rule

When the rule creation form opens:

1. **Rule name:**
   - Type: `Allow zerobarriers.io`

2. **"If incoming requests match..." or "When requests match...":**
   - Look for condition builder
   - **Field:** Select `Hostname` (or `Request header` → `Host`)
   - **Operator:** Select `equals` (or `is`)
   - **Value:** Type `zerobarriers.io`

3. **"Then..." or "Action":**
   - Look for action dropdown
   - Select: `Allow` (not Block, not Challenge, not Log)
   - This allows the request to proceed

4. **"Place at" or "Order" (if available):**
   - Select: `First` or `1`
   - This ensures it runs before other rules

---

### Step 3: Deploy/Save

1. **Review:**
   - Rule name: `Allow zerobarriers.io`
   - Condition: Hostname equals `zerobarriers.io`
   - Action: `Allow`

2. **Click:** `Deploy` or `Save` or `Create rule`

3. **Wait for confirmation** that rule was created

---

### Step 4: Verify

1. **Check Custom rules section:**
   - Should now show: `1/5 used`
   - Your rule `Allow zerobarriers.io` should appear
   - Status should be: `Active` or `Enabled`

---

### Step 5: Test

1. **Wait 1-2 minutes** for changes to propagate
2. **Open new browser tab** (or incognito)
3. **Go to:** `https://zerobarriers.io/`
4. **Should work now!** ✅

---

## If You Don't See "Create rule" Button

### Alternative Navigation:

1. **Try:** `Go to web application exploits settings` (link in the page)
2. **OR:** Go to: **Security → WAF → Custom Rules** (left sidebar)
3. **OR:** Look for tabs at the top of the Security Rules page

---

## What the Rule Should Look Like

```
Custom rules: 1/5 used

┌─────────────────────────────────────┐
│ Allow zerobarriers.io              │
│ Status: Active                      │
│ If: Hostname equals zerobarriers.io │
│ Then: Allow                         │
└─────────────────────────────────────┘
```

---

## Troubleshooting

### "I don't see Create rule button"
- Look in the **Custom rules** section specifically
- Try clicking: `Go to web application exploits settings`
- OR navigate: **Security → WAF → Custom Rules**

### "I don't see Hostname field"
- Look for: `Request header` → then select `Host`
- OR use: `Custom expression` and type: `(http.host eq "zerobarriers.io")`

### "Rule created but still 403"
- Wait 2-3 minutes (propagation time)
- Clear browser cache
- Try incognito/private window
- Verify rule shows as "Active"

---

## Summary

1. **Click:** `Create rule` in Custom rules section
2. **Name:** `Allow zerobarriers.io`
3. **Match:** Hostname equals `zerobarriers.io`
4. **Action:** `Allow`
5. **Deploy/Save**
6. **Wait 1-2 minutes**
7. **Test site**

**This should fix your 403 error!**
