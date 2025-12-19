/**
 * Alternative contact form implementation using Cloudflare Pages Function
 * This version sends JSON to /api/contact function instead of Web3Forms
 * 
 * To use this:
 * 1. Rename this file to page.tsx (backup the original first)
 * 2. Set up Cloudflare Pages Function (functions/api/contact.ts)
 * 3. Set RESEND_API_KEY in Cloudflare Pages environment variables
 */

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

    const formData = new FormData(e.currentTarget)
    
    // Honeypot check - if this hidden field is filled, it's likely a bot
    if (formData.get('website_url')) {
      // Bot detected - silently reject (don't show error to bot)
      console.warn('Bot submission blocked')
      setIsSubmitting(false)
      return
    }

    // Prepare form data as JSON
    const formDataObject: Record<string, string> = {}
    formData.forEach((value, key) => {
      if (key !== 'website_url') { // Exclude honeypot
        formDataObject[key] = value.toString()
      }
    })

    try {
      // Send to Cloudflare Pages Function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        e.currentTarget.reset()
        // Track successful form submission
        trackFormSubmission('contact_form', true)
        // Set rate limit timestamp
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastFormSubmission', Date.now().toString())
        }
      } else {
        console.error('Form submission error:', data)
        const errorMessage = data.error || 'Unknown error'
        setSubmitStatus('error')
        // Track form submission error
        trackFormSubmission('contact_form', false, errorMessage)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Network error'
      setSubmitStatus('error')
      // Track form submission error
      trackFormSubmission('contact_form', false, errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... rest of the component JSX stays the same ...
  // (Form fields, styling, etc. - same as current page.tsx)
}
