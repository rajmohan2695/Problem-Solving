const cacheVersion = 'v2Pictures';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheVersion)
        .then(self.skipWaiting())
    )})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(allCaches => {
                return Promise.all(allCaches.map(cache => {
                    if(cache != cacheVersion){
                        return caches.delete(cache)
                    }
                }))
            })
        .then(res => console.log('Removed unwanted caches'))
        .catch(console.error)
    )})

    self.addEventListener('fetch', (event) => {
        if(!event.request.url.includes('http://picsum.photos/600')) { return event.respondWith(fetch(event.request))}
        console.log(event.request)
            event.respondWith(
                caches.match(event.request)
                .then(res => {
                    if(res){
                        return res;
                    }

                    return fetch(event.request)
                            .then(res => {
                                return caches.open(cacheVersion)
                                    .then(cache => {
                                        const response = res.clone();
                                        console.log(response)
                                        return cache.put(event.request, response)
                                    })
                                    .then(() => res)
                            })
                })
            )
    })