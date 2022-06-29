<template>
  <div class="container">
    <h1>Register as a restorer</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Prénom : </label>
        <input type="text" v-model="firstName" required />
      </div>

      <div>
        <label>Nom : </label>
        <input type="text" v-model="lastName" required />
      </div>

      <div>
        <label>Nom du restaurant : </label>
        <input type="text" v-model="restaurantName" required />
      </div>

      <div>
        <label>Type de restaurant : </label>
        <select name="category" v-model="category" required>
          <option value="fastfood">Fast-food</option>
          <option value="pizza">Pizza</option>
          <option value="asian">Asian</option>
          <option value="burger">Burger</option>
        </select>
      </div>

      <div class="address">
        <div>
          <label>Adresse : </label>
          <input type="text" v-model="address" required />
        </div>

        <div>
          <label>Code postal : </label>
          <input type="text" v-model="zipcode" required />
        </div>

        <div>
          <label>Pays : </label>
          <input type="text" v-model="country" required />
        </div>

        <div>
          <label>Ville : </label>
          <input type="text" v-model="city" required />
        </div>

        <div>
          <label>Etat / province : </label>
          <input type="text" v-model="state" required />
        </div>
      </div>

      <div>
        <label>Numéro de téléphone :</label>
        <input type="text" v-model="phoneNumber" required />
      </div>

      <div>
        <label>Adresse email : </label>
        <input type="email" v-model="email" required />
      </div>

      <div>
        <label>Mot de passe : </label>
        <input type="password" v-model="password" required />
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
      </div>

      <div>
        <input type="checkbox" v-model="terms" required />
        <label>Veuillez accepter les termes et conditions d'inscription</label>
      </div>

      <div class="button">
        <button class="submit" type="submit">Envoyer l'inscription</button>
      </div>
    </form>
    <router-link to="/login" tag="button">Se connecter</router-link> |
    <router-link to="/register" tag="button">S'inscrire comme client</router-link>
  </div>
</template>

<script>
import { registerAsRestorer } from "../../service.js";

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
      category: "fastfood"
    };
  },
  methods: {
    async handleSubmit() {
      //Validate password field length
      if (this.password.length < 6) {
        this.passwordError = "Erreur la";
      } else {
        var user_info = await registerAsRestorer(
          this.email,
          this.password,
          this.firstName,
          this.lastName,
          this.restaurantName,
          this.category,
          this.address,
          this.zipcode,
          this.country,
          this.city,
          this.phoneNumber,
          this.state
        )
        this.$confirm("Votre demande d'inscription à été transmise, vous aurez confirmation de votre inscription très bientôt").then(() => {
          this.$router.push('/login');
        });
        console.log("RESTAURANT REGISTERED");
        console.log(user_info);
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
div {
  padding-top: 8px;
}
</style>
