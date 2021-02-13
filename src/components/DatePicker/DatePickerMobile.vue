<template>
  <v-dialog :value="true" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card class="date-picker-mobile elevation-0 d-flex flex-column">
      <v-container>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="pickerMain[0]"
                    label="From"
                    type="date"
                    outlined
                    dense
                    :max="maxDate"
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
                    :max="maxDate"
                    class="picker-input"
                  />
                </v-col>
              </v-row>

              <v-row justify="start" class="pl-2 pr-1">
                <v-btn
                  depressed
                  min-width="48%"
                  class="mr-2 mb-3"
                  small
                  :outlined="primaryPreset === 'LAST_WEEK'"
                  @click="setMainLastWeek"
                >
                  Last week
                </v-btn>
                <v-btn
                  depressed
                  min-width="48%"
                  class="mb-2"
                  small
                  :outlined="primaryPreset === 'LAST_MONTH'"
                  @click="setMainLastMonth"
                >
                  Last month
                </v-btn>
                <v-btn
                  depressed
                  min-width="48%"
                  class="mr-2 mb-3"
                  small
                  :outlined="primaryPreset === 'LAST_7_DAYS'"
                  @click="setMainLast7Days"
                >
                  Last 7 days
                </v-btn>
                <v-btn
                  depressed
                  min-width="48%"
                  class="mb-2"
                  small
                  :outlined="primaryPreset === 'LAST_30_DAYS'"
                  @click="setMainLast30Days"
                >
                  Last 30 days
                </v-btn>
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
                    :max="maxDate"
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
                    :max="maxDate"
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
                  :outlined="comparePreset === 'PREVIOUS_PERIOD'"
                  @click="setComparePreviousPeriod"
                >
                  Previous period
                </v-btn>
                <v-btn
                  depressed
                  small
                  min-width="47%"
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
          <v-btn text class="px-4 mr-3" @click="close">Cancel</v-btn>
          <v-btn large class="primary px-7" @click="applyDates">Apply</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment"
import presets from "./presets"

export default {
  name: "DatePickerMobile",

  props: ["config"],

  data: () => ({
    compare_: false,
    pickerMain: [], // to use moment.js this has to be set in mounted()
    pickerCompare: [], // to use moment.js this has to be set in mounted()
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
    }

    // TO DO: set default to default preset instead hard coded
    // in case something weird happens and some defaults are needed
    else {
      this.pickerMain = presets.LAST_7_DAYS
      this.pickerCompare = presets.PREVIOUS_PERIOD(this.pickerMain)
    }
  },

  methods: {
    setMainLast7Days() {
      this.presetMain = true
      this.pickerMain = presets.LAST_7_DAYS
      this.primaryPreset = "LAST_7_DAYS"
      console.log(presets)
    },

    setMainLast30Days() {
      this.presetMain = true
      this.pickerMain = presets.LAST_30_DAYS
      this.primaryPreset = "LAST_30_DAYS"
      console.log(presets)
    },

    setMainLastWeek() {
      this.presetMain = true
      this.pickerMain = presets.LAST_WEEK
      this.primaryPreset = "LAST_WEEK"
      console.log(presets)
    },

    setMainLastMonth() {
      this.presetMain = true
      this.pickerMain = presets.LAST_MONTH
      this.primaryPreset = "LAST_MONTH"
      console.log(presets)
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousPeriod() {
      this.presetCompare = true
      this.pickerCompare = presets.PREVIOUS_PERIOD(this.pickerMain)
      this.comparePreset = "PREVIOUS_PERIOD"
    },

    // Takes current duration of the main range and sets the same
    // duration to the compare picker, but this duration earlier
    setComparePreviousYear() {
      this.presetCompare = true
      this.pickerMainIsActive = false
      this.pickerCompare = presets.PREVIOUS_YEAR(this.pickerMain)
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
// @import "~vuetify/src/styles/styles.sass";

.date-picker-mobile::v-deep {
  .picker-input {
    // Under the date inputs there is a place
    // for some details, which are completely
    // unnecessary
    .v-text-field__details {
      display: none;
    }
  }

  .compare-label {
    .v-messages {
      display: none;
    }
  }
}
</style>
