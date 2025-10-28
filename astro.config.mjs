// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output configuration for Cloudflare Pages
  output: 'static',
  site: 'https://zerobarriers.io',
  trailingSlash: 'always',
  
  // Performance optimizations
  build: {
    inlineStylesheets: 'never',
    assets: '_astro',
  },
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [{ protocol: "https" }],
  },
  
  // Vite configuration for performance optimization
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    },
    css: {
      devSourcemap: false,
    },
  },
});
