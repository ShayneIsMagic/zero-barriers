/**
 * Test script for contact form submission
 * Tests both Cloudflare Function endpoint (will 404 locally) and Web3Forms fallback
 */

const puppeteer = require('puppeteer')

const TEST_URL = process.env.TEST_URL || 'http://localhost:3000'
const CONTACT_PAGE = `${TEST_URL}/contact`

async function testContactForm() {
  console.log('🧪 Testing Contact Form...\n')
  console.log(`📍 Testing URL: ${CONTACT_PAGE}\n`)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  // Capture console messages
  const consoleMessages = []
  page.on('console', msg => {
    const text = msg.text()
    consoleMessages.push({ type: msg.type(), text })
    if (msg.type() === 'error') {
      console.log(`  ❌ Console Error: ${text}`)
    }
  })

  // Capture network requests
  const networkRequests = []
  page.on('request', request => {
    if (request.url().includes('/api/contact') || request.url().includes('web3forms.com')) {
      networkRequests.push({
        url: request.url(),
        method: request.method(),
        type: request.resourceType()
      })
    }
  })

  // Capture network responses with body for errors
  const networkResponses = []
  page.on('response', async response => {
    if (response.url().includes('/api/contact') || response.url().includes('web3forms.com')) {
      let body = null
      try {
        if (!response.ok()) {
          const textBody = await response.text().catch(() => null)
          try {
            body = JSON.parse(textBody)
          } catch {
            body = textBody
          }
        } else {
          body = await response.json().catch(async () => {
            const textBody = await response.text().catch(() => null)
            return textBody
          })
        }
      } catch (e) {
        // Ignore body parsing errors
      }
      networkResponses.push({
        url: response.url(),
        status: response.status(),
        statusText: response.statusText(),
        body: body
      })
    }
  })

  try {
    console.log('1️⃣  Navigating to contact page...')
    await page.goto(CONTACT_PAGE, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Check if form exists
    const formExists = await page.$('form#contact-form, form.contact-form') !== null
    if (!formExists) {
      throw new Error('Contact form not found on page')
    }
    console.log('   ✅ Contact form found\n')

    console.log('2️⃣  Filling out form fields...')
    
    // Fill form fields
    await page.type('input[name="first_name"]', 'Test')
    await page.type('input[name="last_name"]', 'User')
    await page.type('input[name="phone"]', '801-555-1234')
    await page.type('input[name="email"]', 'test@example.com')
    await page.type('input[name="company"]', 'Test Company')
    await page.type('textarea[name="message"]', 'This is a test message from the automated test script.')
    
    console.log('   ✅ Form fields filled\n')

    console.log('3️⃣  Submitting form...')
    
    // Submit form
    const submitButton = await page.$('button[type="submit"]')
    if (!submitButton) {
      throw new Error('Submit button not found')
    }

    // Wait for response
    const responsePromise = page.waitForResponse(
      (response) => 
        response.url().includes('/api/contact') || 
        response.url().includes('web3forms.com'),
      { timeout: 15000 }
    ).catch(() => null)

    await submitButton.click()
    console.log('   ✅ Form submitted\n')

    // Wait a bit for submission to process
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Wait for response if we got one
    const response = await responsePromise
    if (response) {
      console.log('   📡 Response received:', response.url())
      console.log('   Status:', response.status(), response.statusText())
    }

    console.log('\n4️⃣  Checking submission status...')
    
    // Check for success/error messages
    const messageInfo = await page.evaluate(() => {
      const divs = Array.from(document.querySelectorAll('div'))
      const successDiv = divs.find(div => div.textContent.includes('Thank you') || div.textContent.includes('success'))
      const errorDiv = divs.find(div => {
        const style = window.getComputedStyle(div)
        return (style.color === 'rgb(204, 51, 51)' || style.backgroundColor.includes('fee') || div.textContent.toLowerCase().includes('error')) && 
               !div.textContent.includes('success')
      })
      return {
        success: successDiv ? successDiv.textContent.trim() : null,
        error: errorDiv ? errorDiv.textContent.trim() : null
      }
    })

    if (messageInfo.success) {
      console.log('   ✅ Success message displayed:', messageInfo.success.substring(0, 50) + '...')
    } else if (messageInfo.error) {
      console.log('   ⚠️  Error message displayed:', messageInfo.error.substring(0, 100))
    } else {
      console.log('   ⚠️  No success/error message found')
    }

    console.log('\n5️⃣  Network Activity Summary:')
    
    if (networkRequests.length > 0) {
      console.log('\n   Requests:')
      networkRequests.forEach(req => {
        console.log(`   - ${req.method} ${req.url}`)
      })
    }

    if (networkResponses.length > 0) {
      console.log('\n   Responses:')
      networkResponses.forEach(res => {
        console.log(`   - ${res.status} ${res.statusText}: ${res.url}`)
        if (res.body && res.status >= 400) {
          console.log(`     Error body: ${typeof res.body === 'string' ? res.body : JSON.stringify(res.body)}`)
        }
      })
    } else {
      console.log('   ⚠️  No network responses captured')
    }

    console.log('\n6️⃣  Console Messages:')
    const errors = consoleMessages.filter(m => m.type === 'error')
    const logs = consoleMessages.filter(m => m.type === 'log')
    
    if (errors.length > 0) {
      console.log('\n   Errors:')
      errors.forEach(e => console.log(`   - ${e.text}`))
    }
    
    if (logs.length > 0) {
      console.log('\n   Logs:')
      logs.forEach(l => console.log(`   - ${l.text}`))
    }

    // Check what method was attempted
    console.log('\n📊 Summary:')
    const triedFunction = networkRequests.some(r => r.url.includes('/api/contact'))
    const triedWeb3Forms = networkRequests.some(r => r.url.includes('web3forms.com'))
    
    if (triedFunction) {
      console.log('   ✅ Attempted Cloudflare Function endpoint (/api/contact)')
      const functionResponse = networkResponses.find(r => r.url.includes('/api/contact'))
      if (functionResponse) {
        if (functionResponse.status === 404) {
          console.log('   ⚠️  Function returned 404 (expected locally - function only runs on Cloudflare)')
        } else {
          console.log(`   ✅ Function responded with ${functionResponse.status}`)
        }
      }
    }
    
    if (triedWeb3Forms) {
      console.log('   ✅ Attempted Web3Forms fallback')
    }

    if (!triedFunction && !triedWeb3Forms) {
      console.log('   ⚠️  No form submission requests detected')
    }

  } catch (error) {
    console.error('\n❌ Test Error:', error.message)
    console.error(error.stack)
  } finally {
    await browser.close()
  }

  console.log('\n✅ Test completed\n')
}

// Run test
testContactForm().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
