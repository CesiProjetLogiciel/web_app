<template>
  <div class="container_home">

    <div class="title">
      <NavbarClient />
      <h1>HOME</h1>
    </div>

    <div class="body">
      <div v-if="!isRestaurantOpen" class="cards">
        <div class="card" v-for="restaurant in restaurantsList" :key="restaurant.id">
          <h1>{{ restaurant.name }}</h1>
          <h3>{{ restaurant.category }}</h3>
          <p>{{ restaurant.description }}</p>
          <p>{{ restaurant.id }}</p>
          <button v-on:click="getDishesList(/*restaurant.id*/)">get dishes</button>
        </div>
      </div>

      <div v-if="isRestaurantOpen" class="cards">
        <div class="card" v-for="dish in dishesList" :key="dish.id">
          <h1>{{ dish.name }}</h1>
          <h3>{{ dish.category }}</h3>
          <p>{{ dish.description }}</p>
          <p>{{ dish.id }}</p>
          <button v-on:click="addToCart(dish.id, dish.name, dish.price)">Add to cart</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";
import { store } from '../../store/index';

const service = require("../../../service");

export default {
  name: "HomeView",
  components: {
    NavbarClient,
  },
  computed: {
    countProducts () {
      return store.state.products
    }
  },
  data() {
    return {
      restaurantsList: "",
      dishesList: "",
      isRestaurantOpen: false,
      isCartOpen: false,
    };
  },
  async beforeMount() {
    const listRestaurants = await service.getRestaurantsList();
    this.restaurantsList = listRestaurants;
  },
  methods: {
    async getDishesList() {
      this.isRestaurantOpen = true;
      const listDishes = await service.getDishesList("7");
      this.dishesList = listDishes;
    },
    addToCart(productId, productName, productPrice) {
      const dishInfos = {'id': productId, 'productName': productName, 'productPrice': productPrice}
      store.commit('addToCart', dishInfos);
    }
  },
};
</script>

<style lang="scss" scoped>
.cards {
  background-color: rgb(188, 235, 202);
  box-shadow: 1px 1px 1px black;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  width: 100%;
}

.card {
  box-shadow: 2px 2px 1px rgb(85, 85, 85);
  background-color: rgb(219, 219, 219);
  border-radius: 5px;
  margin: auto;
  margin-top: 5px;
  width: 100%;

  img {
    width: 100px;
  }
}
</style>
