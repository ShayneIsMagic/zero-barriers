# Files and Folders to Remove for QA

Run these commands to clean up unused files:

```bash
# Navigate to project root
cd /Users/shayneroy/Desktop/zero-barriers

# ⚠️ PRESERVE BACKUPS (DO NOT REMOVE):
# - html-pages-backup/ (kept for reference)
# - extracted-content/ (kept for reference)
# - scripts/ (kept for future use)

# Remove old asset structure (duplicates only)
rm -rf assets/

# Remove old CSS location
rm -rf css/

# Remove old JS location  
rm -rf js/

# Remove duplicate images folder (keep public/images/)
rm -rf images/

# Remove unused SCSS file (styles merged into globals.css)
rm -f src/styles/pages/services.scss

# Remove root-level conversion plan (duplicate info in docs/)
# Review first, then: rm -f CONVERSION_PLAN.md
```

## Safe to Remove (Already Extracted/Converted)

- `html-pages-backup/` - Original HTML files, now in Next.js pages
- `extracted-content/` - Data extraction outputs
- `assets/`, `css/`, `js/` - Old project structure
- `images/` (root) - Duplicate of `public/images/`

## Keep for Reference (Optional)

- `scripts/extract-*.js` - May be useful for future extractions
- `docs/` - Documentation (review for duplicates)

## Build Outputs (Already in .gitignore)

- `out/` - Generated build (ignored)
- `.next/` - Next.js build cache (ignored)

## After Cleanup

1. Verify site still works: `npm run dev`
2. Check build: `npm run build`
3. Run linting: `npm run lint`
4. Test all pages

