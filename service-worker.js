const CACHE_NAME='qj-offline-cache-v4';
const FILES=['./','./index.html','./car-game.html','./flashcards.html','./colour-match.html','./memory-match.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));});
self.addEventListener('activate',e=>{self.clients.claim();e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
