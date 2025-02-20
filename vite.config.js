import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    '/customers': {
      target: 'http://localhost:3000'
      },
      '/orders': {
        target: 'http://localhost:3001'
      },
      '/order_details': {
        target: 'http://localhost:3002'
      },
      '/products': {
        target: 'http://localhost:3003'
      }
    }
  }
})
