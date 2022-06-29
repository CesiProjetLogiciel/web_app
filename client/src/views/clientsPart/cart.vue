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
          <button v-on:click='deleteProduct(object.id)'>Supprimer</button>
        </div>

        <div class='card'>
          <h3>Prix total des articles: {{ getPrice }} €</h3>
          <select v-model='myDeliveryAdrr'>
            <option v-for='addr in address' :key='addr.id' :value='addr.id'>{{addr.address}}</option>
          </select>
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
      address: '',
      myDeliveryAdrr: '',
      };
    },
  components: {
    NavbarClient,
  },
  async beforeMount() {
    const deliveryAddress = await service.getDeliveryAddress(this.getUserId);
    this.address = deliveryAddress.data;
  },
  methods: {
    async order() { // The big one
      const orderPrice = this.getPrice
      const userId = loginInfo.state.userID;
      //const billingAddress = await service.getBillingAddress();
      try {
        const response = await service.order(userId, 'adresse', 'restaurantId', store.state.products, 'menu_ids', orderPrice);
        console.log(response);
      } catch (e) {
        console.log('no order')
        return e;
      }
    },
    async deleteProduct(idProduct) {
      var payload = idProduct
      store.commit('deleteProduct', payload);
    }
  },
};
</script>
