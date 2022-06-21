<template>
  <div class="cards">
    <h3 class="order_number">Gestion du compte</h3>

    <div class="card">
      <div class="modify_email">
        <span>Modifier adresse email</span>
        <input type="text" placeholder="Entrez nouvelle adresse email" />
        <button>Confirmer</button>
      </div>

      <div class="modify_password">
        <span>Modifier mot de passe</span>
        <input type="text" placeholder="Entrez le nouveau mot de passe" />
        <input type="text" placeholder="Confirmez le nouveau mot de passe" />
        <button>Confirmer</button>
      </div>
    </div>

    <div class="card">
      <h3 class="order_number">Parrainer un ami</h3>
      <p>Code parrainage : 8D86C5</p>
      <button>Copier dans le presse-papier</button>
    </div>

    <div v-if="UserType" class="card switch_account">
      <h3 class="switch_account-type">Interface livreur</h3>
      <button>Changer vers interface livreur</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilManageAccount",
  data() {
    return {
      UserType: false, // If the user is a Client or the deliveryMan: TRUE, else: FALSE
    };
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
