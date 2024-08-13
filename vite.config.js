import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy:{
    //   '/api':'http://localhost:8800',
    // },
    proxy: {
      '/api': {
        // Replace with your API server URL
        // target: 'http://localhost:8800/api',
        target: 'https://mediahubbackend.onrender.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
