import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Register from '../views/Register';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
