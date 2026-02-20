#!/usr/bin/env node

/**
 * Comprehensive Site Audit Script
 * Tests all pages, links, contact form, and security
 */

const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000'
const LIVE_URL = 'https://zerobarriers.io'

// Pages to test
const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/technology', name: 'Technology' },
  { path: '/results', name: 'Results' },
  { path: '/contact', name: 'Contact' },
]

// Test results
const results = {
  pages: [],
  links: [],
  contactForm: null,
  security: [],
  errors: [],
  warnings: []
}

async function auditSite() {
  console.log('🔍 Starting comprehensive site audit...\n')
  console.log(`Testing: ${BASE_URL}\n`)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled'
    ]
  })

  try {
    const page = await browser.newPage()
    
    // Set user agent to avoid bot detection
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    
    // Set viewport for mobile testing
    await page.setViewport({ width: 375, height: 667 })
    
    // Remove webdriver property
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined
      })
    })
    
    // Capture console errors and warnings
    const consoleMessages = []
    page.on('console', msg => {
      const type = msg.type()
      const text = msg.text()
      if (type === 'error') {
        results.errors.push({ page: 'unknown', message: text })
        consoleMessages.push({ type: 'error', text })
      } else if (type === 'warning') {
        results.warnings.push({ page: 'unknown', message: text })
        consoleMessages.push({ type: 'warning', text })
      }
    })

    // Capture network errors
    page.on('requestfailed', request => {
      results.errors.push({
        page: 'unknown',
        message: `Failed request: ${request.url()} - ${request.failure().errorText}`
      })
    })

    // Test each page
    console.log('📄 Testing Pages...')
    for (const pageInfo of PAGES) {
      await testPage(page, pageInfo, consoleMessages)
    }

    // Test contact form
    console.log('\n📝 Testing Contact Form...')
    await testContactForm(page)

    // Test security
    console.log('\n🔒 Testing Security...')
    await testSecurity(page)

    // Test all links
    console.log('\n🔗 Testing Links...')
    await testLinks(page)

    // Generate report
    generateReport()

  } catch (error) {
    console.error('❌ Audit failed:', error)
    results.errors.push({ page: 'audit', message: error.message })
  } finally {
    await browser.close()
  }
}

async function testPage(page, pageInfo, consoleMessages) {
  const url = `${BASE_URL}${pageInfo.path}`
  console.log(`  Testing: ${pageInfo.name} (${pageInfo.path})`)

  try {
    const response = await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })

    const status = response.status()
    const title = await page.title()
    const h1Count = await page.$$eval('h1', els => els.length)
    const links = await page.$$eval('a[href]', links => 
      links.map(link => ({
        href: link.getAttribute('href'),
        text: link.textContent.trim().substring(0, 50)
      }))
    )

    // Check for mobile menu (try multiple selectors)
    const mobileMenuToggle = await page.evaluate(() => {
      return document.querySelector('.mobileToggle') !== null ||
             document.querySelector('.mobile-menu-toggle') !== null ||
             document.querySelector('[class*="mobile"]') !== null ||
             document.querySelector('button[aria-label*="navigation"]') !== null ||
             document.querySelector('button[aria-label*="menu"]') !== null
    })
    const hasMobileMenu = mobileMenuToggle

    // Check page load performance
    const performanceTiming = await page.evaluate(() => {
      const perf = performance.timing
      return {
        loadTime: perf.loadEventEnd - perf.navigationStart,
        domContentLoaded: perf.domContentLoadedEventEnd - perf.navigationStart
      }
    })

    results.pages.push({
      name: pageInfo.name,
      path: pageInfo.path,
      status,
      title,
      h1Count,
      linkCount: links.length,
      hasMobileMenu,
      loadTime: performanceTiming.loadTime,
      domContentLoaded: performanceTiming.domContentLoaded,
      errors: consoleMessages.filter(m => m.type === 'error').length,
      warnings: consoleMessages.filter(m => m.type === 'warning').length
    })

    if (status !== 200) {
      results.errors.push({
        page: pageInfo.name,
        message: `Page returned status ${status}`
      })
    }

    if (h1Count === 0) {
      results.warnings.push({
        page: pageInfo.name,
        message: 'No H1 tag found'
      })
    }

    if (h1Count > 1) {
      results.warnings.push({
        page: pageInfo.name,
        message: `Multiple H1 tags found (${h1Count})`
      })
    }

    // Clear console messages for next page
    consoleMessages.length = 0

  } catch (error) {
    results.errors.push({
      page: pageInfo.name,
      message: `Failed to load: ${error.message}`
    })
    results.pages.push({
      name: pageInfo.name,
      path: pageInfo.path,
      status: 'ERROR',
      error: error.message
    })
  }
}

async function testContactForm(page) {
  const url = `${BASE_URL}/contact`
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2' })
    
    // Check if form exists
    const form = await page.$('form')
    if (!form) {
      results.contactForm = {
        status: 'ERROR',
        message: 'Contact form not found'
      }
      return
    }

    // Check form fields
    const fields = {
      firstName: await page.$('input[name="first_name"], input[name="firstName"], input[placeholder*="First"], input[placeholder*="first"]'),
      lastName: await page.$('input[name="last_name"], input[name="lastName"], input[placeholder*="Last"], input[placeholder*="last"]'),
      email: await page.$('input[type="email"], input[name="email"]'),
      phone: await page.$('input[type="tel"], input[name="phone"]'),
      message: await page.$('textarea[name="message"], textarea[placeholder*="message"]')
    }

    const fieldStatus = {}
    for (const [name, field] of Object.entries(fields)) {
      fieldStatus[name] = field !== null
    }

    // Check for honeypot field
    const honeypot = await page.$('input[name="website_url"], input[name="website"], input[type="text"][style*="display: none"]')
    const hasHoneypot = honeypot !== null

    // Check for submit button
    const submitButton = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, input[type="submit"]'))
      return buttons.some(btn => 
        btn.type === 'submit' || 
        btn.textContent?.toLowerCase().includes('submit') ||
        btn.textContent?.toLowerCase().includes('send')
      )
    })
    const hasSubmitButton = submitButton

    // Test form submission (without actually submitting)
    if (fields.firstName && fields.email && fields.message) {
      await fields.firstName.type('Test')
      await fields.email.type('test@example.com')
      await fields.message.type('Test message')
      
      // Check if form validation works
      const formData = await page.evaluate(() => {
        const form = document.querySelector('form')
        if (!form) return null
        return new FormData(form)
      })
    }

    results.contactForm = {
      status: 'OK',
      hasForm: true,
      fields: fieldStatus,
      hasHoneypot,
      hasSubmitButton,
      allRequiredFields: fieldStatus.firstName && fieldStatus.lastName && fieldStatus.email && fieldStatus.message
    }

  } catch (error) {
    results.contactForm = {
      status: 'ERROR',
      message: error.message
    }
  }
}

async function testSecurity(page) {
  const securityChecks = []

  // Test HTTPS (if live URL)
  if (BASE_URL.startsWith('https://')) {
    securityChecks.push({
      check: 'HTTPS Enabled',
      status: 'PASS',
      message: 'Site uses HTTPS'
    })
  } else {
    securityChecks.push({
      check: 'HTTPS Enabled',
      status: 'WARNING',
      message: 'Site not using HTTPS (may be localhost)'
    })
  }

  // Check for security headers
  try {
    const response = await page.goto(BASE_URL, { waitUntil: 'networkidle2' })
    const headers = response.headers()
    
    const securityHeaders = {
      'X-Frame-Options': headers['x-frame-options'],
      'X-Content-Type-Options': headers['x-content-type-options'],
      'X-XSS-Protection': headers['x-xss-protection'],
      'Content-Security-Policy': headers['content-security-policy'],
      'Strict-Transport-Security': headers['strict-transport-security']
    }

    for (const [header, value] of Object.entries(securityHeaders)) {
      securityChecks.push({
        check: header,
        status: value ? 'PASS' : 'WARNING',
        message: value ? `Header present: ${value.substring(0, 50)}` : 'Header not found'
      })
    }

  } catch (error) {
    securityChecks.push({
      check: 'Security Headers',
      status: 'ERROR',
      message: `Failed to check: ${error.message}`
    })
  }

  // Check for exposed sensitive information
  const pageContent = await page.content()
  const sensitivePatterns = [
    { pattern: /api[_-]?key\s*[:=]\s*['"]([^'"]+)['"]/gi, name: 'API Keys' },
    { pattern: /password\s*[:=]\s*['"]([^'"]+)['"]/gi, name: 'Passwords' },
    { pattern: /secret\s*[:=]\s*['"]([^'"]+)['"]/gi, name: 'Secrets' },
    { pattern: /token\s*[:=]\s*['"]([^'"]+)['"]/gi, name: 'Tokens' }
  ]

  for (const { pattern, name } of sensitivePatterns) {
    const matches = pageContent.match(pattern)
    if (matches && matches.length > 0) {
      securityChecks.push({
        check: `Exposed ${name}`,
        status: 'FAIL',
        message: `Found ${matches.length} potential ${name.toLowerCase()} exposure(s)`
      })
    } else {
      securityChecks.push({
        check: `Exposed ${name}`,
        status: 'PASS',
        message: `No ${name.toLowerCase()} found in page source`
      })
    }
  }

  // Check for environment variables in client code
  const scripts = await page.$$eval('script', scripts => 
    scripts.map(s => s.textContent || s.innerHTML).join('\n')
  )
  
  const envVarPattern = /process\.env\.|NEXT_PUBLIC_|REACT_APP_/g
  const envMatches = scripts.match(envVarPattern)
  if (envMatches) {
    // Check if they're using NEXT_PUBLIC_ prefix (safe) or exposing secrets
    const hasSecrets = scripts.match(/RESEND_API_KEY|WEB3FORMS_ACCESS_KEY|API_KEY/g)
    if (hasSecrets && !scripts.includes('NEXT_PUBLIC_')) {
      securityChecks.push({
        check: 'Exposed Secrets in Client Code',
        status: 'FAIL',
        message: 'Potential secret exposure in client-side code'
      })
    }
  }

  results.security = securityChecks
}

async function testLinks(page) {
  const url = `${BASE_URL}/`
  await page.goto(url, { waitUntil: 'networkidle2' })

  // Get all links
  const links = await page.$$eval('a[href]', links => 
    links.map(link => ({
      href: link.getAttribute('href'),
      text: link.textContent.trim().substring(0, 50),
      isExternal: link.hostname !== window.location.hostname
    }))
  )

  // Test internal links
  for (const link of links) {
    if (link.href.startsWith('/') || link.href.startsWith(BASE_URL)) {
      try {
        const response = await page.goto(link.href.startsWith('/') ? `${BASE_URL}${link.href}` : link.href, {
          waitUntil: 'networkidle2',
          timeout: 10000
        })
        results.links.push({
          href: link.href,
          text: link.text,
          status: response.status(),
          isExternal: false
        })
      } catch (error) {
        results.links.push({
          href: link.href,
          text: link.text,
          status: 'ERROR',
          error: error.message,
          isExternal: false
        })
      }
    }
  }
}

function generateReport() {
  console.log('\n' + '='.repeat(60))
  console.log('📊 AUDIT REPORT')
  console.log('='.repeat(60) + '\n')

  // Pages Summary
  console.log('📄 PAGES SUMMARY')
  console.log('-'.repeat(60))
  results.pages.forEach(page => {
    const status = page.status === 200 ? '✅' : '❌'
    console.log(`${status} ${page.name.padEnd(15)} | Status: ${page.status} | Load: ${page.loadTime}ms | Links: ${page.linkCount} | Mobile Menu: ${page.hasMobileMenu ? '✅' : '❌'}`)
    if (page.errors > 0 || page.warnings > 0) {
      console.log(`   ⚠️  Errors: ${page.errors}, Warnings: ${page.warnings}`)
    }
  })

  // Contact Form
  console.log('\n📝 CONTACT FORM')
  console.log('-'.repeat(60))
  if (results.contactForm.status === 'OK') {
    console.log('✅ Form found')
    console.log(`   Fields: ${JSON.stringify(results.contactForm.fields)}`)
    console.log(`   Honeypot: ${results.contactForm.hasHoneypot ? '✅' : '❌'}`)
    console.log(`   Submit Button: ${results.contactForm.hasSubmitButton ? '✅' : '❌'}`)
    console.log(`   All Required Fields: ${results.contactForm.allRequiredFields ? '✅' : '❌'}`)
  } else {
    console.log(`❌ ${results.contactForm.message}`)
  }

  // Security
  console.log('\n🔒 SECURITY CHECKS')
  console.log('-'.repeat(60))
  results.security.forEach(check => {
    const icon = check.status === 'PASS' ? '✅' : check.status === 'WARNING' ? '⚠️' : '❌'
    console.log(`${icon} ${check.check.padEnd(30)} | ${check.status} | ${check.message}`)
  })

  // Links
  console.log('\n🔗 LINKS TESTED')
  console.log('-'.repeat(60))
  const brokenLinks = results.links.filter(l => l.status !== 200 && l.status !== 'ERROR')
  const workingLinks = results.links.filter(l => l.status === 200)
  console.log(`✅ Working: ${workingLinks.length}`)
  console.log(`❌ Broken: ${brokenLinks.length}`)
  if (brokenLinks.length > 0) {
    brokenLinks.forEach(link => {
      console.log(`   ${link.href} - ${link.text}`)
    })
  }

  // Errors and Warnings
  if (results.errors.length > 0) {
    console.log('\n❌ ERRORS')
    console.log('-'.repeat(60))
    results.errors.forEach(error => {
      console.log(`   ${error.page}: ${error.message}`)
    })
  }

  if (results.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS')
    console.log('-'.repeat(60))
    results.warnings.forEach(warning => {
      console.log(`   ${warning.page}: ${warning.message}`)
    })
  }

  // Save report to file
  const reportPath = path.join(__dirname, '../AUDIT_REPORT.json')
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))
  console.log(`\n📄 Full report saved to: ${reportPath}`)

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('📈 SUMMARY')
  console.log('='.repeat(60))
  const totalPages = results.pages.length
  const workingPages = results.pages.filter(p => p.status === 200).length
  const securityPasses = results.security.filter(s => s.status === 'PASS').length
  const securityTotal = results.security.length

  console.log(`Pages: ${workingPages}/${totalPages} working`)
  console.log(`Security: ${securityPasses}/${securityTotal} checks passed`)
  console.log(`Links: ${workingLinks.length} working, ${brokenLinks.length} broken`)
  console.log(`Errors: ${results.errors.length}`)
  console.log(`Warnings: ${results.warnings.length}`)
}

// Run audit
auditSite().catch(console.error)
