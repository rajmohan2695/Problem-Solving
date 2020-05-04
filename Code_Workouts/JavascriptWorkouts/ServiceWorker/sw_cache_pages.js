// Service worker for pre-caching the required pages

const cacheName = 'version1';

const cacheItems = [
    'index.html',
    'about.html',
    'about2.html',
    'css/style.css'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
    caches
        .open(cacheName)
        .then(cache => {
            cache.addAll(cacheItems)
        })
        .then(()=> self.skipWaiting())
    );
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache != cacheName){
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})