# Form Monitoring, Logs, and Notifications Guide

## 📊 How to Monitor Contact Form Activity

---

## 1. View Form Submission Logs in Cloudflare

### Access Function Logs

**Step 1: Go to Cloudflare Dashboard**
1. Open: https://dash.cloudflare.com
2. Navigate: **Workers & Pages** → **zero-barriers**

**Step 2: View Deployment Logs**
1. Click: **Deployments** tab
2. Click on: **Latest deployment**
3. Click: **View logs** or **Function logs**

**Step 3: Filter for Form Submissions**
- Look for logs with `[FORM SUBMISSION]` prefix
- **Success logs:** `[FORM SUBMISSION] SUCCESS`
- **Error logs:** `[FORM SUBMISSION] ERROR` or `[FORM SUBMISSION] CRITICAL ERROR`

**What You'll See:**
```
[FORM SUBMISSION] Attempt received: {
  timestamp: "2024-12-26T21:45:00.000Z",
  email: "user@example.com",
  name: "John Doe",
  company: "Acme Corp",
  hasMessage: true,
  messageLength: 150
}

[FORM SUBMISSION] SUCCESS: {
  timestamp: "2024-12-26T21:45:01.000Z",
  resendId: "re_abc123",
  email: "user@example.com",
  recipient: "sk@zerobarriers.io"
}
```

---

## 2. Google Analytics Tracking

### View Form Events in GA4

**Step 1: Access Google Analytics**
1. Go to: https://analytics.google.com
2. Select your property (G-YHS2Y7L3C9)

**Step 2: View Real-Time Events**
1. Click: **Reports** → **Realtime**
2. Scroll to: **Event count by Event name**
3. Look for:
   - ✅ `form_submit_success` - Successful submissions
   - ❌ `form_submit_error` - Failed submissions

**Step 3: View Historical Data**
1. Go to: **Reports** → **Engagement** → **Events**
2. Search for: `form_submit_success` or `form_submit_error`
3. Click event to see:
   - Total submissions
   - Success vs error rate
   - Submission times
   - Form data (anonymized)

**Step 4: Set Up Alerts (Optional)**
1. Go to: **Admin** → **Custom Definitions** → **Custom Events**
2. Create custom dimension for form errors
3. Set up alert for error rate > 10%

---

## 3. Receive Email Notifications

### Automatic Email Notifications

**You're already receiving:**
- ✅ **Every form submission** → Email to `sk@zerobarriers.io`
- ✅ **Subject:** "New Contact Form Submission from Zero Barriers"
- ✅ **Contains:** All form data (name, email, phone, company, message)

**What's in the email:**
```
From: Zero Barriers <contact@zerobarriers.io>
To: sk@zerobarriers.io
Reply-To: [User's email]
Subject: New Contact Form Submission from Zero Barriers

New Contact Form Submission

From: John Doe
Email: john@example.com
Phone: 555-1234
Company: Acme Corp
Website: https://example.com

Message:
[User's message here]
```

---

## 4. Set Up Error Notifications

### Option A: Cloudflare Alerts (Recommended)

**Step 1: Create Alert**
1. Go to: Cloudflare Dashboard → **Notifications**
2. Click: **Add notification**
3. Select: **Workers & Pages** → **Deployment failures**
4. Configure:
   - **Condition:** Deployment fails OR Function error rate > threshold
   - **Notify:** Your email (sk@zerobarriers.io)
   - **Frequency:** Immediately

**Step 2: Monitor Function Errors**
1. Go to: **Workers & Pages** → **zero-barriers** → **Analytics**
2. Check: **Function invocations** and **Errors**
3. Set up alert if error rate spikes

---

### Option B: Google Analytics Alerts

**Set Up GA4 Alert:**
1. Go to: GA4 → **Admin** → **Custom Alerts**
2. Create alert:
   - **Name:** "Contact Form Error Rate High"
   - **Event:** `form_submit_error`
   - **Condition:** Error rate > 5% of total submissions
   - **Notify:** Email to sk@zerobarriers.io

---

## 5. Monitor Form Health

### Daily Health Check

**Quick checks:**
1. ✅ **Check email inbox** - Should receive form submissions
2. ✅ **Check Cloudflare logs** - Look for errors
3. ✅ **Check GA4** - Verify events are tracking
4. ✅ **Test form manually** - Submit test form weekly

**Weekly review:**
1. Check GA4 reports for submission trends
2. Review Cloudflare function logs for errors
3. Verify email delivery is consistent

---

## 6. View Form Analytics in Google Analytics

### Form Success Metrics

**In GA4:**
1. **Reports** → **Engagement** → **Events**
2. Filter by: `form_submit_success`
3. View:
   - Total successful submissions
   - Submission rate over time
   - Submission by source/page

**Create Custom Report:**
1. **Explore** → **Free form**
2. Dimensions: Date, Page
3. Metrics: `form_submit_success` event count
4. Save as: "Contact Form Submissions"

---

## 7. Error Troubleshooting

### If Form Stops Working

**Check these in order:**

1. **Email Inbox**
   - Are you still receiving form submissions?
   - Last submission received when?

2. **Cloudflare Logs**
   - Go to: Deployments → Latest → Logs
   - Look for: `[FORM SUBMISSION] CRITICAL ERROR`
   - Check for: Missing API keys, Resend errors

3. **Google Analytics**
   - Check: `form_submit_error` events
   - Error rate should be < 5%

4. **Test Form Manually**
   - Submit test form
   - Check browser console for errors
   - Check network tab for API response

---

## 8. Form Submission Logs Format

### Log Prefixes (Cloudflare Functions)

**`[FORM SUBMISSION] Attempt received`**
- Every form submission attempt
- Includes: timestamp, email, name, company

**`[FORM SUBMISSION] SUCCESS`**
- Successful email sent
- Includes: Resend ID, recipient email

**`[FORM SUBMISSION] ERROR`**
- Resend API error
- Includes: status code, error details

**`[FORM SUBMISSION] CRITICAL ERROR`**
- Missing API keys or exceptions
- Requires immediate attention

---

## 9. Quick Status Check

### Daily Checklist

- [ ] Received form submissions in email? ✅
- [ ] No errors in Cloudflare logs? ✅
- [ ] GA4 showing success events? ✅
- [ ] Error rate < 5%? ✅

---

## 10. Getting Help

### If Form Is Not Working

**Immediate Actions:**
1. Check Cloudflare function logs (see Section 1)
2. Verify `RESEND_API_KEY` is set in environment variables
3. Test form submission manually
4. Check browser console for errors

**Contact Support:**
- Review logs first
- Note the exact error message
- Check timestamp of last successful submission

---

## Summary

**You can monitor form activity through:**

1. ✅ **Email Notifications** - Automatic (every submission)
2. ✅ **Cloudflare Logs** - `[FORM SUBMISSION]` entries
3. ✅ **Google Analytics** - `form_submit_success` and `form_submit_error` events
4. ✅ **Cloudflare Alerts** - Set up error notifications

**All form submissions:**
- ✅ Logged to Cloudflare with details
- ✅ Tracked in Google Analytics
- ✅ Emailed to sk@zerobarriers.io
- ✅ Include Resend ID for tracking

**No action needed** - everything is automatic! Just check your email and GA4 reports regularly.
