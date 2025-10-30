# Google Analytics 4 (GA4) Setup for Next.js

## Current Situation

Your Google Analytics account exists at: https://analytics.google.com/analytics/web/#/a357804074p492485718

**IDs Found:**
- GA4 Measurement ID: `G-YHS2Y7L3C9`
- Google Tag Manager: `GTM-WL8K8XK`

**Status:** ❌ Not implemented in Next.js application

## Implementation Steps

### 1. Environment Variable Setup

Create `.env.local` (add to `.gitignore`):
```bash
NEXT_PUBLIC_GA_ID=G-YHS2Y7L3C9
NEXT_PUBLIC_GTM_ID=GTM-WL8K8XK
```

### 2. Create Analytics Component

Create `src/components/Analytics.tsx`:
```tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}
```

### 3. Create GTM Component

Create `src/components/GTM.tsx`:
```tsx
'use client'

import Script from 'next/script'

export function GTM() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  if (!gtmId) return null

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
```

### 4. Update Root Layout

Update `src/app/layout.tsx`:
```tsx
import Script from 'next/script'
import { GTM } from '../components/GTM'
import { Analytics } from '../components/Analytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <GTM />
        <Analytics />
        {/* Rest of your layout */}
      </body>
    </html>
  )
}
```

### 5. Event Tracking Examples

For form submissions, button clicks, etc.:

Create `src/lib/analytics.ts`:
```tsx
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Usage examples:
// trackEvent('submit', 'contact_form')
// trackEvent('click', 'cta', 'get_started_button')
```

### 6. TypeScript Declarations

Add to `src/types/gtag.d.ts`:
```tsx
interface Window {
  gtag: (
    command: 'config' | 'event' | 'set' | 'js',
    targetId: string | Date,
    config?: {
      page_path?: string
      page_title?: string
      event_category?: string
      event_label?: string
      value?: number
      [key: string]: any
    }
  ) => void
  dataLayer: any[]
}
```

## Testing

1. **Install Google Tag Assistant** Chrome extension
2. **Check Real-time Reports** in GA dashboard
3. **Verify events** are firing correctly
4. **Test conversion tracking** for forms

## Custom Events to Track

- Contact form submissions
- CTA button clicks
- Page scroll depth
- Time on page
- Service page views
- Case study views

## Production Verification

After deployment:
1. Visit https://analytics.google.com
2. Check Real-time reports
3. Verify page views are tracking
4. Test event tracking

---

**Reference:**
- [Next.js Script Component](https://nextjs.org/docs/pages/building-your-application/optimizing/scripts)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Tag Manager](https://tagmanager.google.com/)



