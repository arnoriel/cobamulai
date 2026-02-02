import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ],
  build: {
    rollupOptions: {
      output: {
        // Jurus memecah file raksasa menjadi potongan kecil (chunks)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Pisahkan Supabase karena dia besar
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            // Pisahkan Framer Motion
            if (id.includes('framer-motion')) {
              return 'framer';
            }
            // Sisanya masukkan ke vendor (termasuk react & react-dom)
            return 'vendor';
          }
        },
      },
    },
  },
})