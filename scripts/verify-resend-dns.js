#!/usr/bin/env node

/**
 * Script to verify Resend DNS records are correctly configured
 * 
 * Usage: node scripts/verify-resend-dns.js
 */

const { execSync } = require('child_process')
const domain = 'zerobarriers.io'

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

function checkDNS(recordName, expectedContent, description) {
  console.log(`\n${colors.cyan}Checking ${description}...${colors.reset}`)
  console.log(`Record: ${colors.blue}${recordName}${colors.reset}`)
  
  try {
    const result = execSync(`dig TXT ${recordName}.${domain} +short`, { encoding: 'utf-8' })
    const records = result.trim().split('\n').filter(line => line.trim())
    
    if (records.length === 0) {
      console.log(`${colors.red}❌ Record not found${colors.reset}`)
      return false
    }
    
    // Check if expected content is in any of the records
    const found = records.some(record => {
      // Remove quotes from dig output
      const cleanRecord = record.replace(/^"|"$/g, '')
      return cleanRecord.includes(expectedContent) || cleanRecord === expectedContent
    })
    
    if (found) {
      console.log(`${colors.green}✅ Record found and content matches${colors.reset}`)
      records.forEach(r => console.log(`   ${r}`))
      return true
    } else {
      console.log(`${colors.yellow}⚠️  Record found but content doesn't match expected value${colors.reset}`)
      records.forEach(r => console.log(`   Found: ${r}`))
      console.log(`   ${colors.yellow}Expected: ${expectedContent}${colors.reset}`)
      return false
    }
  } catch (error) {
    console.log(`${colors.red}❌ Error checking record: ${error.message}${colors.reset}`)
    return false
  }
}

// Expected DNS records
const expectedRecords = [
  {
    name: 'resend._domainkey',
    content: 'p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChoLlkghW8ptDeH4Gn1xKoj3XFUwDsnuhrR1CK5LjLUv1dtWYSDsaJ6E9XDS1YYyRrPiPbG08lYapLE33C4re5rdhZrEb06hg8cyx/D4YX5msgPFEjhsuFH54oaYZiGtB2fNgjAWFBNPsPACwmRbbVI3QQIijgdNoHl2tRruyeTQIDAQAB',
    description: 'DKIM Record'
  },
  {
    name: 'send',
    content: 'feedback-smtp.us-east-1.amazonses.com',
    description: 'SPF Record (Feedback)'
  },
  {
    name: 'send',
    content: 'v=spf1 include:amazonses.com ~all',
    description: 'SPF Record (Policy)'
  },
  {
    name: '_dmarc',
    content: 'v=DMARC1; p=none;',
    description: 'DMARC Record'
  }
]

console.log(`${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`)
console.log(`${colors.blue}  Resend DNS Verification for ${domain}${colors.reset}`)
console.log(`${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`)

const results = expectedRecords.map(record => 
  checkDNS(record.name, record.content, record.description)
)

const allPassed = results.every(r => r === true)

console.log(`\n${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`)
if (allPassed) {
  console.log(`${colors.green}✅ All DNS records are correctly configured!${colors.reset}`)
  console.log(`\n${colors.cyan}Next steps:${colors.reset}`)
  console.log(`1. Go to: https://resend.com/domains`)
  console.log(`2. Click "Verify" for ${domain}`)
  console.log(`3. Wait for status to show "Verified"`)
} else {
  console.log(`${colors.red}❌ Some DNS records are missing or incorrect${colors.reset}`)
  console.log(`\n${colors.yellow}Please check:${colors.reset}`)
  console.log(`1. All records are added in Cloudflare DNS`)
  console.log(`2. All records have gray cloud (DNS only), not orange`)
  console.log(`3. Record names and content match exactly`)
  console.log(`4. Wait 5-30 minutes after adding records for propagation`)
}
console.log(`${colors.blue}═══════════════════════════════════════════════════════${colors.reset}\n`)

process.exit(allPassed ? 0 : 1)
