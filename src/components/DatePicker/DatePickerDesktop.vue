<template>
  <v-card class="date-picker-desktop elevation-4 mx-auto">
    <v-card-text class="pickers">
      <v-row>
        <v-col cols="7">
          <v-row :class="['picker-main', pickerMainIsActive ? 'active' : '']">
            <v-col cols="6">
              <v-date-picker
                v-model="pickerMain"
                no-title
                first-day-of-week="1"
                range
                color="blue darken-2 picker-main-selected"
                :max="today"
                :picker-date.sync="pickerMainLeft"
                class="picker-main-left pr-1"
              />
            </v-col>
            <v-col cols="6">
              <v-date-picker
                v-model="pickerMain"
                no-title
                first-day-of-week="1"
                range
                color="blue darken-2 picker-main-selected"
                :max="today"
                :picker-date.sync="pickerMainRight"
                class="picker-main-right"
              />
            </v-col>
          </v-row>
          <v-row v-if="compare" justify="center" class="picker-compare">
            <v-col cols="6">
              <v-date-picker
                v-model="pickerCompare"
                no-title
                show-current="false"
                first-day-of-week="1"
                range
                color="orange darken-4 picker-compare-selected"
                :max="today"
                :picker-date.sync="pickerMainLeft"
                class="picker-compare-left pr-1"
              />
            </v-col>
            <v-col cols="6">
              <v-date-picker
                v-model="pickerCompare"
                no-title
                show-current="false"
                first-day-of-week="1"
                range
                color="orange darken-4 picker-compare-selected"
                :max="today"
                :picker-date.sync="pickerMainRight"
                class="picker-compare-right"
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
                outlined
                dense
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
                outlined
                dense
                :max="maxDate"
                class="picker-input"
                @click="pickerMainIsActive = true"
              />
            </v-col>
          </v-row>

          <!-- presets for main period -->
          <v-row class="pl-2 pr-1">
            <v-btn text x-small :outlined="selectedPeriod === 'LAST_7_DAYS'" @click="setMainLast7Days">
              Last 7 days
            </v-btn>
            <v-btn text x-small :outlined="selectedPeriod === 'PREVIOUS_WEEK'" @click="setMainPrevWeek">
              Prev. week
            </v-btn>
            <v-btn text x-small :outlined="selectedPeriod === 'LAST_MONTH'" @click="setMainLast30Dys">
              Last month
            </v-btn>
            <v-btn text x-small :outlined="selectedPeriod === 'PREVIOUS_MONTH'" @click="setMainPrevMonth">
              Prev. month
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
              :outlined="comparePeriod === 'PREVIOUS_PERIOD'"
              @click="setComparePreviousPeriod"
            >
              Previous period
            </v-btn>
            <v-btn
              text
              x-small
              :disabled="!compare"
              :outlined="comparePeriod === 'PREVIOUS_MONTH'"
              @click="setComparePreviousMonth"
            >
              Previous month
            </v-btn>
            <v-btn
              text
              x-small
              :disabled="!compare"
              :outlined="comparePeriod === 'PREVIOUS_YEAR'"
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

const DATE_FORMAT = "YYYY-MM-DD"
const MONTH_FORMAT = "YYYY-MM"

export default {
  name: "DatePickerDesktop",

  props: ["config"],

  data: () => ({
    today: null,
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

    selectedPeriod: null,
    comparePeriod: null,
  }),

  computed: {
    maxDate() {
      return moment().format("YYYY-MM-DD")
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
    selectedPeriodHash() {
      return JSON.stringify(this.pickerMain)
    },
    comparePeriodHash() {
      return JSON.stringify(this.pickerCompare)
    },
  },

  watch: {
    // monitor main period selection changes to reset presets if needed
    selectedPeriodHash() {
      if (!this.presetMain) this.selectedPeriod = null
      this.presetMain = false
    },
    // monitor main period selection changes to reset presets if needed
    comparePeriodHash() {
      if (!this.presetCompare) this.comparePeriod = null
      this.presetCompare = false
    },
    // Left and right date pickers should move accordingly
    pickerMainLeft(val) {
      this.pickerMainRight = moment(val).add(1, "month").format(MONTH_FORMAT)
    },

    pickerMainRight(val) {
      this.pickerMainLeft = moment(val).subtract(1, "month").format(MONTH_FORMAT)
    },

    // The compare date picker should display the same month as the primary one
    pickerCompareLeft(val) {
      this.pickerCompareRight = moment(val).add(1, "month").format(MONTH_FORMAT)
    },

    pickerCompareRight(val) {
      this.pickerCompareLeft = moment(val).subtract(1, "month").format(MONTH_FORMAT)
    },
  },

  mounted() {
    this.today = moment().format(DATE_FORMAT)

    if (this.config) {
      this.pickerMain = [this.config.dateStart, this.config.dateUntil]
      this.pickerCompare = [this.config.compareStart, this.config.compareUntil]

      this.pickerMainLeft = moment(this.config.dateStart).subtract(1, "month").format(MONTH_FORMAT)
      this.pickerMainRight = moment(this.config.dateStart).format(MONTH_FORMAT)

      this.compare = this.config.compare
    } else {
      // in case something weird happens and some defaults are needed
      this.pickerMainLeft = moment().subtract(1, "month").format(MONTH_FORMAT)
      this.pickerMainRight = moment().format(MONTH_FORMAT)

      this.pickerMain = [
        moment().subtract(7, "days").format(DATE_FORMAT),
        moment().subtract(1, "day").format(DATE_FORMAT),
      ]

      this.pickerCompare = [
        moment().subtract(15, "day").format(DATE_FORMAT),
        moment().subtract(8, "days").format(DATE_FORMAT),
      ]
    }
  },

  methods: {
    // Sets the main date picker to the last week,
    // meaning if it's Friday it sets the range from last
    // Friday to yesterday
    setMainLast7Days() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.LAST_7_DAYS
      this.pickerMainLeft = presets.LAST_7_DAYS[0]
      this.selectedPeriod = "LAST_7_DAYS"
    },

    // Sets the main date picker to the Monday to Sunday of the previous week
    setMainPrevWeek() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.PREVIOUS_WEEK
      this.pickerMainLeft = presets.PREVIOUS_WEEK[0]
      this.selectedPeriod = "PREVIOUS_WEEK"
    },

    // Sets the main date picker to the last month,
    // meaning, if it's 20 March it starts the range
    // from 20 Feb. to yesterday.
    // If it's 31 March, the range begins at 28 or 29 Feb.
    setMainLast30Dys() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.LAST_30_DAYS
      this.pickerMainLeft = presets.LAST_30_DAYS[0]
      this.selectedPeriod = "LAST_30_DAYS"
    },

    // Sets the range to 1st to last of the previous month.
    setMainPrevMonth() {
      this.presetMain = true
      this.pickerMainIsActive = true
      this.pickerMain = presets.PREVIOUS_MONTH
      this.pickerMainLeft = presets.PREVIOUS_MONTH[0]
      this.selectedPeriod = "PREVIOUS_MONTH"
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousPeriod() {
      this.presetCompare = true
      const mainRangeStart = this.pickerMain[0]
      const mainRangeEnd = this.pickerMain[1]

      this.pickerMainIsActive = false
      this.pickerCompare = presets.PREVIOUS_PERIOD([mainRangeStart, mainRangeEnd])
      this.pickerMainLeft = presets.PREVIOUS_MONTH[0]
      this.comparePeriod = "PREVIOUS_PERIOD"
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousMonth() {
      this.presetCompare = true
      this.pickerMainIsActive = false
      this.pickerCompare = presets.PREVIOUS_MONTH
      this.pickerMainLeft = presets.PREVIOUS_MONTH[0]
      this.pickerCompareLeft = moment(this.pickerMain[0]).subtract(1, "month").format(MONTH_FORMAT)
      this.comparePeriod = "PREVIOUS_MONTH"
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousYear() {
      this.presetCompare = true
      this.pickerMainIsActive = false
      this.pickerCompare = presets.PREVIOUS_YEAR
      this.pickerMainLeft = presets.PREVIOUS_YEAR[0]
      this.pickerCompareLeft = moment(this.pickerMain[0]).subtract(1, "year").format(MONTH_FORMAT)
      this.comparePeriod = "PREVIOUS_YEAR"
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
        selectedPeriod: this.selectedPeriod,
        comparePeriod: this.comparePeriod,
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
