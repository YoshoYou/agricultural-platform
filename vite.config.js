import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(),tailwindcss()], 
  base: '/agricultural-platform/', 
  server: {
    port:3000,//changed the port to 3000
  }
})
