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
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {
      //Validate password field length
      console.log("connecting..");
      // connect to the AUTH system
    },
  },
};
</script>
