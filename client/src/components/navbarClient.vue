<template>
  <div class="navbar_container"> <!-- v-if depending of the type of connection -->
    <nav>
      <p>Client</p>
      <router-link to="/homePage">Accueil</router-link> |
      <router-link to="/ordersClient">Commandes</router-link> |
      <router-link to="/profilePage">Profil</router-link> |
      <router-link to="/basket">Panier</router-link>
      <p>Restorer</p>
      <router-link to="/actualorders">Commandes actuelles</router-link> |
      <router-link to="/lastorders">Commandes finies</router-link> |
      <router-link to="/restorerHomePage">Accueil Resto</router-link> |
      <router-link to="/profilePage">Profil</router-link>
      <p>DeliveryMan</p>
      <router-link to="/deliveryManHomePage">Accueil Livreur</router-link> |
      <router-link to="/ordersDeliveryMan">Commandes terminées</router-link> |
      <router-link to="/profilePage">Profil</router-link> |
      <router-link to="/parameters">Paramètres</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavbarAll",
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
