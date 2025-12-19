'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <img className="logo-image" src="/images/zero-barriers-logo.png" alt="Zero Barriers logo" />
          ZERO <span>BARRIERS</span>
        </Link>
        
        <nav 
          className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
          id="nav-links"
          aria-label="Main navigation"
        >
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/results">Results</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-links"
          type="button"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <Link href="/contact" className="cta-button header-cta">Get Started</Link>
      </div>
    </header>
  )
}
