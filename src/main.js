import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;

Vue.config.productionTip = false;
axios.defaults.baseURL = BASE_URL;

Vue.filter("uppercase", val => {
  if (!val) return "";
  return val.toUpperCase();
});

Vue.filter("currency", val => {
  if (!val) return "";
  return `$ ${val}`;
});

Vue.filter("fixed", (val, param) => {
  if (!val || !param) return "";
  return val.toFixed(param);
});

import "@/scss/custom.scss";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
