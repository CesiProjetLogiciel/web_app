<template>
  <div class="container_home">
    <div class="title">
      <NavbarClient />
      <h1>Panier</h1>
    </div>

    <div class="body">
      <div class="cards">
        <div v-for="object in getCartList" :key="object.id" class="card">
          <h4>{{ object.quantity }}x {{ object.productName }}</h4>
          <h5>{{ object.productPrice }} €</h5>
        </div>

        <div class="card">
          <h4>Prix total de la commande : {{ getPrice }} €</h4>
          <button v-on:click="order()" class="order_button">Commander</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";

const service = require("../../../service");

import { store } from "../../store/index";

export default {
  name: "HomeView",
  computed: {
    getCartList() {
      return store.state.products;
    },
    getPrice()  {
      return store.getters.getTotalPrice;
    },
  },
  data() {
    return {
      totalPrice: '',
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
      try {
        const response = await service.order(orderPrice); // NEEDS A LOT TO WRITE
        console.log(response);
      } catch (e) {
        console.log('erreur lors de la commande')
        return e;
      }
    }
  },
};
</script>
