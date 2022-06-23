<template>
  <div class="container_home">
    <div class="title">
      <NavBar />
      <h1>HOME</h1>
    </div>
    <div class="body">
      <div class="cards">
        <div class="card">
          <h2>Client Name</h2>
          <p>Distance restaurant - client</p>
          <p>Addresse Client</p>
          <p>Adresse Restaurant</p>
          <p>Rénumération:</p>
        </div>

        <div class="card">
          <h2>Client Name</h2>
          <p>Distance restaurant - client</p>
          <p>Addresse Client</p>
          <p>Adresse Restaurant</p>
          <p>Rénumération:</p>
        </div>

        <div class="card">
          <h2>Client Name</h2>
          <p>Distance restaurant - client</p>
          <p>Addresse Client</p>
          <p>Adresse Restaurant</p>
          <p>Rénumération:</p>
        </div>

        <div class="card">
          <h2>Client Name</h2>
          <p>Distance restaurant - client</p>
          <p>Addresse Client</p>
          <p>Adresse Restaurant</p>
          <p>Rénumération:</p>
        </div>
      </div>
      <button>Help</button>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/navbarClient.vue";

export default {
  name: 'deliveryManHomePage',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.cards {
  border: 1px solid red;
  box-shadow: 1px 1px 1px black;
  display: flex;
  width: 99%;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border: 1px solid blue;
  margin: 2px;
  width: 48%;
  img {
    width: 100px;
  }
}
</style>