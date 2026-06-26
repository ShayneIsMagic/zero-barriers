/**
 * Self-hosted Umami analytics helpers.
 */

declare global {
  interface Window {
    umami?: {
      track: (
        event?: string | ((props: Record<string, string>) => Record<string, string>),
        data?: Record<string, unknown>
      ) => void
    }
  }
}

function trackUmami(
  eventName: string,
  data?: Record<string, unknown>
) {
  if (typeof window === 'undefined' || !window.umami) return
  window.umami.track(eventName, data)
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  trackUmami(eventName, eventParams)
}

export function trackNavigationClick(destination: string, linkText?: string) {
  trackUmami('navigation_click', {
    destination,
    link_text: linkText || destination,
  })
}

export function trackCTAClick(
  ctaText: string,
  destination: string,
  location?: string
) {
  trackUmami('cta_click', {
    cta_text: ctaText,
    destination,
    location: location || 'unknown',
  })
}

export function trackFormSubmission(
  formName: string,
  success: boolean,
  error?: string,
  formData?: {
    email?: string
    firstName?: string
    lastName?: string
    company?: string
  }
) {
  trackUmami(success ? 'form_submit_success' : 'form_submit_error', {
    form_name: formName,
    success,
    error: error || null,
    has_email: !!formData?.email,
    has_company: !!formData?.company,
  })
}

export function trackExternalLink(url: string, linkText?: string) {
  trackUmami('external_link_click', {
    destination: url,
    link_text: linkText || url,
  })
}

export function trackPhoneClick(phoneNumber: string) {
  trackUmami('phone_click', { phone_number: phoneNumber })
}

export function trackEmailClick(email: string) {
  trackUmami('email_click', { email })
}
