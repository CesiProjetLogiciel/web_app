<template>
  <div class="home">
    <NavbarClient />
    <h1>ORDERS</h1>
    <div class="cards">
      <div class="card order">
        <h3 class="order_number">Commande n°1235</h3>
        <h5 class="order_status">Status : accepted by the restorer</h5>
        <button>Contacter le livreur</button>
        <button>Aide/Signaler un problème</button>
      </div>

      <div class="card order">
        <h3 class="order_number">Commande n°1234</h3>
        <h5 class="order_status">Status : ended</h5>
        <button>Aide/Signaler un problème</button>
        <button>Supprimer de l'historique</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";

export default {
  name: "OrdersClient",
  components: {
    NavbarClient,
  },
};
</script>

<style scoped lang="scss">
</style>