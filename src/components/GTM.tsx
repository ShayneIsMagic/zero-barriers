'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export function GTM() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  useEffect(() => {
    // Initialize dataLayer even if GTM fails to load
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      
      // Suppress GTM script errors by catching them
      const originalError = console.error
      const errorMessages = window.console.error ? window.console.error.bind(window.console) : null
      
      // Wrap script injection in try-catch within the GTM code itself
      // This is handled in the inline script below
    }
  }, [])

  if (!gtmId) return null

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              try {
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                j.onerror=function(){/* Silently handle GTM load failures */};
                f.parentNode.insertBefore(j,f);
              } catch(e) {
                /* Silently handle GTM initialization errors */
              }
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



