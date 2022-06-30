<template>
  <div class="home">
    <NavbarClient />
    <h1>ORDERS</h1>
    <div class="cards">
      <h3>- Commande en route -</h3>

      <div v-for="order in oldOrders" :key="order.id" class="card">
        <div v-if="order.status != 4">
          <h4>Numéro de la commande : {{ order.id }}</h4>
          <h4>Articles commandés : </h4>
          <li v-for="product in order.products" :key="product.id">{{ product.name }}</li>
          <h4>Prix total de la commande : {{ order.price }} €</h4>
          <h4>
            Livreur : {{ order.deliveryman_id }},
            {{ order.deliveryman_lastname }} {{ order.deliveryman_firstname }}
          </h4>
        </div>
      </div>

      <h3>- Anciennes commandes -</h3>
      <div v-for="order in oldOrders" :key="order.id" class="card">
        <div v-if="order.status === 4 || order.status === 0">
          <h4>Numéro de la commande : {{ order.id }}</h4>
          <h4>Articles commandés : {{ order.product_ids }}</h4>
          <h4>Prix total de la commande : {{ order.price }} €</h4>
          <h4>Livreur : {{ order.deliveryman_id }}</h4>
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
      oldOrders: "",
    };
  },
  async beforeMount() {
    const ordersList = await service.getOrders();
    this.oldOrders = ordersList.data.data.filter(i => i.user_id === this.myUserId);
  },
  computed: {
    myUserId() {
      // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
    myActualOrders: function () {
      return this.oldOrders.data.data.filter(
        (i) => i.user_id === this.myUserId
      );
    },
  },
  components: {
    NavbarClient,
  },
};
</script>

<style scoped lang="scss"></style>
