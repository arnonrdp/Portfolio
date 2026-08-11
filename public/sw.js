// ponytail: hand-written instead of next-pwa/workbox — the site is one static
// page, so the entire caching policy is the few rules below. Bump CACHE to
// invalidate everything at once; the activate handler drops older versions.
const CACHE = 'arnon-v1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(['/', '/arnon-face.svg']))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  // Analytics and the GitHub API are cross-origin; leave them alone.
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return

  // Pages go to the network first, always: serving a cached document would pin
  // visitors to an old deploy. The cache is only the offline fallback.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE).then((cache) => cache.put('/', copy))
          return response
        })
        .catch(() => caches.match('/'))
    )
    return
  }

  // Assets are either content-hashed by Next or rarely touched: serve from the
  // cache when present, otherwise fetch and keep a copy.
  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ||
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone()
            caches.open(CACHE).then((cache) => cache.put(request, copy))
          }
          return response
        })
    )
  )
})
