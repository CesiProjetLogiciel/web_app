<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Email :</label>
      <input type="email" v-model="email" required />

      <label>Password :</label>
      <input type="password" v-model="password" required />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="button">
        <button class="submit" type="submit">Log in</button>
      </div>
    </form>
    <br>
    <router-link to="/register" tag="button">Sign up</router-link>
    <router-link to="/registerRestorer" tag="button">Sign up as a restaurant</router-link>
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
        var user_info = await login(this.email, this.password);
        console.log("Connection front ok");
        // TODO
        // this.router.push({
        //   name: "home",
        //   params: user_info
        // })
        console.log("LOGGED IN")
        console.log(user_info)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
