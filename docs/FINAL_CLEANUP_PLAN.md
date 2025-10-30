# Final Cleanup Plan - Preserve Important Files, Remove Non-Critical

## ✅ Documentation Organization Complete

All markdown files have been moved to `docs/`:
- ✅ `CONVERSION_PLAN.md` → `docs/CONVERSION_PLAN.md`
- ✅ All other `.md` files already in `docs/`

## 📁 File Organization Status

### Essential Files (KEEP)
```
✅ src/                    - Next.js application code
✅ public/                 - Static assets (images, etc.)
✅ docs/                   - All documentation
✅ package.json            - Dependencies
✅ tsconfig.json           - TypeScript config
✅ next.config.js          - Next.js config
✅ env.template            - Environment template
✅ .gitignore             - Git ignore rules
✅ html-pages-backup/     - Backup HTML files (preserved)
✅ extracted-content/      - Extraction data (preserved)
✅ scripts/                - Development tools (preserved)
```

### Duplicate/Old Structure (REMOVE)
```
❌ assets/                 - Duplicate (use public/)
❌ css/                    - Duplicate (use src/styles/)
❌ js/                     - Duplicate (use src/components/)
❌ images/                - Duplicate (use public/images/)
```

### Non-Critical Files (REMOVE)
```
❌ extract_styles.js       - One-time extraction script (done)
❌ src/components/layout/ - Empty directory
❌ src/styles/pages/services.scss - Merged into globals.css
```

## 🧹 Cleanup Commands

### Safe to Remove (Run these commands):

```bash
cd /Users/shayneroy/Desktop/zero-barriers

# Remove duplicate asset structure
rm -rf assets/
rm -rf css/
rm -rf js/
rm -rf images/

# Remove completed one-time scripts
rm -f extract_styles.js

# Remove empty directories
rmdir src/components/layout/ 2>/dev/null || true

# Remove unused SCSS (styles merged into globals.css)
rm -f src/styles/pages/services.scss
```

### Preserve These (DO NOT REMOVE):
```
📦 html-pages-backup/      - Original HTML reference
📦 extracted-content/      - Extraction data reference  
📦 scripts/                - Development tools
📦 docs/                   - All documentation
```

## 📋 Final File Structure (After Cleanup)

```
zero-barriers/
├── docs/                  ✅ All documentation
│   ├── README.md
│   ├── CONVERSION_PLAN.md
│   ├── SEO_IMPLEMENTATION.md
│   ├── GOOGLE_ANALYTICS_SETUP.md
│   ├── CLEANUP_AND_QA_REPORT.md
│   └── ... (all other docs)
├── src/                   ✅ Next.js source code
│   ├── app/
│   ├── components/
│   └── styles/
├── public/                ✅ Static assets
│   └── images/
├── scripts/               ✅ Preserved for reference
├── html-pages-backup/     ✅ Preserved for reference
├── extracted-content/     ✅ Preserved for reference
├── package.json           ✅ Dependencies
├── tsconfig.json          ✅ TypeScript config
├── next.config.js         ✅ Next.js config
├── env.template           ✅ Environment template
└── README.md              ✅ Main README
```

## 🎯 Pre-QA Checklist

- [x] All markdown files moved to `docs/`
- [ ] Duplicate directories removed
- [ ] Empty files/directories removed
- [ ] One-time scripts removed
- [ ] Build output verified (`npm run build`)
- [ ] All pages accessible
- [ ] Google Analytics configured
- [ ] Environment variables documented

## 📝 Notes

- Keep `html-pages-backup/`, `extracted-content/`, and `scripts/` as they contain valuable reference material
- All documentation is now centralized in `docs/`
- Main README stays at root for GitHub visibility
- Environment template preserved for team reference

---

**Last Updated:** $(date)
**Status:** Ready for cleanup execution



