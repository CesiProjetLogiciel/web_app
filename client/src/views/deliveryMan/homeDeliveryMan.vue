<template>
  <div class="container_home">
    <div class="title">
      <NavBar />
      <h1>HOME</h1>
    </div>
    <div class="body">
      <div class="cards">

        <h3>- Commandes en attente -</h3>
        <div class="card" v-if="!this.delivering">
          <div v-for="order in actualOrders" :key="order.id">
            <h4>Numéro de la commande : {{ order.id }}</h4>
            <h4>Addresse de livraison : {{ order.delivery_address }}</h4>
            <h4>Addresse du restaurant : {{ order.restaurant_address }}</h4>
            <button v-on:click="updateOrder(order.id, 3)">
              Prendre en charge la commande
            </button>
          </div>
        </div>

        <h3>- Commandes en cours -</h3>
        <div class="card" v-if="!this.delivering">
          <div v-for="order in this.inDeliveryOrders" :key="order.id">
            <h4>Numéro de la commande : {{ order.id }}</h4>
            <h4>Addresse de livraison : {{ order.delivery_address }}</h4>
            <h4>Addresse du restaurant : {{ order.restaurant_address }}</h4>
            <button v-on:click="updateOrder(order.id, 4)">
              Commande livrée
            </button>
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
      inDeliveryOrders: "",
      orderState: "",
    };
    },
  async beforeMount() {
    const ordersList = await service.getDeliveries();
    this.actualOrders = ordersList.data.data.filter(i => i.deliveryman_id === this.myUserId && i.status === 2);
    console.log(this.actualOrders)
    this.inDeliveryOrders = (await service.getDeliveries()).data.data.filter(i => i.deliveryman_id === this.myUserId && i.status === 3);
  },
    computed: {
      myUserId() {
        // Allows to know the state of the cart
        return loginInfo.state.userID;
      },
    },
  methods: {
    async updateOrder(orderId, newState) {
      this.delivering = true;
      const userId = loginInfo.state.userID;
      try {
        const response = await service.updateOrder(orderId, userId, newState);
        console.log(response);
        if (newState === 4) {
          this.$alert("La commande à été livrée, merci !");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
