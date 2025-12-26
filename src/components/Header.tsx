'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close menu when clicking on backdrop
  const handleBackdropClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <img className="logo-image" src="/images/zero-barriers-logo.png" alt="Zero Barriers logo" />
            ZERO <span>BARRIERS</span>
          </Link>
          
          <nav 
            className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
            id="nav-links"
            aria-label="Main navigation"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/technology" onClick={() => setIsMobileMenuOpen(false)}>Technology</Link>
            <Link href="/results" onClick={() => setIsMobileMenuOpen(false)}>Results</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </nav>
          
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="nav-links"
            type="button"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          
          <Link href="/contact" className="cta-button header-cta">Get Started</Link>
        </div>
      </header>
      
      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
    </>
  )
}
