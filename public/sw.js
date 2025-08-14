const CACHE_NAME = 'zero-barriers-v4';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/js/main.js',
  '/images/side-profile-tech.png',
  '/images/Team.png',
  '/images/Human_Transformation.png',
  '/zblogo.png',
  '/images/caselle-updated-logo.png',
  '/images/devpipeline-black-logo.png',
  '/images/Q90-LOGO.svg',
  '/images/Salesforce_Consulting_Logo.svg',
  '/images/Sebo Logosvg.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Skip caching for non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before caching
        const responseClone = response.clone();
        
        // Cache the response for future use
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        
        return response;
      })
      .catch(() => {
        // If fetch fails, try to serve from cache
        return caches.match(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Force refresh of all clients
      return self.clients.claim();
    })
  );
}); 