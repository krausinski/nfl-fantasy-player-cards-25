import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/nfl-fantasy-player-cards-25/',
  plugins: [react()],
})
