// Service worker for pre-caching the required pages

const cacheName = 'version1';

self.addEventListener('install', (e) => {
    e.waitUntil(
    // preCaching()
    //     .then(()=> self.skipWaiting())
    //     .catch(console.error)
    self.skipWaiting()
    );
})

function preCaching(){
    return new Promise ((res, rej) => {
        caches
        .open(cacheName)
        .then(cache => {
            cache.addAll([
                    'index.html',
                    'about.html',
                    'about2.html',
                    "stylesheets/style.css"
                ])
        })
        .then(response => res(response))
        .catch(response => rej(response));
    });
}

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
            // .then(res => self.clients.claim())
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(networkFirst(e.request)); // Can be switched between network first and cache first algorithms
})

function networkFirst(request){
    if(!navigator.onLine){
        return caches.match(request)
    }

    return fetch(request)
                .then(res => {
                    let resClone = res.clone();
                    caches.open(cacheName).then(cache => cache.put(request, resClone))
                    return res;
                });
}

function cacheFirst(request) {
    return caches.match(request)
                .then(cache => {
                    if(cache){
                        return cache;
                    }

                    return fetch(request)
                        .then(res => {
                            let resClone = res.clone();
                            return caches.open(cacheName).then(cache => cache.put(request, resClone))
                            .then(res => res);
                        })
                })
        .catch(() => caches.match(request));
}
