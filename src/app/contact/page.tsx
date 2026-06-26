'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useRef, useCallback, FormEvent } from 'react'
import { trackFormSubmission } from '../../lib/analytics'

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
      getResponse: (widgetId: string) => string | undefined
    }
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submittedEmail, setSubmittedEmail] = useState<string>('')
  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const renderTurnstile = useCallback(() => {
    if (!turnstileRef.current || !window.turnstile || !TURNSTILE_SITE_KEY) return
    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }
    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'light',
      callback: (token: string) => setTurnstileToken(token),
      'expired-callback': () => setTurnstileToken(''),
      'error-callback': () => setTurnstileToken(''),
    })
  }, [])

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return

    // Client-side navigation: script may already be loaded; render directly (not turnstile.ready).
    if (window.turnstile) {
      renderTurnstile()
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [renderTurnstile])

  const scrollToMessage = (id: string) => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }

  const resetTurnstile = () => {
    setTurnstileToken('')
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      alert('Please complete the verification challenge.')
      setIsSubmitting(false)
      return
    }

    if (typeof window !== 'undefined') {
      const lastSubmission = localStorage.getItem('lastFormSubmission')
      const now = Date.now()
      if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
        alert('Please wait 60 seconds before submitting again.')
        setIsSubmitting(false)
        return
      }
    }

    const formData = new FormData(e.currentTarget)

    if (formData.get('website_url')) {
      setIsSubmitting(false)
      return
    }

    const formDataObject: Record<string, string> = {}
    formData.forEach((value, key) => {
      if (key !== 'website_url') {
        formDataObject[key] = value.toString()
      }
    })

    if (turnstileToken) {
      formDataObject['cf-turnstile-response'] = turnstileToken
    }

    try {
      const functionResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataObject),
      })

      let data: { success?: boolean; error?: string } = {}
      try {
        data = await functionResponse.json()
      } catch {
        data = { success: false, error: `Server error (${functionResponse.status})` }
      }

      if (functionResponse.ok && data.success) {
        const emailValue = formDataObject.email || ''
        setSubmittedEmail(emailValue)
        setSubmitStatus('success')
        formRef.current?.reset()
        trackFormSubmission('contact_form', true, undefined, {
          email: emailValue,
          firstName: formDataObject.first_name,
          lastName: formDataObject.last_name,
          company: formDataObject.company,
        })
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastFormSubmission', Date.now().toString())
        }
        scrollToMessage('form-success-message')
        resetTurnstile()
      } else {
        const errorMsg = data.error || 'Form submission failed'
        console.error('Contact API error:', errorMsg, data)
        setSubmitStatus('error')
        trackFormSubmission('contact_form', false, errorMsg)
        scrollToMessage('form-error-message')
        resetTurnstile()
      }
    } catch (networkError) {
      console.error('Contact form network error:', networkError)
      setSubmitStatus('error')
      trackFormSubmission(
        'contact_form',
        false,
        networkError instanceof Error ? networkError.message : 'Network error'
      )
      scrollToMessage('form-error-message')
      resetTurnstile()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          id="cloudflare-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={renderTurnstile}
        />
      )}

      <section className="contact-hero">
        <div className="container">
          <div className="section-title">
            <span className="section-eyebrow">POTENTIAL UNLEASHED</span>
            <h1>Begin Your Transformation</h1>
            <p>
              Ready to align purpose-driven transformation, activated technology
              systems, and engineered revenue acceleration?
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-main">
          <div className="contact-info sticky">
            <h2>Get in Touch</h2>
            <p>
              Every client is different. Ready to discover how purpose-driven
              transformation can unleash your breakthrough results? Complete the
              form to begin your transformation journey.
            </p>

            <div className="contact-person">
              <div className="contact-person-img">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="contact-person-details">
                <strong>Shayne Roy</strong>
                <span>Founder, Zero Barriers</span>
              </div>
            </div>

            <ul className="contact-details-list">
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:8019970457">801-997-0457</a>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/zerobarriersinc" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <i className="fab fa-facebook-f"></i>
                <a href="https://www.facebook.com/zerobarriers" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/company/zerobarriers" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" id="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">
                    First Name <span className="required">*</span>
                  </label>
                  <input type="text" id="first_name" name="first_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">
                    Last Name <span className="required">*</span>
                  </label>
                  <input type="text" id="last_name" name="last_name" required />
                </div>
              </div>

              <div className="form-row" style={{ marginTop: '16px' }}>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <label htmlFor="company">
                Company <span className="required">*</span>
              </label>
              <input type="text" id="company" name="company" required />

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" id="website" name="website" />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  How can we help you? <span className="required">*</span>
                </label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <p style={{ fontSize: '0.85em', color: '#666', marginTop: '8px' }}>
                By submitting this form, you agree to our{' '}
                <Link href="/privacy" style={{ textDecoration: 'underline' }}>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/cookies" style={{ textDecoration: 'underline' }}>
                  Cookie Policy
                </Link>
                . Your information is used to respond to your inquiry.
              </p>

              <input type="hidden" name="page" value="Contact" />
              <input type="hidden" name="from_name" value="Zero Barriers Contact Form" />

              <input
                type="text"
                name="website_url"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {TURNSTILE_SITE_KEY && (
                <div ref={turnstileRef} style={{ marginTop: '16px', marginBottom: '8px' }} />
              )}

              {submitStatus === 'success' && (
                <div
                  className="form-message form-message-success"
                  role="alert"
                  aria-live="polite"
                  id="form-success-message"
                  style={{ scrollMarginTop: '20px' }}
                >
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>
                      Thank you for contacting Zero Barriers. We&apos;ve received your message and will respond to you
                      {submittedEmail ? ` at ${submittedEmail}` : ''} as soon as possible.
                    </p>
                    <p style={{ marginTop: '10px', fontSize: '0.9em', opacity: 0.9 }}>
                      For immediate assistance, you can also reach us at{' '}
                      <a href="mailto:sk@zerobarriers.io" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        sk@zerobarriers.io
                      </a>{' '}
                      or{' '}
                      <a href="tel:8019970457" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        801-997-0457
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="form-message form-message-error"
                  role="alert"
                  aria-live="polite"
                  id="form-error-message"
                  style={{ scrollMarginTop: '20px' }}
                >
                  <i className="fas fa-exclamation-circle"></i>
                  <div>
                    <strong>Unable to Send Message</strong>
                    <p>We encountered an issue sending your message. Please try again, or contact us directly:</p>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                      <li>
                        Email:{' '}
                        <a href="mailto:sk@zerobarriers.io" style={{ color: 'inherit', textDecoration: 'underline' }}>
                          sk@zerobarriers.io
                        </a>
                      </li>
                      <li>
                        Phone:{' '}
                        <a href="tel:8019970457" style={{ color: 'inherit', textDecoration: 'underline' }}>
                          801-997-0457
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <button type="submit" className="cta-button" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
