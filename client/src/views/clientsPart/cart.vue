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
          <h5>{{ object.productPrice}} €</h5>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";

import { store } from "../../store/index";

export default {
  name: "HomeView",
  computed: {
    getCartList() {
      return store.state.products;
    },
  },
  components: {
    NavbarClient,
  },
  data() {
    return {};
  },
  async beforeMount() {},
  methods: {},
};
</script>
