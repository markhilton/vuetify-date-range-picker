<template>
  <v-card class="date-picker-tablet elevation-4 mx-auto">
    <v-card-text class="pickers">
      <v-row>
        <v-col cols="5">
          <v-row justify="center" :class="['picker-main', pickerMainIsActive ? 'active' : '']">
            <v-col cols="12">
              <v-date-picker
                v-model="pickerMain"
                no-title
                first-day-of-week="1"
                range
                color="blue darken-2 picker-main-selected"
                :max="today"
                :picker-date.sync="pickerMainLeft"
                class="pr-1"
              />
            </v-col>
          </v-row>
          <v-row justify="center" class="picker-compare" v-if="compare">
            <v-col cols="12">
              <v-date-picker
                v-model="pickerCompare"
                no-title
                show-current="false"
                first-day-of-week="1"
                range
                color="orange darken-4 picker-compare-selected"
                :max="today"
                :picker-date.sync="pickerMainLeft"
                class="pr-1"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="pickerMain[0]"
                label="From"
                type="date"
                outlined
                dense
                :max="$moment().format('YYYY-MM-DD')"
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
                :max="$moment().format('YYYY-MM-DD')"
                class="picker-input"
                @click="pickerMainIsActive = true"
              />
            </v-col>
          </v-row>
          <v-row class="pl-2 pr-1">
            <v-btn text x-small @click="setMainLast7Days">Last 7 days</v-btn>
            <v-btn text x-small @click="setMainPrevWeek">Prev. week</v-btn>
            <v-btn text x-small @click="setMainLastMonth">Last month</v-btn>
            <v-btn text x-small @click="setMainPrevMonth">Prev. month</v-btn>
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
                :max="$moment().format('YYYY-MM-DD')"
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
                :max="$moment().format('YYYY-MM-DD')"
                class="picker-input"
                @click="pickerMainIsActive = false"
              />
            </v-col>
          </v-row>
          <v-row class="pl-2">
            <v-btn text x-small :disabled="!compare" @click="setComparePreviousPeriod">
              Previous period
            </v-btn>
            <v-btn text x-small :disabled="!compare" @click="setComparePreviousMonth">
              Previous month
            </v-btn>
            <v-btn text x-small :disabled="!compare" @click="setComparePreviousYear">
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

const DATE_FORMAT = "YYYY-MM-DD"

export default {
  name: "DatePickerTablet",

  props: ["compare-ranges"],

  data: () => ({
    compare_: false,
    today: null,
    pickerMain: [], // to use moment.js this has to be set in mounted()
    pickerCompare: [], // to use moment.js this has to be set in mounted()
    pickerMainIsActive: true,
    pickerMainLeft: null,
    pickerMainRight: null,
    pickerCompareLeft: null,
    pickerCompareRight: null,
    moment: moment,
  }),

  mounted() {
    const moment = this.moment
    this.today = moment().format(DATE_FORMAT)

    this.pickerMain = [
      moment()
        .subtract(7, "days")
        .format(DATE_FORMAT),
      moment()
        .subtract(1, "day")
        .format(DATE_FORMAT),
    ]

    this.pickerCompare = [
      moment()
        .subtract(15, "day")
        .format(DATE_FORMAT),
      moment()
        .subtract(8, "days")
        .format(DATE_FORMAT),
    ]

    this.compare = this.compareRanges
  }, // mounted ()

  computed: {
    compare: {
      get() {
        return this.compare_
      },
      set(val) {
        this.compare_ = val
        this.pickerMainIsActive = !this.compare_
      },
    }, // compare
  }, // computed

  methods: {
    // Sets the main date picker to the last week,
    // meaning if it's Friday it sets the range from last
    // Friday to yesterday
    setMainLast7Days() {
      const moment = this.moment

      this.pickerMainIsActive = true

      this.pickerMain = [
        moment()
          .subtract(7, "days")
          .format(DATE_FORMAT),
        moment()
          .subtract(1, "day")
          .format(DATE_FORMAT),
      ]
    }, // setMainLast7Days()

    // Sets the main date picker to the Monday to Sunday of the previous week
    setMainPrevWeek() {
      const moment = this.moment

      this.pickerMainIsActive = true

      this.pickerMain = [
        moment()
          .subtract(1, "week")
          .day(1)
          .format(DATE_FORMAT),
        moment()
          .subtract(1, "week")
          .day(7)
          .format(DATE_FORMAT),
      ]
    }, // setMainPrevWeek()

    // Sets the main date picker to the last month,
    // meaning, if it's 20 March it starts the range
    // from 20 Feb. to yesterday.
    // If it's 31 March, the range begins at 28 or 29 Feb.
    setMainLastMonth() {
      const moment = this.moment

      this.pickerMainIsActive = true

      this.pickerMain = [
        moment()
          .subtract(1, "month")
          .format(DATE_FORMAT),
        moment()
          .subtract(1, "day")
          .format(DATE_FORMAT),
      ]
    }, // setMainLastMonth()

    // Sets the range to 1st to last of the previous month.
    setMainPrevMonth() {
      const moment = this.moment

      this.pickerMainIsActive = true

      this.pickerMain = [
        moment()
          .subtract(1, "month")
          .date(1)
          .format(DATE_FORMAT),
        moment()
          .date(0)
          .format(DATE_FORMAT),
      ]
    }, // setMainPrevMonth()

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousPeriod() {
      const moment = this.moment
      const mainRangeStart = this.pickerMain[0]
      const mainRangeEnd = this.pickerMain[1]

      this.pickerMainIsActive = false

      const mainDuration = moment(mainRangeEnd).diff(moment(mainRangeStart), "days")

      this.pickerCompare = [
        moment(mainRangeStart)
          .subtract(1 + mainDuration, "days")
          .format(DATE_FORMAT),
        moment(mainRangeEnd)
          .subtract(1 + mainDuration, "days")
          .format(DATE_FORMAT),
      ]
    }, // setComparePreviousPeriod()

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousMonth() {
      const moment = this.moment

      this.pickerMainIsActive = false

      this.pickerCompare = [
        moment(this.pickerMain[0])
          .subtract(1, "month")
          .format(DATE_FORMAT),
        moment(this.pickerMain[1])
          .subtract(1, "month")
          .format(DATE_FORMAT),
      ]
    }, // setComparePreviousMonth()

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousYear() {
      const moment = this.moment

      this.pickerMainIsActive = false

      this.pickerCompare = [
        moment(this.pickerMain[0])
          .subtract(1, "year")
          .format(DATE_FORMAT),
        moment(this.pickerMain[1])
          .subtract(1, "year")
          .format(DATE_FORMAT),
      ]
    }, // setComparePreviousYear()

    close() {
      this.$emit("close")
    }, // close()

    applyDates() {
      this.pickerMain.sort()
      this.pickerCompare.sort()

      this.$emit("change", {
        dateStart: this.pickerMain[0],
        dateUntil: this.pickerMain[1],
        compareStart: this.pickerCompare[0],
        compareUntil: this.pickerCompare[1],
        compare: this.compare,
      })

      this.close()
    }, // applyDates()
  }, // methods()
} // export
</script>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";

.date-picker-tablet::v-deep {
  max-width: 785px;

  .pickers {
    max-height: 23em;
  } // .pickers

  .picker-input {
    .v-text-field__details {
      display: none;
    }
  } // .picker-input

  .picker-main {
    position: relative;
    z-index: 1;

    .v-picker {
      background-color: transparent;
    } // .v-picker

    &.active {
      z-index: 1000;
    } // .v-picker.active

    // Body should be rendered but not visible
    .v-picker__body {
      background-color: transparent;
    } // .v-picker__body

    .v-date-picker-table {
      button:not(.picker-main-selected) {
        background-color: transparent;
      }
    } // .v-date-picker-table

    &:not(.active) {
      .picker-main-selected {
        color: darkgrey;
      }
    }
  } // .picker-main

  .picker-main-left .v-date-picker-header > button:nth-of-type(2) {
    display: none;
  } // button[2]

  .picker-main-right .v-date-picker-header > button:nth-of-type(1) {
    display: none;
  } // button[1]

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
    } // .v-date-picker-table

    .v-picker {
      background-color: transparent !important;
      .v-picker__body {
        background-color: transparent !important;
      }
    } // > .v-picker
  } // .picker-compare

  .compare-label {
    .v-messages {
      display: none;
    }
  } // .compare-label
} // .date-picker-tablet
</style>
