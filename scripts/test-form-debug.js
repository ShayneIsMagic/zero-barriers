/**
 * Debug script to test contact form submission via /api/contact
 */

const puppeteer = require('puppeteer')

async function testFormSubmission() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  const testUrl = process.env.TEST_URL || 'http://localhost:3000'

  const consoleMessages = []
  page.on('console', (msg) => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
    })
  })

  const networkResponses = []
  page.on('response', async (response) => {
    if (response.url().includes('/api/contact')) {
      let body = null
      try {
        body = await response.json().catch(() => response.text().catch(() => null))
      } catch {
        body = null
      }
      networkResponses.push({
        url: response.url(),
        status: response.status(),
        statusText: response.statusText(),
        body,
      })
    }
  })

  try {
    console.log(`🔍 Testing form submission on ${testUrl}/contact`)
    await page.goto(`${testUrl}/contact`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    })

    await page.waitForSelector('form', { timeout: 5000 })

    await page.type('input[name="first_name"]', 'Test', { delay: 50 })
    await page.type('input[name="last_name"]', 'User', { delay: 50 })
    await page.type('input[name="phone"]', '801-555-0123', { delay: 50 })
    await page.type('input[name="email"]', 'test@example.com', { delay: 50 })
    await page.type('input[name="company"]', 'Test Company', { delay: 50 })
    await page.type('textarea[name="message"]', 'Debug test message', { delay: 50 })

    await Promise.all([
      page.waitForResponse((response) => response.url().includes('/api/contact'), {
        timeout: 15000,
      }).catch(() => null),
      page.click('button[type="submit"]'),
    ])

    await new Promise((resolve) => setTimeout(resolve, 3000))

    console.log('\n📊 RESULTS')
    console.log('==========')

    console.log('\n🔴 Console Messages:')
    consoleMessages.forEach((msg) => {
      console.log(`  [${msg.type}] ${msg.text}`)
    })

    console.log('\n📥 Network Responses from /api/contact:')
    if (networkResponses.length === 0) {
      console.log('  (none — function may only run on Cloudflare Pages)')
    }
    networkResponses.forEach((resp) => {
      console.log(`  ${resp.status} ${resp.statusText} - ${resp.url}`)
      if (resp.body) {
        console.log(`    Body: ${typeof resp.body === 'string' ? resp.body : JSON.stringify(resp.body)}`)
      }
    })
  } catch (error) {
    console.error('❌ Test Error:', error.message)
  } finally {
    await browser.close()
  }
}

testFormSubmission()
