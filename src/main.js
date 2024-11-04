import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { createApp,h } from "vue"
import { createPinia } from "pinia"

import DateRangePicker from "./wrapper"

// initialize VUE
const app  = createApp({
  render: ()=>h(App)
});

app.use(createPinia())
app.use(vuetify)

// const transactions= {
//   name: "transactions",
//   config:{
//     showPresetsIcon:false,
//     showCalendarIcon:false,
//     showCompare:true
//   }
// }

// const reports= {
//   name: "reports",
//   config:{
//     showPresetsIcon:false,
//     showCalendarIcon:true,
//     showCompare:true
//   }
// }

const DateRangePickerSettings = {
  debug: true,
  // showPresetsIcon: false,
  // showCalendarIcon: true,
  showCompare: true
  // storeNames: [ transactions , reports], // Storenames
}

app.use(DateRangePicker,DateRangePickerSettings )
app.mount("#app")