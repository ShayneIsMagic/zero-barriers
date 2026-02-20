# Complete Setup Guide - 403 Fix, GTM Tags, and Page Labels

## Overview

This guide covers:
1. ✅ Fix 403 error on `/api/contact` endpoint
2. ✅ Set up Google Tag Manager tags correctly
3. ✅ Configure page labels/categories for analytics

---

# Part 1: Fix 403 Error on /api/contact

## Problem
Cloudflare is blocking POST requests to `/api/contact` with 403 Forbidden, preventing the Cloudflare Pages Function from working.

## Solution: Allow API Route in Cloudflare WAF

### Step 1: Access Cloudflare WAF
1. Go to: **https://dash.cloudflare.com**
2. Click on **zerobarriers.io** domain
3. Click **Security** in the left sidebar
4. Click **WAF** (Web Application Firewall)

### Step 2: Create Custom Rule to Allow API Endpoint
1. In WAF, click **Custom Rules** tab
2. Click **Create rule** button
3. **Rule name:** `Allow Contact Form API`
4. **When incoming requests match:**
   - Click **Add condition**
   - **Field:** Select `URI Path`
   - **Operator:** Select `equals`
   - **Value:** Enter `/api/contact`
5. **Then:**
   - Select **Allow**
6. Click **Deploy** or **Save**

### Step 3: Verify Rule is Active
1. Check the rule appears in the list
2. Status should be **"Active"**
3. Wait 1-2 minutes for changes to propagate

### Step 4: Test the Endpoint
1. Go to: https://zerobarriers.io/contact
2. Submit a test form
3. Check browser console - should NOT see 403 error
4. Form should submit successfully

---

# Part 2: Set Up Google Tag Manager Tags

## Current Status
- ✅ GTM Container ID: `GTM-P34N6DXL` (installed on site)
- ✅ GA4 Measurement ID: `G-YHS2Y7L3C9`
- ❌ No tags created in GTM yet

## Setup Steps

### Step 1: Access Google Tag Manager
1. Go to: **https://tagmanager.google.com**
2. Select your container: **GTM-P34N6DXL**
3. Make sure you're in the **Workspace** tab (not Published)

### Step 2: Create GA4 Configuration Tag
1. Click **Tags** in left sidebar
2. Click **New** button
3. **Tag Configuration:**
   - Click on **Tag Configuration** area
   - Select **"Google Analytics: GA4 Configuration"**
   - **Measurement ID:** Enter `G-YHS2Y7L3C9`
   - ✅ Check **"Send a page view event when this configuration loads"**
   - ✅ Check **"Enable overriding settings in this tag"** (optional but recommended)
4. **Triggering:**
   - Click on **Triggering** area
   - Select **"All Pages"**
   - If "All Pages" doesn't exist, create it:
     - Click **+** button
     - **Trigger Type:** Page View
     - **This trigger fires on:** All Pages
     - Name: `All Pages`
     - Save
5. **Tag Name:** `GA4 Configuration`
6. Click **Save**

### Step 3: Create GA4 Event Tag (For Custom Events)
1. Click **Tags** → **New**
2. **Tag Configuration:**
   - Select **"Google Analytics: GA4 Event"**
   - **Configuration Tag:** Select `GA4 Configuration` (the tag you just created)
   - **Event Name:** Use variable `{{Event}}` (from dataLayer)
   - **Event Parameters:** Add these:
     - `event_category`: `{{Event Category}}`
     - `event_label`: `{{Event Label}}`
     - `page_path`: `{{Page Path}}`
3. **Triggering:**
   - Click **+** to create new trigger
   - **Trigger Type:** Custom Event
   - **Event name:** `.*` (matches all events)
   - Name: `All Custom Events`
   - Save
4. **Tag Name:** `GA4 Event - All Events`
5. Click **Save**

### Step 4: Create Data Layer Variables (For Event Parameters)
1. Click **Variables** in left sidebar
2. Under **User-Defined Variables**, click **New**
3. **Variable Configuration:**
   - Select **"Data Layer Variable"**
   - **Data Layer Variable Name:** `event_category`
   - **Variable Name:** `Event Category`
   - Save
4. Repeat for:
   - `event_label` → `Event Label`
   - `page_path` → `Page Path`
   - `destination` → `Destination`
   - `location` → `Location`

### Step 5: Publish the Container
1. Click **Submit** button (top right, orange button)
2. **Version Name:** `Initial GA4 Setup with Events`
3. **Version Description:** 
   ```
   Added GA4 Configuration tag and Event tag
   - GA4 Configuration: G-YHS2Y7L3C9
   - Event tracking for all dataLayer events
   - Data layer variables for event parameters
   ```
4. Click **Publish**
5. Click **OK** to confirm

### Step 6: Verify Tags Are Working
1. Install **Google Tag Assistant** browser extension (optional)
2. Visit: https://zerobarriers.io
3. Open browser DevTools (F12) → Console
4. Type: `dataLayer` and press Enter
5. You should see events in the dataLayer array
6. Check GA4 Real-Time reports to see pageviews

---

# Part 3: Set Up Page Labels/Categories

## Goal
Organize pages into categories for better analytics reporting.

## Implementation Options

### Option A: Use Content Groups in GA4 (Recommended)

We'll update the analytics code to send page categories with each pageview.

### Step 1: Update Analytics Component
Update `src/components/Analytics.tsx` to include page categories.

### Step 2: Define Page Categories
- **Home:** `Homepage`
- **Services:** `Services`
- **Technology:** `Technology`
- **Results:** `Results / Case Studies`
- **Contact:** `Contact / Conversion`

### Step 3: Send Content Groups with Page Views
The code will automatically categorize pages and send `content_group1` parameter to GA4.

### Step 1: Code Already Updated ✅

The Analytics component has been updated to automatically send page categories and labels with each pageview.

**Page Categories:**
- `/` → `Homepage`
- `/services` → `Services`
- `/technology` → `Technology`
- `/results` → `Results / Case Studies`
- `/contact` → `Contact / Conversion`

**Page Labels:**
- `/` → `Home`
- `/services` → `Services Page`
- `/technology` → `Technology Page`
- `/results` → `Results Page`
- `/contact` → `Contact Page`

### Step 2: Update GTM to Use Content Groups

After creating your GA4 Configuration tag, you'll automatically receive:
- `content_group1`: Page category (e.g., "Homepage", "Services")
- `content_group2`: "Zero Barriers" (site name)
- `page_category`: Same as content_group1
- `page_label`: Descriptive page label

These will appear in GA4 reports under **Content Groups**.

### Step 3: View Content Groups in GA4

1. Go to: **Google Analytics → Reports → Engagement → Pages and screens**
2. Look for **Content Group 1** dimension
3. You'll see pages grouped by category:
   - Homepage
   - Services
   - Technology
   - Results / Case Studies
   - Contact / Conversion

---

## Quick Reference Checklist

### ✅ Part 1: Fix 403 Error
- [ ] Go to Cloudflare Dashboard → Security → WAF
- [ ] Create custom rule: Allow `/api/contact`
- [ ] Deploy the rule
- [ ] Test form submission

### ✅ Part 2: Set Up GTM Tags
- [ ] Create GA4 Configuration tag (ID: G-YHS2Y7L3C9)
- [ ] Create GA4 Event tag for custom events
- [ ] Create data layer variables (event_category, event_label, etc.)
- [ ] **Publish the container** (critical!)
- [ ] Verify tags are firing

### ✅ Part 3: Page Labels (Already Done in Code)
- [x] Analytics component updated
- [x] Page categories defined
- [x] Page labels defined
- [ ] View content groups in GA4 after setup

---

## Next Steps After Setup

1. **Test Everything:**
   - Submit contact form (should not show 403)
   - Check GA4 Real-Time reports (should show pageviews)
   - Check GTM Preview mode (should show tags firing)

2. **Verify in GA4:**
   - Go to Reports → Engagement → Pages and screens
   - Check Content Group 1 shows your page categories
   - Verify events are being tracked

3. **Monitor:**
   - Check GA4 reports regularly
   - Monitor form submissions
   - Review event tracking

---

**All code changes are complete. You just need to configure Cloudflare WAF and GTM tags as outlined above!** ✅
