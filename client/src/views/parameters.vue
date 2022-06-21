<template>
  <div class="home">
    <NavbarClient />
    <h1>PARAMETERS</h1>
    <h5>Thème de l'application</h5>
  </div>
</template>

<script>
import NavbarClient from "../components/navbarClient.vue";

export default {
  name: "ProfilClient",
  components: {
    NavbarClient,
  },
};
</script>
