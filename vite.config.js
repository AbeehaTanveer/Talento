import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tailwindcss(),
    react()],
     animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      }
    
    
    
})
