import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

// Store management
import { store } from './store/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
