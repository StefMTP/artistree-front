import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Register from '../views/Register';
import Ads from '../views/Ads';
import Ad from '../views/Ad';
import Post from '../views/Post';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
    props: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Ads
  },
  {
    path: '/ad/:id',
    name: 'Ad',
    component: Ad,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  if(to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
