import store from '@/store';
import axios from 'axios';

// use the subscriber to automatically set axios headers whenever a mutation is trying to happen that has to do with authentication.
store.subscribe((mutation, _) => {
    // if the mutation type is that of setToken
    switch(mutation.type) {
        case 'setToken':
            // if we have a token payload, use it to set our token
            if(!!mutation.payload.token) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + mutation.payload.token;
                localStorage.setItem('token', mutation.payload.token);
            } else {
                axios.defaults.headers.common['Authorization'] = null;
                localStorage.removeItem('token');
            }
            break;
    }
});