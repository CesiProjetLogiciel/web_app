<template>
  <div class="container_home">
    <div class="title">
      <NavbarClient />
      <h1>HOME</h1>
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
          <p>"{{ restaurant.description }}"</p>
          <button v-on:click="getDishesList(/*restaurant.id*/)">
            Voir le restaurant
          </button>
        </div>
      </div>

      <div v-if="isRestaurantOpen" class="cards">
        <div class="card" v-for="dish in dishesList" :key="dish.id">
          <h1>{{ dish.name }}</h1>
          <h3>{{ dish.category }}</h3>
          <p>{{ dish.description }}</p>
          <h4>{{ dish.price }} €</h4>
          <button v-on:click="addToCart(dish.id, dish.name, dish.price)">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";
import { store } from "../../store/index";

const service = require("../../../service");

export default {
  name: "HomeView",
  components: {
    NavbarClient,
  },
  computed: {
    countProducts() { // Allows to know the state of the cart
      return store.state.products;
    },
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
      var isPresent = store.getters.getProductsId(productId);
      if (isPresent) {
        var payload = {'price': productPrice, 'id': productId}
        store.commit("increment", payload);
      } else {
        const dishInfos = {
          id: productId,
          productName: productName,
          productPrice: productPrice,
          quantity: 1,
        };
        store.commit("addToCart", dishInfos);
      }
    },
  },
};
</script>
