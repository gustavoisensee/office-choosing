import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/weather": {
        target: "http://api.openweathermap.org",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/weather/, ''),
      },
      "/flights": {
        target: "https://partners.api.skyscanner.net",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/flights/, ''),
      }
    }
  }
})
