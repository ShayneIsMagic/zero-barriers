# Zero Barriers – Revenue Growth Transformation Website

Production-grade Next.js website for [zerobarriers.io](https://zerobarriers.io) - a comprehensive revenue growth consulting and business transformation platform.

## 🚀 Quick Start

```bash
npm install
npm run dev     # Development server at http://localhost:3000
npm run build   # Production build (outputs to `out/` directory)
```

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [SEO & Search Optimization](#seo--search-optimization)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Development](#development)

---

## Overview

Zero Barriers delivers purpose-driven revenue growth transformation through proven methodologies that eliminate barriers and accelerate sustainable results. This website showcases services, technology solutions, case studies, and provides multiple pathways for potential clients to engage.

**Live Site:** [zerobarriers.io](https://zerobarriers.io)  
**Contact Email:** sk@zerobarriers.io  
**Phone:** 801-997-0457

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **React:** 19.2.0
- **Styling:** CSS Modules + Global CSS with design system
- **Fonts:** Poppins (self-hosted via `next/font/local`)
- **Icons:** Font Awesome (self-hosted webfonts)
- **Analytics:** Self-hosted Umami (no cookies, no cross-site tracking)
- **Form Handling:** Cloudflare Pages Functions + Resend API + Cloudflare Turnstile (Contact page)
- **Deployment:** Cloudflare Pages (static export)
- **Email Service:** Resend

---

## Project Structure

```
zero-barriers/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx           # Global layout (metadata, schema, analytics)
│   │   ├── page.tsx             # Home page
│   │   ├── services/            # Services page
│   │   ├── technology/          # Technology solutions page
│   │   ├── results/             # Testimonials & case studies
│   │   ├── contact/             # Contact form page
│   │   ├── privacy/             # Privacy Policy
│   │   ├── cookies/             # Cookie Policy
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic sitemap.xml
│   ├── components/              # React components
│   │   ├── Header/             # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Analytics.tsx       # Umami pageview tracking
│   │   ├── UmamiScript.tsx     # Self-hosted analytics loader
│   │   ├── LegalPageLayout.tsx # Privacy/Cookie policy layout
│   │   ├── TrackedCTA.tsx      # Analytics-tracked CTAs
│   │   └── StoryCard.tsx       # Case study cards
│   ├── assets/                 # Self-hosted fonts and icons
│   ├── data/                   # Internal build registries (not public)
│   ├── lib/                    # Utilities
│   │   ├── analytics.ts        # Umami event helpers
│   │   └── animations.ts       # Animation utilities
│   └── styles/
│       ├── globals.css         # Main stylesheet (design system)
│       └── page-colors.css     # Page-specific color themes
├── functions/                   # Cloudflare Pages Functions
│   └── api/
│       └── contact.ts          # Contact form API endpoint
├── public/
│   ├── images/                 # Image assets
│   ├── _headers                # Cloudflare headers (security, caching)
│   ├── _redirects              # URL redirects
│   ├── manifest.json           # PWA manifest
├── archive/                    # Archived assets (not deployed)
└── extracted-content/          # Legacy content snapshots (not deployed)
```

---

## Features

### 🎨 Design System

- **Color Themes:** Page-specific color schemes (Yellow, Midnight Blue, Teal)
- **Responsive Design:** Mobile-first approach with breakpoints at 1200px, 992px, 768px, 640px, 480px
- **Typography:** Poppins font family with multiple weights
- **Components:** Reusable button styles, form elements, cards, grids

### 📧 Contact Form

- **Submission:** Cloudflare Pages Function → Resend API
- **Bot protection:** Cloudflare Turnstile (Contact page only)
- **Features:**
  - Client-side validation
  - Rate limiting (60 seconds between submissions)
  - Honeypot field for bot protection
  - Success/error inline messages
  - Umami event tracking (when configured)
- **Recipient:** All submissions sent to `sk@zerobarriers.io`

### 🔒 Security

- **Headers:** Content Security Policy (CSP), HSTS, X-Frame-Options, etc.
- **Bot Protection:** Honeypot fields, rate limiting
- **CORS:** Properly configured for API endpoints
- **Cache Control:** Static assets cached, HTML pages always fresh

### 📊 Analytics

- **Self-hosted Umami:** Page views and custom events (no cookies, no cross-site tracking)
- **Event Tracking:** Form submissions, CTA clicks, navigation (via `src/lib/analytics.ts`)
- **Privacy:** Loads only when `NEXT_PUBLIC_UMAMI_*` env vars are set

---

## SEO & Search Optimization

### Meta Tags & Metadata

- **Title Tags:** Unique, descriptive titles for each page
- **Meta Descriptions:** Compelling descriptions (150-160 characters)
- **Keywords:** Comprehensive keyword targeting
- **Canonical URLs:** Proper canonicalization
- **Open Graph:** Full OG tags for social sharing
- **Twitter Cards:** Optimized Twitter card metadata

### Structured Data (Schema.org)

Implemented JSON-LD structured data:

1. **Organization Schema**
   - Business information
   - Contact details
   - Social media profiles
   - Aggregate ratings

2. **WebSite Schema**
   - Site name and URL
   - SearchAction for potential search functionality

3. **Service Schema**
   - Service offerings
   - Service area (United States)
   - Offer catalog with detailed services

### Technical SEO

- **Sitemap:** Automatically generated at `/sitemap.xml`
- **Robots.txt:** Auto-generated with proper directives
- **Semantic HTML:** Proper heading hierarchy (H1-H6)
- **Alt Text:** All images include descriptive alt attributes
- **URL Structure:** Clean, descriptive URLs with trailing slashes
- **Mobile-Friendly:** Fully responsive design
- **Page Speed:** Optimized assets, lazy loading, efficient caching

### Local SEO

- **Location:** Utah, United States
- **Contact Information:** Prominently displayed
- **Business Hours:** Available in structured data
- **Local Business Schema:** Ready for LocalBusiness schema enhancement

### Search Optimization Tips

1. **Content Strategy:**
   - Focus on revenue growth, business transformation keywords
   - Use long-tail keywords naturally in content
   - Update case studies and testimonials regularly

2. **Link Building:**
   - Internal linking between related pages
   - External links to partners (SalesforceConsultants.io, DevPipeline)

3. **Content Freshness:**
   - Regular updates to case studies
   - Blog posts (if added) for ongoing content

4. **Performance:**
   - Fast page load times (LCP < 2.5s)
   - Optimized images
   - Efficient caching strategy

---

## Contact Form

### How It Works

1. **User submits form** → Client-side validation + Turnstile (when configured)
2. **POST to `/api/contact`** (Cloudflare Function)
   - Turnstile verified server-side
   - Email sent via Resend API to `sk@zerobarriers.io`
3. **Success notification:** User sees success message
4. **Error handling:** Clear error message with contact alternatives

### Form Fields

- **First Name** (required)
- **Last Name** (required)
- **Phone** (required)
- **Email** (required)
- **Company** (required)
- **Website** (optional)
- **Message** (required)

### Toast Notifications

**Success Message:**
- ✅ Confirmation message
- Email address confirmation
- Alternative contact methods provided

**Error Message:**
- ❌ Clear error explanation
- Direct contact information
- Encouragement to try again

---

## Deployment

### Cloudflare Pages Configuration

**Build Settings:**
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (root)
- **Node version:** 20.9.0

**Custom Domain:**
- Primary: `zerobarriers.io`
- Pages.dev URL: `zero-barriers.pages.dev`

**Functions:**
- Contact API: `/functions/api/contact.ts`
- Runtime: Cloudflare Workers runtime

### Environment Variables (Cloudflare Pages)

**Required:**
- `RESEND_API_KEY` - Resend API key for email sending
- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret (runtime, Functions)

**Optional (build-time):**
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL` - Self-hosted Umami base URL
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` - Umami website ID
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Turnstile site key (Contact page)
- `CONTACT_EMAIL` - Override recipient (defaults to `sk@zerobarriers.io`)

### Headers & Caching

**File:** `public/_headers`

- **Security Headers:** CSP, HSTS, X-Frame-Options, etc.
- **Cache Control:**
  - Static assets (CSS/JS/images): 1 year, immutable
  - HTML pages: No cache (always fresh)

### Deployment Process

1. **Push to GitHub** → Cloudflare Pages auto-deploys
2. **Build runs** → Next.js static export
3. **Functions upload** → Cloudflare Pages Functions
4. **Assets deploy** → CDN distribution
5. **SSL/TLS** → Automatic certificate provisioning

---

## Environment Variables

### Development

**Copy `.env` to `.env.local` and update with your actual values:**

```bash
cp .env .env.local
```

**Then edit `.env.local` with your actual keys:**

```env
NEXT_PUBLIC_UMAMI_SCRIPT_URL=https://analytics.zerobarriers.io
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
RESEND_API_KEY=your_resend_api_key_here
```

**Note:** `.env` is a template file (committed to git). `.env.local` is for your actual keys (gitignored).

### Production (Cloudflare Pages)

Set in: **Workers & Pages → zero-barriers → Settings → Environment Variables**

**Runtime Variables (Functions):**
- `RESEND_API_KEY` - Available at runtime in Cloudflare Functions
- `CONTACT_EMAIL` - Available at runtime (optional)

**Build-time Variables (Next.js):**
- `NEXT_PUBLIC_*` - Embedded in JavaScript bundle at build time

---

## Development

### Prerequisites

- Node.js 20.9.0 or higher
- npm 9.0.0 or higher

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server (for testing)
npm run lint         # ESLint check
```

### Code Structure

**Pages:**
- All pages use Next.js App Router
- Server components by default
- Client components marked with `'use client'`

**Styling:**
- Global styles in `src/styles/globals.css`
- Design tokens (colors, spacing, typography)
- Component-specific styles in same file
- No CSS-in-JS or styled-components

**Components:**
- Reusable React components
- TypeScript for type safety
- Props interfaces defined

---

## Performance Optimization

### Current Optimizations

- ✅ Static export for fast loading
- ✅ Image lazy loading
- ✅ Efficient caching headers
- ✅ Minified CSS/JS in production
- ✅ Font optimization (next/font)
- ✅ Service worker for offline support

### Performance Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

---

## Accessibility

### Features

- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast compliance
- ✅ Focus indicators

### Testing

- Test with keyboard navigation
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Check color contrast ratios
- Validate HTML markup

---

## Troubleshooting

### Contact Form Not Working

1. **Check environment variables:**
   - `RESEND_API_KEY` set in Cloudflare Pages
   - Verify Resend domain verification

2. **Check Cloudflare Functions:**
   - Function deployed successfully
   - Check deployment logs

3. **Test API endpoint:**
   ```javascript
   fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       first_name: 'Test',
       last_name: 'User',
       phone: '555-1234',
       email: 'test@test.com',
       message: 'Test'
     })
   })
   ```

### Build Errors

- Ensure Node.js version is 20.9.0
- Clear `.next` directory and rebuild
- Check for TypeScript errors: `npm run build`

### Cache Issues

- Clear Cloudflare cache (Dashboard → Caching → Purge Everything)
- Hard refresh browser (`Cmd + Shift + R` or `Ctrl + Shift + R`)
- Verify `_headers` file is deployed

---

## Contact Information

**Primary Contact:**  
Email: [sk@zerobarriers.io](mailto:sk@zerobarriers.io)  
Phone: [801-997-0457](tel:8019970457)

**Social Media:**
- LinkedIn: [zerobarriers](https://www.linkedin.com/company/zerobarriers)
- Facebook: [zerobarriers](https://www.facebook.com/zerobarriers)
- Instagram: [zerobarriersinc](https://www.instagram.com/zerobarriersinc)

---

## License

Copyright © 2025 Zero Barriers. All rights reserved.

---

## Support

For technical issues or questions:
1. Check this README
2. Review `public/_headers` and `.env` for deployment configuration
3. Contact the development team

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Framework:** Next.js 16.1.0
