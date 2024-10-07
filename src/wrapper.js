import { createPinia } from "pinia"
import { VueMaskDirective } from "v-mask"

import DateRangePicker from './components/DateRangePicker.ce.vue'

// default npm package init config
import defaultSettings from "./stores/defaultSettings"
import datePicker from "./stores/datePicker"
import deepcopy from "deepcopy"

import { defineStore } from "pinia"

// let stores =[];
let datePickerStores= {}

export default {
  install: (app, options={}) => {

    // merge default settings with user settings
    const config = { ...defaultSettings, ...options }

    let useDatePickerStore;
    let { piniaStore } = config

    if(piniaStore == null){
      piniaStore = createPinia()
      app.use(piniaStore)
      if (config.debug) console.log("[ date picker ]: INFO: using local Store")
    }

    if (config.debug) console.log("[ DateRangePicker ]: Options: ",options)

    if(options?.storeNames){
      if (config.debug) console.log("[ DateRangePicker ]:",options?.storeNames)
      // options.storeNames.forEach((module) => store.registerModule(module, deepcopy(DateRangeStore)))
      options.storeNames.forEach((storeName) => {
        const newStore =defineStore(storeName.name, deepcopy(datePicker))
        newStore().SET_DEBUG(config.debug)

        if ([true, false].includes(storeName?.config?.showPresetsIcon)) {
          newStore().SET_PRESET_ICON_SHOWN(Boolean(storeName?.config?.showPresetsIcon))
        }

        if ([true, false].includes(storeName?.config?.showCalendarIcon)) {
          newStore().SET_CALENDAR_ICON_SHOWN(Boolean(storeName?.config?.showCalendarIcon))
        }

        if ([true, false].includes(storeName?.config?.showCompare)) {
          newStore().SET_PRESET_ICON_SHOWN(Boolean(storeName?.config?.showCompare))
        }
        // Setting back 
       datePickerStores[storeName.name] = newStore(); 
      })
    } 
    else 
    {
      if (config.debug) console.log("[ DateRangePicker ]: ")
      useDatePickerStore = defineStore('datePickerStore',datePicker) 
      useDatePickerStore().SET_DEBUG(config.debug)

      if ([true, false].includes(config.showPresetsIcon)) {
        useDatePickerStore().SET_PRESET_ICON_SHOWN(Boolean(config.showPresetsIcon))
      }

      if ([true, false].includes(config.showCalendarIcon)) {
        useDatePickerStore().SET_CALENDAR_ICON_SHOWN(Boolean(config.showCalendarIcon))
      }

      if ([true, false].includes(config.showCompare)) {
        useDatePickerStore().SET_PRESET_ICON_SHOWN(Boolean(config.showCompare))
      }
      // Setting back
      datePickerStores['datePickerStore'] = useDatePickerStore(); 
    }
    // delete config?.store

    // check if pinia jest been created already
    if (!app.config.globalProperties.$pinia) {
      console.log("[ DateRangePicker ]: pinia store not detected - creating...")
      app.use(piniaStore)
    }
  
    app.directive("mask", VueMaskDirective)
    app.component("DateRangePicker", DateRangePicker)
    console.log("[ DateRangePicker ]: wrapper initialization completed...")
  },
}

// TODO: Auto-install when vue is found (eg. in browser via <script> tag)
export { DateRangePicker, datePickerStores } // export vue router middleware
