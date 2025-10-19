import { precacheAndRoute } from 'workbox-precaching'

// ✅ Handle precaching by Workbox
precacheAndRoute(self.__WB_MANIFEST)

// Log install & activation
self.addEventListener('install', () => {
  console.log('✅ Service Worker installed.')
})

self.addEventListener('activate', () => {
  console.log('🚀 Service Worker activated.')
})

// ✅ Push event listener
self.addEventListener('push', event => {
  let data = {};
  let rawDataText = '';

  try {
    rawDataText = event.data.text();
  } catch (e) {
    console.error('Failed to read push data as text:', e);
    rawDataText = 'Could not read push data.';
  }

  try {
    data = JSON.parse(rawDataText);
  } catch (e) {
    console.warn('Push data was not valid JSON, using raw text instead:', rawDataText);
    data = {
      title: 'Notification',
      message: rawDataText,
      icon: '/pwa-512x512.png',
      url: 'https://techweek.ieeedtu.in/' // default URL if not provided
    };
  }

  const options = {
    body: data.message || 'No message provided',
    icon: data.icon || '/pwa-512x512.png',
    badge: '/logoIcon.svg',
    data: { url: data.url || 'https://techweek.ieeedtu.in/' } // store target URL for click handling
  };

  const title = data.title || 'Notification Received';

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// ✅ Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();

  const targetUrl = event.notification.data?.url || 'https://techweek.ieeedtu.in/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // If the app is already open, focus it
      for (const client of windowClients) {
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus();
        }
      }

      // Otherwise, open a new tab
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
