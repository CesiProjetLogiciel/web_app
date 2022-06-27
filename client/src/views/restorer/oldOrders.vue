<template>
  <div>
    <NavbarRestorer />
    <h1>Mon anciennes commandes</h1>
    <div class="cards">
      <div class="card">
        <h3 class="dish_name">Nom du client</h3>
        <h3>Tarif</h3>
        <h6 class="description">
          Description détaillée du plat rédigée par le restaurateur
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarRestorer from "../../components/navbarClient.vue";

// const service = require("../../../service");

export default {
  name: "HomeView",
  data() {
    return {};
  },
  async beforeMount() {},
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
