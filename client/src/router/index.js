import Vue from 'vue'
import VueRouter from 'vue-router'
import registerClient from '../views/registerClient.vue'
import registerRestorer from '../views/registerRestorer.vue'
import loginPage from '../views/loginPage.vue'

// Client parts
import HomeClient from '../views/clientsPart/homeClient.vue'
import Orders from '../views/clientsPart/orders.vue'
import Parameters from '../views/parameters.vue'
import Profile from '../views/profile.vue'
import BasketClient from '../views/clientsPart/cart.vue'

// Restorer parts
import RestorerHomePage from '../views/restorer/homeRestorer.vue'
import RestorerOrderPage from '../views/restorer/oldOrders.vue'
import RestorerActualOrders from '../views/restorer/actualOrders.vue'

//DeliveryMan parts
import homeDeliveryMan from '../views/deliveryMan/homeDeliveryMan.vue'
import ordersDeliveryMan from '../views/deliveryMan/ordersList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeClient,
    props: true
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
  { // Client's homepage Tab
    path: '/homePage',
    name: 'homepage',
    component: HomeClient
  },
  { // Client's order page
    path: '/ordersClient',
    name: 'OrdersClient',
    component: Orders
  },
  { // Client's Profil Tab 
    path: '/profilePage',
    name: 'profilePage',
    component: Profile
  },
  { // Client's parameters Tab
    path: '/parameters',
    name: 'parameters',
    component: Parameters
  },
  { // Restorer's Homepage Tab
    path: '/restorerHomePage',
    name: 'restorerHomePage',
    component: RestorerHomePage
  },
  { // Restorer's OLD orders
    path: '/lastorders',
    name: 'lastorders',
    component: RestorerOrderPage
  },
  { // Restorer's ACTUAL orders
    path: '/actualorders',
    name: 'actualorders',
    component: RestorerActualOrders
  },
  { // Deliverer's Homepage Tab
    path: '/deliveryManHomePage',
    name: 'deliveryManHomePage',
    component: homeDeliveryMan
  },
  { // Restorer's list of orders Tab
    path: '/ordersDeliveryMan',
    name: 'ordersDeliveryMan',
    component: ordersDeliveryMan
  },
  { // Client's basket
    path: '/basket',
    name: 'BasketClient',
    component: BasketClient
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
