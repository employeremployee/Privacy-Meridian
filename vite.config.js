import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base is '/' for local dev and a custom domain. GitHub Pages project sites
// serve from a subpath, so the deploy workflow sets VITE_BASE=/Privacy-Meridian/.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})
