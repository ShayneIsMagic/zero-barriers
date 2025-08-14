// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output configuration for Cloudflare Pages
  output: 'static',
  
  // SEO and security optimizations
  site: 'https://zerobarriers.io',
  trailingSlash: 'always',
});
