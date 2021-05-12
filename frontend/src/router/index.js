import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Acheter from '../views/Acheter.vue'
import Vendre from '../views/Vendre.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import List from '../views/Liste.vue'
import Good from '../views/Bien.vue'
import store from '../store.js'

Vue.use(VueRouter)

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
    path: '/acheter',
    name: 'Acheter',
    component: Acheter
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/bien/:id',
    name: 'Good',
    component: Good
  },
  {
    path: '/vendre',
    name: 'Vendre',
    component: Vendre
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
