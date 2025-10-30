# Cleanup & QA Preparation Report

## Executive Summary

This document identifies unused files, structural issues, and Google Analytics configuration needs to prepare the branch for QA review.

## 🔴 Critical Issues

### 1. Google Analytics Missing
**Status:** NOT IMPLEMENTED
- Google Analytics ID `G-YHS2Y7L3C9` exists in backups but not in Next.js app
- Google Tag Manager `GTM-WL8K8XK` referenced but not implemented
- **Action Required:** Implement GA4 tracking in Next.js (see implementation below)

### 2. Unused Files & Folders to Remove

#### Backup Files (PRESERVE for reference - do not remove)
- 📦 `html-pages-backup/` - Legacy HTML files (preserved for reference)
- 📦 `extracted-content/` - Extraction script outputs (preserved for reference)
- 📦 `scripts/extract-*.js` - Extraction tools (preserved for future use)

#### Old Project Structure (Can be removed)
- ❌ `assets/` - Old asset structure, replaced by `public/` and `src/`
- ❌ `css/` (root) - Old CSS location, now in `src/styles/`
- ❌ `js/` (root) - Old JS location, now in components
- ❌ `images/` (root) - Duplicate of `public/images/`

#### Unused Scripts (Keep for reference, or remove)
- `scripts/extract-*.js` - Data extraction scripts (may be useful for future)
- `scripts/all-pages-data.json` - Large extraction data file
- `scripts/extract-pdf-logos.py` - PDF logo extraction (already done)

#### Unused SCSS Files
- `src/styles/pages/services.scss` - Styles merged into `globals.css`

#### Legacy Documentation (Review and consolidate)
- `CONVERSION_PLAN.md` - Duplicate info in `docs/`
- Multiple overlapping docs in `docs/`

#### Build Output Duplicates
- `out/` - Generated build output (should be in `.gitignore`)

### 3. File Structure Compliance

#### ✅ Proper Next.js Structure (KEEP)
```
src/
├── app/               ✅ Next.js App Router
│   ├── layout.tsx     ✅ Root layout
│   ├── page.tsx       ✅ Home page
│   ├── sitemap.ts     ✅ SEO
│   ├── robots.ts      ✅ SEO
│   └── [pages]/       ✅ Route pages
├── components/        ✅ React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── StoryCard.tsx
└── styles/            ✅ Global styles
    └── globals.css
```

#### ❌ Legacy Structure (REMOVE or IGNORE)
```
html-pages-backup/     ❌ Old HTML files
assets/                ❌ Old asset structure
css/                   ❌ Old CSS location
js/                    ❌ Old JS location
images/                ❌ Duplicate of public/images/
extracted-content/     ❌ Extraction output
```

## 📋 Cleanup Action Items

### Phase 1: Remove Unused Files (Safe)
```bash
# PRESERVE backups (keep these):
# - html-pages-backup/ (reference material)
# - extracted-content/ (reference data)
# - scripts/extract-*.js (development tools)

# Remove old project structure (duplicates only)
rm -rf assets/
rm -rf css/
rm -rf js/
rm -rf images/  # Keep public/images/ (this is the active one)

# Remove unused SCSS
rm -f src/styles/pages/services.scss

# Clean up root docs
# (Review CONVERSION_PLAN.md first, then remove if duplicate)
```

### Phase 2: Update .gitignore
Ensure these are ignored:
```
# Build outputs
/out
/.next
/dist

# Environment
/.env.local
/.env*.local

# Extraction outputs (if keeping scripts)
/extracted-content/
/scripts/all-pages-data.json
```

### Phase 3: Implement Google Analytics
See implementation below.

### Phase 4: Consolidate Documentation
- Review all `docs/*.md` files
- Remove duplicates
- Create single README in `docs/` with links to all guides

## 🔧 Google Analytics Implementation Plan

### Current Status
- ❌ GA4 tracking not implemented
- ❌ Google Tag Manager not implemented
- ✅ Analytics ID known: `G-YHS2Y7L3C9`
- ✅ GTM ID known: `GTM-WL8K8XK`

### Required Implementation
See `docs/GOOGLE_ANALYTICS_SETUP.md` for full implementation details.

## 📊 File Structure Analysis

### Active Files (Keep)
| Path | Status | Purpose |
|------|--------|---------|
| `src/app/` | ✅ Active | Next.js pages |
| `src/components/` | ✅ Active | React components |
| `src/styles/globals.css` | ✅ Active | Global styles |
| `public/images/` | ✅ Active | Static assets |
| `src/app/sitemap.ts` | ✅ Active | SEO |
| `src/app/robots.ts` | ✅ Active | SEO |

### Backup Files (Preserve)
| Path | Status | Purpose |
|------|--------|---------|
| `html-pages-backup/` | 📦 Preserve | Reference material |
| `extracted-content/` | 📦 Preserve | Reference data |
| `scripts/extract-*.js` | 📦 Preserve | Development tools |

### Unused Files (Remove)
| Path | Status | Reason |
|------|--------|--------|
| `assets/` | ❌ Unused | Old structure, duplicate |
| `css/` | ❌ Unused | Old CSS location, duplicate |
| `js/` | ❌ Unused | Old JS location, duplicate |
| `images/` (root) | ❌ Unused | Duplicate of `public/images/` |
| `src/styles/pages/services.scss` | ❌ Unused | Merged into globals.css |

### Reference Files (Keep, mark as archived)
| Path | Status | Purpose |
|------|--------|---------|
| `scripts/extract-*.js` | 📦 Archive | Future reference |
| `docs/*.md` | 📦 Review | Consolidate duplicates |

## ✅ QA Checklist

Before QA review, ensure:
- [ ] Google Analytics implemented and tested
- [ ] All unused files removed
- [ ] `.gitignore` updated
- [ ] Documentation consolidated
- [ ] No build errors
- [ ] All linting errors resolved
- [ ] SEO metadata verified
- [ ] Images optimized
- [ ] Mobile responsive tested
- [ ] All pages accessible
- [ ] Forms functional
- [ ] Links validated

## 🚀 Next Steps

1. **Immediate:** Implement Google Analytics (see separate doc)
2. **Cleanup:** Remove unused files listed above
3. **Documentation:** Consolidate `docs/` folder
4. **Testing:** Run full QA checklist
5. **Deploy:** Prepare for production deployment

---

**Generated:** $(date)
**Branch:** skr/clean-up
**Status:** Ready for cleanup implementation

