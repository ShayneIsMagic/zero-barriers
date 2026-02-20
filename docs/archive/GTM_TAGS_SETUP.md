# Google Tag Manager Tags Setup Guide

## Why No Tags Are Showing

**Google Tag Manager containers start empty!** Tags don't automatically appear - you need to create them manually.

The GTM container is like an empty toolbox - it's installed on your site (GTM-P34N6DXL), but you need to add the tools (tags) you want to use.

---

## Step 1: Verify GTM Container ID

**Current GTM ID in code:** `GTM-P34N6DXL`

**To verify this matches your container:**
1. In Google Tag Manager, look at the top of the page
2. The container ID should be shown (format: `GTM-XXXXXXX`)
3. Make sure it matches `GTM-P34N6DXL`

---

## Step 2: Create Google Analytics 4 Configuration Tag

Since you're using Google Analytics (GA4 ID: `G-YHS2Y7L3C9`), you need to create a GA4 tag in GTM.

### Steps:

1. **In Google Tag Manager, click "Tags" in left sidebar**
2. **Click "New" button**
3. **Tag Configuration:**
   - Click on "Tag Configuration"
   - Select **"Google Analytics: GA4 Configuration"**
   - **Measurement ID:** Enter `G-YHS2Y7L3C9`
   - Click **"Save"**

4. **Triggering:**
   - Under "Triggering", click to select a trigger
   - Select **"All Pages"** (this should be default)
   - If "All Pages" doesn't exist, create it:
     - Click "+" to add trigger
     - Trigger Type: **"Page View"**
     - This trigger fires on: **"All Pages"**
     - Name it: "All Pages"
     - Save

5. **Tag Name:**
   - Name the tag: `GA4 Configuration`

6. **Click "Save"**

---

## Step 3: Create Additional Tags (Optional)

### GA4 Event Tag (for custom events)

If you want to track custom events from your site's dataLayer:

1. **New Tag → Tag Configuration**
2. **Select:** "Google Analytics: GA4 Event"
3. **Configuration Tag:** Select your GA4 Configuration tag
4. **Event Name:** Use dataLayer variable `{{Event}}` or enter specific event name
5. **Event Parameters:** Map from dataLayer variables
6. **Triggering:** Create trigger based on your needs
7. **Name:** "GA4 Events"
8. **Save**

---

## Step 4: Publish the Container

**Important:** Tags won't work until you publish!

1. **Click "Submit" button** (top right)
2. **Version Name:** "Initial GA4 Setup" (or any name)
3. **Version Description:** "Added GA4 Configuration tag"
4. **Click "Publish"**

---

## Step 5: Verify Tags Are Working

1. **Install Google Tag Assistant** (browser extension)
2. **Visit your site:** https://zerobarriers.io
3. **Check Tag Assistant** - should show GTM and GA4 tags firing
4. **Check GA4 Real-Time reports** - should show pageviews

---

## What Tags You Should Have

### Minimum Required:
1. ✅ **GA4 Configuration Tag** - Sends pageviews to Google Analytics

### Recommended Additional Tags:
2. **GA4 Event Tag** - Tracks custom events from your site
3. **Scroll Depth Tag** (optional) - Tracks how far users scroll
4. **Form Submission Tag** (optional) - Enhanced form tracking

---

## Current Site Implementation

Your site is already sending events to the **dataLayer**:
- Page views
- Navigation clicks
- CTA button clicks
- Form submissions

**These events will automatically work once you:**
1. Create the GA4 Configuration tag
2. Create event tags (if you want to track custom events)
3. Publish the container

---

## Quick Setup Checklist

- [ ] Verify GTM Container ID matches `GTM-P34N6DXL`
- [ ] Create "GA4 Configuration" tag with ID `G-YHS2Y7L3C9`
- [ ] Set trigger to "All Pages"
- [ ] Save the tag
- [ ] **Publish the container** (this is critical!)
- [ ] Test on your live site
- [ ] Verify in GA4 Real-Time reports

---

## Troubleshooting

### Tags Not Firing?
1. **Did you publish?** Tags only work after publishing
2. **Check Preview Mode:** Use GTM Preview mode to debug
3. **Check Container ID:** Verify `GTM-P34N6DXL` is correct
4. **Check GA4 ID:** Verify `G-YHS2Y7L3C9` is correct

### Preview Mode (Recommended for Testing)
1. In GTM, click **"Preview"** button
2. Enter your site URL: `https://zerobarriers.io`
3. GTM will open a debug window showing which tags fire
4. Test your site - you'll see tags firing in real-time

---

## Why GTM Starts Empty

- **GTM is a tag management system** - it's designed to let you add/remove tags without changing code
- **Tags are configuration, not code** - they're created in the GTM interface
- **This is normal** - every GTM container starts empty until you add tags

---

**Once you create and publish the GA4 Configuration tag, your Google Analytics tracking will work!** ✅
