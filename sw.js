const CACHE='gre-full-v4-22-4';
const ASSETS=['./','./index.html','./study.html','./library.html','./settings.html','./manifest.json','./sw.js','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE?null:caches.delete(k))))); self.clients.claim();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url); if(u.origin===location.origin){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); }});