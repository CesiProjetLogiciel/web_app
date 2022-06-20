<template>
  <div class="home">
    <NavBar />
    <div class="cards dishes_categorie">
      <div class="card dish">
        <img src="../assets/logo.png" alt="dish">
        <h3 class="dish_name">Nom du plat</h3>
        <h6 class="description">Description détaillée du plat rédigée par le restaurateur</h6>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/navbarClient.vue"

export default {
  name: 'HomeView',
  components: {
    NavBar,
  }
}
</script>
