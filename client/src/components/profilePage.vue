<template>
  <div class="cards">
    <h3 class="order_number">Gestion du compte</h3>

    <div class="card">
      <div class="modify_email">
        <span>Modifier adresse email</span>
        <p>{{this.newMail}}</p>
        <input type="text" v-model="newMail" placeholder="Entrez nouvelle adresse email" />
        <button v-on:click="modifyEmail()">Confirmer</button>
      </div>
    </div>

    <div class="card">
      <div class="modify_password">
        <span>Modifier mot de passe</span>
        <input type="text" v-model="newPwd" placeholder="Entrez le nouveau mot de passe" />
        <input type="text" v-model="newPwdBis" placeholder="Confirmez le nouveau mot de passe" />
        <span v-if="this.isError">Les 2 champs ne correspondent pas</span>
        <button v-on:click="modifyPassword()">Confirmer</button>
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
const service = require("../../service");

export default {
  name: "profilManageAccount",
  data() {
    return {
      UserType: true, // If the user is a Client or the deliveryMan: TRUE, else: FALSE
      newMail: null,
      newPwd: null,
      newPwdBis: null,
      isError: null,
    };
  },
  methods: {
    async modifyEmail() {
      try {
        const res = await service.modifyEmail('1', this.newMail);
        console.log(res);
      } catch (e) {
        console.log(e)
      }
    },
    async modifyPassword() {
      if (this.newPwd === this.newPwdBis) {
        this.isError = false;
        try {
          const res = await service.modifyPassword('1', this.newMail);
          console.log(res);
        } catch (e) {
          console.log(e)
      }
      } else {
        this.isError = true;
        return 0;
      }
    }
  }
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
