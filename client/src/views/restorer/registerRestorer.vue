<template>
  <div class="container">
    <h1>Register as a restorer</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>First name:</label>
        <input type="text" v-model="firstName" required />
      </div>

      <div>
        <label>Last name:</label>
        <input type="text" v-model="lastName" required />
      </div>

      <div>
        <label>Restaurant name:</label>
        <input type="text" v-model="restaurantName" required />
      </div>

      <div class="address">
        <label>Address:</label>
        <input type="text" v-model="address" required />

        <label>Zipcode:</label>
        <input type="text" v-model="zipcode" required />

        <label>Country</label>
        <input type="text" v-model="country" required />

        <label>City:</label>
        <input type="text" v-model="city" required />

        <label>State:</label>
        <input type="text" v-model="state" required />
      </div>

      <div>
        <label>Phone number :</label>
        <input type="text" v-model="phoneNumber" required />
      </div>

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
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      restaurantName: "",
      address: "",
      zipcode: "",
      country: "",
      city: "",
      state: "",
      phoneNumber: "",
      email: "",
      password: "",
      terms: "",
      passwordError: "",
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
form,
.address {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
</style>
