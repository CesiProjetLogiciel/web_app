import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      products: [],
    },
    mutations: {
      addToCart (state, dishInfos) {
        state.products.push(dishInfos)
      },
      increment (state, payload) {
        var myId = payload['id']
        var myPrice = payload['price']
        var findIt = state.products.find(products => products.id === myId)
        findIt.quantity++;
        findIt.productPrice = findIt.productPrice + myPrice
      },
    },
    getters: {
      getProductsId: (state) => (idSearched) => {
        return state.products.find(products => products.id === idSearched)
      },

      getTotalPrice: state => {
        let total = 0;
        state.products.forEach(product => {
          total = total + product.productPrice;
          
        });
        return total;
      },
    },
  })