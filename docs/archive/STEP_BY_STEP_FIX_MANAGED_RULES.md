# Step-by-Step: Fix Managed Rules Blocking zerobarriers.io

## Overview

Managed Rules are blocking your custom domain. We'll create an Allow rule that takes priority and lets your domain through.

---

## Step 1: Navigate to Custom Rules

1. **Go to Cloudflare Dashboard:** https://dash.cloudflare.com
2. **Click on:** `zerobarriers.io` (your domain)
3. **Click:** `Security` (left sidebar)
4. **Click:** `WAF` (Web Application Firewall)
5. **Click:** `Custom Rules` tab (at the top)

You should see a page with "Create rule" button.

---

## Step 2: Create the Allow Rule

1. **Click the blue button:** `Create rule` (or `+ Add rule`)

2. **Rule name (required):**
   - Type: `Allow zerobarriers.io`
   - This is just a label for your reference

3. **"If incoming requests match..." section:**
   - You'll see options for matching conditions
   - Look for: `Custom filter expression` or `Add condition`

4. **Add the condition:**
   - **Option A (if you see "Add condition"):**
     - Click `Add condition`
     - **Field:** Select `Hostname` from dropdown
     - **Operator:** Select `equals` from dropdown
     - **Value:** Type `zerobarriers.io`
   
   - **Option B (if you see "Custom filter expression"):**
     - Click on it
     - Type: `(http.host eq "zerobarriers.io")`
     - OR use the visual builder if available

5. **"Then the action is..." section:**
   - Look for action dropdown/selector
   - Select: `Allow` (not Block, not Challenge, not Log)
   - This allows the request to proceed

6. **"Place at" or "Order" section:**
   - If you see this option, select: `First` or `1`
   - This ensures your rule runs before Managed Rules
   - If you don't see this, that's okay - rules usually run in order created

---

## Step 3: Deploy the Rule

1. **Review your rule:**
   - Rule name: `Allow zerobarriers.io`
   - Condition: Hostname equals `zerobarriers.io`
   - Action: `Allow`
   - Order: `First` (if available)

2. **Click:** `Deploy` button (usually blue, at bottom right)
   - OR `Save` if that's what you see
   - OR `Create rule` if that's the final button

3. **Wait for confirmation:**
   - You should see "Rule created" or similar message
   - The rule should appear in your Custom Rules list

---

## Step 4: Verify the Rule

1. **Check the Custom Rules list:**
   - You should see your new rule: `Allow zerobarriers.io`
   - Status should be: `Active` or `Enabled`
   - Order should be: `1` or `First` (if shown)

2. **If the rule is there and Active:**
   - ✅ Rule is created correctly
   - Wait 1-2 minutes for changes to propagate

---

## Step 5: Test Your Site

1. **Wait 1-2 minutes** after deploying the rule

2. **Open a new browser tab** (or incognito/private window)

3. **Go to:** `https://zerobarriers.io/`

4. **Check:**
   - ✅ Site loads? → Success!
   - ❌ Still 403? → Wait another minute, then check Step 6

---

## Step 6: If Still Not Working

### Check Rule Order:

1. **Go back to:** Security → WAF → Custom Rules
2. **Look at your rule list**
3. **Make sure your Allow rule is at the TOP** (first in the list)
4. **If it's not first:**
   - Look for drag handles or up/down arrows
   - Move it to the top
   - OR delete and recreate it (it will be created first)

### Check Rule Details:

1. **Click on your rule** to edit it
2. **Verify:**
   - Condition matches: `zerobarriers.io`
   - Action is: `Allow` (not Block)
   - Rule is: `Enabled` or `Active`

---

## Alternative: Adjust Managed Rules Instead

If creating an Allow rule doesn't work, you can adjust Managed Rules:

### Option A: Lower Managed Rules Sensitivity

1. **Go to:** Security → WAF → Managed Rules
2. **Find:** `Cloudflare Managed Ruleset`
3. **Click on it**
4. **Look for:** `Sensitivity` or `Action` settings
5. **Change from:** `Block` → `Log` or `Challenge`
6. **Save**

### Option B: Disable Specific Managed Rule

1. **Go to:** Security → Events
2. **Find a blocked request**
3. **See which specific rule blocked it** (check "Service" or "Rule" column)
4. **Go to:** Security → WAF → Managed Rules
5. **Find that specific rule**
6. **Disable it** (toggle off)

---

## Visual Guide (What You Should See)

### Custom Rules Page:
```
Security → WAF → Custom Rules
├── [Create rule] button (blue)
└── List of rules (if any exist)
```

### Create Rule Form:
```
Rule name: [Allow zerobarriers.io]

If incoming requests match...
└── Field: [Hostname ▼]
    Operator: [equals ▼]
    Value: [zerobarriers.io]

Then the action is...
└── [Allow ▼]

Place at: [First ▼]

[Deploy] button
```

---

## Troubleshooting

### "I don't see Custom Rules tab"
- Make sure you're in: Security → WAF (not just Security)
- Look for tabs at the top: Custom Rules, Managed Rules, etc.

### "I don't see Hostname field"
- Look for: `Request header`, `URI`, or `Custom expression`
- Use Custom expression: `(http.host eq "zerobarriers.io")`

### "Rule created but still 403"
- Wait 2-3 minutes (propagation time)
- Check rule is at the top of the list
- Verify action is "Allow" not "Block"
- Try clearing browser cache

---

## Summary

1. **Security → WAF → Custom Rules**
2. **Create rule**
3. **Match:** Hostname equals `zerobarriers.io`
4. **Action:** Allow
5. **Place at:** First
6. **Deploy**
7. **Wait 1-2 minutes**
8. **Test site**

**That's it! This should fix your 403 error.**
