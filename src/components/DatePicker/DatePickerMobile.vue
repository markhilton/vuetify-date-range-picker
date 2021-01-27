<template>
  <v-container class="ma-0 pa-0">
    <v-card min-height="100vh" class="date-picker-mobile elevation-0 ma-0 d-flex flex-column">
      <v-card-text class="flex-grow-1">
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="pickerMain[0]"
                  label="From"
                  type="date"
                  outlined
                  dense
                  :max="$moment().format('YYYY-MM-DD')"
                  class="picker-input"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="pickerMain[1]"
                  label="To"
                  type="date"
                  outlined
                  dense
                  :max="$moment().format('YYYY-MM-DD')"
                  class="picker-input"
                />
              </v-col>
            </v-row>

            <v-row justify="start" class="pl-2 pr-1">
              <v-btn depressed min-width="48%" class="mr-2 mb-3" small @click="setMainLast7Days">Last 7 days</v-btn>
              <v-btn depressed min-width="48%" class="mb-2" small @click="setMainPrevWeek">Previous week</v-btn>
              <v-btn depressed min-width="48%" class="mr-2 mb-3" small @click="setMainLastMonth">Last month</v-btn>
              <v-btn depressed min-width="48%" class="mb-2" small @click="setMainPrevMonth">Previous month</v-btn>
            </v-row>

            <v-row class="pl-2 pt-0">
              <v-checkbox v-model="compare" label="Compare to the following" class="compare-label pt-0" />
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="pickerCompare[0]"
                  :disabled="!compare"
                  label="From"
                  type="date"
                  outlined
                  dense
                  :max="$moment().format('YYYY-MM-DD')"
                  class="picker-input"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="pickerCompare[1]"
                  :disabled="!compare"
                  label="To"
                  type="date"
                  outlined
                  dense
                  :max="$moment().format('YYYY-MM-DD')"
                  class="picker-input"
                />
              </v-col>
            </v-row>
            <v-row justify="start" class="pl-2">
              <v-btn
                depressed
                small
                min-width="47%"
                class="mr-2 mb-3"
                :disabled="!compare"
                @click="setComparePreviousPeriod"
              >
                Previous period
              </v-btn>
              <v-btn
                depressed
                small
                min-width="47%"
                class="mr-2 mb-3"
                :disabled="!compare"
                @click="setComparePreviousMonth"
              >
                Previous month
              </v-btn>
              <v-btn
                depressed
                small
                min-width="47%"
                class="mr-2 mb-3"
                :disabled="!compare"
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
        <v-btn text class="px-4 mr-3" @click="close">Cancel</v-btn>
        <v-btn large class="primary px-7" @click="applyDates">Apply</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
const DATE_FORMAT = "YYYY-MM-DD"
const MONTH_FORMAT = "YYYY-MM"

export default {
  name: "DatePickerMobile",

  props: ["config"],

  data: () => ({
    today: null,
    compare: false,
    pickerMain: [], // to use moment.js this has to be set in mounted()
    pickerCompare: [], // to use moment.js this has to be set in mounted()
  }), // data ()

  mounted() {
    const moment = this.$moment
    this.today = this.$moment().format(DATE_FORMAT)

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
  }, // mounted ()

  methods: {
    // Sets the main date picker to the last week,
    // meaning if it's Friday it sets the range from last
    // Friday to yesterday
    setMainLast7Days() {
      const moment = this.$moment

      this.pickerMain = [
        moment().subtract(7, "days").format(DATE_FORMAT),
        moment().subtract(1, "day").format(DATE_FORMAT),
      ]
    }, // setMainLast7Days()

    // Sets the main date picker to the Monday to Sunday of the previous week
    setMainPrevWeek() {
      const moment = this.$moment

      this.pickerMain = [
        moment().subtract(1, "week").day(1).format(DATE_FORMAT),
        moment().subtract(1, "week").day(7).format(DATE_FORMAT),
      ]
    }, // setMainPrevWeek()

    // Sets the main date picker to the last month,
    // meaning, if it's 20 March it starts the range
    // from 20 Feb. to yesterday.
    // If it's 31 March, the range begins at 28 or 29 Feb.
    setMainLastMonth() {
      const moment = this.$moment

      this.pickerMain = [
        moment().subtract(1, "month").format(DATE_FORMAT),
        moment().subtract(1, "day").format(DATE_FORMAT),
      ]
    }, // setMainLastMonth()

    // Sets the range to 1st to last of the previous month.
    setMainPrevMonth() {
      const moment = this.$moment

      this.pickerMain = [
        moment().subtract(1, "month").date(1).format(DATE_FORMAT),
        moment().date(0).format(DATE_FORMAT),
      ]
    }, // setMainPrevMonth()

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousPeriod() {
      const moment = this.$moment
      const mainRangeStart = this.pickerMain[0]
      const mainRangeEnd = this.pickerMain[1]

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
      const moment = this.$moment

      this.pickerCompare = [
        moment(this.pickerMain[0]).subtract(1, "month").format(DATE_FORMAT),
        moment(this.pickerMain[1]).subtract(1, "month").format(DATE_FORMAT),
      ]
    }, // setComparePreviousMonth()

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousYear() {
      const moment = this.$moment

      this.pickerCompare = [
        moment(this.pickerMain[0]).subtract(1, "year").format(DATE_FORMAT),
        moment(this.pickerMain[1]).subtract(1, "year").format(DATE_FORMAT),
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

.date-picker-mobile::v-deep {
  .picker-input {
    // Under the date inputs there is a place
    // for some details, which are completely
    // unnecessary
    .v-text-field__details {
      display: none;
    } // .v-text-field__details
  } // .picker-input

  .compare-label {
    .v-messages {
      display: none;
    }
  } // .compare-label
} // .date-picker-mobile
</style>
