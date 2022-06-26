<template>
  <div class="container_home">
    <div class="title">
      <NavbarClient />
      <h1>Panier</h1>
    </div>

    <div class="body">
      <div v-if='!isCartEmpty' class="cards">
        <div v-for="object in getCartList" :key="object.id" class="card">
          <h4>1 x {{ object.productName }}</h4>
          <h5>{{ object.productPrice}} €</h5>
        </div>

        <div v-if='isCartEmpty' class="cards">Votre panier est vide.
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

<style lang="scss" scoped>
.cards {
  background-color: rgb(188, 235, 202);
  box-shadow: 1px 1px 1px black;
  display: flex;
  width: 99%;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: rgb(219, 219, 219);
  box-shadow: 2px 2px 1px rgb(85, 85, 85);
  margin: 7px;
  width: 48%;
  border-radius: 5px;
  img {
    width: 100px;
  }
}
</style>
