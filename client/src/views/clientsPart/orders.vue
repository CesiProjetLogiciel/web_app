<template>
  <div class="home">
    <NavbarClient />
    <h1>ORDERS</h1>
    <div class="cards">

      <h3>- Commande en cours -</h3>
      <div v-for="order in oldOrders.data" :key="order.user_id" class="card">
        <div v-if="order.status === 'DELIVERED' && order.user_id === myUserId">
          <h4>Numéro de la commande : {{ order.id }}</h4>
          <h4>Articles commandés : {{ order.product_ids }}</h4>
          <h4>Prix total de la commande : {{ order.price }} €</h4>
          <h4>Livreur : {{ order.deliveryman_id }}</h4>
          <button v-on:click="acceptOrder()">Aide/Signaler un problème</button>
        </div>
        <div v-else>
          <h3>Aucune commande en cours</h3>
        </div>
      </div>

      <h3>- Anciennes commandes -</h3>
      <div v-for="order in oldOrders.data" :key="order.id" class="card">
        <div v-if="order.status === 'DELIVERED'">
          <h4>Numéro de la commande : {{ order.id }}</h4>
          <h4>Articles commandés : {{ order.product_ids }}</h4>
          <h4>Prix total de la commande : {{ order.price }} €</h4>
          <h4>Livreur : {{ order.deliveryman_id }}</h4>
          <button v-on:click="acceptOrder()">Aide/Signaler un problème</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";
import { loginInfo } from "../../store/index";

const service = require("../../../service");

export default {
  name: "OrdersClient",
  data() {
    return {
      oldOrders: '',
    }
  },
  computed: {
    myUserId() { // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
  },
  async beforeMount() {
    const ordersList = await service.getOrders();
    this.oldOrders = ordersList.data;
  },
  components: {
    NavbarClient,
  },
};
</script>

<style scoped lang="scss">
</style>