import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// 按需引入组件
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
// 打包js css时压缩成gz
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    Components({
      resolvers: [
          AntDesignVueResolver()
      ],
      dts: true
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#bfa',
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, './src')}/` },
    ]
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