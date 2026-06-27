'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.umami) return

    const url = window.location.pathname + window.location.search

    window.umami.track((props) => ({
      ...props,
      url,
      title: document.title,
    }))
  }, [pathname])

  return null
}
