const CACHE_NAME = 'cigar-converter-v1';
const urlsToCache = [
  './cigar-conversion-app.html',
  './manifest.json',
  './Cigar-Converter-icon-192.png', // Add these if you create icon files
  './Cigar-Converter-icon-512.png', // Add these if you create icon files
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
