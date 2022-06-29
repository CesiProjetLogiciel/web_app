<template>
  <div id="app" class="app">
    <!-- <nav>
      <router-link to="/">Homepage</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register as a client</router-link> |
      <router-link to="/registerRestorer">Register as a restorer</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html {
  background-color: rgba(204, 255, 194, 0.596);
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: rgb(111, 202, 99);
}

.cards {
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  width: 100%;

  .card {
    box-shadow: 0px 0px 4px rgb(85, 85, 85);
    background-color: white;
    text-align: left;
    padding: 15px;
    border-radius: 5px;
    margin: auto;
    margin-top: 10px;
    width: 100%;

    img {
      width: 100px;
    }

    h1, h3, h4 {
      margin: 0;
      margin-top: 10px;
    }

    p {
      font-weight: bold;
    }

    button {
      margin-top: 10px;
    }
  }
}
</style>
