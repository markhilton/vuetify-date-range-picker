import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import store from "@/store"
import vuetify from "@/plugins/vuetify.js"
import DateRangePicker from "./wrapper"

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Vuex)

const DateRangePickerSettings = {
  debug: true,
  store,
}

Vue.use(DateRangePicker, DateRangePickerSettings)

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
