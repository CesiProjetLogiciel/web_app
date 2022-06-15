<template>
  <div class="navbar_container">
    <nav>
      <router-link to="/homePage">Accueil</router-link> |
      <router-link to="/ordersClient">Commandes</router-link> |
      <router-link to="/profileClient">Profil</router-link> |
      <router-link to="/parametersClient">Paramètres</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavbarAll",
};
</script>
