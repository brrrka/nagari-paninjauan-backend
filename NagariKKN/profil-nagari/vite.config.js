import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy untuk API
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/nagari-api/api'),
      },
      // Proxy untuk uploads (agar gambar bisa diakses)
      '/uploads': {
        target: 'http://localhost',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/uploads/, '/nagari-api/uploads'),
      },
    },
  },
})