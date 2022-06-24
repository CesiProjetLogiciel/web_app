<template>
  <div class="container_home">
    <BasketIcon />
    <div class="title">
      <NavbarClient />
      <h1>HOME</h1>
      <button v-on:click="getDishesList()">get dishes</button>
    </div>
    <div class="body">
      <div v-if="!isRestaurantOpen" class="cards">
        <div
          class="card"
          v-for="restaurant in restaurantsList"
          :key="restaurant.id"
        >
          <h1>{{ restaurant.name }}</h1>
          <h3>{{ restaurant.category }}</h3>
          <p>{{ restaurant.description }}</p>
          <p>{{ restaurant.id }}</p>
        </div>
      </div>

      <div v-if="isRestaurantOpen" class="cards">
        <div class="card" v-for="dish in dishesList" :key="dish.id">
          <h1>{{ dish.name }}</h1>
          <h3>{{ dish.category }}</h3>
          <p>{{ dish.description }}</p>
          <p>{{ dish.id }}</p>
          <button v-on:click="addToCart(dish.id)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";
import BasketIcon from "../../components/basket.vue";

const service = require("../../../service");

export default {
  name: "HomeView",
  components: {
    NavbarClient,
    BasketIcon,
  },
  data() {
    return {
      restaurantsList: "",
      dishesList: "",
      isRestaurantOpen: false,
      isCartOpen: false,
      productsInCart: [],
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
    addToCart(dishID) {
      this.productsInCart.push(dishID);
    }
  },
};
</script>

<style lang="scss" scoped>
.cards {
  background-color: rgb(188, 235, 202);
  box-shadow: 1px 1px 1px black;
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: rgb(219, 219, 219);
  box-shadow: 2px 2px 1px rgb(85, 85, 85);
  margin: auto;
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  img {
    width: 100px;
  }
}
</style>
