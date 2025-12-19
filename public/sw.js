const CACHE_NAME = 'zero-barriers-v4';
const STATIC_CACHE = 'static-v4';
const DYNAMIC_CACHE = 'dynamic-v4';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/styles/main.css',
  '/js/main.js',
  '/images/optimized/Human_Transformation.webp',
  '/images/optimized/Human_Transformation.avif',
  '/images/optimized/Human_Transformation.jpg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement cache-first strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    // Image caching strategy: cache-first with network fallback
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'style' || request.destination === 'script') {
    // CSS/JS caching strategy: cache-first
    event.respondWith(handleStaticAssetRequest(request));
  } else if (url.pathname.startsWith('/api/')) {
    // API requests: network-first with cache fallback
    event.respondWith(handleApiRequest(request));
  } else {
    // HTML pages: network-first with cache fallback
    event.respondWith(handlePageRequest(request));
  }
});

// Handle image requests with format optimization
async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return a fallback image if available
    const fallbackResponse = await cache.match('/images/fallback.jpg');
    return fallbackResponse || new Response('Image not available', { status: 404 });
  }
}

// Handle static asset requests
async function handleStaticAssetRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    return new Response('Asset not available', { status: 404 });
  }
}

// Handle API requests
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('API not available', { status: 503 });
  }
}

// Handle page requests
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    const offlineResponse = await cache.match('/offline.html');
    return offlineResponse || new Response('Page not available', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Perform background sync tasks
    console.log('Performing background sync');
    
    // You can add specific sync logic here
    // For example, syncing form submissions, analytics, etc.
    
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/images/icon-192x192.png',
      badge: '/images/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View',
          icon: '/images/checkmark.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/images/xmark.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 