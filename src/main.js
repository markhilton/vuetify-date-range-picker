import Vue from "vue"
import App from "./App.vue"
import vuetify from "@/plugins/vuetify.js"

Vue.config.productionTip = false

Vue.use(require("vue-moment"))

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
