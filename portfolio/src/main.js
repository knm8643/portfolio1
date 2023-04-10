import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from "@/vuex/store.js";
import globals from  '@/router/index.js'

createApp(App)
    .use(router).use(store).use(globals)
    .mount('#app')
