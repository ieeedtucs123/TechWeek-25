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
  let data = {}; // Default empty object
  let rawDataText = ''; // Variable to store raw text

  // Try to read the data as text first
  try {
      rawDataText = event.message.text();
  } catch (e) {
      console.error('Failed to read push data as text:', e);
      rawDataText = 'Could not read push data.'; // Fallback text
  }

  // Now, try to parse the text as JSON
  try {
    data = JSON.parse(rawDataText);
  } catch (e) {
    console.warn('Push data was not valid JSON, using raw text:', rawDataText);
    // If JSON parsing fails, create a default data object
    data = {
      title: 'Notification', // Default title
      body: rawDataText,     // Use the raw text as the body
      icon: '/pwa-512x512.png' // Default icon
    };
  }

  // Prepare notification options using the parsed or fallback data
  const options = {
    body: data.message || 'No body provided', // Add fallback for body
    icon: data.icon || '/pwa-512x512.png', // Fallback icon
    badge: '/logoIcon.svg',
    sound: '/notification-sound.mp3'
  };
  const title = data.title || 'Notification Received'; // Fallback title

  // Show the notification
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});