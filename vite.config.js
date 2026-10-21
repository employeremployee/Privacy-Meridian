import { execSync } from 'node:child_process'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The footer's "Last updated" date is the date of the latest commit, so it moves
// when the site's content or code changes, not on the 2-hourly news rebuilds.
// Falls back to today if git is unavailable.
function lastCommitDate() {
  try {
    return execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim()
  } catch {
    return new Date().toISOString()
  }
}

// Cloudflare Pages serves 404.html, with a 404 status, for addresses that match no
// file or rule in public/_redirects. Copying the app's index.html there lets the
// React not-found page render while search engines see a real 404.
function notFoundPage() {
  return {
    name: 'not-found-page',
    apply: 'build',
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

// base is '/' for local dev and a custom domain. GitHub Pages project sites
// serve from a subpath, so the deploy workflow sets VITE_BASE=/Privacy-Meridian/.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss(), notFoundPage()],
  define: {
    __LAST_UPDATED__: JSON.stringify(lastCommitDate()),
  },
})
