/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base path for custom domain deployment
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      'react-helmet-async': 'react-helmet-async/lib/index.js',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime', 'react-helmet-async'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
