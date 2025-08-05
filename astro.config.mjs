// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output configuration for Cloudflare Pages
  output: 'static',
  
  // SEO and security optimizations
  site: 'https://zerobarriers.io',
  trailingSlash: 'never',
  
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  
  // Vite configuration for better performance and security
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
      // Optimize for Cloudflare Pages
      target: 'esnext',
      minify: 'esbuild',
    },
    ssr: {
      noExternal: ['astro'],
    },
    // Security optimizations
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
  },
});
