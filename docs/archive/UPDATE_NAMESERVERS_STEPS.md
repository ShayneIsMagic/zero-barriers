# Step-by-Step: Update Nameservers at GoDaddy

## Current Nameservers (DELETE THESE)
- `kiki.ns.cloudflare.com`
- `yoxall.ns.cloudflare.com`

## New Nameservers (ADD THESE)
- `haley.ns.cloudflare.com`
- `peyton.ns.cloudflare.com`

---

## Step-by-Step Instructions

### Step 1: Log into GoDaddy

1. Go to: https://dcc.godaddy.com
2. Sign in with your GoDaddy account credentials
3. You should see your domain list

### Step 2: Find Your Domain

1. In the domain list, find and click on: **zerobarriers.io**
2. This opens the domain management page

### Step 3: Navigate to Nameservers

Look for one of these options (GoDaddy interface may vary):

**Option A: Direct Nameservers Section**
- Look for **"Nameservers"** or **"DNS"** section
- Click **"Change"** or **"Manage"** next to Nameservers

**Option B: DNS Settings**
- Click **"DNS"** tab at the top
- Scroll down to **"Nameservers"** section
- Click **"Change"** or **"Manage"**

**Option C: Domain Settings**
- Click **"Settings"** or **"Manage"**
- Look for **"Nameservers"** in the settings list
- Click to edit

### Step 4: Change Nameserver Type

1. You'll see nameserver options:
   - **"GoDaddy Nameservers"** (default)
   - **"Custom Nameservers"** or **"I'll use my own nameservers"**
2. Select **"Custom"** or **"I'll use my own nameservers"**

### Step 5: Delete Old Nameservers

1. You should see input fields for nameservers (usually 2-4 fields)
2. **Delete/Remove** these old nameservers:
   - `kiki.ns.cloudflare.com`
   - `yoxall.ns.cloudflare.com`
3. Clear the fields completely

### Step 6: Add New Nameservers

1. In the first nameserver field, enter:
   ```
   haley.ns.cloudflare.com
   ```

2. In the second nameserver field, enter:
   ```
   peyton.ns.cloudflare.com
   ```

3. **Important**: Make sure you enter them exactly as shown (no extra spaces, correct spelling)

### Step 7: Save Changes

1. Click **"Save"** or **"Update"** button
2. GoDaddy may ask you to confirm - click **"Confirm"** or **"Yes"**
3. Wait for the confirmation message

### Step 8: Wait for Propagation

- Changes typically take **5-30 minutes** to propagate
- Can take up to 24 hours in rare cases
- Cloudflare will automatically detect the change

---

## Visual Guide

The GoDaddy interface should look something like this:

```
Nameservers
┌─────────────────────────────────────┐
│ [ ] GoDaddy Nameservers (default)   │
│ [✓] Custom Nameservers              │ ← Select this
├─────────────────────────────────────┤
│ Nameserver 1: [haley.ns.cloudflare.com] │ ← Enter here
│ Nameserver 2: [peyton.ns.cloudflare.com]│ ← Enter here
│ Nameserver 3: [                    ]    │ ← Leave empty
│ Nameserver 4: [                    ]    │ ← Leave empty
├─────────────────────────────────────┤
│ [Save] [Cancel]                     │
└─────────────────────────────────────┘
```

---

## Important Notes

✅ **Enter exactly as shown** (case-sensitive, no extra spaces)  
✅ **Both nameservers are required** (haley and peyton)  
✅ **Save after entering both**  
✅ **Wait 5-30 minutes** for changes to take effect  

---

## Verify Changes

After saving, you can verify:

1. **Wait 10-15 minutes**
2. Go to: https://lookup.icann.org/
3. Enter: `zerobarriers.io`
4. Check "Nameservers" section
5. Should show:
   - `haley.ns.cloudflare.com`
   - `peyton.ns.cloudflare.com`

---

## Troubleshooting

### "Can't find Nameservers section"
- Try looking under **"DNS"** tab
- Or **"Domain Settings"** → **"Nameservers"**
- Or contact GoDaddy support

### "Nameservers won't save"
- Make sure you selected **"Custom"** option first
- Check for typos in the nameserver addresses
- Try refreshing the page and trying again

### "Changes not showing after 30 minutes"
- DNS propagation can take up to 24 hours
- Check again in a few hours
- Verify you saved the changes correctly

---

**Once nameservers are updated, Cloudflare will automatically detect the change and your domain will be fully managed in Cloudflare DNS!**
