// Import vue component
import DateRangeStore from "./store/datepicker"
import DateRangePresets from "./components/DatePicker/presets"
import DateRangePicker from "./components/DateRangePicker.vue"
import localStore from "@/store"
import deepcopy from "deepcopy"

// default npm package init config
import defaultSettings from "./store/defaultSettings"

// Declare install function executed by Vue.use()
export function install(Vue, options = {}) {
  if (install.installed) return

  install.installed = true

  // merge default settings with user settings
  const config = { ...defaultSettings, ...options }

  let { store } = config

  // check if store is not passed to the package config
  if (store === null) {
    // use our local store
    store = localStore
    if (config.debug) {
      console.log("[ date picker ]: INFO: using local Store")
    }
  }

  // register vuex store namespace
  if (options.moduleNames) {
    options.moduleNames.forEach((module) => store.registerModule(module, deepcopy(DateRangeStore)))
  } else store.registerModule("datepicker", DateRangeStore)

  if (config.debug) {
    console.log("[ date picker ]: registering VueX namespace: datepicker")
  }

  delete config.store

  // commit npm package config to vuex store
  store.commit("datepicker/SET_DEBUG", config.debug)

  if ([true, false].includes(config.showPresetsIcon)) {
    store.commit("datepicker/SET_PRESET_ICON_SHOWN", Boolean(config.showPresetsIcon))
  }
  if ([true, false].includes(config.showCalendarIcon)) {
    store.commit("datepicker/SET_CALENDAR_ICON_SHOWN", Boolean(config.showCalendarIcon))
  }
  if ([true, false].includes(config.showCompare)) {
    store.commit("datepicker/SET_COMPARE_DATE_RANGE_SHOWN", Boolean(config.showCompare))
  }

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

export const presets = DateRangePresets
export const datepicker = DateRangeStore

// To allow use as module (npm/webpack/etc.) export component
export default plugin
