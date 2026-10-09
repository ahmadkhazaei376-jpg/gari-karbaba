const CACHE = "kahroba-v6-1";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if(e.request.method !== "GET") return;
  if(url.origin === self.location.origin){
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
        const cl = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, cl));
        return resp;
      }))
    );
    return;
  }
  e.respondWith(
    fetch(e.request).then(resp => {
      const cl = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, cl));
      return resp;
    }).catch(() => caches.match(e.request))
  );
});
