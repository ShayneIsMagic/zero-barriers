# Zero Barriers Next.js Conversion Plan

## 📋 Source of Truth
**Use `html-pages-backup/` directory as the authoritative reference for all HTML structure.**

## 🎯 Conversion Strategy

### 1. **Header & Footer** (Current)
- ✅ Use `html-pages-backup/index.html` lines 53-72 (header)
- ✅ Use `html-pages-backup/index.html` lines 419-470 (footer)
- Convert to React components with exact structure

### 2. **Home Page** (Next)
- Reference: `html-pages-backup/index.html`
- Convert each section:
  - Hero (lines 74-115)
  - Methodology (lines 117-158)
  - Solutions (lines 160-206)
  - Technology Division (lines 208-280)
  - Purpose (lines 282-320)
  - Success Stories (lines 322-370)
  - FAQ (lines 372-410)
  - CTA (lines 412-418)

### 3. **Other Pages** (After Home)
- Services: `html-pages-backup/services.html`
- Technology: `html-pages-backup/technology.html`
- Testimonials: `html-pages-backup/testimonials.html`
- Case Studies: `html-pages-backup/case-studies.html`
- Contact: `html-pages-backup/contact.html`

## ✅ Key Principles

1. **Exact Structure**: Match backup HTML structure exactly
2. **Class Names**: Preserve all class names from backup
3. **Content**: Use exact content from backup
4. **Uniform Styling**: Apply global CSS variables, not card borders
5. **Images**: Use same image paths from backup

## 🔧 Current Status

- ⏳ Header: Being fixed to match backup (no `<ul><li>` in nav)
- ✅ Footer: Matches backup structure
- ⏳ Home Page: Needs conversion from backup HTML

