<template>
  <div class="home">
    <NavbarClient />
    <h1>PROFILE</h1>
    <ProfilManageAccount />
    </div>
</template>

<script>
import NavbarClient from "../components/navbarClient.vue";
import ProfilManageAccount from "../components/profilePage.vue";

export default {
  name: "ParametersClient",
  components: {
    NavbarClient,
    ProfilManageAccount,
  },
};
</script>

