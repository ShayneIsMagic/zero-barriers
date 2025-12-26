# Step-by-Step Setup Instructions

## Complete Setup Checklist

Follow these steps in order to fix the 403 error, set up GTM tags, and configure page labels.

---

## ✅ PART 1: Fix 403 Error on /api/contact (5 minutes)

### Step 1: Go to Cloudflare Dashboard
1. Open: **https://dash.cloudflare.com**
2. Click on **zerobarriers.io** domain

### Step 2: Access WAF Settings
1. Click **Security** in left sidebar
2. Click **WAF** (Web Application Firewall)

### Step 3: Create Allow Rule
1. Click **Custom Rules** tab
2. Click **Create rule** button (blue button)
3. **Rule name:** Type `Allow Contact Form API`
4. **When incoming requests match:**
   - Click **"Add condition"** or **"Edit condition"**
   - **Field:** Select `URI Path` from dropdown
   - **Operator:** Select `equals` from dropdown
   - **Value:** Type `/api/contact`
5. **Then:**
   - Click the action dropdown
   - Select **Allow**
6. Click **Deploy** button (bottom right)

### Step 4: Verify Rule
1. Rule should appear in the list with status **"Active"**
2. Wait 1-2 minutes for changes to propagate

### Step 5: Test
1. Go to: https://zerobarriers.io/contact
2. Fill out and submit the form
3. Check browser console (F12) - should NOT see 403 error
4. ✅ Success if form submits without 403 error

---

## ✅ PART 2: Set Up Google Tag Manager Tags (10 minutes)

### Step 1: Access Google Tag Manager
1. Go to: **https://tagmanager.google.com**
2. Make sure you're signed in
3. Select container: **GTM-P34N6DXL** (if not already selected)
4. You should see the workspace view

### Step 2: Create "All Pages" Trigger (If It Doesn't Exist)
1. Click **Triggers** in left sidebar
2. Check if **"All Pages"** trigger exists
3. **If it exists:** Skip to Step 3
4. **If it doesn't exist:**
   - Click **New** button
   - **Trigger Name:** Type `All Pages`
   - **Trigger Type:** Click **Trigger Configuration**
   - Select **"Page View"**
   - **This trigger fires on:** Select **All Pages**
   - Click **Save**

### Step 3: Create GA4 Configuration Tag
1. Click **Tags** in left sidebar
2. Click **New** button (blue button)
3. **Tag Name:** Type `GA4 Configuration`
4. **Tag Configuration:**
   - Click **Tag Configuration** area
   - Select **"Google Analytics: GA4 Configuration"**
   - **Measurement ID:** Type `G-YHS2Y7L3C9`
   - ✅ Check box: **"Send a page view event when this configuration loads"**
5. **Triggering:**
   - Click **Triggering** area
   - Select **"All Pages"** (the trigger you created/verified in Step 2)
6. Click **Save** button (top right)

### Step 4: Create Data Layer Variables
1. Click **Variables** in left sidebar
2. Scroll down to **"User-Defined Variables"** section
3. Click **New** button
4. **Variable Name:** Type `Event Category`
5. **Variable Configuration:**
   - Click **Variable Configuration** area
   - Select **"Data Layer Variable"**
   - **Data Layer Variable Name:** Type `event_category`
   - **Data Layer Version:** Leave as default (Version 2)
6. Click **Save**
7. **Repeat for these variables:**
   - `Event Label` → data layer variable name: `event_label`
   - `Page Path` → data layer variable name: `page_path`
   - `Page Category` → data layer variable name: `page_category`
   - `Page Label` → data layer variable name: `page_label`
   - `Destination` → data layer variable name: `destination`
   - `Location` → data layer variable name: `location`

### Step 5: Create GA4 Event Tag
1. Click **Tags** in left sidebar
2. Click **New** button
3. **Tag Name:** Type `GA4 Event - All Events`
4. **Tag Configuration:**
   - Click **Tag Configuration** area
   - Select **"Google Analytics: GA4 Event"**
   - **Configuration Tag:** Click dropdown, select **"GA4 Configuration"**
   - **Event Name:** Click **+** button, select variable **"Event"**
     - If "Event" variable doesn't exist, type `{{Event}}`
   - **Event Parameters:**
     - Click **Add Row**
     - **Parameter Name:** `event_category`
     - **Value:** Click **+**, select **"Event Category"** variable
     - Click **Add Row**
     - **Parameter Name:** `event_label`
     - **Value:** Click **+**, select **"Event Label"** variable
     - Click **Add Row**
     - **Parameter Name:** `page_category`
     - **Value:** Click **+**, select **"Page Category"** variable
5. **Triggering:**
   - Click **Triggering** area
   - Click **+** button to create new trigger
   - **Trigger Name:** Type `All Custom Events`
   - **Trigger Type:** Click **Trigger Configuration**
   - Select **"Custom Event"**
   - **Event name:** Type `.*` (this matches all events)
   - Click **Save**
   - Select **"All Custom Events"** trigger
6. Click **Save**

### Step 6: Publish Container (CRITICAL!)
1. Click **Submit** button (orange button, top right)
2. **Version Name:** Type `Initial GA4 Setup with Events`
3. **Version Description:** Type:
   ```
   Added GA4 Configuration tag and Event tag
   - GA4 Configuration: G-YHS2Y7L3C9
   - Event tracking for all dataLayer events
   - Data layer variables for event parameters
   - Page categories and labels configured
   ```
4. Click **Publish** button
5. Click **OK** to confirm

### Step 7: Verify Tags Are Working
1. Visit: https://zerobarriers.io
2. Open browser DevTools (F12)
3. Go to **Console** tab
4. Type: `dataLayer` and press Enter
5. You should see an array with events
6. Go to: **Google Analytics → Reports → Realtime**
7. You should see pageviews appearing

---

## ✅ PART 3: Verify Page Labels (Already Done!)

The code has been updated to automatically send page categories and labels. No action needed - it's already working!

### What's Being Sent:

**Page Categories:**
- Home (`/`) → `Homepage`
- Services (`/services`) → `Services`
- Technology (`/technology`) → `Technology`
- Results (`/results`) → `Results / Case Studies`
- Contact (`/contact`) → `Contact / Conversion`

**View in GA4:**
1. Go to: **Google Analytics → Reports → Engagement → Pages and screens**
2. Add dimension: **Content Group 1**
3. You'll see pages grouped by category

---

## Verification Checklist

After completing all steps:

- [ ] Contact form submits without 403 error
- [ ] GA4 Configuration tag exists in GTM
- [ ] GA4 Event tag exists in GTM
- [ ] Data layer variables created
- [ ] GTM container published
- [ ] Pageviews showing in GA4 Real-Time
- [ ] Events showing in GTM Preview mode
- [ ] Page categories visible in GA4 Content Groups

---

## Troubleshooting

### 403 Error Still Appears?
- Wait 2-3 minutes for Cloudflare changes to propagate
- Check rule status is "Active"
- Try clearing browser cache

### Tags Not Firing?
- Did you publish the container? (Most common issue!)
- Check GTM Preview mode to debug
- Verify container ID matches GTM-P34N6DXL
- Verify GA4 ID matches G-YHS2Y7L3C9

### No Data in GA4?
- Wait 24-48 hours for reports to populate (Real-Time works immediately)
- Check Real-Time reports first
- Verify tags are firing in GTM Preview mode

---

**Follow these steps in order, and everything will be set up correctly!** ✅
