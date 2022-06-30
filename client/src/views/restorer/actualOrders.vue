<template>
  <div>
    <NavbarRestorer />
    <h1>Commandes en cours:</h1>

    <div class="cards pending_orders">
      <h1>- En attente de validation -</h1>
      <div v-for="order in this.awaitingList" :key="order.id" class="card">
        <h4>Numéro de la commande : {{ order.id }}</h4>
        <h4>Articles commandés : {{ order.product_ids }}</h4>
        <h4>Prix total de la commande : {{ order.price }} €</h4>
        <h4>Livreur :{{ order.deliveryman_id }}</h4>
        <button v-on:click="acceptOrder(order.id)">Accepter</button>
      </div>
    </div>

    <div class="cards preparing_orders">
      <h1>- En préparation -</h1>
      <div v-for="order in this.preparingList" :key="order.id" class="card">
        <h4>Numéro de la commande : {{ order.id }}</h4>
        <h4>Articles commandés : {{ order.product_ids }}</h4>
        <h4>Prix total de la commande : {{ order.price }} €</h4>
        <h4>Livreur :{{ order.deliveryman_id }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarRestorer from "../../components/navbarClient.vue";
import { loginInfo } from "../../store/index";

const service = require("../../../service");

export default {
  name: "HomeView",
  data() {
    return {
      awaitingList: "",
      preparingList: "",
      acceptedList: "",
    };
  },
  async beforeMount() {
    const actList = await service.getOrders();
    console.log(this.myUserId);
    this.awaitingList = actList.data.data.filter(
      (i) => i.restaurant_idSQL === 17 && i.status === 1
    ); // need to put the id of the resto in a filter
    this.preparingList = actList.data.data.filter(
      (i) => i.restaurant_idSQL === 17 && i.status === 2
    ); // need to put the id of the resto in a filter
    console.log(this.awaitingList);
  },
  components: {
    NavbarRestorer,
  },
  computed: {
    myUserId() {
      // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
  },
  methods: {
    async acceptOrder(orderId) {
      try {
        const response = await service.restorerAcceptOrder(orderId);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
