#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the keys from KEYS_TEMPLATE.txt
const keysPath = path.join(__dirname, '..', 'KEYS_TEMPLATE.txt');
const envPath = path.join(__dirname, '..', '.env.local');

try {
  const keysContent = fs.readFileSync(keysPath, 'utf8');
  
  // Extract the actual values
  const siteKeyMatch = keysContent.match(/TURNSTILE_SITE_KEY=(.+)/);
  const secretKeyMatch = keysContent.match(/TURNSTILE_SECRET_KEY=(.+)/);
  const resendKeyMatch = keysContent.match(/RESEND_API_KEY=(.+)/);
  
  if (!siteKeyMatch || !secretKeyMatch || !resendKeyMatch) {
    console.error('Could not find all required keys in KEYS_TEMPLATE.txt');
    process.exit(1);
  }
  
  const siteKey = siteKeyMatch[1];
  const secretKey = secretKeyMatch[1];
  const resendKey = resendKeyMatch[1];
  
  // Create the .env.local content
  const envContent = `# Zero Barriers Contact Form - API Keys
# Store your keys here securely
# DO NOT commit this file to version control

# Cloudflare Turnstile CAPTCHA
TURNSTILE_SITE_KEY=${siteKey}
TURNSTILE_SECRET_KEY=${secretKey}

# Resend Email Service
RESEND_API_KEY=${resendKey}

# Instructions:
# 1. This file contains your actual API keys
# 2. Never commit this file to version control
# 3. Keep these keys secure and private
# 4. The Turnstile Site Key can be public (used in frontend)
# 5. The Turnstile Secret Key and Resend API Key must remain private

# Security Notes:
# - Turnstile Site Key: Safe to expose (used in frontend forms)
# - Turnstile Secret Key: Keep private (server-side verification only)
# - Resend API Key: Keep private (email sending only)
`;

  // Write the .env.local file
  fs.writeFileSync(envPath, envContent);
  
  console.log('✅ Successfully updated .env.local with your API keys');
  console.log('🔒 Keys are now securely stored and ready for use');
  
} catch (error) {
  console.error('Error updating .env.local:', error.message);
  process.exit(1);
}
