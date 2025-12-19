'use client'

import Link from 'next/link'
import { trackCTAClick } from '../lib/analytics'

interface TrackedCTAProps {
  href: string
  className: string
  children: React.ReactNode
  location?: string
}

export default function TrackedCTA({ href, className, children, location = 'unknown' }: TrackedCTAProps) {
  const handleClick = () => {
    const ctaText = typeof children === 'string' ? children : 'CTA Button'
    trackCTAClick(ctaText, href, location)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
