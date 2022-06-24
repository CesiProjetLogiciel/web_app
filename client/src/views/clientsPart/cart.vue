<template>
  <div class="container_home">
    <BasketIcon />
    <div class="title">
      <NavbarClient />
      <h1>Panier</h1>
    </div>
    <div class="body">
      <div class="cards">
        <div class="card">
          <CartArticle v-for='dish in this.$store.state' :key='dish.name'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";
import BasketIcon from "../../components/basket.vue";
import CartArticle from "../../components/article.vue";

export default {
  name: "HomeView",
  components: {
    NavbarClient,
    BasketIcon,
    CartArticle,
  },
  data() {
    return {
      products: [],
      cart: null,
    };
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
