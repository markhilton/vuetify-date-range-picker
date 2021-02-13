<template>
  <v-card class="date-picker-desktop elevation-4 mx-auto">
    <v-card-text class="pickers">
      <v-row>
        <v-col cols="7">
          <v-row :class="['picker-main', pickerMainIsActive ? 'active' : '']">
            <v-col cols="6">
              <v-date-picker
                v-model="pickerMain"
                range
                no-title
                first-day-of-week="1"
                :max="maxDate"
                :picker-date.sync="pickerMainLeft"
                class="picker-main-left pr-1"
                color="blue darken-2 picker-main-selected"
              />
            </v-col>
            <v-col cols="6">
              <v-date-picker
                v-model="pickerMain"
                range
                no-title
                first-day-of-week="1"
                :max="maxDate"
                :picker-date.sync="pickerMainRight"
                class="picker-main-right"
                color="blue darken-2 picker-main-selected"
              />
            </v-col>
          </v-row>

          <v-row v-if="compare" justify="center" class="picker-compare">
            <v-col cols="6">
              <v-date-picker
                v-model="pickerCompare"
                range
                no-title
                show-current="false"
                first-day-of-week="1"
                :max="maxDate"
                :picker-date.sync="pickerMainLeft"
                class="picker-compare-left pr-1"
                color="orange darken-4 picker-compare-selected"
              />
            </v-col>
            <v-col cols="6">
              <v-date-picker
                v-model="pickerCompare"
                range
                no-title
                show-current="false"
                first-day-of-week="1"
                :max="maxDate"
                :picker-date.sync="pickerMainRight"
                class="picker-compare-right"
                color="orange darken-4 picker-compare-selected"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="5">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="pickerMain[0]"
                label="From"
                type="date"
                dense
                outlined
                :max="maxDate"
                class="picker-input"
                @click="pickerMainIsActive = true"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="pickerMain[1]"
                label="To"
                type="date"
                dense
                outlined
                :max="maxDate"
                class="picker-input"
                @click="pickerMainIsActive = true"
              />
            </v-col>
          </v-row>

          <!-- presets for main period -->
          <v-row class="pl-2 pr-1">
            <v-btn text x-small :outlined="primaryPreset === 'LAST_WEEK'" @click="setMainLastWeek"> Last week </v-btn>
            <v-btn text x-small :outlined="primaryPreset === 'LAST_MONTH'" @click="setMainLastMonth">
              Last month
            </v-btn>
            <v-btn text x-small :outlined="primaryPreset === 'LAST_7_DAYS'" @click="setMainLast7Days">
              Last 7 days
            </v-btn>
            <v-btn text x-small :outlined="primaryPreset === 'LAST_30_DAYS'" @click="setMainLast30Days">
              Last 30 days
            </v-btn>
          </v-row>

          <v-row class="pl-2 pt-6">
            <v-checkbox v-model="compare" label="Compare to the following" class="compare-label" />
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="pickerCompare[0]"
                :disabled="!compare"
                label="From"
                type="date"
                outlined
                dense
                :max="maxDate"
                class="picker-input"
                @click="pickerMainIsActive = false"
              />
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="pickerCompare[1]"
                :disabled="!compare"
                label="To"
                type="date"
                outlined
                dense
                :max="maxDate"
                class="picker-input"
                @click="pickerMainIsActive = false"
              />
            </v-col>
          </v-row>

          <!-- presets for compare period -->
          <v-row class="pl-2">
            <v-btn
              text
              x-small
              :disabled="!compare"
              :outlined="comparePreset === 'PREVIOUS_PERIOD'"
              @click="setComparePreviousPeriod"
            >
              Previous period
            </v-btn>
            <v-btn
              text
              x-small
              :disabled="!compare"
              :outlined="comparePreset === 'PREVIOUS_YEAR'"
              @click="setComparePreviousYear"
            >
              Previous year
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text class="px-4 mr-6" @click="close">Cancel</v-btn>
      <v-btn large class="primary px-7" @click="applyDates">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from "moment"
import presets from "./presets"

export default {
  name: "DatePickerDesktop",

  props: ["config"],

  data: () => ({
    presetMain: false,
    presetCompare: false,
    compare_: false,

    pickerMain: [], // to use moment.js this has to be set in mounted()
    pickerCompare: [], // to use moment.js this has to be set in mounted()
    pickerMainIsActive: true,
    pickerMainLeft: null,
    pickerMainRight: null,
    pickerCompareLeft: null,
    pickerCompareRight: null,

    primaryDefault: "LAST_7_DAYS",
    compareDefault: "PREVIOUS_PERIOD",

    primaryPreset: null,
    comparePreset: null,
  }),

  computed: {
    maxDate() {
      return presets.TODAY
    },
    compare: {
      get() {
        return this.compare_
      },
      set(val) {
        this.compare_ = val
        this.pickerMainIsActive = !this.compare_
      },
    },
    primaryPresetHash() {
      return JSON.stringify(this.pickerMain)
    },
    comparePresetHash() {
      return JSON.stringify(this.pickerCompare)
    },
  },

  watch: {
    // monitor props config to update component
    config() {
      this.primaryPreset = this.config.primaryPreset
      this.comparePreset = this.config.comparePreset
      console.log("config change!")
    },

    // monitor primary period selection changes to reset presets if needed
    primaryPresetHash() {
      if (!this.presetMain) this.primaryPreset = null
      this.presetMain = false

      // adjust compare date range if compare preset is set on
      if (this.comparePreset === "PREVIOUS_PERIOD") this.setComparePreviousPeriod()
      if (this.comparePreset === "PREVIOUS_YEAR") this.setComparePreviousYear()
    },

    // monitor main period selection changes to reset presets if needed
    comparePresetHash() {
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
  },

  mounted() {
    const config = this.config

    if (config) {
      this.compare = this.config.compare

      this.pickerMain = [config.dateStart, config.dateUntil]
      this.pickerCompare = [config.compareStart, config.compareUntil]

      // adjust primary date range if primary preset is set on
      if (config.primaryPreset === "LAST_7_DAYS") this.setMainLast7Days()
      if (config.primaryPreset === "LAST_30_DAYS") this.setMainLast30Days()
      if (config.primaryPreset === "LAST_WEEK") this.setMainLastWeek()
      if (config.primaryPreset === "LAST_MONTH") this.setMainLastMonth()

      // adjust compare date range if compare preset is set on
      if (config.comparePreset === "PREVIOUS_PERIOD") this.setComparePreviousPeriod()
      if (config.comparePreset === "PREVIOUS_YEAR") this.setComparePreviousYear()

      this.pickerMainLeft = moment(config.dateStart).subtract(1, "month").format(presets.MONTH_FORMAT)
      this.pickerMainRight = moment(config.dateStart).format(presets.MONTH_FORMAT)
    }

    // TO DO: set default to default preset instead hard coded
    // in case something weird happens and some defaults are needed
    else {
      this.pickerMainLeft = moment().subtract(1, "month").format(presets.MONTH_FORMAT)
      this.pickerMainRight = moment().format(presets.MONTH_FORMAT)

      this.pickerMain = presets.LAST_7_DAYS
      this.pickerCompare = presets.PREVIOUS_PERIOD(this.pickerMain)
    }
  },

  methods: {
    setMainLast7Days() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.LAST_7_DAYS
      this.pickerMainLeft = presets.LAST_7_DAYS[0]
      this.primaryPreset = "LAST_7_DAYS"
    },

    setMainLast30Days() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.LAST_30_DAYS
      this.pickerMainLeft = presets.LAST_30_DAYS[0]
      this.primaryPreset = "LAST_30_DAYS"
    },

    setMainLastWeek() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.LAST_WEEK
      this.pickerMainLeft = presets.LAST_WEEK[0]
      this.primaryPreset = "LAST_WEEK"
    },

    setMainLastMonth() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.LAST_MONTH
      this.pickerMainLeft = presets.LAST_MONTH[0]
      this.primaryPreset = "LAST_MONTH"
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousPeriod() {
      this.presetCompare = true
      this.pickerMainIsActive = false
      this.pickerCompare = presets.PREVIOUS_PERIOD(this.pickerMain)
      this.pickerMainLeft = this.pickerCompare[0]
      this.comparePreset = "PREVIOUS_PERIOD"
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousYear() {
      this.presetCompare = true
      this.pickerMainIsActive = false
      this.pickerCompare = presets.PREVIOUS_YEAR(this.pickerMain)
      this.pickerMainLeft = this.pickerCompare[0]
      this.pickerCompareLeft = moment(this.pickerMain[0]).subtract(1, "year").format(presets.MONTH_FORMAT)
      this.comparePreset = "PREVIOUS_YEAR"
    },

    close() {
      this.$emit("close")
    },

    applyDates() {
      this.pickerMain.sort()
      this.pickerCompare.sort()

      this.$emit("change", {
        compare: this.compare,
        dateStart: this.pickerMain[0],
        dateUntil: this.pickerMain[1],
        compareStart: this.pickerCompare[0],
        compareUntil: this.pickerCompare[1],
        primaryPreset: this.primaryPreset,
        comparePreset: this.comparePreset,
      })

      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.date-picker-desktop::v-deep {
  max-width: 1040px;
  margin-top: 15vh;

  .pickers {
    max-height: 23em;

    .v-text-field__details {
      display: none;
    }
  }

  .picker-main {
    position: relative;
    z-index: 1;

    .v-picker {
      background-color: transparent;
    }

    &.active {
      z-index: 1000;
    }

    // Body should be rendered but not visible
    .v-picker__body {
      background-color: transparent;
    }

    .v-date-picker-table {
      button:not(.picker-main-selected) {
        background-color: transparent;
      }
    }

    &:not(.active) {
      .picker-main-selected {
        color: darkgrey;
      }
    }
  }

  // The secondary date picker should be translated
  // over the primary and many of its elements should
  // become invisible.
  .picker-compare {
    transform: translateY(-100%);

    position: relative;
    z-index: 2;

    // Header should be rendered but not visible
    .v-date-picker-header {
      opacity: 0;
    }

    .v-date-picker-table {
      thead {
        opacity: 0;
      }

      button:not(.picker-compare-selected) {
        color: transparent;
      }
    }

    .v-picker {
      background-color: transparent !important;
      .v-picker__body {
        background-color: transparent !important;
      }
    }
  }

  .compare-label {
    .v-messages {
      display: none;
    }
  }

  .picker-main-left .v-date-picker-header > button:nth-of-type(2) {
    display: none;
  }

  .picker-main-right .v-date-picker-header > button:nth-of-type(1) {
    display: none;
  }
}
</style>
