import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    token: null,
    user: null
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    getUserDetails(state) {
      return state.user;
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token;
    },
    setUser(state, payload) {
      state.user = payload.user;
    }
  },
  actions: {
    async login(context, payload) {
      const response = await axios.post('auth/login', {
        email: payload.email,
        password: payload.password
      });
      // get response on bad creds

      return context.dispatch('attempt', {
        token: response.data.token
      });
      // another action for register: send a request on auth/register with the appropriate fields, check if everything is good and dispatch a login for the newly ceated user
    },
    async attempt(context, payload) {
      // If there is a non null token in the payload, use it to set our token, if not then, the token hasn't been set in the state and we can stop the attempt.
      if(payload.token){
        context.commit('setToken', {
          token: payload.token
        });
      }

      if(!context.state.token) {
        return;
      }

      try {
        // obviously, this needs a valuable header to work: We have set our backend to work in a way that restricted resources can be accessed only by passing an Authorization header to our request, set to 'Bearer <jwt token>'. The header is automatically passed in by a store subscriber that listens for mutations and applies the proper header with axios.
        const response = await axios.get('/user');
        
        context.commit('setUser', {
          user: response.data
        });
        
        // if there's an error with authorization, then the authentication status (token and user details) must be cleared
      } catch(err) {
        context.dispatch('clearAuth');
      }
    },
    async logout(context) {
      // the request is sent to the api to notify that it must log the user out 
      await axios.post('/auth/logout');
      // clear authentication status to signify that user is logged out
      context.dispatch('clearAuth');
    },
    clearAuth(context) {
      context.commit('setToken', {
        token: null
      });
      context.commit('setUser', {
        user: null
      });
    }
  }
});
