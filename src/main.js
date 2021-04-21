import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import datepicker from "@/store"
import vuetify from "@/plugins/vuetify.js"

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({ modules: { datepicker } })

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
