import { fileURLToPath, URL } from 'node:url'
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'



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
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
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
