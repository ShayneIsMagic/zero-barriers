# Site Testing Results

## Test Script

The site testing script uses Puppeteer to:
- Test all pages for accessibility and errors
- Check internal links for broken URLs
- Verify contact form submission functionality

## Running Tests

### Local Testing
```bash
# Make sure dev server is running first
npm run dev

# In another terminal, run tests
npm run test:local
# or
TEST_URL=http://localhost:3000 node scripts/test-site.js
```

### Production Testing
```bash
npm run test:production
# or
TEST_URL=https://zerobarriers.io node scripts/test-site.js
```

## What Gets Tested

### Pages Tested
- `/` - Home page
- `/services` - Services page
- `/technology` - Technology page
- `/results` - Results page
- `/contact` - Contact page

### Link Checking
- All internal links (starting with `/` or containing domain)
- Hash/anchor links (validated as scroll targets)
- External links are skipped (can be enabled if needed)

### Form Submission
- Fills out all required fields
- Submits form to Web3Forms API
- Checks for success/error messages
- Note: Form will show error if Web3Forms key not configured locally

## Expected Results

### ✅ All Pages Should:
- Load successfully (HTTP 200)
- Have valid titles
- Contain content
- Have no critical console errors

### ✅ All Links Should:
- Resolve to valid pages (HTTP 200-399)
- Anchor links should point to valid sections

### ✅ Form Should:
- Submit successfully when Web3Forms key is configured
- Show appropriate error if key is missing (expected in local dev)

## Notes

- Hash links (like `/services/#technology`) are valid anchor links that scroll to page sections
- Form submission errors in local development are expected if `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is not set
- Tests are limited to first 20 internal links per page to keep test time reasonable
