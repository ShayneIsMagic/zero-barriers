#!/usr/bin/env node

/**
 * Cloudflare Turnstile Setup Helper
 * This script helps you set up Turnstile CAPTCHA for your contact forms
 */

import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔐 Cloudflare Turnstile Setup Helper\n');

console.log('To get your Turnstile keys:');
console.log('1. Go to: https://dash.cloudflare.com/profile/api-tokens');
console.log('2. Click "Turnstile" in the sidebar');
console.log('3. Click "Add site"');
console.log('4. Enter your domain: zerobarriers.io');
console.log('5. Choose "Managed" challenge type');
console.log('6. Copy your Site Key and Secret Key\n');

rl.question('Enter your Turnstile Site Key: ', (siteKey) => {
  if (!siteKey || siteKey.length < 10) {
    console.log('❌ Invalid site key. Please try again.');
    rl.close();
    return;
  }

  console.log('\n📝 Updating contact forms with your site key...\n');

  try {
    // Update Next.js contact form
    const nextjsFormPath = path.join(__dirname, '../src/app/contact/page.tsx');
    let nextjsContent = fs.readFileSync(nextjsFormPath, 'utf8');
    nextjsContent = nextjsContent.replace('YOUR_SITE_KEY', siteKey);
    fs.writeFileSync(nextjsFormPath, nextjsContent);
    console.log('✅ Updated Next.js contact form');

    // Update Astro contact form
    const astroFormPath = path.join(__dirname, '../src/app/contact.astro');
    let astroContent = fs.readFileSync(astroFormPath, 'utf8');
    astroContent = astroContent.replace('YOUR_SITE_KEY', siteKey);
    fs.writeFileSync(astroFormPath, astroContent);
    console.log('✅ Updated Astro contact form');

    console.log('\n🎉 Setup complete!');
    console.log('\nNext steps:');
    console.log('1. Set up your Resend account: https://resend.com');
    console.log('2. Add your environment variables:');
    console.log('   - TURNSTILE_SECRET=your_secret_key');
    console.log('   - RESEND_API_KEY=your_resend_key');
    console.log('3. Deploy your application');
    console.log('4. Test the contact form\n');

  } catch (error) {
    console.error('❌ Error updating files:', error.message);
  }

  rl.close();
});

rl.on('close', () => {
  console.log('Goodbye! 👋');
  process.exit(0);
});
