<template>
  <div>
    <NavbarRestorer />
    <h1>Commandes en cours:</h1>
    <div class="cards pending_orders">
      <h1>- En attente de validation -</h1>

      <div v-for="order in awaitingList.data" :key="order.id" class="card">
        <h4>Numéro de la commande : {{ order.id }}</h4>
        <h4>Articles commandés : {{ order.product_ids }}</h4>
        <h4>Prix total de la commande : {{ order.price }} €</h4>
        <h4>Livreur :{{ order.deliveryman_id }}</h4>
      </div>
    </div>

    <div class="cards accepted_orders">
      <h1>- En préparation -</h1>
      <div class="card">
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
      awaitingList: '',
      acceptedList: '',
    }
  },
  async beforeMount() {
    const ordersList = await service.getOrders();
    this.awaitingList = ordersList.data;
    //console.log(this.awaitingList.data)
    //this.acceptedList = await service.;
  },
  components: {
    NavbarRestorer,
  },
};
</script>

<style scoped lang="scss">
</style>