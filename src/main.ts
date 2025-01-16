import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import pinia from './stores'
import 'virtual:svg-icons-register'

import App from './App.vue'

const app = createApp(App)

//icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//国际化
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(createPinia())
app.mount('#app')
