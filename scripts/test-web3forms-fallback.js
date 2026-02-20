/**
 * Test script to verify Web3Forms fallback is working
 * 
 * This script tests the contact form submission flow:
 * 1. Checks if Cloudflare Function returns 403 (expected)
 * 2. Verifies Web3Forms fallback is triggered
 * 3. Confirms form submission succeeds via Web3Forms
 */

const puppeteer = require('puppeteer');

const TEST_URL = process.env.TEST_URL || 'https://zerobarriers.io/contact';
const HEADLESS = process.env.HEADLESS !== 'false';

async function testWeb3FormsFallback() {
  console.log('🧪 Testing Web3Forms Fallback...\n');
  console.log(`📍 Testing URL: ${TEST_URL}\n`);

  const browser = await puppeteer.launch({
    headless: HEADLESS,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    // Set a realistic user agent to avoid bot detection
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    // Track network requests
    const requests = [];
    const responses = [];

    page.on('request', (request) => {
      const url = request.url();
      if (url.includes('/api/contact') || url.includes('web3forms.com')) {
        requests.push({
          url,
          method: request.method(),
          headers: request.headers(),
        });
      }
    });

    page.on('response', async (response) => {
      const url = response.url();
      if (url.includes('/api/contact') || url.includes('web3forms.com')) {
        const status = response.status();
        let body = null;
        try {
          body = await response.text();
        } catch (e) {
          // Ignore if body can't be read
        }
        responses.push({
          url,
          status,
          headers: response.headers(),
          body: body ? body.substring(0, 500) : null, // Limit body length
        });
      }
    });

    // Track console messages
    const consoleMessages = [];
    page.on('console', (msg) => {
      const text = msg.text();
      consoleMessages.push({
        type: msg.type(),
        text,
      });
      if (text.includes('Web3Forms') || text.includes('contact') || text.includes('form')) {
        console.log(`   [${msg.type()}] ${text}`);
      }
    });

    // Navigate to contact page
    console.log('📄 Loading contact page...');
    await page.goto(TEST_URL, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for form to load
    await page.waitForSelector('form', { timeout: 10000 });

    console.log('✅ Form loaded\n');

    // Fill out the form
    console.log('📝 Filling out form...');
    await page.type('input[name="first_name"]', 'Test');
    await page.type('input[name="last_name"]', 'User');
    await page.type('input[name="phone"]', '555-1234');
    await page.type('input[name="email"]', 'test@example.com');
    await page.type('input[name="company"]', 'Test Company');
    await page.type('textarea[name="message"]', 'This is a test submission to verify Web3Forms fallback is working.');

    console.log('✅ Form filled\n');

    // Submit the form
    console.log('🚀 Submitting form...\n');
    
    const submitButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button[type="submit"]'));
      return buttons.find(btn => btn.textContent.toLowerCase().includes('submit') || btn.textContent.toLowerCase().includes('send'));
    });

    if (submitButton) {
      await submitButton.click();
    } else {
      // Fallback: try to find any submit button
      await page.click('button[type="submit"]');
    }

    // Wait for response (either success message or error)
    console.log('⏳ Waiting for form response...\n');
    
    try {
      // Wait for either success or error message
      await Promise.race([
        page.waitForSelector('[class*="success"], [class*="error"], [id*="success"], [id*="error"]', { timeout: 10000 }),
        page.waitForFunction(
          () => {
            const bodyText = document.body.textContent || '';
            return bodyText.includes('success') || bodyText.includes('error') || bodyText.includes('Thank you');
          },
          { timeout: 10000 }
        ),
      ]);
    } catch (e) {
      // Continue anyway to check network requests
      console.log('   (No visible success/error message found, checking network requests...)\n');
    }

    // Wait a bit more for any async operations
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Check results
    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST RESULTS');
    console.log('='.repeat(60) + '\n');

    // Check network requests
    console.log('🌐 Network Requests:');
    const contactApiRequest = requests.find(r => r.url.includes('/api/contact'));
    const web3formsRequest = requests.find(r => r.url.includes('web3forms.com'));

    if (contactApiRequest) {
      console.log('   ✅ POST to /api/contact: YES');
      const contactApiResponse = responses.find(r => r.url.includes('/api/contact'));
      if (contactApiResponse) {
        console.log(`   📍 Status: ${contactApiResponse.status}`);
        if (contactApiResponse.status === 403) {
          console.log('   ⚠️  403 Forbidden (expected - Cloudflare Function blocked)');
        } else if (contactApiResponse.status === 200) {
          console.log('   ✅ Cloudflare Function worked!');
        }
      }
    } else {
      console.log('   ❌ POST to /api/contact: NO');
    }

    if (web3formsRequest) {
      console.log('   ✅ POST to web3forms.com: YES');
      const web3formsResponse = responses.find(r => r.url.includes('web3forms.com'));
      if (web3formsResponse) {
        console.log(`   📍 Status: ${web3formsResponse.status}`);
        if (web3formsResponse.status === 200) {
          console.log('   ✅ Web3Forms submission successful!');
          try {
            const body = JSON.parse(web3formsResponse.body || '{}');
            if (body.success) {
              console.log('   ✅ Web3Forms returned success: true');
            } else {
              console.log(`   ⚠️  Web3Forms returned success: false`);
              console.log(`   📝 Message: ${body.message || 'N/A'}`);
            }
          } catch (e) {
            console.log('   ⚠️  Could not parse Web3Forms response');
          }
        }
      }
    } else {
      console.log('   ❌ POST to web3forms.com: NO');
    }

    // Check console messages
    console.log('\n💬 Console Messages:');
    const web3formsMessages = consoleMessages.filter(m => 
      m.text.toLowerCase().includes('web3forms') || 
      m.text.toLowerCase().includes('fallback') ||
      m.text.toLowerCase().includes('no form submission')
    );

    if (web3formsMessages.length > 0) {
      web3formsMessages.forEach(msg => {
        const icon = msg.type === 'error' ? '❌' : msg.type === 'log' ? '📝' : '⚠️';
        console.log(`   ${icon} [${msg.type}] ${msg.text}`);
      });
    } else {
      console.log('   (No relevant console messages found)');
    }

    // Check page content for success/error
    console.log('\n📄 Page Content Check:');
    const pageContent = await page.evaluate(() => document.body.textContent || '');
    
    if (pageContent.toLowerCase().includes('thank you') || pageContent.toLowerCase().includes('success')) {
      console.log('   ✅ Success message found on page');
    } else if (pageContent.toLowerCase().includes('error') || pageContent.toLowerCase().includes('failed')) {
      console.log('   ⚠️  Error message found on page');
    } else {
      console.log('   (No clear success/error message found)');
    }

    // Final verdict
    console.log('\n' + '='.repeat(60));
    console.log('🎯 VERDICT');
    console.log('='.repeat(60) + '\n');

    if (web3formsRequest && web3formsResponse && web3formsResponse.status === 200) {
      console.log('✅ Web3Forms fallback IS WORKING!');
      console.log('   The form successfully falls back to Web3Forms when Cloudflare Function returns 403.\n');
      return true;
    } else if (contactApiRequest && contactApiResponse && contactApiResponse.status === 200) {
      console.log('✅ Cloudflare Function IS WORKING!');
      console.log('   No fallback needed - Cloudflare Function is handling submissions.\n');
      return true;
    } else if (web3formsRequest) {
      console.log('⚠️  Web3Forms request was made but status is unclear');
      console.log('   Check the response status above.\n');
      return false;
    } else {
      console.log('❌ Web3Forms fallback is NOT working');
      console.log('   No Web3Forms request was made.');
      console.log('   Possible reasons:');
      console.log('   - Access key not configured in Cloudflare Pages');
      console.log('   - Form submission failed before fallback');
      console.log('   - JavaScript error prevented fallback\n');
      return false;
    }

  } catch (error) {
    console.error('\n❌ Test failed with error:');
    console.error(error.message);
    if (error.stack) {
      console.error('\nStack trace:');
      console.error(error.stack);
    }
    return false;
  } finally {
    await browser.close();
  }
}

// Run the test
if (require.main === module) {
  testWeb3FormsFallback()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { testWeb3FormsFallback };
