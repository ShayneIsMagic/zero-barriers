'use client'

import { useEffect } from 'react'

/**
 * Removes legacy service workers left from the previous static site (sw.js v4).
 * Those workers intercepted network requests and broke third-party scripts like Umami.
 */
export function ServiceWorkerCleanup() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

    const cleanup = async () => {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations()
        await Promise.all(registrations.map((registration) => registration.unregister()))

        if ('caches' in window) {
          const keys = await caches.keys()
          await Promise.all(
            keys
              .filter((key) => key.startsWith('zero-barriers') || key.startsWith('static-') || key.startsWith('dynamic-'))
              .map((key) => caches.delete(key))
          )
        }
      } catch {
        // Ignore cleanup failures — a stale SW is a best-effort fix.
      }
    }

    void cleanup()
  }, [])

  return null
}
