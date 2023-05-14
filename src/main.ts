import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import './main.css'
import router from './router'


createApp(App).use(router).use(ArcoVue).use(ArcoVueIcon).mount('#app')
