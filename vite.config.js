import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      host: '9000-idx-award-winning-websitegit-1732761285886.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev',
      protocol: 'wss', // Try 'wss' if using HTTPS, otherwise, 'ws'
      clientPort: 443,
    }
  },
  plugins: [react()],
})
