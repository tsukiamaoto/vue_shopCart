import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  baseAssertUrl: 'http://localhost:3000/',
  server: {
    hmr: {
      path: '/',
      host: 'localhost',
      port: 3000,
      protocol: 'ws'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    vue(),
    Components({
      dirs:['src/components'],
      // resolvers: [ElementPlusResolver()],
    })
  ]
})
