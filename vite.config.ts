import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [vue(),viteMockServe({ supportTs: true, mockPath: 'src/mock' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  server: {
    port: 3000, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      '/api': {
        target: 'https://blog.xiejunyi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})