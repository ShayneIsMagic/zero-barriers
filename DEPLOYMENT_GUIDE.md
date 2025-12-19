# Deployment Guide

## Current Status
✅ Build successful
✅ All changes committed
✅ Ready to push to GitHub

## Next Steps

### Option 1: Push Current Branch (Recommended for Review)
```bash
git push origin feature/transformative-sage-build
```

Then merge via GitHub Pull Request to main/master branch.

### Option 2: Merge to Main and Push
```bash
git checkout main
git merge feature/transformative-sage-build
git push origin main
```

### Option 3: Replace Main Branch Directly
```bash
git checkout main
git reset --hard feature/transformative-sage-build
git push origin main --force
```

⚠️ **Warning**: Option 3 will overwrite the main branch. Only use if you're certain.

## Environment Variables for Deployment

When deploying to Cloudflare Pages or GitHub Pages, add these environment variables:

### Required
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` - Your Web3Forms access key (get from https://web3forms.com)

### Optional (for analytics)
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID

## Build Configuration

The site is configured for static export:
- Build command: `npm run build`
- Output directory: `out/`
- Framework: Next.js 16 (static export)

## Testing Checklist

Before deploying, verify:
- [ ] Contact form works (requires access key)
- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] No console errors

## Post-Deployment

1. Configure environment variables in your hosting platform
2. Test contact form submission
3. Verify analytics tracking (if enabled)
4. Test on mobile devices
5. Check all external links
