# Backup Files & Reference Material Locations

## Purpose

This document tracks the location and purpose of backup files that are preserved for reference but not used in the active Next.js application.

## Backup Directories (Preserved for Reference)

### `html-pages-backup/`
**Purpose:** Original HTML files from the Astro/legacy site
**Contents:**
- `index.html` - Original home page
- `services.html` - Original services page
- `technology.html` - Original technology page
- `testimonials.html` - Original testimonials page
- `case-studies.html` - Original case studies page
- `contact.html` - Original contact page

**Status:** ✅ Preserved | Not used in production
**Reason to Keep:** Reference for content, structure, and design decisions

### `extracted-content/`
**Purpose:** Output from data extraction scripts
**Contents:**
- `home-content.json`
- `services-content.json`
- `technology-content.json`
- `testimonials-content.json`
- `case-studies-content.json`
- `contact-content.json`
- `summary.json`
- PDF case studies

**Status:** ✅ Preserved | Not used in production
**Reason to Keep:** Raw extracted data for reference and future migrations

### `scripts/extract-*.js`
**Purpose:** Extraction and setup scripts
**Contents:**
- `extract-live-content-animations.js`
- `extract-complete-site-data.js`
- `extract-design-system.js`
- `setup-fresh-backup.sh`
- `extract-pdf-logos.py`
- `all-pages-data.json`

**Status:** ✅ Preserved | Development tools
**Reason to Keep:** Useful for future extractions and migrations

## Environment Variables (Backup Configuration)

### `.env.local` (Create from `env.template`)
**Purpose:** Store sensitive configuration and API keys
**Contents:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (from backup: G-YHS2Y7L3C9)
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID (from backup: GTM-WL8K8XK)

**Location:** Root directory (add to `.gitignore`)
**Template:** `env.template`

### Google Analytics Account
**URL:** https://analytics.google.com/analytics/web/#/a357804074p492485718
**IDs Found in Backup:**
- GA4: `G-YHS2Y7L3C9`
- GTM: `GTM-WL8K8XK`

## Legacy Structure (Not Used, Preserved)

### `assets/`, `css/`, `js/`, `images/` (root level)
**Status:** ❌ Duplicates | Can be removed
**Note:** Functionality moved to `src/` and `public/` in Next.js structure

## Recommendations

1. **Keep HTML Backups:** Preserve `html-pages-backup/` for historical reference
2. **Archive Extraction Data:** Keep `extracted-content/` for future reference
3. **Preserve Scripts:** Keep `scripts/` as they may be useful for migrations
4. **Update .env.local:** Copy `env.template` to `.env.local` with actual values
5. **Document Changes:** Update this file when new backups are created

## Migration Notes

When migrating or updating:
- Reference `html-pages-backup/` for original content structure
- Use `extracted-content/` for data references
- Maintain `env.template` with current configuration
- Update this document when backups are added/removed

---

**Last Updated:** $(date)
**Maintained By:** Development Team



