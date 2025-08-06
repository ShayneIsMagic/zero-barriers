// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output configuration for Cloudflare Pages
  output: 'static',
  
  // SEO and security optimizations
  site: 'https://zerobarriers.io',
  trailingSlash: 'always',
  
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [{ protocol: "https" }],
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
      cssMinify: true,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
    },
    ssr: {
      noExternal: ['astro'],
    },
    // Security optimizations
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    // CSS optimization
    css: {
      devSourcemap: false,
    },
    // Performance optimizations
    optimizeDeps: {
      include: ['astro'],
    },
  },
});
