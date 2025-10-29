# LIVE SITE BACKUP - ROLLBACK GUIDE

## 🚨 CRITICAL BACKUP INFORMATION

**Date Created**: October 28, 2025  
**Current Live Site State**: Commit `b1cacf7` - "Updates POST Url."  
**Live Branch**: `main`  
**Platform**: GitHub Pages  

---

## 📍 CURRENT LIVE SITE STATUS

- **Commit Hash**: `b1cacf7bc1b731ac6c94b33d7eae9cc5d2a953f0`
- **Author**: MollyKate Greenhalgh
- **Date**: Tue Oct 28 16:33:47 2025 -0600
- **Message**: "Updates POST Url."
- **Technology**: Next.js static site
- **Deployment**: GitHub Pages from `main` branch

---

## 🔄 ROLLBACK INSTRUCTIONS

### Quick Rollback (Emergency)
```bash
# Switch to main branch
git checkout main

# Reset to current live state
git reset --hard b1cacf7

# Force push to restore live site
git push origin main --force
```

### Safe Rollback (Recommended)
```bash
# Switch to main branch
git checkout main

# Reset to backup tag
git reset --hard live-site-backup-20251028

# Push changes
git push origin main --force
```

---

## 📋 WHAT THIS BACKUP PRESERVES

✅ **Working Features**:
- Gmail email integration for contact forms
- All page functionality (services, technology, testimonials, case studies, contact)
- Mobile responsive design
- Image optimization

✅ **Current Styling**:
- Green color scheme (#7cc347 primary)
- Professional layout
- All animations and interactions

✅ **Technical Stack**:
- Next.js static export
- GitHub Pages deployment
- Optimized images in `/public/images/optimized/`

---

## 🏷️ BACKUP TAGS

- **`live-site-backup-20251028`**: Current live site state (October 28, 2025)
- **`1771e51`**: Previous stable point - "Reverts website back to green version"

---

## 📁 KEY FILES TO PRESERVE

**Critical Files**:
- `/out/` - Static site files (GitHub Pages deployment)
- `/public/images/` - All images and optimized versions
- `/public/js/sendEmail.js` - Gmail integration
- `/pages/` - All HTML pages
- `/assets/css/main.css` - Main stylesheet

**Configuration**:
- `next.config.ts` - Next.js configuration
- `package.json` - Dependencies and scripts

---

## ⚠️ IMPORTANT NOTES

1. **Always backup before major changes**
2. **Test rollbacks in a separate branch first**
3. **The `main` branch is the live deployment branch**
4. **GitHub Pages automatically deploys from `main`**

---

## 🔗 RELATED DOCUMENTATION

- [Deployment Guide](deployment.md)
- [Code Structure](CODE_STRUCTURE.md)
- [Design Revamp Plan](DESIGN_REVAMP_PLAN.md)

---

## 📞 EMERGENCY CONTACT

If you need immediate assistance with rollback:
1. Check this document first
2. Use the Quick Rollback commands above
3. Verify the site is working at https://zerobarriers.io

---

**Last Updated**: October 28, 2025  
**Backup Status**: ✅ ACTIVE AND READY
