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

    <div class="card new_address_form">
      <h4>Ajouter une nouvelle adresse de livraison</h4>
      <button v-if="!this.isNewAddress" v-on:click="wantNewAddress()">Ajouter</button>  
      <div v-if="this.isNewAddress" class="new_address">
        <input type="text" v-model="firstName" placeholder="Prénom" />
        <input type="text" v-model="lastName" placeholder="Nom" />
        <input type="text" v-model="address" placeholder="Adresse" />
        <input type="text" v-model="zipcode" placeholder="Code postal" />
        <input type="text" v-model="city" placeholder="Ville" />
        <input type="text" v-model="state" placeholder="Région" />
        <input type="text" v-model="country" placeholder="Pays" />
        <input type="text" v-model="phoneNumber" placeholder="Numéro de téléphone" />
        <input type="text" v-model="infos" placeholder="Informations optionnelles" />
        <span v-if="this.isError">Les 2 champs ne correspondent pas</span>
        <button v-on:click="createNewAddress()">Confirmer</button>
      </div>
    </div>

    <div class="card">
      <h3 class="order_number">Parrainer un ami</h3>
      <p>Code parrainage : 8D86C5</p>
      <button>Copier dans le presse-papier</button>
    </div>

    <div v-if="UserType" class="card switch_account">
      <h3 class="switch_account-type">Interface livreur</h3>
      <button class="deliver_button">Changer vers interface livreur</button>
    </div>
  </div>
</template>

<script>
import { loginInfo } from "../store/index";

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
      isNewAddress: false,
      address: null,
      zipcode: null,
      city: null,
      state: null,
      country: null,
      infos: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
    };
  },
  methods: {
    async modifyEmail() {
      try {
        await service.modifyEmail(loginInfo.state.userID, this.newMail);
        this.$alert("Email modifié avec succès !");
      } catch (e) {
        console.log(e)
      }
    },
    async wantNewAddress() {
      if (this.isNewAddress === false) {
        this.isNewAddress = true;
      } else {
        this.isNewAddress = false;
      }
    },
    async modifyPassword() {
      if (this.newPwd === this.newPwdBis) {
        this.isError = false;
        try {
          const res = await service.modifyPassword(loginInfo.state.userID, this.newMail);
          console.log(res);
          this.$alert("Changement de mot de passe réussi");
        } catch (e) {
          console.log(e)
      }
      } else {
        this.isError = true;
        return 0;
      }
    },
    async createNewAddress() {
      try {
        const response = await service.createNewAddress(loginInfo.state.userID, this.firstName, this.lastName, this.address, this.zipcode, this.city, this.state, this.country, this.phoneNumber, this.infos)
        console.log(response.data)
        this.$alert("Nouvelle addresse ajoutée avec succès !");
        return response;
      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>

<style scoped lang="scss">
.new_address_form {
  display: flex;
  input {
    margin-top: 8px;
    width: 80%;
  }
}

.card {
  button {
    width: 100px;
    height: auto;
    border: 1px solid rgb(49, 154, 235);
    margin: 5px;
    transition: 0.25s;
    padding: 2px;
  }
  .deliver_button {
    width: 98%;
    height: 30px;
  }
}
</style>

