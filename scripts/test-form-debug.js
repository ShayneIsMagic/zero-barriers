/**
 * Debug script to test form submission and capture actual errors
 */

const puppeteer = require('puppeteer')

async function testFormSubmission() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  
  // Capture console messages
  const consoleMessages = []
  page.on('console', (msg) => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
    })
  })

  // Capture network requests
  const networkRequests = []
  page.on('request', (request) => {
    if (request.url().includes('web3forms.com')) {
      networkRequests.push({
        url: request.url(),
        method: request.method(),
        postData: request.postData(),
      })
    }
  })

  const networkResponses = []
  page.on('response', (response) => {
    if (response.url().includes('web3forms.com')) {
      networkResponses.push({
        url: response.url(),
        status: response.status(),
        statusText: response.statusText(),
      })
    }
  })

  try {
    console.log('🔍 Testing form submission on https://zerobarriers.io/contact')
    await page.goto('https://zerobarriers.io/contact', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    })

    console.log('✅ Page loaded')

    // Wait for form
    await page.waitForSelector('form', { timeout: 5000 })
    console.log('✅ Form found')

    // Fill form
    await page.type('input[name="first_name"]', 'Test', { delay: 50 })
    await page.type('input[name="last_name"]', 'User', { delay: 50 })
    await page.type('input[name="phone"]', '801-555-0123', { delay: 50 })
    await page.type('input[name="email"]', 'test@example.com', { delay: 50 })
    await page.type('input[name="company"]', 'Test Company', { delay: 50 })
    await page.type('textarea[name="message"]', 'Debug test message', { delay: 50 })
    console.log('✅ Form filled')

    // Submit form
    console.log('📤 Submitting form...')
    await Promise.all([
      page.waitForResponse((response) => {
        return response.url().includes('web3forms.com')
      }, { timeout: 15000 }).catch(() => null),
      page.click('button[type="submit"]'),
    ])

    // Wait for response
    await new Promise(resolve => setTimeout(resolve, 5000))

    // Get page errors
    const pageErrors = await page.evaluate(() => {
      return {
        errorMessages: Array.from(document.querySelectorAll('div')).filter(div => {
          const style = window.getComputedStyle(div)
          return style.color === 'rgb(204, 51, 51)' || 
                 div.textContent.includes('error') ||
                 div.style.backgroundColor.includes('fee')
        }).map(div => div.textContent.trim()),
        successMessages: Array.from(document.querySelectorAll('div')).filter(div => {
          return div.textContent.includes('Thank you') || 
                 div.textContent.includes('success')
        }).map(div => div.textContent.trim()),
      }
    })

    console.log('\n📊 RESULTS:')
    console.log('==========')
    
    console.log('\n🔴 Console Messages:')
    consoleMessages.forEach(msg => {
      console.log(`  [${msg.type}] ${msg.text}`)
    })

    console.log('\n📡 Network Requests to Web3Forms:')
    networkRequests.forEach(req => {
      console.log(`  ${req.method} ${req.url}`)
      if (req.postData) {
        const data = new URLSearchParams(req.postData)
        console.log(`    Access Key: ${data.get('access_key') ? 'Present' : 'Missing'}`)
        console.log(`    To: ${data.get('to')}`)
        console.log(`    Subject: ${data.get('subject')}`)
      }
    })

    console.log('\n📥 Network Responses from Web3Forms:')
    networkResponses.forEach(resp => {
      console.log(`  ${resp.status} ${resp.statusText} - ${resp.url}`)
      
      // Try to get response body
      page.evaluate((url) => {
        return fetch(url).then(r => r.text()).catch(() => null)
      }, resp.url).then(body => {
        if (body) console.log(`    Body: ${body}`)
      })
    })

    console.log('\n📄 Page Messages:')
    if (pageErrors.errorMessages.length > 0) {
      console.log('  ❌ Error Messages:')
      pageErrors.errorMessages.forEach(msg => console.log(`    - ${msg}`))
    }
    if (pageErrors.successMessages.length > 0) {
      console.log('  ✅ Success Messages:')
      pageErrors.successMessages.forEach(msg => console.log(`    - ${msg}`))
    }

    // Check for environment variable
    const envCheck = await page.evaluate(() => {
      return {
        hasAccessKey: typeof window !== 'undefined' && 
                     (process?.env?.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''),
        accessKeyLength: (process?.env?.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '').length,
      }
    })
    console.log('\n🔑 Environment Variable Check:')
    console.log(`  Has Access Key: ${envCheck.hasAccessKey}`)
    console.log(`  Access Key Length: ${envCheck.accessKeyLength}`)

  } catch (error) {
    console.error('❌ Test Error:', error.message)
  } finally {
    await browser.close()
  }
}

testFormSubmission()
