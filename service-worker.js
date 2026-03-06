const CACHE_NAME = 'swal-payroll-v2';
const urlsToCache = [
  '/swal-payroll-calculator/',
  '/swal-payroll-calculator/index.html',
  '/swal-payroll-calculator/manifest.json'
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
