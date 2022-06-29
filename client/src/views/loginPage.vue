<template>
<!--  <div class="cards">
    <div class="card">
      <h1>Connexion</h1>
      <form @submit.prevent="handleSubmit">
        <div class="email_section">
          <label>Email :</label>
          <input type="email" v-model="email" required />
        </div>

        <div class="password_section">
          <label>Password :</label>
          <input type="password" v-model="password" required />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>
        </div>

        <div class="button">
          <button class="submit" type="submit">Log in</button>
        </div>

      </form>
      <router-link to="/register" tag="button">Sign up</router-link>
      <router-link to="/registerRestorer" tag="button">Sign up as a restaurant</router-link>
    </div>
  </div> -->
 <body>
  <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>Connexion</h2>
        <div class="underline-title"></div>
      </div>

      <form @submit.prevent="handleSubmit" class="form">
        <label for="user-email">Email</label>
        <input id="user-email" class="form-content" type="email" autocomplete="on" v-model="email" required />
        <div class="form-border"></div>

        <label for="user-password" style="padding-top:22px">Password</label>
        <input id="user-password" class="form-content" type="password" v-model="password" required />
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <div class="form-border"></div>

        <button id="submit-btn" class="submit" type="submit">Log in</button>
      </form>

      <br/>
      <router-link to="/register" tag="button">Sign up</router-link> |
      <router-link to="/registerRestorer" tag="button">Sign up as a restaurant</router-link>

    </div>
  </div>
</body> 
</template>

<script>
import { login } from "../../service.js";

import { loginInfo } from "../store/index";

export default {
  name: 'loginPage',
  computed: {
    myUserId() { // Allows to know the state of the cart
      return loginInfo.state.userID;
    },
    myUserType() { // Allows to know the state of the cart
      return loginInfo.state.userTYPE;
    },
  },
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        var user_info = await login(this.email, this.password);
        console.log("You are logged in");
        loginInfo.commit('registerInfos', user_info)
        console.log(this.myUserId);
        console.log(this.myUserType);
        /*this.router.push({
          name: "home",
          params: user_info
        })*/
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
label {
  font-family: "Raleway", sans-serif;
  font-size: 11pt;
}
#card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px grey;
  height: 410px;
  margin: 6rem auto 8.1rem auto;
  width: 329px;
}
#card-content {
  padding: 12px 44px;
}
#card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
#submit-btn {
  background: rgb(255, 255, 255);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px grey;
  cursor: pointer;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#submit-btn:hover {
  box-shadow: 0px 1px 18px grey;
  background-color: rgba(204, 255, 194, 0.596);
  
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  padding-top: 14px;
}
</style>