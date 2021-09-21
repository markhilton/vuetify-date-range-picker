import moment from "moment"
import presets from "../../components/DatePicker/presets"

export default {
  // dialog window state
  isDialogOpened(state) {
    return state.dialog_opened
  },

  isCalendarIconShown(state) {
    return state.show_calendar_icon
  },

  isPresetsIconShown(state) {
    return state.show_presets_icon
  },

  getPresetLabel() {
    return (preset) => preset.replaceAll("_", " ")
  },

  getPresetLabelSmall() {
    return (preset) => preset.replaceAll("_", " ").toLowerCase()
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

  // parameter getter to format date
  getFormattedDate(state) {
    return (start, until) => {
      // moment(start).format(state.date_format)
      const startMonth = moment(start).month() // jan=0, dec=11
      const startYear = moment(start).year()

      const untilMonth = moment(until).month() // jan=0, dec=11
      const untilYear = moment(until).year()

      let first = "MMM D, YYYY"
      let second = "MMM D, YYYY"

      if (startYear === untilYear && startMonth === untilMonth) {
        first = "MMM D"
        second = "D, YYYY"
      } else if (startYear === untilYear) {
        first = "MMM D"
        second = "MMM D, YYYY"
      }

      return moment(start).format(first) + " - " + moment(until).format(second)
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

  // get presets
  getPrimaryPresets(state) {
    return state.primary_presets
  },

  getComparePresets(state) {
    return state.compare_presets
  },
}
