<template>
  <div>
    <NavbarRestorer />
    <h1>Mon restaurant</h1>
    <button v-on:click="enterModifyMode()">Modifier</button> | 
    <button v-on:click="enterCreateMode()">Ajouter nouveau plat</button>

        <div v-if="createMode" class="cards">
          <div class="card">
            <div class="section">
              <span>Nom du plat :</span>
              <input type="text" required v-model="dishName" placeholder="Entrez le nom ici..">
            </div>
            <div class="section">
              <span>Description du plat :</span>
              <input type="text" required v-model="dishDescription" placeholder="Entrez la description ici..">
            </div>
            <div class="section">
              <span>Prix : </span>
              <input type="number" required v-model="dishPrice" placeholder="Entrez le prix ici..">
            </div>
            <div class="section">
              <span>Choix de l'image</span>
              <input type="text" required v-model="dishImage" placeholder="image..">
            </div>
            <button v-on:click="checkNewDish()">Ajouter le nouveau plat</button>
          </div>
        </div>

      <div v-if="!createMode" class="cards">
        <div class="card" v-for="dish in dishesList" :key="dish.id">
          <div class="sections">
            <h1>{{ dish.namer }}</h1>
            <input v-if="modifyMode" v-model="newName" type="text" placeholder="Nouveau nom">
          </div>
          <div class="sections">
            <p>{{ dish.description }}</p>
            <input v-if="modifyMode" v-model="newDescription" type="text" placeholder="Nouvelle description">
          </div>
          <div class="sections">
            <h4>{{ dish.price }} €</h4>
            <input v-if="modifyMode" v-model="newPrice" type="number" placeholder="Nouveau prix (en  €)">
          </div>
          
          <button v-if="modifyMode" v-on:click="validateModify(dish.id)">Valider les modifications</button>
        </div>

      </div>
  </div>
</template>

<script>
import NavbarRestorer from "../../components/navbarClient.vue";
import { loginInfo } from "../../store/index";

const service = require("../../../service");

export default {
  name: "HomeView",
  data() {
    return {
      dishesList: "",
      modifyMode: false,
      createMode: false,
      newName: null,
      newDescription: null,
      newPrice: null,
      dishName: "",
      dishDescription: "",
      dishPrice: "",
      dishImage: "",
      errors: [],
    }
  },
  async beforeMount() {
    const listDishes = await service.getDishesList(loginInfo.state.userID);
    console.log(loginInfo.state.userID)
    this.dishesList = listDishes;
  },
  components: {
    NavbarRestorer,
  },
  methods: {
    enterModifyMode() {
      this.createMode = false;
      if (!this.modifyMode) {
        this.modifyMode = true;
      } else {
        this.modifyMode = false;
      }
    },
    enterCreateMode() {
      this.modifyMode = false;
      if (!this.createMode) {
        this.createMode = true;
      } else {
        this.createMode = false;
      }
    },
    async validateModify(productId) {
      try {
        await service.modifyDish('6', productId, this.newName, this.newDescription, this.newPrice) //rest ID when available
      } catch (e) {
        console.log(e);
      }
    },
    async checkNewDish () {
      try {
        await service.addDish('6', this.dishName, this.dishDescription, this.dishPrice, this.dishImage);
        console.log('ok');
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>