import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from './locals/index.js'

import 'element-plus/theme-chalk/src/progress.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
