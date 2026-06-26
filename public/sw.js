/**
 * Legacy service worker uninstaller.
 * Replaces the old zero-barriers-v4 worker that intercepted fetches.
 * This file unregisters itself and clears site caches on the next visit.
 */
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
    })()
  )
})

// Do not cache or intercept — pass all requests to the network.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})
