import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from "@/vuex/store.js";
import globals from  '@/global/index.js'

const app = createApp(App)

app.use(router).use(store).use(globals)
    .mount('#app')
