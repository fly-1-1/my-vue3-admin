import { fileURLToPath, URL } from 'node:url'
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'



// https://vite.dev/config/
export default (({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/variables.scss" as *;'
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
