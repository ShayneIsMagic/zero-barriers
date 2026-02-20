'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Page categories mapping
const getPageCategory = (pathname: string): string => {
  if (pathname === '/') return 'Homepage'
  if (pathname === '/services') return 'Services'
  if (pathname === '/technology') return 'Technology'
  if (pathname === '/results') return 'Results / Case Studies'
  if (pathname === '/contact') return 'Contact / Conversion'
  return 'Other'
}

// Page labels mapping
const getPageLabel = (pathname: string): string => {
  if (pathname === '/') return 'Home'
  if (pathname === '/services') return 'Services Page'
  if (pathname === '/technology') return 'Technology Page'
  if (pathname === '/results') return 'Results Page'
  if (pathname === '/contact') return 'Contact Page'
  return pathname
}

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views when route changes
    if (typeof window !== 'undefined') {
      const gaId = process.env.NEXT_PUBLIC_GA_ID
      const url = pathname + (window.location.search || '')
      const pageCategory = getPageCategory(pathname)
      const pageLabel = getPageLabel(pathname)
      
      // Track in Google Analytics with content groups
      if (gaId && window.gtag) {
        window.gtag('config', gaId, {
          page_path: url,
          page_title: document.title,
          content_group1: pageCategory,
          content_group2: 'Zero Barriers',
          page_location: window.location.href,
        })
      }
      
      // Push to GTM dataLayer with page category and label
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: url,
          page_title: document.title,
          page_category: pageCategory,
          page_label: pageLabel,
          page_location: window.location.href,
        })
      }
    }
  }, [pathname])

  return null
}

