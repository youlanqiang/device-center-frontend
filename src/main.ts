import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import './main.css'
import router from './router'
createApp(App).use(router).use(ArcoVue).mount('#app')
