import { precacheAndRoute } from 'workbox-precaching'

// This tells Workbox to handle pre-caching
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker installed.')
})

self.addEventListener('activate', () => {
  console.log('Service Worker activated.')
})

// Push event listener with robust data handling
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
    console.warn('Push data was not valid JSON, using raw text:', rawDataText);
    data = {
      title: 'Notification',
      message: rawDataText, // ✅ Corrected key here
      icon: '/pwa-512x512.png'
    };
  }

  const options = {
    body: data.message || 'No message provided', // Now this will find the message
    icon: data.icon || '/pwa-512x512.png',
    badge: '/logoIcon.svg',
    sound: '/notification-sound.mp3'
  };
  const title = data.title || 'Notification Received';

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});