<template>
  <div class='container_home'>
    <div class='title'>
      <NavbarClient />
      <h1>Panier</h1>
    </div>

    <div class='body'>
      <div class='cards'>
        <div v-for='object in getCartList' :key='object.id' class='card'>
          <h4>{{ object.quantity }}x {{ object.productName }}</h4>
          <h5>{{ object.productPrice }} €</h5>
        </div>

        <div class='card'>
          <h3>Prix total des articles: {{ getPrice }} €</h3>
          <h3>user id {{ getUserId }} </h3>
          <button v-on:click='order()' class='order_button'>Commander</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavbarClient from '../../components/navbarClient.vue';

const service = require('../../../service');

import { loginInfo, store } from '../../store/index';

export default {
  name: 'HomeView',
  computed: {
    getCartList() {
      return store.state.products;
    },
    getPrice()  {
      return store.getters.getTotalPrice;
    },
    getUserId() {
      return loginInfo.state.userID;
    }
  },
  data() {
    return {
      totalPrice: 0,
      };
    },
  components: {
    NavbarClient,
  },
  async beforeMount() {
  },
  methods: {
    async order() {
      let orderPrice = this.getPrice
      const userId = loginInfo.state.userID;
      try {
        const response = await service.order(userId, 'adresse', 'restaurantId', store.state.products, 'menu_ids', orderPrice);
        console.log(response);
      } catch (e) {
        console.log('no order')
        return e;
      }
    },
  },
};
</script>
