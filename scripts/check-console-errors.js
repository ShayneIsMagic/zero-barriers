/**
 * Script to capture all console errors and warnings from the live site
 */

const puppeteer = require('puppeteer')

const TEST_URL = process.env.TEST_URL || 'https://zerobarriers.io'
const PAGES = ['/', '/services', '/technology', '/results', '/contact']

async function checkConsoleErrors() {
  console.log('🔍 Checking for console errors and warnings...\n')

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const allErrors = []
  const allWarnings = []
  const allLogs = []

  for (const pagePath of PAGES) {
    const page = await browser.newPage()
    const url = `${TEST_URL}${pagePath}`

    console.log(`\n📄 Checking: ${pagePath}`)

    const pageMessages = {
      errors: [],
      warnings: [],
      logs: []
    }

    page.on('console', msg => {
      const text = msg.text()
      const type = msg.type()
      
      if (type === 'error') {
        pageMessages.errors.push(text)
        allErrors.push({ page: pagePath, message: text })
      } else if (type === 'warning') {
        pageMessages.warnings.push(text)
        allWarnings.push({ page: pagePath, message: text })
      } else {
        // Filter out HMR and other non-critical logs
        if (!text.includes('[HMR]') && !text.includes('DevTools')) {
          pageMessages.logs.push(text)
          allLogs.push({ page: pagePath, message: text })
        }
      }
    })

    // Capture network errors
    page.on('requestfailed', request => {
      const error = `Failed to load: ${request.url()} - ${request.failure().errorText}`
      pageMessages.errors.push(error)
      allErrors.push({ page: pagePath, message: error })
    })

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
      await new Promise(resolve => setTimeout(resolve, 3000)) // Wait for all resources

      if (pageMessages.errors.length > 0) {
        console.log(`  ❌ ${pageMessages.errors.length} error(s)`)
        pageMessages.errors.forEach(err => console.log(`     - ${err}`))
      } else {
        console.log(`  ✅ No errors`)
      }

      if (pageMessages.warnings.length > 0) {
        console.log(`  ⚠️  ${pageMessages.warnings.length} warning(s)`)
        pageMessages.warnings.forEach(warn => console.log(`     - ${warn}`))
      }

      if (pageMessages.logs.length > 0) {
        console.log(`  ℹ️  ${pageMessages.logs.length} log message(s)`)
      }

    } catch (error) {
      console.error(`  ❌ Page load error: ${error.message}`)
      allErrors.push({ page: pagePath, message: `Page load failed: ${error.message}` })
    }

    await page.close()
  }

  await browser.close()

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('SUMMARY')
  console.log('='.repeat(60))

  console.log(`\n❌ Total Errors: ${allErrors.length}`)
  if (allErrors.length > 0) {
    console.log('\nErrors by page:')
    const errorsByPage = {}
    allErrors.forEach(err => {
      if (!errorsByPage[err.page]) errorsByPage[err.page] = []
      errorsByPage[err.page].push(err.message)
    })
    Object.entries(errorsByPage).forEach(([page, errors]) => {
      console.log(`\n  ${page}:`)
      errors.forEach(err => console.log(`    - ${err}`))
    })
  }

  console.log(`\n⚠️  Total Warnings: ${allWarnings.length}`)
  if (allWarnings.length > 0) {
    const warningsByPage = {}
    allWarnings.forEach(warn => {
      if (!warningsByPage[warn.page]) warningsByPage[warn.page] = []
      warningsByPage[warn.page].push(warn.message)
    })
    Object.entries(warningsByPage).forEach(([page, warnings]) => {
      console.log(`\n  ${page}:`)
      warnings.forEach(warn => console.log(`    - ${warn}`))
    })
  }

  console.log(`\nℹ️  Total Logs: ${allLogs.length}`)
  if (allLogs.length > 0 && allLogs.length < 20) {
    allLogs.forEach(log => {
      console.log(`  ${log.page}: ${log.message}`)
    })
  }

  console.log('\n✅ Check complete\n')

  return { errors: allErrors, warnings: allWarnings, logs: allLogs }
}

checkConsoleErrors().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
