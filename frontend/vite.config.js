import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  // Load env variables based on current mode
  const env = loadEnv(mode, process.cwd(), '')

  // Safely get API_BASE
  const API_BASE = env.VITE_API_BASE || ''

  return {
    plugins: [
      react(),
      VitePWA({
  registerType: 'autoUpdate',

        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.js',
        
  includeAssets: [
    'favicon.ico',
    'robots.txt',
    'apple-touch-icon.png',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.webp',
  ],
  manifest: {
    name: 'TechWeek 25',
    short_name: 'TechWeek 25',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d6efd',
    icons: [
      { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
     screenshots: [
          {
            src: 'ccc.png', // Your screenshot file in the public folder
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide', // For desktop
            label: 'Desktop App View'
          },
          {
            src: 'ccc.png', // A mobile screenshot in the public folder
            sizes: '540x720',
            type: 'image/png',
            form_factor: 'narrow', // For mobile
            label: 'Mobile App View'
          }
        ]
  },
  workbox: {
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // allow files up to 5MB
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'image-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
  ],
},
})

    ]
  }
})
