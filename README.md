# Zero Barriers – Next.js App (Clean-up Branch)

Production-grade rebuild of https://zerobarriers.io using Next.js App Router with a focus on SEO, structured data, responsive design, and portability. This branch consolidates the project into a modern framework and extracts assets/content from the live site for continuity.

## Tech Stack

- Next.js 14 (App Router) with TypeScript
- React 18
- CSS (single `globals.css` design system)
- Google Fonts (`Poppins`) via `next/font`
- Font Awesome via CDN

## Project Structure

```
zero-barriers/
├── src/
│   ├── app/                # App Router pages and route handlers
│   │   ├── layout.tsx      # Global layout (Header, Footer, Analytics, GTM, schema)
│   │   ├── page.tsx        # Home
│   │   ├── services/page.tsx
│   │   ├── technology/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── contact/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── robots.ts       # Auto-generated robots.txt
│   │   └── sitemap.ts      # Auto-generated sitemap.xml
│   ├── components/         # Header, Footer, Analytics, GTM, StoryCard
│   └── styles/globals.css  # Design tokens, all page styles, responsive breakpoints
├── public/
│   ├── images/             # Optimized image assets
│   ├── icons/              # Icons
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Static fallback (generated at runtime too)
│   ├── sitemap.xml         # Static fallback (generated at runtime too)
│   └── sw.js               # Service worker
├── html-pages-backup/      # Read-only HTML backups from the legacy site
├── extracted-content/      # JSON/text extracted from the live site
├── scripts/                # Extraction/backup utilities
├── next.config.js
├── package.json
└── README.md               # This file (single source of docs)
```

## Routing Overview

- `/` Home
- `/services`
- `/technology`
- `/testimonials`
- `/case-studies`
- `/contact`
- `/robots.txt` and `/sitemap.xml` are generated via `app/robots.ts` and `app/sitemap.ts`.

## Global Layout and SEO

- Centralized metadata in `src/app/layout.tsx` (title, description, keywords, canonical, icons).
- Open Graph and Twitter cards configured globally.
- Viewport and theme color set via exported `viewport`.
- Structured data injected as JSON-LD in `layout.tsx`:
  - `Organization`, `WebSite`, `Service` with `OfferCatalog`.
- Google Analytics and Google Tag Manager supported via `NEXT_PUBLIC_GA_ID`, `Analytics` and `GTM` components.

## Styling and Responsiveness

- All styles live in `src/styles/globals.css` with design tokens:
  - Color system, spacing scale, container rules, button/image standards, grid gaps.
- Responsive breakpoints: 1200px, 992px, 968px, 768px, 640px, and 480px.
- Mobile improvements:
  - 480px breakpoint added for very small devices.
  - `background-attachment: fixed` disabled on mobile for performance.
  - Mobile nav overlay with accessible toggle (ARIA attributes on button and nav).

## Images and Assets

- Images consolidated under `public/images/` with descriptive filenames for SEO.
- Many originals preserved under `public/images/extracted/**` for reference.
- Consider migrating high-traffic images to `next/image` for built-in optimization.

## Content Backups and Scripts

- `html-pages-backup/`: point-in-time HTML snapshots from the legacy site.
- `extracted-content/`: structured content JSON extracted from live pages.
- `scripts/`: repeatable extraction utilities and helpers.

## Environment Variables

Create `.env.local` with:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build and Export

```bash
npm run build
npm run start    # production server
```

Static export artifacts (if generated) are under `out/` for hosting on static providers.

## Deployment

- Vercel (recommended) or Netlify. Ensure `NEXT_PUBLIC_GA_ID` is configured.
- SEO files are generated at runtime; static fallbacks exist in `public/`.

## Accessibility

- Keyboard/touch-friendly mobile navigation.
- `aria-expanded`, `aria-controls` wired on the menu toggle.
- Color contrast and typographic scales tuned for readability.

## Performance Notes

- Lazy-loaded imagery, `content-visibility` hints, reduced motion support.
- Fixed backgrounds disabled on mobile to improve paint performance.

## Known Gaps / Next Steps

- Add `Review` schema for testimonials/case studies.
- Add `FAQPage` schema for the home FAQ section.
- Optional: Upgrade `Organization` to `LocalBusiness` if doing local SEO.
- Optional: Switch hero and heavy images to `next/image`.

## Branch

- Branch: `skr/clean-up` (refactors, asset extraction, SEO, responsive fixes)

## License

Copyright © 2025 Zero Barriers.
