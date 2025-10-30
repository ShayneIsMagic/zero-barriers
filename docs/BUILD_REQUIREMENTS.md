# Build Requirements & Standards

This document outlines the mandatory requirements for all future builds of the Zero Barriers website.

---

## 📋 Table of Contents

1. [Image SEO Standards](#image-seo-standards)
2. [File Naming Conventions](#file-naming-conventions)
3. [Alt Text Requirements](#alt-text-requirements)
4. [Image Optimization](#image-optimization)
5. [Project Structure](#project-structure)
6. [Code Quality Standards](#code-quality-standards)
7. [SEO & Metadata Requirements](#seo--metadata-requirements)
8. [Build Process](#build-process)

---

## 🖼️ Image SEO Standards

### **Mandatory Requirements**

All images MUST follow these standards for SEO compliance:

#### 1. **File Naming Convention**
- ✅ Use lowercase letters only
- ✅ Separate words with hyphens (no spaces, underscores, or camelCase)
- ✅ Include page/section context in filename
- ✅ Be descriptive and keyword-rich
- ✅ Include file extension

**Examples:**
```
✅ Correct:
- hero-human-transformation.png
- services-b2b-sales.png
- technology-empowerment-hero.png
- case-studies-bridge-the-gap-hero.png
- zero-barriers-logo.png
- caselle-logo.png

❌ Incorrect:
- Human_Transformation.png (underscore, capital)
- techEmpowerment.png (camelCase)
- B2B Sales.png (spaces, capital)
- image1.png (not descriptive)
```

#### 2. **File Location**
- All images MUST be in `public/images/` directory
- Reference in code as `/images/filename.png` (Next.js convention)
- Physical file location: `public/images/filename.png`

#### 3. **Image Categories & Naming Patterns**

**Hero Images:**
- Pattern: `{page}-hero-{description}.{ext}`
- Examples: `hero-human-transformation.png`, `technology-empowerment-hero.png`

**Service/Page Images:**
- Pattern: `services-{description}.{ext}`
- Examples: `services-b2b-sales.png`, `services-team-collaboration.jpg`

**Background Images:**
- Pattern: `{page}-{description}-background.{ext}`
- Examples: `contact-mountain-sunset-background.png`

**Logo Images:**
- Pattern: `{company-name}-logo.{ext}` or `{company-name}-logo-{variant}.{ext}`
- Examples: `zero-barriers-logo.png`, `devpipeline-logo-black.png`

**Case Study Images:**
- Pattern: `case-studies-{description}.{ext}`
- Example: `case-studies-bridge-the-gap-hero.png`

---

## 📝 File Naming Conventions

### **All Files (Not Just Images)**

#### Code Files:
- React components: `PascalCase.tsx` (e.g., `Header.tsx`, `StoryCard.tsx`)
- Pages: `page.tsx` (Next.js App Router convention)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)

#### CSS/SCSS:
- Global styles: `globals.css`
- Component styles: `{ComponentName}.module.css` (if using CSS modules)

#### Configuration:
- `next.config.js`, `tsconfig.json`, `package.json`

---

## 🎯 Alt Text Requirements

### **Mandatory Alt Text Standards**

Every image MUST have descriptive, SEO-optimized alt text:

#### 1. **Alt Text Guidelines**
- ✅ Be specific and descriptive (not just "image" or "logo")
- ✅ Include relevant keywords naturally
- ✅ Describe the image's purpose in context
- ✅ Be concise (80-140 characters max)
- ✅ Use sentence case
- ✅ Include context (what page/section it's on)

#### 2. **Alt Text Patterns by Image Type**

**Hero Images:**
```
✅ "Human transformation visual illustrating revenue growth through purpose-driven methodologies"
✅ "Technology empowerment background image"
```

**Service Images:**
```
✅ "Human transformation service illustration showing purpose-driven methodologies and revenue growth"
✅ "B2B sales and revenue acceleration services optimizing sales processes and KPIs"
✅ "Strategic consulting services for business transformation and growth strategy development"
```

**Logo Images:**
```
✅ "Zero Barriers logo"
✅ "Salesforce Consulting logo"
✅ "Caselle logo"
✅ "SOS Support logo"
```

**Case Study Images:**
```
✅ "Case studies section background showing bridge the gap transformation"
```

**Background Images:**
```
✅ "Contact page mountain sunset background image"
✅ "Testimonials confident woman portrait background"
```

#### 3. **Decorative Images**
For purely decorative images that don't add semantic meaning:
```
alt=""
```
Note: Use sparingly - most images should have descriptive alt text.

---

## 🖼️ Image Optimization

### **Required Image Attributes**

All `<img>` tags MUST include:

```jsx
<img
  src="/images/filename.png"
  alt="Descriptive alt text following SEO standards"
  width={600}                    // ✅ Required for layout stability
  height={400}                   // ✅ Required for layout stability
  loading="lazy"                 // ✅ Use "eager" only for above-fold critical images
/>
```

### **Loading Strategy**
- **Above-fold images** (hero, logo): `loading="eager"`
- **Below-fold images**: `loading="lazy"`
- **Background images**: Use CSS `background-image` with proper sizing

### **Image Formats**
- **Photos**: Use JPG with appropriate compression
- **Logos/Graphics**: Use PNG with transparency OR SVG for vector
- **Icons**: SVG preferred
- **Backgrounds**: JPG or PNG depending on needs

### **Image Dimensions**
- Always specify `width` and `height` attributes to prevent layout shift
- Maintain aspect ratios
- Responsive images should use CSS to scale

---

## 📁 Project Structure

### **Required Directory Structure**

```
zero-barriers/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page
│   │   ├── layout.tsx          # Root layout
│   │   ├── services/
│   │   ├── technology/
│   │   ├── testimonials/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   ├── robots.ts           # SEO robots.txt
│   │   └── sitemap.ts          # SEO sitemap
│   ├── components/             # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── [ComponentName].tsx
│   └── styles/
│       └── globals.css          # All global styles (single file)
├── public/
│   ├── images/                 # All images (SEO-named)
│   ├── robots.txt              # Generated by robots.ts
│   ├── sitemap.xml             # Generated by sitemap.ts
│   └── manifest.json
├── docs/                       # Documentation
├── scripts/                    # Development tools
├── package.json
├── tsconfig.json
└── next.config.js
```

### **Forbidden/NOT Used**
- ❌ `assets/` (use `public/`)
- ❌ `src/components/ui/` (empty - remove)
- ❌ `src/lib/` (empty - remove)
- ❌ `src/styles/layout/`, `components/`, etc. (empty SCSS module folders)
- ❌ Multiple CSS files (use single `globals.css`)

---

## 💻 Code Quality Standards

### **TypeScript/React Requirements**

1. **Component Structure:**
   - Use TypeScript for all components
   - Export components as default
   - Use functional components with hooks
   - Include proper prop types/interfaces

2. **Image Usage:**
   - Always use Next.js `Image` component or standard `<img>` with proper attributes
   - Never hardcode image paths (use `/images/` convention)
   - Include all required attributes (src, alt, width, height, loading)

3. **SEO Compliance:**
   - Every page MUST export `metadata` object
   - Include canonical URLs
   - Include Open Graph tags
   - Include Twitter Card tags

---

## 🔍 SEO & Metadata Requirements

### **Page-Level Metadata**

Every page MUST include:

```typescript
export const metadata: Metadata = {
  title: 'Descriptive Title | Zero Barriers',
  description: 'Comprehensive description with keywords...',
  alternates: { canonical: 'https://zerobarriers.io/path' },
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://zerobarriers.io/path',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
  },
}
```

### **Structured Data**
- Organization schema in root layout
- BreadcrumbList for navigation
- Service schema where applicable

### **Sitemap & Robots**
- Auto-generated via `sitemap.ts` and `robots.ts`
- MUST include all main pages
- MUST be accessible at `/sitemap.xml` and `/robots.txt`

---

## 🏗️ Build Process

### **Required Build Steps**

1. **Development:**
   ```bash
   npm run dev
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Static Export:**
   - Next.js configured with `output: 'export'`
   - Generates static HTML files in `out/` directory

### **Pre-Build Checklist**

Before building, verify:
- [ ] All images follow SEO naming conventions
- [ ] All images have descriptive alt text
- [ ] All pages have metadata exports
- [ ] No empty directories (except `public/icons/` if keeping)
- [ ] No unused files in `src/`
- [ ] All image references use `/images/` path
- [ ] Build completes without errors

### **Post-Build Verification**

After building, verify:
- [ ] `out/` directory contains all pages
- [ ] All images are copied to `out/images/`
- [ ] Sitemap and robots.txt are generated
- [ ] No broken image references
- [ ] All pages are accessible

---

## ✅ Image SEO Checklist

Use this checklist for every new image:

- [ ] File named in lowercase with hyphens
- [ ] Descriptive filename includes page/section context
- [ ] Image placed in `public/images/`
- [ ] Referenced as `/images/filename.ext`
- [ ] Alt text is descriptive (80-140 chars)
- [ ] Alt text includes relevant keywords naturally
- [ ] Width and height attributes specified
- [ ] Loading attribute set (lazy or eager)
- [ ] Image optimized for web (compressed)
- [ ] Correct format used (JPG/PNG/SVG)

---

## 📚 Reference

### **Current Image Inventory**

See `docs/IMAGE_SEO_INVENTORY.md` for complete list of all images and their SEO-optimized names.

### **Related Documentation**
- `docs/SEO_IMPLEMENTATION.md` - Complete SEO implementation guide
- `docs/FILES_TO_REMOVE.md` - Files safe to remove
- `docs/EMPTY_DIRECTORIES_REPORT.md` - Empty directory cleanup guide

---

## 🔄 Maintenance

**This document must be updated when:**
- New image types are added
- Naming conventions change
- SEO standards are updated
- Build process changes

**Last Updated:** 2025-01-07



