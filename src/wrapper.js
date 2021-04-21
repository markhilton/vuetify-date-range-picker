// Import vue component
import DateRangeStore from "./store"
import DateRangePresets from "./components/DatePicker/presets"
import DateRangeSelector from "./components/DatePicker.vue"

// Declare install function executed by Vue.use()
export function install(Vue, options = {}) {
  if (install.installed) return

  if (!options.store) console.error("DateRangePicker: please provide a store option")

  install.installed = true
  Vue.component("DateRangeSelector", DateRangeSelector)

  if (options.store) options.store.registerModule("datePicker", DateRangeStore)
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}

if (GlobalVue) GlobalVue.use(plugin)

export const presets = DateRangePresets
export const datepicker = DateRangeStore

// To allow use as module (npm/webpack/etc.) export component
export default DateRangeSelector
