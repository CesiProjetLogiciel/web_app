import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerClient from '../views/clientsPart/registerClient.vue'
import registerRestorer from '../views/restorer/registerRestorer.vue'
import loginPage from '../views/loginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { // Register page for the client
    path: '/register',
    name: 'Register',
    component: registerClient
  },
  { // Register page for the restorer
    path: '/registerRestorer',
    name: 'RegisterRestorer',
    component: registerRestorer
  },
  { // Login page
    path: '/login',
    name: 'login',
    component: loginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
