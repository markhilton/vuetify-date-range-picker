import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
// Turn on standard mdi fonts:
// import "@mdi/font/css/materialdesignicons.css"

// Turn on mdiSvg fonts
// import { ... } from "@mdi/js"

Vue.use(Vuetify)

export default new Vuetify({
  title: "Vuetify Date Picker",
  icons: {
    // iconfont: "mdi",
    iconfont: "mdiSvg",
  },
})
