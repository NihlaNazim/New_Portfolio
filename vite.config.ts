// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/New_Portfolio/',   // ← repo name (keep the trailing slashes as shown)
})
