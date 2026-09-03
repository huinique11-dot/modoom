// Minimal service worker — its only job is to exist and register a fetch
// handler so the browser considers this app installable ("Add to Home
// Screen" / beforeinstallprompt). It deliberately does no caching: every
// request just falls through to the network untouched, so the app is
// never served stale content.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
