#!/usr/bin/env node

console.log('🧹 Clearing all caches and forcing fresh content...\n');

// Instructions for manual cache clearing
console.log('📋 MANUAL CACHE CLEARING STEPS:');
console.log('================================');
console.log('');
console.log('1. BROWSER CACHE CLEARING:');
console.log('   • Chrome/Edge: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)');
console.log('   • Firefox: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)');
console.log('   • Safari: Cmd+Option+E');
console.log('');
console.log('2. HARD REFRESH:');
console.log('   • Windows: Ctrl+F5');
console.log('   • Mac: Cmd+Shift+R');
console.log('   • Or hold Shift and click refresh button');
console.log('');
console.log('3. DEVELOPER TOOLS:');
console.log('   • Open DevTools (F12)');
console.log('   • Right-click refresh button');
console.log('   • Select "Empty Cache and Hard Reload"');
console.log('');
console.log('4. CLOUDFLARE CACHE:');
console.log('   • Visit: https://dash.cloudflare.com/');
console.log('   • Go to Caching > Configuration');
console.log('   • Click "Purge Everything"');
console.log('');
console.log('5. FORCE SERVICE WORKER UPDATE:');
console.log('   • Open DevTools > Application > Service Workers');
console.log('   • Click "Unregister" then refresh page');
console.log('');

// Check if we're in a browser environment
if (typeof window !== 'undefined') {
  console.log('🌐 BROWSER ENVIRONMENT DETECTED');
  console.log('Automatically clearing caches...');
  
  // Clear all caches
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        console.log(`🗑️  Clearing cache: ${cacheName}`);
        caches.delete(cacheName);
      });
    });
  }
  
  // Clear localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();
  console.log('🗑️  Cleared localStorage and sessionStorage');
  
  // Force service worker update
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        registration.unregister();
        console.log('🔄 Unregistered service worker');
      });
    });
  }
  
  console.log('✅ Cache clearing complete! Refresh the page.');
} else {
  console.log('💻 NODE ENVIRONMENT DETECTED');
  console.log('Please follow the manual steps above to clear browser caches.');
}

console.log('\n🎯 After clearing caches, your site should load the optimized version!'); 