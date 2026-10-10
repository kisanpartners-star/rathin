import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fully static build. `npm run build` also produces a small SSR bundle
// (dist-server) that scripts/prerender.mjs uses to write real HTML for every route.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 900,
    copyPublicDir: !isSsrBuild,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              react: ['react', 'react-dom', 'react-router-dom'],
              motion: ['framer-motion'],
              swiper: ['swiper'],
            },
          },
        },
  },
  ssr: {
    // Bundle these into the SSR build so Node ESM/CJS interop never gets in the way.
    noExternal: ['react-helmet-async', 'swiper', 'react-icons', 'framer-motion', '@emailjs/browser'],
  },
}));
