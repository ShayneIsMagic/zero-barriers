# Unused Files Report

## Summary
This report identifies files and directories that are **not used in the Next.js build process** and can be safely archived or removed.

---

## 🔴 Files Not Used in Build (Can Archive/Remove)

### 1. Extraction Data Files (Not Imported)
These are one-time extraction outputs from scraping the live site. They are **not imported** in any source code:

```
scripts/all-pages-data.json           (144KB - extraction dump)
scripts/complete-site-data.json      (84KB - extraction dump)
extracted-content/home-content.json   (72KB)
extracted-content/services-content.json (72KB)
extracted-content/case-studies-content.json (92KB)
extracted-content/technology-content.json (52KB)
extracted-content/testimonials-content.json (48KB)
extracted-content/contact-content.json (24KB)
extracted-content/summary.json       (4KB)
```

**Status**: Safe to archive or remove
**Reason**: Not imported anywhere in `src/`, only used during initial conversion

---

### 2. Build Output (Auto-Generated - Already in .gitignore)

```
.next/                    (Build cache - regenerated on each build)
out/                      (Static export output - regenerated on each build)
```

**Status**: ✅ Already ignored by `.gitignore`
**Action**: No action needed - these are automatically managed

---

### 3. Extracted Images in `out/` (Duplicates)

```
out/images/extracted/           (Images extracted from live site)
out/images/extracted-logos/     (Logos extracted from PDFs)
```

**Status**: Duplicates of files in `public/images/`
**Action**: Can be removed - actual images are in `public/images/`

---

### 4. PDF Reference Documents

```
docs/ZB_CaseStudies_1218_sm-1 (2).pdf
docs/ZeroBarriersInc_Case-Study_DarrelRawlins (2).pdf
docs/ZeroBarriersInc_Case-Study_MichelleA (2).pdf
extracted-content/ZB_CaseStudies_1218_sm-1 (2).pdf
```

**Status**: Reference documents only
**Recommendation**: Keep in `docs/` for historical reference

---

### 5. Development Scripts (Not in Build)

```
scripts/extract-complete-site-data.js
scripts/extract-live-content-animations.js
scripts/extract-design-system.js
scripts/extract-pdf-logos.py
scripts/setup-fresh-backup.sh
```

**Status**: Development tools only
**Recommendation**: Keep for future reference/maintenance

---

## ✅ Files Used in Build (DO NOT REMOVE)

### Source Code (Used in Build)
```
src/app/**/*.tsx          (All page components)
src/components/**/*.tsx   (All React components)
src/styles/globals.css     (Global styles)
```

### Static Assets (Served to Users)
```
public/images/**          (All images used on site)
public/*.xml              (sitemap.xml, rss.xml)
public/robots.txt         (SEO)
public/manifest.json      (PWA)
```

### Configuration (Required)
```
package.json              (Dependencies)
tsconfig.json            (TypeScript config)
next.config.js           (Next.js config)
env.template             (Environment template)
```

### Reference Files (Preserved)
```
html-pages-backup/       (Original HTML reference)
docs/                    (Documentation)
```

---

## 🧹 Recommended Cleanup Actions

### Option 1: Archive Large Extraction Files
Move extraction JSONs to an archive folder outside the project:

```bash
mkdir -p ../zero-barriers-archive
mv scripts/all-pages-data.json ../zero-barriers-archive/
mv scripts/complete-site-data.json ../zero-barriers-archive/
mv extracted-content/ ../zero-barriers-archive/
```

### Option 2: Remove Duplicate Images from out/
Since `out/` is rebuilt on each build, these extracted images will be regenerated:

```bash
rm -rf out/images/extracted/
rm -rf out/images/extracted-logos/
```

**Note**: The `out/` folder is gitignored and regenerated on build, so this is safe.

### Option 3: Keep Everything
All backup and extraction files are relatively small and can be kept for historical reference. The build process ignores them automatically.

---

## 📊 Size Impact

| Category | Size | Impact on Build |
|----------|------|-----------------|
| Extraction JSONs | ~560KB | None (not imported) |
| PDFs | ~5-10MB | None (reference only) |
| Extracted images | ~10-20MB | None (duplicates in public/) |
| Development scripts | ~50KB | None (not in build) |

**Total Unused**: ~15-30MB that doesn't affect the build process.

---

## ✅ Verification

Verified that **NO** files in `scripts/` or `extracted-content/` are imported in:
- `src/app/**/*.tsx`
- `src/components/**/*.tsx`
- `src/styles/**/*.css`
- `next.config.js`
- `package.json`

**Result**: ✅ Safe to archive/remove extraction files without affecting build.



