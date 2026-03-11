const CACHE = 'workout-v4';
const BASE = '/Lifting-App';
const ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/app.js',
  BASE + '/manifest.json',
  BASE + '/icon-192.png',
  BASE + '/icon-512.png',
];

self.addEventListener('install', e => {
  // Force immediate activation — don't wait for old tabs to close
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    // Delete ALL old caches immediately
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => {
        console.log('Deleting old cache:', k);
        return caches.delete(k);
      }))
    ).then(() => {
      console.log('New SW active, claiming clients');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    // Network first — always try to get fresh, fall back to cache
    fetch(e.request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
