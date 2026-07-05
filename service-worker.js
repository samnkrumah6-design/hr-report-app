// Minimal service worker — its only job is to satisfy Chrome's PWA
// installability requirements so "Add to Home Screen" uses the manifest's
// real icon instead of falling back to a generic letter/shortcut.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through: just fetch normally, no offline caching needed for now.
  event.respondWith(fetch(event.request));
});
