<template>
  <button type="button" class="basket_button">
    <img src="../assets/logo.png" alt="basket" />
  </button>
</template>

<script>
export default {
  name: "BasketIcon",
  data() {
    return {
      test: "maybe",
    };
  },
};
</script>

<style scoped lang="scss">
.basket_button {
  background-color: rgb(218, 210, 210);
  box-shadow: 2px 2px 1px grey;
  border-radius: 100%;
  position: fixed;
  display: block;
  height: 80px;
  width: 80px;
  bottom: 2%;
  right: 2%;

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
