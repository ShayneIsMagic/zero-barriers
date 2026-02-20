# Fix 403 Error - Browser Integrity Check

## You're in the Right Area, But...

You're looking at **Configuration Rules** which let you configure Browser Integrity Check for specific paths. But to fix the 403 error, you probably want to **disable it globally** first.

---

## Quick Fix: Disable Browser Integrity Check Globally

### Step 1: Go Back to Main Browser Integrity Check Settings

1. **Click "Back"** button (top left of the page you're on)
2. OR go to: **Security** → Look for **"Browser integrity check"** section again

### Step 2: Find the Global Setting

Look for Browser Integrity Check settings - it might show:
- A toggle/switch to enable/disable
- Or a link to "Manage" or "Configure"

### Step 3: Disable It (Temporarily)

1. **Turn off** Browser Integrity Check globally
2. **Save** changes
3. **Wait 2-3 minutes**
4. **Test your site**

---

## Alternative: Create a Rule to Disable It for All Requests

If you can't find a global disable option, you can create a configuration rule to disable it:

### In the Rule Creation Page You're On:

1. **Rule name:** Type `Disable Browser Integrity Check`

2. **When incoming requests match:**
   - Select **"All incoming requests"** (the radio button)
   - This applies to everything

3. **Then the settings are...**
   - Find **"Browser Integrity Check (optional)"**
   - Set it to **"Turn off"** or **"Off"**

4. **Save/Deploy** the rule

5. **Wait 2-3 minutes** and test your site

---

## What Browser Integrity Check Does

Browser Integrity Check evaluates HTTP headers from browsers. If it detects something suspicious, it blocks the request with a 403 error.

**Why it might be blocking you:**
- Overly aggressive detection
- False positives
- Can block legitimate browsers

---

## Recommended Approach

**Try this first:**

1. **Click "Back"** to go back
2. Look for Browser Integrity Check - see if there's a global **toggle/switch**
3. **Turn it off** temporarily
4. **Test your site**
5. If it works, you can re-enable it later with better configuration

**If no global toggle exists:**

1. Create the rule as described above (disable for all requests)
2. This effectively disables it globally via a rule
3. Test your site

---

## After Testing

Once your site works:

- ✅ You can **re-enable** Browser Integrity Check if you want
- ✅ Or **create a more specific rule** that only blocks known bad actors
- ✅ Or **leave it disabled** if you don't need it

---

**For now, try clicking "Back" first and see if there's a global disable option. If not, create the rule to disable it for all requests.**
