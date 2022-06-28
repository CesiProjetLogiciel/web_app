<template>
  <div>
    <NavbarRestorer />
    <h1>Anciennces commandes</h1>
    <div class="cards pending_orders">

      <div v-for="order in awaitingList.data" :key="order.id" class="card">
        <div v-if="order.status === 'DELIVERED'">
          <h4>Numéro de la commande : {{ order.id }}</h4>
          <h4>Articles commandés : {{ order.product_ids }}</h4>
          <h4>Prix total de la commande : {{ order.price }} €</h4>
          <h4>Livreur :{{ order.deliveryman_id }}</h4>
        </div>
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
    }
  },
  async beforeMount() {
    const ordersList = await service.getOrders();
    this.awaitingList = ordersList.data;
  },
  components: {
    NavbarRestorer,
  },
};
</script>

<style scoped lang="scss">
</style>