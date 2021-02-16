// Import vue component
import DateRangePresets from "./components/presets"
import DateRangeSelector from "./components/DatePicker.vue"

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component("DateRangeSelector", DateRangeSelector)
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

// To allow use as module (npm/webpack/etc.) export component
export default DateRangeSelector
