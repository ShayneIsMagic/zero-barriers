'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.umami) return

    const search = searchParams?.toString()
    const url = pathname + (search ? `?${search}` : '')

    window.umami.track((props) => ({
      ...props,
      url,
      title: document.title,
    }))
  }, [pathname, searchParams])

  return null
}
