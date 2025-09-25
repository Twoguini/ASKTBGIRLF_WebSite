import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // importante para rodar dentro do Electron
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true, // garante que use exatamente a porta 5173
    hmr: {
      host: '192.168.1.19', // IP do Windows
      protocol: 'ws',
    },
  },
})
