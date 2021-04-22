import moment from "moment"
import presets from "../components/DatePicker/presets"

export default {
  // controls the dialog
  SET_DIALOG_OPENED(state, status) {
    state.emitted_config = { ...state.config }
    state.dialog_opened = status
  },

  // flips compare period checkbox
  FLIP_COMPARE_STATE(state) {
    state.compare = !state.compare

    if (state.compare) {
      state.picker_primary_active = false
    } else {
      // reset compare preset
      // state.compare_preset = state.compare_preset
      state.compare_start = presets.PREVIOUS_PERIOD(presets[state.primary_preset])[0]
      state.compare_until = presets.PREVIOUS_PERIOD(presets[state.primary_preset])[1]
    }
  },

  // Theme mode
  SET_THEME_STATE(state) {
    state.dark_theme = !state.dark_theme
  },

  // set primary picker active
  SET_PICKER_PRIMARY_ACTIVE(state, value) {
    state.picker_primary_active = value
  },

  // control date range properties
  SET_DATE_START(state, date) {
    state.date_start = date
    state.compare_start = presets[state.compare_preset]([state.date_start, state.date_until])[0]
    state.primary_preset = null
  },

  SET_DATE_UNTIL(state, date) {
    state.date_until = date
    state.compare_until = presets[state.compare_preset]([state.date_start, state.date_until])[1]
    state.primary_preset = null
  },

  SET_COMPARE_START(state, date) {
    state.compare_start = date
    state.compare_preset = null
  },

  SET_COMPARE_UNTIL(state, date) {
    state.compare_until = date
    state.compare_preset = null
  },

  // control selected primary preset
  SET_PRIMARY_PRESET(state, preset) {
    state.primary_preset = preset

    state.picker_active_mount = moment(presets[preset][0]).add(1, "month").format(presets.MONTH_FORMAT)
    state.piker_left = presets[preset][0]
    state.date_start = presets[preset][0]
    state.date_until = presets[preset][1]

    const compare = presets[state.compare_preset]([state.date_start, state.date_until])
    state.compare_start = compare[0]
    state.compare_until = compare[1]

    state.picker_primary_active = true

    // state.picker_primary = true // ?
    // state.picker_primary = presets.LAST_MONTH
    // state.picker_primary_left = presets.LAST_MONTH[0]
  },

  // control selected compare preset
  SET_COMPARE_PRESET(state, preset) {
    const range = presets[preset]([state.date_start, state.date_until])

    state.compare_preset = preset
    state.compare_start = range[0]
    state.compare_until = range[1]

    state.picker_active_mount = moment(range[0]).add(1, "month").format(presets.MONTH_FORMAT)
    state.picker_primary_active = false

    // state.preset_compare = true
    // state.picker_compare = presets.PREVIOUS_YEAR(state.picker_primary)
    // state.picker_primary_left = state.picker_compare[0]
    // state.picker_compare_left = moment(state.picker_primary[0]).subtract(1, "year").format(presets.MONTH_FORMAT)
  },

  // resets primary preset
  SET_PRIMARY_PRESET_NULL(state) {
    state.primary_preset = null
  },

  // resets compare preset
  SET_COMPARE_PRESET_NULL(state) {
    state.compare_preset = null
  },

  // load props to the store
  SET_PROPS(state, props) {
    console.log("[ SET_PROPS ]:")

    state.compare = Boolean(props && props.compare)

    console.log("- applying compare:", state.compare)

    if (presets[props && props.primaryPreset]) {
      state.primary_preset = props.primaryPreset
      state.date_start = presets[props && props.primaryPreset][0]
      state.date_until = presets[props && props.primaryPreset][1]

      console.log("- applying primary preset:", presets[props.primaryPreset])
    } else {
      state.date_start = (props && props.dateStart) || presets[state.primary_preset][0]
      state.date_until = (props && props.dateUntil) || presets[state.primary_preset][1]

      console.log("- applying primary date range:", state.date_start, "-", state.date_until)
    }

    if (presets[props && props.comparePreset]) {
      const range = presets[props.comparePreset]([state.date_start, state.date_until])

      state.compare_preset = props.comparePreset
      state.compare_start = range[0]
      state.compare_until = range[1]

      console.log("- applying compare preset:", range)
    } else {
      state.compare_start =
        (props && props.compareStart) || presets[state.compare_preset]([state.date_start, state.date_until])[0]
      state.compare_until =
        (props && props.compareUntil) || presets[state.compare_preset]([state.date_start, state.date_until])[1]

      console.log("- applying compare date range:", props && props.compareStart, "-", props && props.compareUntil)
    }
  },

  // set emitted config from current states
  SET_CONFIG(state) {
    state.config = {
      compare: state.compare,

      dateStart: state.date_start,
      dateUntil: state.date_until,
      compareStart: state.compare_start,
      compareUntil: state.compare_until,
      primaryPreset: state.primary_preset,
      comparePreset: state.compare_preset,
    }

    state.emitted_config = { ...state.config }

    // close dialog
    state.dialog_opened = false
  },

  // set primary start and until date
  SET_PICKER_PRIMARY(state, date) {
    if (state.date_start && state.date_until) {
      state.date_start = date
      state.date_until = undefined
    } else if (state.date_start && !state.date_until) {
      state.date_until = date
    } else {
      state.date_start = date
    }
    state.primary_preset = null
  },

  // set compere start and until date
  SET_PICKER_COMPARE(state, date) {
    if (state.compare_start && state.compare_until) {
      state.compare_start = date
      state.compare_until = undefined
    } else if (state.compare_start && !state.compare_until) {
      state.compare_until = date
    } else {
      state.compare_start = date
    }
    state.compare_preset = null
  },

  // set active mount
  SET_PICKER_DATE(state, ev) {
    state.picker_active_mount = ev
  },

  // set active mount for date piker next to each other
  SET_PICKER_DATE_LEFT(state, ev) {
    if (moment(state.picker_active_mount).diff(moment(ev), "months") >= 2) {
      state.picker_active_mount = moment(ev).add(1, "month").format(presets.MONTH_FORMAT)
    }
  },
}
