import Script from 'next/script'

type UmamiScriptProps = {
  scriptUrl: string
  websiteId: string
}

export function UmamiScript({ scriptUrl, websiteId }: UmamiScriptProps) {
  return (
    <Script
      defer
      src={`${scriptUrl.replace(/\/$/, '')}/script.js`}
      data-website-id={websiteId}
      data-domains="zerobarriers.io,www.zerobarriers.io,zero-barriers.pages.dev,localhost"
      strategy="afterInteractive"
    />
  )
}
