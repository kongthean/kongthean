/* Thean: shows notifications sent from the admin (no offline caching, the website works as before) */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data ? e.data.text() : '' }; }
  var opts = {
    body: d.body || '',
    icon: d.icon || '/icons/favicon-192.png',
    badge: '/icons/favicon-96.png',
    data: { url: d.url || '/' },
    tag: d.tag || undefined,
    lang: d.lang || undefined
  };
  if (d.img) opts.image = d.img;
  e.waitUntil(self.registration.showNotification(d.title || 'Thean', opts));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.url.indexOf(self.location.origin) === 0 && 'focus' in c) {
        if ('navigate' in c) { try { c.navigate(url); } catch (x) {} }
        return c.focus();
      }
    }
    return self.clients.openWindow(url);
  }));
});
