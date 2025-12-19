/**
 * TrackedLink component - Link with analytics tracking
 */
'use client'

import Link from 'next/link'
import { trackNavigationClick, trackCTAClick, trackExternalLink } from '../lib/analytics'

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  trackAs?: 'navigation' | 'cta' | 'external'
  ctaText?: string
  location?: string
}

export default function TrackedLink({
  href,
  children,
  trackAs = 'navigation',
  ctaText,
  location,
  className,
  ...props
}: TrackedLinkProps) {
  const handleClick = () => {
    const linkText = typeof children === 'string' ? children : 'Link'
    
    if (trackAs === 'cta') {
      trackCTAClick(ctaText || linkText, href, location)
    } else if (trackAs === 'external' || href.startsWith('http')) {
      trackExternalLink(href, linkText)
    } else {
      trackNavigationClick(href, linkText)
    }
  }

  // For external links, add target and rel
  const linkProps = href.startsWith('http') && !href.includes('zerobarriers.io')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link href={href} className={className} onClick={handleClick} {...linkProps} {...props}>
      {children}
    </Link>
  )
}
