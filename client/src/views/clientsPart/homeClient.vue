<template>
  <div class="container_home">
    <BasketIcon />
    <div class="title">
      <NavbarClient />
      <h1>HOME</h1>
    </div>
    <div class="body">
      <div class="cards">
        <div class="card">
          <img src="../../assets/logo.png" alt="image" />
          <h2>Restaurant name</h2>
          <p>Description</p>
        </div>

        <div class="card">
          <img src="../../assets/logo.png" alt="image" />
          <h2>Restaurant name</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";
import BasketIcon from "../../components/basket.vue";

import { getRestaurantsList } from "../../../service.js";

export default {
  name: "HomeView",
  components: {
    NavbarClient,
    BasketIcon,
  },
  beforeMount() {
    getRestaurantsList();
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.cards {
  border: 1px solid red;
  box-shadow: 1px 1px 1px black;
  display: flex;
  width: 99%;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border: 1px solid blue;
  margin: 2px;
  width: 48%;
  img {
    width: 100px;
  }
}
</style>
