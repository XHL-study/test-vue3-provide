import {
	createApp
} from 'vue'
import App from './App.vue'
import customProvide from '@/provide/index.js';
import router from '@/router/index.js'

const app = createApp(App);
app.use(router);
app.config.unwrapInjectedRef = true
app.use(customProvide);
app.mount('#app');

// const appb = createApp(App);
// appb.use(customProvide);
// appb.mount('#appb');
