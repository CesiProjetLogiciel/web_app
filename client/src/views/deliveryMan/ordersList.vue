<template>
  <div class="container_home">
    <div class="title">
      <NavBar />
      <h1>HOME</h1>
    </div>
    <div class="body">
      <div class="cards">
        <div v-for="order in this.oldOrders" :key="order.id" class="card">
          <h4>Numéro de la commande : {{ order.id }}</h4>
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
      orderState: "",
      oldOrders: "",
    };
  },
  async beforeMount() {
    const ordersList = await service.getDeliveries();
    console.log(ordersList)
    this.oldOrders = ordersList.data.data.filter(
      (i) => i.deliveryman_id === this.myUserId && i.status === 4
    );
  },
  computed: {
    myUserId() {
      // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
  },
};
</script>

<style lang="scss" scoped></style>
