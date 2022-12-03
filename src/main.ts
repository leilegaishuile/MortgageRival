import { createApp } from 'vue';
import store from './store';

import App from './App.vue';
import router from './router';

import 'element-plus/dist/index.css';
import './assets/style/index.css';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
