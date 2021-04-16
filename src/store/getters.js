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
  getPickerCompareDate(state) {
    return moment(state.picker_active_compare_mount).format(presets.MONTH_FORMAT)
  },

  getPickerPrimaryLeft(state) {
    return moment(state.date_until).subtract(1, "month").format(presets.MONTH_FORMAT)
    // return moment(state.date_start).format(presets.MONTH_FORMAT)
  },
  getPickerPrimaryRight(state) {
    return moment(state.date_until).format(presets.MONTH_FORMAT)
  },
  getPickerCompareLeft(state) {
    return moment(state.compare_until).subtract(1, "month").format(presets.MONTH_FORMAT)
  },
  getPickerCompareRight(state) {
    return moment(state.compare_until).format(presets.MONTH_FORMAT)
  },

  getConfig(state) {
    const config = {
      compare: state.compare,
    }

    if (state.primary_preset) {
      config.dateStart = null
      config.dateUntil = null
      config.primaryPreset = state.primary_preset
    } else {
      config.dateStart = state.date_start
      config.dateUntil = state.date_until
      config.primaryPreset = null
    }

    if (state.primary_preset) {
      config.compareStart = null
      config.compareUntil = null
      config.comparePreset = state.compare_preset
    } else {
      config.compareStart = state.compare_start
      config.compareUntil = state.compare_until
      config.comparePreset = null
    }

    return config
  },

  // input field helpers
  getMaxDate(state) {
    return presets.TODAY
  },

  // watch helpers
  getPropsHash() {
    return state.props_hash
  },
  getConfigHash(state, getters) {
    return JSON.stringify(getters.config)
  },

  // presets
  getPrimaryPreset(state) {
    return state.primary_preset
  },
  getComparePreset(state) {
    return state.compare_preset
  },

  getDefaultDateFormat() {
    return (date) => {
      return moment(date).format(presets.DEFAULT_FORMAT)
    }
  },
}
