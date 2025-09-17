import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative base so the site works under a custom domain and when served
  // from the repository root. A fixed base path caused assets to be requested
  // from `/Limpopo-Connect-/...` which breaks when the site is served at
  // the custom domain root (e.g. https://limpopoconnect.site/).
  base: './',
  plugins: [react()],
})
