<template>
  <div class="container">
    <Navbar firstLink="Accueil" sndLink="Commandes" thirdLink="Profil" fourthLink="Paramètres"/>
    <h1>Register as a restorer</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Email :</label>
        <input type="email" v-model="email" required />
      </div>

      <div>
        <label>Password :</label>
        <input type="password" v-model="password" required />
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
      </div>

      <div>
        <label>First name:</label>
        <input type="text" v-model="firstName" required />
      </div>

      <div>
        <label>Last name:</label>
        <input type="text" v-model="lastName" required />
      </div>

      <div>
        <input type="checkbox" v-model="terms" required />
        <label>Please accept terms and conditions</label>
      </div>

      <div class="button">
        <button class="submit" type="submit">Sign up here</button>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/navbarClient.vue'

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      passwordError: "",
      terms: "",
    };
  },
  methods: {
    handleSubmit() {
      //Validate password field length
      if (this.password.length < 6) {
        this.passwordError = "Erreur la";
      } else {
        console.log("functionning");
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
</style>
