import Vue from "vue"
import App from "@/App"
import vuetify from "@/plugins/vuetify"
import VCalendar from "v-calendar"

Vue.config.productionTip = false
Vue.use(VCalendar, { componentPrefix: "custom" })

new Vue({
  vuetify,
  render: h => h(App),
}).$mount("#app")
