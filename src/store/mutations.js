import moment from "moment"
import presets from "../components/DatePicker/presets"

export default {
  // controls the dialog
  SET_DIALOG_OPENED(state, status) {
    state.dialog_opened = status
  },

  //Set initial values
  SET_STATE_DATA (state, data) {
    if (!!data) {
      state.compare = data.compare
      state.primary_preset = data.primaryPreset || state.primary_preset
      state.compare_preset = data.comparePreset || state.compare_preset
      if (state.primary_preset) {
        state.date_start = presets[state.primary_preset][0]
        state.date_until = presets[state.primary_preset][1]
      }
      if (state.compare_preset && state.primary_preset) {
        state.compare_start = presets[state.compare_preset](presets[state.primary_preset])[0]
        state.compare_until = presets[state.compare_preset](presets[state.primary_preset])[1]
      }
    }
  },

  // flips compare period checkbox
  FLIP_COMPARE_STATE(state, config) {
    state.compare = !state.compare
    if (!!config) {
      state.config = {...config}
      state.config = {
        compare: !config.compare || state.compare,
        dateStart: config.date_start || state.date_start,
        dateUntil: config.date_until || state.date_until,
        compareStart: config.compare_start || state.compare_start,
        compareUntil: config.compare_until || state.compare_until,
        primaryPreset: config.primary_preset || state.primary_preset,
        comparePreset: config.compare_preset || state.compare_preset,
      }
    } else {
      state.config = {
        compare: state.compare,
        dateStart: state.date_start,
        dateUntil: state.date_until,
        compareStart: state.compare_start,
        compareUntil: state.compare_until,
        primaryPreset: state.primary_preset,
        comparePreset: state.compare_preset,
      }
    }
    if (state.compare) {
      state.picker_primary_active = false
    } else {
      // reset compare preset
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
    if (state.compare_preset){
      const compare = presets[state.compare_preset]([state.date_start, state.date_until])
      state.compare_start = compare[0]
      state.compare_until = compare[1]
    }
    state.picker_primary_active = true
  },

  // control selected compare preset
  SET_COMPARE_PRESET(state, preset) {
    const range = presets[preset]([state.date_start, state.date_until])

    state.compare_preset = preset
    state.compare_start = range[0]
    state.compare_until = range[1]

    state.picker_active_mount = moment(range[0]).add(1, "month").format(presets.MONTH_FORMAT)
    state.picker_primary_active = false
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
  SET_CONFIG(state, data) {
    if (!!data) {
      state.config = {
        compare: !data.compare || !state.compare,
        dateStart: data.date_start || state.date_start,
        dateUntil: data.date_until || state.date_until,
        compareStart: data.compare_start || state.compare_start,
        compareUntil: data.compare_until || state.compare_until,
        primaryPreset: data.primary_preset || state.primary_preset,
        comparePreset: data.compare_preset || state.compare_preset,
      }
    } else {
      state.config = {
        compare: state.compare,
        dateStart: state.date_start,
        dateUntil: state.date_until,
        compareStart: state.compare_start,
        compareUntil: state.compare_until,
        primaryPreset: state.primary_preset,
        comparePreset: state.compare_preset,
      }
    }

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
