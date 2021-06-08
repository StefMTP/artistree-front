import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.css';                            //primeflex

require('@/store/subscriber');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

store.dispatch('attempt', {
    token: localStorage.getItem('token')
}).then(() => {
    const app = createApp(App);
    
    app.use(store);
    app.use(router);

    app.use(PrimeVue);

    app.component('Button', Button);
    app.component('MenuBar', Menubar);
    app.component('InputText', InputText);
    app.component('Card', Card);
    app.component('Message', Message);
    app.component('DropDown', Dropdown);
    
    app.mount('#app');
});
