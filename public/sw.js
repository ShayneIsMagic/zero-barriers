const CACHE_NAME = 'zero-barriers-v2';
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
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 