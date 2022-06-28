<template>
  <div class="container">
    <h1>Register</h1>
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
        <label>Referral code:</label>
        <input type="text" v-model="referralCode" />
      </div>

      <div>
        <input type="checkbox" v-model="terms" required />
        <label>Please accept terms and conditions</label>
      </div>

      <div class="button">
        <button class="submit" type="submit">Sign up</button>
      </div>
    </form>
    <br>
    <router-link to="/login" tag="button">Sign in</router-link>
    <router-link to="/registerRestorer" tag="button">Sign up as a restaurant</router-link>
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
      //Validate password field length
      if (this.password.length < 6) {
        this.passwordError = "Erreur la";
      } else {
        var user_info = await registerAsClient(this.email, this.password, this.firstName, this.lastName, this.referralCode);
        // TODO
        // this.router.push({
        //   name: "home",
        //   params: user_info
        // })
        console.log("REGISTERED CLIENT");
        console.log(user_info)
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
