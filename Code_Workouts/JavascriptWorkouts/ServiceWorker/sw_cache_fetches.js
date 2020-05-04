// Caching the data from the fetch

const cacheName = 'version2';

self.addEventListener('install', () => {
    console.log('Service worker Installed')
    self.skipWaiting();
})

self.addEventListener('activate', e => {
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
    e.respondWith(
        fetch(e.request)
            .then(res => {
                let fetchResponse = res.clone();
                caches.open(cacheName)
                    .then(cache => {
                        cache.put(e.request, fetchResponse)
                    })
                    return res;
            })
            .catch(() => caches.match(e.request))
    )
})