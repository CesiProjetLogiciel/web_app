<template>
  <div class="container_home">
    <div class="title">
      <NavBar />
      <h1>HOME</h1>
    </div>
    <div class="body">
      <div class="cards">
        <h3>- Commandes en cours -</h3>
              <div v-for="order in actualOrders.data" :key="order.id" class="card">
                <div v-if="order.status === 'DELIVERED'">
                  <h4>Numéro de la commande : {{ order.id }}</h4>
                  <h4>Addresse de livraison : {{ order.delivery_address }}</h4>
                  <h4>Address du restaurant : </h4>
                  <button v-on:click="acceptOrder(order.id)">Prendre en charge la commande</button>
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
  name: 'deliveryManHomePage',
  components: {
    NavBar
  },
  data() {
    return {
      actualOrders: '',
    }
  },
  computed: {
    myUserId() { // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
  },
  async beforeMount() {
    const ordersList = await service.getOrders();
    this.actualOrders = ordersList.data;
  },
  methods: {
    async acceptOrder(id) {
      const userId = loginInfo.state.userID
  try {
    const response = await service.acceptOrder(id, userId)
    console.log(response)
  }  catch (e){
    console.log(e)
  }
    },
  },
}
</script>