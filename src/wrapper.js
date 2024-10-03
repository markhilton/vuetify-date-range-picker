import { createPinia } from "pinia"
import { VueMaskDirective } from "v-mask"

import DateRangePicker from './components/DateRangePicker.vue'

export default {
  install: (app) => {
  
    console.log("[ DateRangePicker ]: wrapper initialization...")
    // check if pinia jest been created already
    if (!app.config.globalProperties.$pinia) {
      console.log("[ DateRangePicker ]: pinia store not detected - creating...")
      app.use(createPinia())
    }

    app.directive("mask", VueMaskDirective)
    app.component("DateRangePicker", DateRangePicker)
    console.log("[ DateRangePicker ]: wrapper initialization completed...")
  },
}

export { DateRangePicker } // export vue router middleware
