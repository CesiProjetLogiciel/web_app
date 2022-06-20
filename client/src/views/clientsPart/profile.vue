<template>
  <div class="home">
    <NavbarClient />
    <h1>PROFILE</h1>
    <div class="cards">
      <div class="card">
        <h3 class="order_number">Gestion du compte</h3>

        <div class="modify_email">
          <span>Modifier adresse email</span>
          <input type="text" placeholder="Entrez nouvelle adresse email" />
          <button>Confirmer</button>
        </div>

        <div class="modify_email">
          <span>Modifier mot de passe</span>
          <input type="text" placeholder="Entrez le nouveau mot de passe" />
          <input type="text" placeholder="Confirmez le nouveau mot de passe" />
          <button>Confirmer</button>
        </div>
      </div>

      <div class="card">
        <h3 class="order_number">Parrainer un ami</h3>
        <input type="text" placeholder="https://cestmonami.fr" />
        <button>Supprimer de l'historique</button>
      </div>

      <div class="card">
        <h3 class="switch_account-type">Interface livreur</h3>
        <button>Changer vers interface livreur</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarClient from "../../components/navbarClient.vue";

export default {
  name: "ParametersClient",
  components: {
    NavbarClient,
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: rgb(218, 210, 210);
  box-shadow: 1px 1px 1px grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
}
</style>
