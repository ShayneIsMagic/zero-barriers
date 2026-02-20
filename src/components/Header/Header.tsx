'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
// Note: Using regular img tag since images are unoptimized in next.config.js (required for static export)
import styles from './Header.module.css'
import { trackNavigationClick, trackCTAClick } from '../../lib/analytics'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/technology', label: 'Technology' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

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

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/zero-barriers-logo.png" 
              alt="Zero Barriers logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
          </motion.div>
          <span className={styles.logoText}>
            ZERO <span className={styles.accent}>BARRIERS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => trackNavigationClick(item.href, item.label)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className={styles.ctaButton}
          onClick={() => trackCTAClick('Begin Transformation', '/contact', 'header')}
        >
          Begin Transformation
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <motion.i 
            className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            navItems={navItems}
            onClose={toggleMobileMenu} 
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Mobile Menu Component
function MobileMenu({ navItems, onClose }: { 
  navItems: Array<{ href: string; label: string }>
  onClose: () => void 
}) {

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className={styles.mobileMenuBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Menu */}
      <motion.div
        className={styles.mobileMenu}
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        id="mobile-menu"
      >
        <div className={styles.mobileMenuContent}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => {
                  trackNavigationClick(item.href, item.label)
                  onClose()
                  document.body.style.overflow = ''
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.05 }}
          >
            <Link 
              href="/contact"
              className={styles.mobileCtaButton}
              onClick={() => {
                trackCTAClick('Begin Transformation', '/contact', 'mobile_menu')
                onClose()
                document.body.style.overflow = ''
              }}
            >
              Begin Transformation
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}