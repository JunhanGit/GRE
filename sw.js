const CACHE_NAME='gre-pwa-v4-21a';
const ASSETS=['./','./index.html','./study.html','./library.html','./settings.html',
'./manifest.json','./sw.js','./icon-192.png','./icon-512.png','./apple-touch-icon.png',
'./gre_demo_120.csv','./gre_template.csv'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE_NAME?null:caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin===location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));}});
