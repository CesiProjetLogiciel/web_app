<template>
  <div>
    <h1>Name of the article</h1>
    <h5>Price €</h5>
  </div>
</template>

<script>
export default {
  name: "CartArticle",
  props: {
    dishName: String,
    dishPrice: Number,
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  text-align: center;
  margin: auto;
}
</style>
