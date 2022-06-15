import Vue from 'vue'
import VueRouter from 'vue-router'
import registerClient from '../views/registerClient.vue'
import registerRestorer from '../views/registerRestorer.vue'
import loginPage from '../views/loginPage.vue'

// Client part
import HomeClient from '../views/clientsPart/homeClient.vue'
import Orders from '../views/clientsPart/orders.vue'
import Parameters from '../views/clientsPart/parameters.vue'
import Profile from '../views/clientsPart/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeClient
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
  },
  {
    path: '/homePage',
    name: 'homepage',
    component: HomeClient
  },
  {
    path: '/ordersClient',
    name: 'OrdersClient',
    component: Orders
  },
  {
    path: '/profileClient',
    name: 'profileClient',
    component: Profile
  },
  {
    path: '/parametersClient',
    name: 'parametersClient',
    component: Parameters
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
