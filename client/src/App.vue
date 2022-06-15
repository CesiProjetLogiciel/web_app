<template>
  <div id="app">
    <nav>
      <router-link to="/">Homepage</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register as a client</router-link> |
      <router-link to="/registerRestorer">Register as a restorer</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: blue;
}
</style>
