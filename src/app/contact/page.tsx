'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
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
            <h1>Start Your Transformation</h1>
            <p>Ready to eliminate barriers and achieve breakthrough growth?</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form over background image */}
      <section className="contact-section-bg">
        <div className="container contact-main">
          <div className="contact-info sticky">
            <h2 style={{fontSize: '26px', color: 'var(--primary)', marginBottom: '20px'}}>
              Get in Touch
            </h2>
            <p>Ready to explore how Zero Barriers can help you achieve rapid, substantial, and sustainable growth? Complete the form to start the conversation.</p>
            
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
              <li><i className="fas fa-envelope"></i><a href="mailto:sk@zerobarriers.io">sk@zerobarriers.io</a></li>
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
              
              {submitStatus === 'success' && (
                <div style={{padding: '15px', background: 'var(--primary-light)', color: 'var(--primary-dark)', borderRadius: '4px', marginBottom: '20px'}}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{padding: '15px', background: '#fee', color: '#c33', borderRadius: '4px', marginBottom: '20px'}}>
                  There was an error sending your message. Please try again.
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your Business with Purpose</h2>
            <p>
              Discover how our integrated approach can help you achieve rapid,
              substantial, and sustainable growth.
            </p>
            <Link href="/contact" className="white-cta">Schedule a Call</Link>
            <div>
              <Link href="/case-studies" className="secondary-white-cta">Explore Our Case Studies <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
