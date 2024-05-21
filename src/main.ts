import '@/assets/styles/null.scss'
import 'vue-final-modal/style.css'
import 'swiper/scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { createVfm } from 'vue-final-modal'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(vfm)

app.mount('#app')
