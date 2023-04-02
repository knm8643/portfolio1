import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from "@/vuex/store.js";

createApp(App).use(router).use(store).mount('#app')
