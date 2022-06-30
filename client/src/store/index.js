import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    addToCart(state, dishInfos) {
      state.products.push(dishInfos);
    },
    increment(state, payload) {
      var myId = payload["id"];
      var myPrice = payload["price"];
      var findIt = state.products.find((products) => products.id === myId);
      findIt.quantity++;
      findIt.productPrice = findIt.productPrice + myPrice;
    },
    deleteProduct(state, payload) {
      state.products.forEach((myProduct, index, arr) => {
        if (myProduct.id === payload) {
          if (myProduct.quantity > 1) {
            myProduct.quantity = myProduct.quantity - 1;
          } else {
            arr.splice(index, 1);
          }
        }
      });
    },
  },
  getters: {
    getProductsId: (state) => (idSearched) => {
      return state.products.find((products) => products.id === idSearched);
    },

    getTotalPrice: (state) => {
      let total = 0;
      state.products.forEach((product) => {
        total = total + product.productPrice;
      });
      return total;
    },

    getQuantity: (state) => {
      var totalProducts = 0;
      state.products.forEach(element => {
        totalProducts = totalProducts + element.quantity
      });
      return totalProducts;
    }
  },
});

export const loginInfo = new Vuex.Store({
  state: {
    userID: "",
    userTYPE: "",
  },
  mutations: {
    registerInfos(state, payload) {
      const myId = payload["user_id"];
      const myRights = payload["user_type"];
      state.userID = myId;
      state.userTYPE = myRights;
    },
  },
});
