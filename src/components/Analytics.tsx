'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
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
}

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views when route changes
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (window.location.search || '')
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_path: url,
      })
    }
  }, [pathname])

  return null
}

