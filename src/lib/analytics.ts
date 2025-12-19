/**
 * Analytics tracking utility for Google Analytics and GTM
 */

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
        event_name?: string
        value?: number
        [key: string]: any
      }
    ) => void
    dataLayer: any[]
  }
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: any
  }
) {
  if (typeof window === 'undefined') return

  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (gaId && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventParams?.event_category || 'engagement',
      event_label: eventParams?.event_label,
      value: eventParams?.value,
      ...eventParams,
    })
  }

  // Also push to GTM dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: eventParams?.event_category || 'engagement',
      event_label: eventParams?.event_label,
      ...eventParams,
    })
  }
}

/**
 * Track navigation link clicks
 */
export function trackNavigationClick(destination: string, linkText?: string) {
  trackEvent('navigation_click', {
    event_category: 'navigation',
    event_label: linkText || destination,
    destination: destination,
    link_text: linkText,
  })
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaText: string, destination: string, location?: string) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaText,
    cta_text: ctaText,
    destination: destination,
    location: location || 'unknown',
  })
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, success: boolean, error?: string) {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', {
    event_category: 'form',
    event_label: formName,
    form_name: formName,
    success: success,
    error: error,
  })
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, linkText?: string) {
  trackEvent('external_link_click', {
    event_category: 'outbound',
    event_label: linkText || url,
    destination: url,
    link_text: linkText,
  })
}

/**
 * Track phone number clicks
 */
export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: phoneNumber,
    phone_number: phoneNumber,
  })
}

/**
 * Track email clicks
 */
export function trackEmailClick(email: string) {
  trackEvent('email_click', {
    event_category: 'contact',
    event_label: email,
    email: email,
  })
}
