import presets from "../components/DatePicker/presets"

const defaultPrimaryPreset = "LAST_7_DAYS"
const defaultComparePreset = "PREVIOUS_PERIOD"

export default {
  // date range picker config props and emitted values
  compare: true,

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

  // layout
  dialog_opened: false,
  picker_primary_active: true,

  // picker_compare: presets.PREVIOUS_PERIOD(presets[defaultPrimaryPreset]),
  // picker_compare_left: presets.PREVIOUS_PERIOD(presets[defaultPrimaryPreset])[0],
}
