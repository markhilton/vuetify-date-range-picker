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

  // parameter getter to format date
  getFormattedDate(state) {
    return (date) => {
      return moment(date).format(state.date_format)
    }
  },

  getPickerDate(state) {
    return moment(state.picker_active_mount).format(presets.MONTH_FORMAT)
  },

  getPickerPrimaryLeft(state) {
    return moment(state.picker_active_mount).subtract(1, "month").format(presets.MONTH_FORMAT)
  },

  getPickerPrimaryRight(state) {
    return moment(state.picker_active_mount).format(presets.MONTH_FORMAT)
  },

  getConfig(state) {
    return state.config
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

  getPrimaryDefaultDateFormat() {
    return ({ primaryPreset, date_start }, index) => {
      if (primaryPreset) return moment(presets[primaryPreset][index]).format(presets.DEFAULT_FORMAT)

      return moment(date_start).format(presets.DEFAULT_FORMAT)
    }
  },

  getCompareDefaultDateFormat() {
    return ({ primaryPreset, comparePreset, compare_start }, index) => {
      if (comparePreset && comparePreset)
        return moment(presets[comparePreset](presets[primaryPreset])[index]).format(presets.DEFAULT_FORMAT)
      return moment(compare_start).format(presets.DEFAULT_FORMAT)
    }
  },
}
