<template>
  <div id="app">
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
  background-color: rgb(231, 231, 231);
}

.navbar_container {
  background-color: rgb(248, 240, 240);
  box-shadow: 1px 1px 1px grey;
  border-radius: 5px;
  padding: 5px;

  p {
    margin: 10px;
  }
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: blue;
}

.cards {
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  width: 100%;

  .card {
    box-shadow: 0px 0px 4px rgb(85, 85, 85);
    text-align: left;
    padding: 15px;
    border-radius: 5px;
    margin: auto;
    margin-top: 5px;
    width: 100%;

    img {
      width: 100px;
    }

    h1, h3 {
      margin: 0;
      text-align: right;
    }

    p {
      font-weight: bold;
    }
  }
}
</style>
