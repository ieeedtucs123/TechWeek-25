import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker installed.')
})

self.addEventListener('activate', () => {
  console.log('Service Worker activated.')
})

self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: data.icon,
    badge: '/logoIcon.svg'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});