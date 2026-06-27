/** Paths that stay publicly accessible (logos, social cards, icons). */
const PUBLIC_PATTERNS = [
  /logo/i,
  /og-image/i,
  /twitter-card/i,
  /zero-barriers-logo/i,
  /\.svg$/i,
]

/** Site imagery that should not be hotlinked or fetched directly. */
const PROTECTED_PREFIXES = [
  '/images/photography/',
  '/images/home-human-transformation',
  '/images/services-human-transformation',
  '/images/transforming-breakthrough',
  '/images/technology-empowerment-hero',
  '/images/case-studies-bridge-the-gap-hero',
  '/images/services-revenue-flow-landscape',
  '/images/extracted/technology/',
]

export function isProtectedImagePath(pathname: string): boolean {
  if (PUBLIC_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return false
  }
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

const ALLOWED_HOSTS = new Set([
  'zerobarriers.io',
  'www.zerobarriers.io',
  'localhost',
  '127.0.0.1',
])

function hostAllowed(hostname: string): boolean {
  if (ALLOWED_HOSTS.has(hostname)) return true
  return hostname.endsWith('.pages.dev')
}

export function isAllowedImageRequest(request: Request): boolean {
  const secFetchSite = request.headers.get('Sec-Fetch-Site')
  if (secFetchSite === 'same-origin' || secFetchSite === 'same-site') {
    return true
  }

  const referer = request.headers.get('Referer')
  if (referer) {
    try {
      if (hostAllowed(new URL(referer).hostname)) return true
    } catch {
      /* ignore malformed referer */
    }
  }

  return false
}

export const PROTECTION_HEADERS: Record<string, string> = {
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-Robots-Tag': 'noindex, noimageindex, noai, noimageai',
  'Cache-Control': 'private, max-age=86400',
  'Content-Disposition': 'inline',
}
