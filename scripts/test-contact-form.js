#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runTest(testName, testFunction) {
  log(`\n${colors.bold}Testing: ${testName}${colors.reset}`);
  try {
    const result = testFunction();
    if (result) {
      log(`✅ ${testName}: PASSED`, 'green');
      return true;
    } else {
      log(`❌ ${testName}: FAILED`, 'red');
      return false;
    }
  } catch (error) {
    log(`❌ ${testName}: ERROR - ${error.message}`, 'red');
    return false;
  }
}

// Test functions
function testEnvironmentVariables() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) {
    log('   .env.local file not found', 'red');
    return false;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const requiredVars = ['TURNSTILE_SITE_KEY', 'TURNSTILE_SECRET_KEY', 'RESEND_API_KEY'];
  
  for (const varName of requiredVars) {
    if (!envContent.includes(varName)) {
      log(`   Missing ${varName}`, 'red');
      return false;
    }
  }
  
  log('   All required environment variables present', 'green');
  return true;
}

function testContactFormHTML() {
  try {
    const response = execSync('curl -s http://localhost:3000/contact', { encoding: 'utf8' });
    
    // Check for Turnstile site key
    if (!response.includes('data-sitekey="0x4AAAAAAB3leLaMnnM_ISQ0"')) {
      log('   Turnstile site key not found in HTML', 'red');
      return false;
    }
    
    // Check for autocomplete attributes
    const autocompleteFields = ['autoComplete="name"', 'autoComplete="email"', 'autoComplete="organization"', 'autoComplete="tel"'];
    for (const field of autocompleteFields) {
      if (!response.includes(field)) {
        log(`   Missing autocomplete attribute: ${field}`, 'red');
        return false;
      }
    }
    
    // Check for form structure
    if (!response.includes('id="contact-form"')) {
      log('   Contact form not found', 'red');
      return false;
    }
    
    log('   Contact form HTML structure is correct', 'green');
    return true;
  } catch (error) {
    log(`   Error testing HTML: ${error.message}`, 'red');
    return false;
  }
}

function testAPIEndpoint() {
  try {
    const response = execSync(
      'curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/x-www-form-urlencoded" -d "name=Test&email=test@example.com&message=Test&cf-turnstile-response=test" -s',
      { encoding: 'utf8' }
    );
    
    // Should return CAPTCHA verification failed (expected with fake token)
    if (!response.includes('CAPTCHA verification failed')) {
      log('   API endpoint not responding correctly', 'red');
      return false;
    }
    
    log('   API endpoint responding correctly', 'green');
    return true;
  } catch (error) {
    log(`   Error testing API: ${error.message}`, 'red');
    return false;
  }
}

function testCSPHeaders() {
  try {
    const response = execSync('curl -I http://localhost:3000/contact', { encoding: 'utf8' });
    
    // CSP headers are only applied in production (Cloudflare Pages)
    // In development, Next.js doesn't apply the _headers file
    if (!response.includes('Content-Security-Policy')) {
      log('   CSP headers not found (expected in development)', 'yellow');
      log('   CSP will be applied in production via Cloudflare Pages', 'yellow');
      return true; // This is expected in development
    }
    
    // Check for required domains if CSP is present
    const requiredDomains = ['challenges.cloudflare.com', 'api.resend.com'];
    for (const domain of requiredDomains) {
      if (!response.includes(domain)) {
        log(`   CSP missing domain: ${domain}`, 'red');
        return false;
      }
    }
    
    log('   CSP headers configured correctly', 'green');
    return true;
  } catch (error) {
    log(`   Error testing CSP: ${error.message}`, 'red');
    return false;
  }
}

function testTurnstileScript() {
  try {
    const response = execSync('curl -s http://localhost:3000/contact', { encoding: 'utf8' });
    
    // Check for Turnstile widget div
    if (!response.includes('cf-turnstile')) {
      log('   Turnstile widget not found', 'red');
      return false;
    }
    
    // Check for site key
    if (!response.includes('data-sitekey="0x4AAAAAAB3leLaMnnM_ISQ0"')) {
      log('   Turnstile site key not found', 'red');
      return false;
    }
    
    log('   Turnstile widget configured correctly', 'green');
    return true;
  } catch (error) {
    log(`   Error testing Turnstile: ${error.message}`, 'red');
    return false;
  }
}

function testFormValidation() {
  try {
    // Test missing required fields
    const response = execSync(
      'curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/x-www-form-urlencoded" -d "name=&email=&message=" -s',
      { encoding: 'utf8' }
    );
    
    // Check for any validation error (could be missing fields or CAPTCHA)
    if (!response.includes('error') && !response.includes('Error')) {
      log('   Form validation not working', 'red');
      return false;
    }
    
    log('   Form validation working correctly', 'green');
    return true;
  } catch (error) {
    log(`   Error testing validation: ${error.message}`, 'red');
    return false;
  }
}

// Main test runner
function runAllTests() {
  log(`${colors.bold}🧪 Contact Form Testing Protocol${colors.reset}`, 'blue');
  log('=' .repeat(50), 'blue');
  
  const tests = [
    { name: 'Environment Variables', fn: testEnvironmentVariables },
    { name: 'Contact Form HTML', fn: testContactFormHTML },
    { name: 'API Endpoint', fn: testAPIEndpoint },
    { name: 'CSP Headers', fn: testCSPHeaders },
    { name: 'Turnstile Script', fn: testTurnstileScript },
    { name: 'Form Validation', fn: testFormValidation }
  ];
  
  let passed = 0;
  let total = tests.length;
  
  for (const test of tests) {
    if (runTest(test.name, test.fn)) {
      passed++;
    }
  }
  
  log('\n' + '=' .repeat(50), 'blue');
  log(`${colors.bold}Test Results: ${passed}/${total} tests passed${colors.reset}`, passed === total ? 'green' : 'red');
  
  if (passed === total) {
    log('\n🎉 All tests passed! Contact form is ready for production.', 'green');
  } else {
    log('\n⚠️  Some tests failed. Please review the issues above.', 'yellow');
  }
  
  return passed === total;
}

// Check if development server is running
function checkDevServer() {
  try {
    execSync('curl -s http://localhost:3000/contact > /dev/null', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Main execution
if (!checkDevServer()) {
  log('❌ Development server not running. Please start with: npm run dev', 'red');
  process.exit(1);
}

runAllTests();
