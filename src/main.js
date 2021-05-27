import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';

require('@/store/subscriber');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

store.dispatch('attempt', {
    token: localStorage.getItem('token')
}).then(() => {
    const app = createApp(App);
    
    app.use(store);
    app.use(router);
    
    app.mount('#app');
});
