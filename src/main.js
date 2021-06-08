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

// Whenever the app starts or refreshes, this code runs.
// Our front end utilizes the store of Vuex as a global state management system, in order to
// keep authentication info (user details and the token) for the entire application.
// It also uses simple cookies to store the token, so that the authentication status
// does not go away when we refresh the app.
// We also use the Vue Router to render views dynamically on the front page, depending on
// the URL the user requests.
// We used the UI framework called PrimeVue for layout and styling throughout the app.
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
