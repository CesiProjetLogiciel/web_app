<template>
  <div class="navbarr">
    <div class="navbar_container"><!-- v-if="this.getUserType === 'client'" -->
      <nav>
        <router-link to="/homePage">Accueil</router-link> |
        <router-link to="/ordersClient">Commandes</router-link> |
        <router-link to="/profilePage">Profil</router-link> |
        <router-link to="/basket">Panier</router-link>
      </nav>
      <div class="navbar_container"><!-- v-if="this.getUserType === 'Restaurant'" -->
        <nav>
          <p>Restorer</p>
          <router-link to="/actualorders">Commandes actuelles</router-link> |
          <router-link to="/lastorders">Commandes finies</router-link> |
          <router-link to="/restorerHomePage">Accueil Resto</router-link> |
          <router-link to="/profilePage">Profil</router-link>
        </nav>
      </div>

      <div class="navbar_container"><!-- v-if="this.getUserType === 'Delivery Man'" -->
        <nav>
          <p>DeliveryMan</p>
          <router-link to="/deliveryManHomePage">Accueil Livreur</router-link> |
          <router-link to="/ordersDeliveryMan">Commandes terminées</router-link> |
          <router-link to="/profilePage">Profil</router-link> |
          <router-link to="/parameters">Paramètres</router-link>
        </nav>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { loginInfo } from "../store/index";

export default {
  name: "NavbarAll",
  computed: {
    getUserType() {
      return loginInfo.state.userTYPE;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.navbar_container {
  background-color: rgb(248, 240, 240);
  box-shadow: 1px 1px 1px grey;
  border-radius: 5px;
  padding: 5px;

  a.router-link {
    color: black;
  }
}
</style>
