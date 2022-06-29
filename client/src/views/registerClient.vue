<template>
  <div class="container">
    <h1>Inscription</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Email : </label>
        <input type="email" v-model="email" required />
      </div>

      <div>
        <label>Mot de passe : </label>
        <input type="password" v-model="password" required />
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
      </div>

      <div>
        <label>Prénom : </label>
        <input type="text" v-model="firstName" required />
      </div>

      <div>
        <label>Nom : </label>
        <input type="text" v-model="lastName" required />
      </div>

      <div>
        <label>Code parrainage : </label>
        <input type="text" v-model="referralCode" placeholder="Optionnel" />
      </div>

      <div>
        <input type="checkbox" v-model="terms" required />
        <label>Please accept terms and conditions</label>
      </div>

      <div class="button">
        <button class="submit" type="submit">S'inscrire</button>
      </div>
    </form>
    <br>
    <router-link to="/login" tag="button">Connexion</router-link> |
    <router-link to="/registerRestorer" tag="button">S'inscrire comme restaurateur</router-link>
  </div>
</template>

<script>
import { registerAsClient } from "../../service.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      referralCode: null,
      passwordError: "",
      terms: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password.length > 6) {
        try {
          await registerAsClient(this.email, this.password, this.firstName, this.lastName, this.referralCode);
          console.log("REGISTERED CLIENT");
          this.router.push('/homePage')
        } catch (e) {
          this.passwordError = "Il y a eu un problème"
        }
        
      } else {
        this.passwordError = "Erreur la";
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 900px;
  margin: auto;
}
form {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
}
div {
  padding-top: 10px;
  margin: auto;
}
</style>
