'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views when route changes
    if (typeof window !== 'undefined') {
      const gaId = process.env.NEXT_PUBLIC_GA_ID
      const url = pathname + (window.location.search || '')
      
      // Track in Google Analytics
      if (gaId && window.gtag) {
        window.gtag('config', gaId, {
          page_path: url,
          page_title: document.title,
        })
      }
      
      // Push to GTM dataLayer
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: url,
          page_title: document.title,
        })
      }
    }
  }, [pathname])

  return null
}

