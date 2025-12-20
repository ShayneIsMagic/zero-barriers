'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { trackFormSubmission } from '../../lib/analytics'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Check rate limit (prevent rapid-fire submissions)
    if (typeof window !== 'undefined') {
      const lastSubmission = localStorage.getItem('lastFormSubmission')
      const now = Date.now()
      if (lastSubmission && (now - parseInt(lastSubmission)) < 60000) {
        alert('Please wait 60 seconds before submitting again.')
        setIsSubmitting(false)
        return
      }
    }

    // Check for Web3Forms access key (fallback option)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''
    
    // Note: We'll try Cloudflare Pages Function first, which doesn't need build-time env vars
    // Web3Forms key is only needed as fallback if Cloudflare Function isn't available

    const formData = new FormData(e.currentTarget)
    
    // Honeypot check - if this hidden field is filled, it's likely a bot
    if (formData.get('website_url')) {
      // Bot detected - silently reject (don't show error to bot)
      console.warn('Bot submission blocked')
      setIsSubmitting(false)
      return
    }

    try {
      // Try Cloudflare Pages Function first (more secure, env vars at runtime)
      // Prepare form data as JSON for Cloudflare Function
      const formDataObject: Record<string, string> = {}
      formData.forEach((value, key) => {
        if (key !== 'website_url') { // Exclude honeypot
          formDataObject[key] = value.toString()
        }
      })

      // Try Cloudflare Pages Function endpoint
      const functionResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      })

      // Check if function response is successful
      if (functionResponse.ok) {
        const data = await functionResponse.json()

        if (data.success) {
          setSubmitStatus('success')
          e.currentTarget.reset()
          trackFormSubmission('contact_form', true)
          if (typeof window !== 'undefined') {
            localStorage.setItem('lastFormSubmission', Date.now().toString())
          }
          setIsSubmitting(false)
          return
        } else {
          throw new Error(data.error || 'Form submission failed')
        }
      } else {
        // Function returned error status, throw to trigger fallback
        throw new Error(`Function returned ${functionResponse.status}`)
      }
    } catch (functionError) {
      // Cloudflare Function not available or failed, fallback to Web3Forms
      console.log('Cloudflare Function not available, trying Web3Forms fallback')
      
      // Fallback to Web3Forms (if Cloudflare Function unavailable)
      if (accessKey) {
        try {
          formData.append('access_key', accessKey)
          formData.append('subject', 'New Contact Form Submission from Zero Barriers')
          formData.append('to', 'sk@zerobarriers.io')

          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
          })

          const data = await response.json()

          if (data.success) {
            setSubmitStatus('success')
            e.currentTarget.reset()
            trackFormSubmission('contact_form', true)
            if (typeof window !== 'undefined') {
              localStorage.setItem('lastFormSubmission', Date.now().toString())
            }
          } else {
            console.error('Web3Forms API Error:', data)
            const errorMessage = data.message || 'Unknown error'
            console.error('Error message:', errorMessage)
            setSubmitStatus('error')
            trackFormSubmission('contact_form', false, errorMessage)
          }
        } catch (web3formsError) {
          console.error('Web3Forms fallback also failed:', web3formsError)
          setSubmitStatus('error')
          trackFormSubmission('contact_form', false, web3formsError instanceof Error ? web3formsError.message : 'Submission failed')
        }
      } else {
        // Neither method available
        console.error('No form submission method available')
        setSubmitStatus('error')
        trackFormSubmission('contact_form', false, 'Form service not configured')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-title">
            <span className="section-eyebrow">POTENTIAL UNLEASHED</span>
            <h1>Begin Your Transformation</h1>
            <p>Ready to align purpose-driven transformation, activated technology systems, and engineered revenue acceleration?</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form over background image */}
      <section className="contact-section-bg">
        <div className="container contact-main">
          <div className="contact-info sticky">
            <h2 style={{fontSize: '26px', color: 'var(--teal-rich)', marginBottom: '20px'}}>
              Get in Touch
            </h2>
            <p>Every client is different. Ready to discover how purpose-driven transformation can unleash your breakthrough results? Complete the form to begin your transformation journey.</p>
            
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
              <li><i className="fas fa-phone"></i><a href="tel:8019970457">801-997-0457</a></li>
              <li><i className="fab fa-instagram"></i><a href="https://www.instagram.com/zerobarriersinc" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><i className="fab fa-facebook-f"></i><a href="https://www.facebook.com/zerobarriers" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/company/zerobarriers" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name <span className="required">*</span></label>
                  <input type="text" id="first_name" name="first_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name <span className="required">*</span></label>
                  <input type="text" id="last_name" name="last_name" required />
                </div>
              </div>

              <div className="form-row" style={{marginTop: '16px'}}>
                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="required">*</span></label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              
              <label htmlFor="company">Company <span className="required">*</span></label>
              <input type="text" id="company" name="company" required />
              
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" id="website" name="website" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">How can we help you? <span className="required">*</span></label>
                <textarea id="message" name="message" required></textarea>
              </div>
              
              <input type="hidden" name="page" value="Contact" />
              <input type="hidden" name="from_name" value="Zero Barriers Contact Form" />
              
              {/* Honeypot field - hidden from users, bots will fill it */}
              <input 
                type="text" 
                name="website_url" 
                style={{display: 'none'}} 
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              
              {submitStatus === 'success' && (
                <div style={{padding: '15px', background: 'var(--primary-light)', color: 'var(--primary-dark)', borderRadius: '4px', marginBottom: '20px'}}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{padding: '15px', background: '#fee', color: '#c33', borderRadius: '4px', marginBottom: '20px'}}>
                  There was an error sending your message. Please try again or contact us directly at sk@zerobarriers.io.
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
            <div className="toast-container"></div>
          </div>
        </div>
      </section>
    </>
  )
}
