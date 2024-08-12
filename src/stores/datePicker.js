import moment from 'moment'

import presets, { primaryPresets, comparePresets } from '../components/DatePicker/presets'

const defaultDateFormat = 'MMM D, YYYY'
const defaultPrimaryPreset = 'LAST_7_DAYS'
const defaultComparePreset = 'PREVIOUS_PERIOD'

export const datePicker = {
  state: () => ({
    debug: false,

    // date range picker config props and emitted values
    config: {
      compare: true
    },

    // layout
    show_calendar_icon: true,
    show_presets_icon: true,
    show_compare_date_range: true,

    // config
    compare: true,
    dark_theme: false,
    date_format: defaultDateFormat,

    // defaults
    default_date_format: defaultDateFormat,
    default_primary_preset: defaultPrimaryPreset,
    default_compare_preset: defaultComparePreset,

    // primary date range
    date_start: presets[defaultPrimaryPreset][0],
    date_until: presets[defaultPrimaryPreset][1],
    picker_active_mount: presets[defaultPrimaryPreset][0],
    picker_active_compare_mount: presets[defaultPrimaryPreset][0],

    // compare period date range
    compare_start: presets.PREVIOUS_PERIOD(presets[defaultPrimaryPreset])[0],
    compare_until: presets.PREVIOUS_PERIOD(presets[defaultPrimaryPreset])[1],

    // primary and compare presets
    primary_preset: defaultPrimaryPreset,
    compare_preset: defaultComparePreset,

    // primary and compare presets lists
    primary_presets: Object.keys(primaryPresets),
    compare_presets: Object.keys(comparePresets),

    // layout
    dialog_opened: false,
    picker_primary_active: true
  }),
  getters: {
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
      return (preset) => preset.replaceAll('_', ' ')
    },

    getPresetLabelSmall() {
      return (preset) => preset.replaceAll('_', ' ').toLowerCase()
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
      return presets.getDatesBetween(state.date_start, state.date_until)
    },

    // compare date picker state
    getDateCompareStart(state) {
      return state.compare_start
    },

    getDateCompareUntil(state) {
      return state.compare_until
    },

    getPickerCompare(state) {
      return presets.getDatesBetween(state.compare_start, state.compare_until) // return [state.compare_start, state.compare_until]
    },

    // vuetify date pickers state
    isPickerPrimaryActive(state) {
      return state.picker_primary_active
    },

    // parameter getter to format date
    getFormattedDate() {
      return (start, until) => {
        // moment(start).format(state.date_format)
        const startMonth = moment(start).month() // jan=0, dec=11
        const startYear = moment(start).year()

        const untilMonth = moment(until).month() // jan=0, dec=11
        const untilYear = moment(until).year()

        let first = 'MMM D, YYYY'
        let second = 'MMM D, YYYY'

        if (startYear === untilYear && startMonth === untilMonth) {
          first = 'MMM D'
          second = 'D, YYYY'
        } else if (startYear === untilYear) {
          first = 'MMM D'
          second = 'MMM D, YYYY'
        }

        return moment(start).format(first) + ' - ' + moment(until).format(second)
      }
    },

    getPickerDate(state) {
      return moment(state.picker_active_mount).format(presets.MONTH_FORMAT)
    },

    getPickerPrimaryLeft(state) {
      return moment(state.picker_active_mount).subtract(1, 'month').format(presets.MONTH_FORMAT)
    },

    getPickerPrimaryRight(state) {
      return moment(state.picker_active_mount).format(presets.MONTH_FORMAT)
    },

    getPickerPrimaryLeftMonth(state) {
      return new Date(
        moment(state.picker_active_mount).subtract(1, 'month').format(presets.MONTH_FORMAT)
      ).getMonth()
    },

    getPickerPrimaryRightMonth(state) {
      return new Date(moment(state.picker_active_mount).format(presets.MONTH_FORMAT)).getMonth()
    },

    getPickerPrimaryLeftYear() {
      return new Date(this.getPickerPrimaryLeft).getFullYear()
    },

    getPickerPrimaryRightYear() {
      return new Date(this.getPickerPrimaryRight).getFullYear()
    },

    getConfig(state) {
      return state.config
    },

    // input field helpers
    getMaxDate() {
      return new Date(presets.TODAY)
    },

    getMaxLeftDate() {
      return presets.getLastDayOfMonth(
        new Date(this.getPickerPrimaryLeftYear, this.getPickerPrimaryLeftMonth)
      )
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
    }
  },
  actions: {
    // controls the dialog
    SET_DEBUG(status) {
      this.debug = status
    },

    // controls the dialog
    SET_DIALOG_OPENED(status) {
      this.dialog_opened = status
    },
    // controls the dialog
    SET_PRESET_ICON_SHOWN(status) {
      this.show_presets_icon = status
    },
    // controls the dialog
    SET_CALENDAR_ICON_SHOWN(status) {
      this.show_calendar_icon = status
    },
    // controls the compare date range visibility
    SET_COMPARE_DATE_RANGE_SHOWN(status) {
      this.show_compare_date_range = status
    },
    // flips compare period checkbox
    FLIP_COMPARE_STATE() {
      this.compare = !this.compare
    },

    // flips compare period checkbox
    SET_COMPARE_STATE(status) {
      this.compare = status
    },

    // set primary picker active
    SET_PICKER_PRIMARY_ACTIVE(value) {
      this.picker_primary_active = value
    },

    // control date range properties
    SET_DATE_START(date) {
      this.date_start = moment(date).format(presets.DATE_FORMAT) //date
      this.compare_start = presets[this.compare_preset]([this.date_start, this.date_until])[0]
      this.primary_preset = null
    },

    SET_DATE_UNTIL(date) {
      this.date_until = moment(date).format(presets.DATE_FORMAT) //date
      this.compare_until = presets[this.compare_preset]([this.date_start, this.date_until])[1]
      this.primary_preset = null
    },

    SET_COMPARE_START(date) {
      this.compare_start = moment(date).format(presets.DATE_FORMAT) //date
      this.compare_preset = null
    },

    SET_COMPARE_UNTIL(date) {
      this.compare_until = moment(date).format(presets.DATE_FORMAT) //date
      this.compare_preset = null
    },

    // control selected primary preset
    SET_PRIMARY_PRESET(preset) {
      this.primary_preset = preset

      this.picker_active_mount = moment(presets[preset][0])
        .add(1, 'month')
        .format(presets.MONTH_FORMAT)

      this.piker_left = presets[preset][0]
      this.date_start = presets[preset][0]
      this.date_until = presets[preset][1]
      if (this.compare_preset) {
        const compare = presets[this.compare_preset]([this.date_start, this.date_until])
        this.compare_start = compare[0]
        this.compare_until = compare[1]
      }
      this.picker_primary_active = true
    },

    // control selected compare preset
    SET_COMPARE_PRESET(preset) {
      const range = presets[preset]([this.date_start, this.date_until])

      this.compare_preset = preset
      this.compare_start = range[0]
      this.compare_until = range[1]

      this.picker_active_mount = moment(range[0]).add(1, 'month').format(presets.MONTH_FORMAT)

      this.picker_primary_active = false
    },

    // load initial component props to the store state
    SET_PROPS(props) {
      if (this.debug) console.log('[ SET_PROPS ]:')

      // load defaults
      this.compare = this.config.compare

      if (props && [true, false].includes(props.compare)) this.compare = props.compare

      if (this.debug) console.log('- applying compare:', this.compare)

      if (props && presets[props.primaryPreset]) {
        this.primary_preset = props.primaryPreset
        this.date_start = presets[props && props.primaryPreset][0]
        this.date_until = presets[props && props.primaryPreset][1]
        if (this.debug)
          console.log('- applying primary preset from props:', presets[props.primaryPreset])
      } else {
        this.primary_preset = null
        this.date_start = (props && props.dateStart) || presets[this.default_primary_preset][0]
        this.date_until = (props && props.dateUntil) || presets[this.default_primary_preset][1]

        if (!props.dateStart && !props.dateUntil) {
          this.primary_preset = this.default_primary_preset

          if (this.debug) {
            console.log(
              '- applying primary date range from default preset:',
              this.date_start,
              '-',
              this.date_until
            )
          }
        }

        if (this.debug && (props.dateStart || props.dateUntil)) {
          console.log(
            '- applying primary date range from props:',
            this.date_start,
            '-',
            this.date_until
          )
        }
      }

      if (props && presets[props.comparePreset]) {
        const range = presets[props.comparePreset]([this.date_start, this.date_until])

        this.compare_preset = props.comparePreset
        this.compare_start = range[0]
        this.compare_until = range[1]

        if (this.debug) console.log('- applying compare preset:', range)
      } else {
        // this.compare_preset = null //TODO: commented because of a error
        this.compare_start =
          (props && props.compareStart) ||
          presets[this.default_compare_preset]([this.date_start, this.date_until])[0]
        this.compare_until =
          (props && props.compareUntil) ||
          presets[this.default_compare_preset]([this.date_start, this.date_until])[1]

        if (!props.compareStart && !props.compareUntil) {
          this.compare_preset = this.default_compare_preset

          if (this.debug) {
            console.log(
              '- applying compare date range from default preset:',
              this.compare_start,
              '-',
              this.compare_until
            )
          }
        }

        if (this.debug && (props.compareStart || props.compare_until)) {
          console.log(
            '- applying compare date range from props:',
            this.compare_start,
            '-',
            this.compare_until
          )
        }
      }
    },

    // set emitted config from current states
    SET_CONFIG() {
      // apply primary preset if matches current start/until fields
      Object.keys(primaryPresets).forEach((preset) => {
        const [start, until] = presets[preset]

        if (start === this.date_start && until === this.date_until) {
          this.primary_preset = preset
        }
      })

      // apply compare preset if matches compare start/until fields
      Object.keys(comparePresets).forEach((preset) => {
        const [start, until] = presets[preset]([this.date_start, this.date_until])

        if (start === this.compare_start && until === this.compare_until) {
          this.compare_preset = preset
        }
      })

      this.config = {
        compare: this.compare,
        dateStart: this.date_start,
        dateUntil: this.date_until,
        compareStart: this.compare_start,
        compareUntil: this.compare_until,
        primaryPreset: this.primary_preset,
        comparePreset: this.compare_preset
      }

      if (this.debug) console.log('[ SET_CONFIG ]:', this.config)

      // close dialog
      this.dialog_opened = false
    },

    // set primary start and until date
    SET_PICKER_PRIMARY(date) {
      if (this.date_start && this.date_until) {
        this.date_start = moment(date[0]).format(presets.DATE_FORMAT)
        this.date_until = undefined
      } else if (this.date_start && !this.date_until) {
        this.date_until = moment(date[date.length - 1]).format(presets.DATE_FORMAT)
      } else {
        this.date_start = moment(date[0]).format(presets.DATE_FORMAT)
      }
      this.primary_preset = null
    },

    // set compere start and until date
    SET_PICKER_COMPARE(date) {
      if (this.compare_start && this.compare_until) {
        this.compare_start = moment(date[0]).format(presets.DATE_FORMAT)
        this.compare_until = undefined
      } else if (this.compare_start && !this.compare_until) {
        this.compare_until = moment(date[date.length - 1]).format(presets.DATE_FORMAT)
      } else {
        this.compare_start = moment(date[0]).format(presets.DATE_FORMAT)
      }
      this.compare_preset = null
    },

    // set active mount
    SET_PICKER_DATE(ev) {
      let picker_active_mount_month = new Date(this.picker_active_mount).getMonth()
      if (ev === 0 && picker_active_mount_month === 11) {
        let changedYear = new Date(this.getPickerPrimaryRight).getFullYear() + 1
        let changedMonth = new Date('').setFullYear(changedYear)
        this.picker_active_mount = moment(new Date(changedMonth).setMonth(ev)).format(
          presets.MONTH_FORMAT
        )
      } else {
        this.picker_active_mount = moment(new Date(this.getPickerPrimaryRight).setMonth(ev)).format(
          presets.MONTH_FORMAT
        )
      }
    },

    // set active mount for date piker next to each other
    SET_PICKER_DATE_LEFT(ev) {
      let picker_active_mount_month = new Date(this.picker_active_mount).getMonth()
      if (picker_active_mount_month - ev >= 2 && picker_active_mount_month > ev) {
        this.picker_active_mount = moment(
          new Date(this.getPickerPrimaryLeft).setMonth(ev + 1)
        ).format(presets.MONTH_FORMAT)
      } else if (ev === 11) {
        let changedYear = new Date(this.getPickerPrimaryLeft).getFullYear() - 1
        let changedMonth = new Date('').setFullYear(changedYear)

        this.picker_active_mount = moment(new Date(changedMonth).setMonth(ev)).format(
          presets.MONTH_FORMAT
        )
      } else {
        this.picker_active_mount = moment(
          new Date(this.getPickerPrimaryLeft).setMonth(ev + 1)
        ).format(presets.MONTH_FORMAT)
      }
    }
  }
}

export default datePicker
