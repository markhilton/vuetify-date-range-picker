import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"

Vue.config.devtools = true

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
})

/**
 old watches
    // monitor primary period selection changes to reset presets if needed
    getPrimaryPresetHash() {
      if (!this.presetMain) this.primaryPreset = null
      this.presetMain = false

      // adjust compare date range if compare preset is set on
      if (this.comparePreset === "PREVIOUS_PERIOD") this.SET_CCOMPARE_PREVIOUS_PERIOD()
      if (this.comparePreset === "PREVIOUS_YEAR") this.SET_COMPARE_PREVIOUS_YEAR()
    },

    // monitor main period selection changes to reset presets if needed
    getComparePresetHash() {
      if (!this.presetCompare) this.comparePreset = null
      this.presetCompare = false
    },

    // Left and right date pickers should move accordingly
    pickerMainLeft(val) {
      this.pickerMainRight = moment(val).add(1, "month").format(presets.MONTH_FORMAT)
    },

    pickerMainRight(val) {
      this.pickerMainLeft = moment(val).subtract(1, "month").format(presets.MONTH_FORMAT)
    },

    // The compare date picker should display the same month as the primary one
    pickerCompareLeft(val) {
      this.pickerCompareRight = moment(val).add(1, "month").format(presets.MONTH_FORMAT)
    },

    pickerCompareRight(val) {
      this.pickerCompareLeft = moment(val).subtract(1, "month").format(presets.MONTH_FORMAT)
    },

*/
