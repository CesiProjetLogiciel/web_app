<template>
  <div class="navbar_container">
    <nav>
      <p>Client</p>
      <router-link to="/homePage">Accueil</router-link> |
      <router-link to="/ordersClient">Commandes</router-link> |
      <router-link to="/profilePage">Profil</router-link> |
      <router-link to="/parameters">Paramètres</router-link>
      <p>Restorer</p>
      <router-link to="/restorerHomePage">Accueil Resto</router-link> |
      <router-link to="/">Commandes Reçues</router-link> |
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

  p {
    margin: 10px;
  }
}
</style>
