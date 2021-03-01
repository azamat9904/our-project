import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerBaseComponents } from '@/helpers/registerBaseComponents';

const app = createApp(App);

registerBaseComponents(app);

app.use(store).use(router).mount('#app')
