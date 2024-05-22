import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { createBootstrap } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App).use(createBootstrap()).use(store).use(router).mount('#app');
