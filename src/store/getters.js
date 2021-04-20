import moment from "moment"
import presets from "../components/DatePicker/presets"

export default {
  // dialog window state
  isDialogOpened(state) {
    return state.dialog_opened
  },

  // compare checkbox state
  getCompareState(state) {
    return state.compare
  },
  getThemeState(state) {
    return state.dark_theme
  },

  // primary date picker state
  getDateStart(state) {
    return state.date_start
  },
  getDateUntil(state) {
    return state.date_until
  },
  getPickerPrimary(state) {
    return [state.date_start, state.date_until]
  },

  // compare date picker state
  getDateCompareStart(state) {
    return state.compare_start
  },
  getDateCompareUntil(state) {
    return state.compare_until
  },
  getPickerCompare(state) {
    return [state.compare_start, state.compare_until]
  },

  // vuetify date pickers state
  isPickerPrimaryActive(state) {
    return state.picker_primary_active
  },

  getPickerDate(state) {
    return moment(state.picker_active_mount).format(presets.MONTH_FORMAT)
  },
  // getPickerCompareDate(state) {
  //   return moment(state.picker_active_compare_mount).format(presets.MONTH_FORMAT)
  // },

  getPickerPrimaryLeft(state) {
    return moment(state.picker_active_mount).subtract(1, "month").format(presets.MONTH_FORMAT)
  },
  getPickerPrimaryRight(state) {
    return moment(state.picker_active_mount).format(presets.MONTH_FORMAT)
  },

  getEmittedConfig(state) {
    return state.emitted_config
  },

  getConfig(state) {
    if (state.primary_preset) {
      state.config.dateStart = null
      state.config.dateUntil = null
      state.config.primaryPreset = state.primary_preset
    } else {
      state.config.dateStart = state.date_start
      state.config.dateUntil = state.date_until
      state.config.primaryPreset = null
    }

    if (state.primary_preset) {
      state.config.compareStart = null
      state.config.compareUntil = null
      state.config.comparePreset = state.compare_preset
    } else {
      state.config.compareStart = state.compare_start
      state.config.compareUntil = state.compare_until
      state.config.comparePreset = null
    }

    return  state.config
  },

  // input field helpers
  getMaxDate(state) {
    return presets.TODAY
  },

  // preset default
  getPrimaryPreset(state) {
    return state.primary_preset
  },
  getComparePreset(state) {
    return state.compare_preset
  },

  // presets
  getPrimaryPresets(state) {
    return state.primary_presets
  },
  getComparePresets(state) {
    return state.compare_presets
  },

  getDefaultDateFormat() {
    return (date) => {
      return moment(date).format(presets.DEFAULT_FORMAT)
    }
  },
}
