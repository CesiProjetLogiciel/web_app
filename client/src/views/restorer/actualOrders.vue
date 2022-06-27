<template>
  <div>
    <NavbarRestorer />
    <h1>Commandes en cours:</h1>
    <div class="cards dishes_categorie">
      <div class="card dish">
        <img src="../../assets/logo.png" alt="dish" />
        <h3 class="dish_name">Nom du plat</h3>
        <h3>Prix</h3>
        <h6 class="description">Description détaillée du plat rédigée par le restaurateur</h6>
      </div>
      
    </div>
  </div>
</template>

<script>
import NavbarRestorer from "../../components/navbarClient.vue";

const service = require("../../../service");

export default {
  name: "HomeView",
  data() {
    return {
      dishesList: "",
    }
  },
  async beforeMount() {
    const listDishes = await service.getMyDishesList(/* restaurantName parameter */);
    this.dishesList = listDishes;
  },
  components: {
    NavbarRestorer,
  },
};
</script>

<style scoped lang="scss">
.cards {
  display: flex;
}

.card {
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
}
</style>