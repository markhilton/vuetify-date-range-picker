// Import vue component
import {
  PERIOD_TYPE,
  PERIOD_DAY,
  PERIOD_DAY_COMPARE,
  PERIOD_WEEK,
  PERIOD_WEEK_COMPARE,
  PERIOD_MONTH,
  PERIOD_MONTH_COMPARE,
  CUSTOM_COMPARE,
  DEFAULT_TYPE_SELECTION,
  INTERNAL_DATE_FORMAT_1,
  INTERNAL_DATE_FORMAT_2,
  DISPLAY_DATE_FORMAT_1,
  DISPLAY_DATE_FORMAT_2,
  DISPLAY_DATE_FORMAT_3,
  DEFAULT_CUSTOM_DATE,
  PRESETS_DESKTOP,
  COMPARE_PERIODS_DESKTOP,
  PRESETS_DEFAULT_DESKTOP,
  PERIOD_CONVERT_LIST_MOBILE,
  PERIOD_CONVERT_LIST_DESKTOP,
  PERIOD_COMPARE_CONVERT_LIST_MOBILE,
  PERIOD_COMPARE_CONVERT_LIST_DESKTOP,
  DEFAULT_MOBILE_CONFIG,
} from "./components/presets/constants"
import DateRangePicker from "./components/DateRangePicker.vue"

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component("DateRangePicker", DateRangePicker)
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

export {
  PERIOD_TYPE,
  PERIOD_DAY,
  PERIOD_DAY_COMPARE,
  PERIOD_WEEK,
  PERIOD_WEEK_COMPARE,
  PERIOD_MONTH,
  PERIOD_MONTH_COMPARE,
  CUSTOM_COMPARE,
  DEFAULT_TYPE_SELECTION,
  INTERNAL_DATE_FORMAT_1,
  INTERNAL_DATE_FORMAT_2,
  DISPLAY_DATE_FORMAT_1,
  DISPLAY_DATE_FORMAT_2,
  DISPLAY_DATE_FORMAT_3,
  DEFAULT_CUSTOM_DATE,
  PRESETS_DESKTOP,
  COMPARE_PERIODS_DESKTOP,
  PRESETS_DEFAULT_DESKTOP,
  PERIOD_CONVERT_LIST_MOBILE,
  PERIOD_CONVERT_LIST_DESKTOP,
  PERIOD_COMPARE_CONVERT_LIST_MOBILE,
  PERIOD_COMPARE_CONVERT_LIST_DESKTOP,
  DEFAULT_MOBILE_CONFIG,
}

// To allow use as module (npm/webpack/etc.) export component
export default DateRangePicker
