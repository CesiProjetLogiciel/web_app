<template>
  <div class="container_home">
    <div class="title">
      <NavBar />
      <h1>HOME</h1>
    </div>
    <div class="body">
      <div class="cards">

        <div class="card" v-if="!this.delivering">
          <div v-for="order in actualOrders.data" :key="order.id">
            <div v-if="order.status === 'DELIVERED'">
              <!-- CHANGER POUR 2 -->
              <h3>- Commandes en cours -</h3>
              <h4>Numéro de la commande : {{ order.id }}</h4>
              <h4>Addresse de livraison : {{ order.delivery_address }}</h4>
              <h4>Address du restaurant :</h4>
              <button v-on:click="updateOrder(order.id, 3)">
                Prendre en charge la commande
              </button>
            </div>
          </div>
        </div>

        <div class="card" v-if="this.delivering">
          <div v-for="order in actualOrders.data" :key="order.id">
            <div v-if="order.status === 'DELIVERING' && order.deliveryman_id === myUserId">
              <h3>- Commandes en cours -</h3>
              <h4>Numéro de la commande : {{ order.id }}</h4>
              <h4>Addresse de livraison : {{ order.delivery_address }}</h4>
              <h4>Addresse du restaurant :</h4>
              <button v-on:click="updateOrder(order.id, 4)">
                Commande livrée
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/navbarClient.vue";
import { loginInfo } from "../../store/index";

const service = require("../../../service");

export default {
  name: "deliveryManHomePage",
  components: {
    NavBar,
  },
  data() {
    return {
      actualOrders: "",
      delivering: false,
      orderState: "",
    };
  },
  computed: {
    myUserId() {
      // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
  },
  async beforeMount() {
    const ordersList = await service.getOrders();
    this.actualOrders = ordersList.data;
  },
  methods: {
    async updateOrder(orderId, newState) {
      this.delivering = true;
      const userId = loginInfo.state.userID;
      try {
        const response = await service.updateOrder(orderId, userId, newState);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
