// Minimal service worker so phones can install the app.
// It never stores health data or app code: everything comes fresh from the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || r.mode !== "navigate") return;
  e.respondWith(fetch(r).catch(() => new Response(
    '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title>' +
    '<body style="font-family:system-ui;padding:40px 24px;color:#16302A;background:#F2F5F3">' +
    '<h1 style="font-weight:600">You\'re offline</h1><p>Your logbook needs the internet. Reconnect, then pull down or reopen the app.</p></body>',
    { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
