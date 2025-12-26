# Use "Skip" Action Instead of "Allow"

## The Issue

You don't see "Allow" as an option. That's okay - **"Skip"** is what you need!

---

## What "Skip" Means

**"Skip"** = Skip this rule and allow the request to proceed
- It's the equivalent of "Allow" in Cloudflare's interface
- The request passes through without being blocked
- This is what you want!

---

## Create the Rule

### Step 1: Rule Name
- Type: `Allow zerobarriers.io`

### Step 2: Match Condition
- **Field:** `Hostname` (or `Request header` → `Host`)
- **Operator:** `equals`
- **Value:** `zerobarriers.io`

### Step 3: Action
- **Select:** `Skip` ✅
- **NOT:** Block, Challenge, JS Challenge, or Interactive Challenge
- **Skip** = Allow the request through

### Step 4: Deploy
- Click **Deploy** or **Save**
- Wait 1-2 minutes
- Test your site

---

## What Each Action Does

- **Skip** ✅ = Allow request to proceed (use this!)
- **Block** ❌ = Block the request (403 error)
- **Managed Challenge** = Show Cloudflare challenge page
- **JS Challenge** = JavaScript challenge
- **Interactive Challenge** = CAPTCHA-like challenge

**You want "Skip"** - that's your "Allow" option.

---

## Complete Rule Configuration

```
Rule name: Allow zerobarriers.io

If incoming requests match:
  Field: Hostname
  Operator: equals
  Value: zerobarriers.io

Then:
  Action: Skip ✅

Place at: First (if available)
```

---

## After Creating

1. **Deploy/Save** the rule
2. **Wait 1-2 minutes**
3. **Test:** `https://zerobarriers.io/`
4. **Should work now!** ✅

---

**Use "Skip" as your action - that's the equivalent of "Allow" and will let your domain through!**
