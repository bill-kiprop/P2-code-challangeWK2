import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  


  build: {
    outDir: resolve(process.cwd(), 'build')// Specify the output directory
  },

  plugins: [react()],
})
