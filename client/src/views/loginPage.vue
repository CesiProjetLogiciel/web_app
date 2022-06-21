<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Email :</label>
      <input type="email" v-model="email" required />

      <label>Password :</label>
      <input type="password" v-model="password" required />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="button">
        <button class="submit" type="submit">Sign up here</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from "../../service.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log("connecting..");
      try {
        await login(this.email, this.password);
        console.log("Connection front ok");
      } catch (error) {
        console.log(error);
      }
    },

    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>
