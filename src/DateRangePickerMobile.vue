<template>
  <v-col>
    <v-row class="ml-3 mr-3">
      <v-row justify="space-between" align="center">
        <v-row>
          <v-btn text @click="back">
            <v-icon>fas fa-arrow-left</v-icon>
          </v-btn>
          <div class="d-flex align-center">
            <span>Date settings</span>
          </div>
        </v-row>

        <v-btn text @click="saveSetting">Save</v-btn>
      </v-row>
    </v-row>

    <v-row>
      <v-tabs v-model="subtypeConverter" :dark="dark">
        <v-tab v-for="type in periodTypes" :key="type.key">{{ type.label }}</v-tab>

        <v-tabs-items :dark="dark" v-model="subtypeConverter">
          <v-tab-item v-for="type in periodTypes" :key="type.key">
            <v-col>
              <v-radio-group
                v-if="periodSubtype[type.key] && periodSubtype[type.key].length > 0"
                v-model="selectedSubtype[type.key].subType"
              >
                <v-radio
                  v-for="subType in periodSubtype[type.key]"
                  :key="subType.key"
                  :value="subType.key"
                >
                  <template slot="label">
                    <div class="d-flex flex-column" :class="dark ? 'white--text' : 'black--text'">
                      <span class="primary-label">{{ subType.label }}</span>
                      <span class="second-label">{{ subType.periodText }}</span>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-col
                v-if="type.key === 'CUSTOM'"
                class="d-flex flex-column"
                @click="showSelectionModal = !showSelectionModal"
              >
                <div class="pl-5 mb-3 d-flex flex-column">
                  <span class="primary-label">Start date</span>
                  <span class="second-label">{{ currCustomDate && currCustomDate.startText }}</span>
                </div>
                <div class="pl-5 d-flex flex-column">
                  <span class="primary-label">End date</span>
                  <span class="second-label">{{ currCustomDate && currCustomDate.endText }}</span>
                </div>
              </v-col>

              <v-divider></v-divider>

              <v-row class="pa-3" justify="space-between">
                <div>Compare to</div>
                <v-switch class="compare-to-switch" v-model="enableCompareTo"></v-switch>
              </v-row>

              <v-radio-group v-if="enableCompareTo" v-model="selectedSubtype[type.key].compareType">
                <v-radio
                  v-for="compare in periodCompare[type.key]"
                  :key="compare.key"
                  :value="compare.key"
                >
                  <template slot="label">
                    <div class="d-flex flex-column">
                      <span class="primary-label">{{ compare.label }}</span>
                      <span class="second-label" v-if="type.key !== 'CUSTOM'">
                        {{
                        selectedSubtype &&
                        selectedSubtype[type.key] &&
                        selectedSubtype[type.key].subType &&
                        compare.period &&
                        compare.period[selectedSubtype[type.key].subType].periodText
                        }}
                      </span>
                      <span
                        class="second-label"
                        v-if="type.key === 'CUSTOM'"
                      >{{ compare.periodText }}</span>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-row>

    <!--date selection modal for custom dates-->
    <v-dialog :dark="dark" v-model="showSelectionModal" fullscreen>
      <custom-range-selector
        :dark="dark"
        :start="currCustomDate && currCustomDate.start"
        :end="currCustomDate && currCustomDate.end"
        @close="showSelectionModal = !showSelectionModal"
        @apply="setCustomRange"
      />
    </v-dialog>
  </v-col>
</template>

<script>
import moment from "moment"

import {
  PERIOD_TYPE,
  DEFAULT_TYPE_SELECTION,
  DISPLAY_DATE_FORMAT_1,
  DISPLAY_DATE_FORMAT_2,
  DEFAULT_CUSTOM_DATE,
  INTERNAL_DATE_FORMAT_1,
} from "./presets/constant"
import Date from "./presets/date"
import CustomRangeSelector from "./CustomRangeSelector.vue"

export default {
  components: {
    CustomRangeSelector,
  },

  props: {
    savedPeriodConfig: {},
    showDashboardDateSetting: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: "YYYY-MM-DD",
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    getDashboardDateSetting(newValue) {
      if (newValue) {
        this.reloadType()
      }
    },
  },

  data() {
    return {
      periodSubtype: {},
      periodCompare: {},
      enableCompareTo: false,
      showSelectionModal: false,
      selectedType: null,
      selectedSubtype: null,
      currCustomDate: {},
    }
  },

  computed: {
    periodTypes() {
      return Object.keys(PERIOD_TYPE).map(key => ({ key, label: PERIOD_TYPE[key].label }))
    },

    savedType() {
      return this.savedPeriodConfig.type
    },
    savedSubtype() {
      return this.savedPeriodConfig.subType
    },
    savedRange() {
      return {
        start: this.savedPeriodConfig.start,
        end: this.savedPeriodConfig.until,
      }
    },
    savedCompareType() {
      return this.savedPeriodConfig.compareType
    },
    getEnableCompareTo() {
      return this.savedPeriodConfig.enableCompareTo
    },
    getDashboardDateSetting() {
      return this.showDashboardDateSetting
    },
    subtypeConverter: {
      get: function() {
        const index = this.periodTypes.findIndex(type => type.key === this.selectedType)
        return index
      },
      set: function(index) {
        this.selectedType = this.periodTypes[index].key
      },
    },
  },

  mounted() {
    // convert constant PERIOD_TYPE into the type that can be displayed
    Object.keys(PERIOD_TYPE).forEach(key => {
      // convert subType
      if (!PERIOD_TYPE[key].subType) {
        this.$set(this.periodSubtype, key, [])
      } else {
        this.$set(
          this.periodSubtype,
          key,
          Object.keys(PERIOD_TYPE[key].subType).map(item => {
            const { start, end } = PERIOD_TYPE[key].subType[item].period
            let periodText = ""
            if (start && end) {
              periodText =
                moment(start).format(DISPLAY_DATE_FORMAT_1) + " - " + moment(end).format(DISPLAY_DATE_FORMAT_1)
            } else if (start && !end) {
              if (item === "THIS_MONTH" || item === "LAST_MONTH") {
                periodText = moment(start).format("MMMM")
              } else if (key === "DAY") {
                periodText = moment(start).format(DISPLAY_DATE_FORMAT_2)
              }
            }
            return {
              key: item,
              label: PERIOD_TYPE[key].subType[item].label,
              period: PERIOD_TYPE[key].subType[item].period,
              periodText,
            }
          }),
        )
      }

      // convert compare periods
      if (!PERIOD_TYPE[key].compare) {
        this.$set(this.periodCompare, key, [])
      } else {
        this.$set(
          this.periodCompare,
          key,
          Object.keys(PERIOD_TYPE[key].compare).map(item => {
            const period = PERIOD_TYPE[key].compare[item].period

            if (period) {
              Object.keys(period).forEach(periodKey => {
                const { start, end } = period[periodKey]
                let periodText = ""
                if (start && end) {
                  periodText = moment(start).format(this.format) + " - " + moment(end).format(this.format)
                } else if (start && !end) {
                  periodText = moment(start).format(DISPLAY_DATE_FORMAT_2)
                }
                period[periodKey].periodText = periodText
              })
            }

            return {
              key: item,
              label: PERIOD_TYPE[key].compare[item].label,
              period: PERIOD_TYPE[key].compare[item].period,
            }
          }),
        )
      }
    })

    // load custom selection date
    const { start, end } = this.savedType === "CUSTOM" ? this.savedRange : DEFAULT_CUSTOM_DATE
    this.currCustomDate = {
      start,
      end,
      startText: moment(start).format(DISPLAY_DATE_FORMAT_2),
      endText: moment(end).format(DISPLAY_DATE_FORMAT_2),
    }

    this.updateCustomComparePeriod()

    this.reloadType()
  },

  methods: {
    back() {
      this.$emit("hideModal")
    },
    saveSetting() {
      if (this.selectedType === "CUSTOM") {
        this.$emit("saveMobileConfig", {
          type: "CUSTOM",
          subType: "",
          start: this.currCustomDate.start,
          until: this.currCustomDate.end ? this.currCustomDate.end : null,
          compareType: "",
          enableCompareTo: !!this.enableCompareTo,
        })
      } else {
        const currSelectedSubType = this.selectedSubtype[this.selectedType].subType
        const currSelectedCompareType = this.selectedSubtype[this.selectedType].compareType
        const { start, end } = this.periodSubtype[this.selectedType].find(
          type => type.key === currSelectedSubType,
        ).period
        this.$emit("saveMobileConfig", {
          type: this.selectedType,
          subType: currSelectedSubType ? currSelectedSubType : null,
          start: start ? start : null,
          until: end ? end : null,
          compareType: currSelectedCompareType ? currSelectedCompareType : null,
          enableCompareTo: !!this.enableCompareTo,
        })
      }
      this.$emit("hideModal")
      this.reloadType()
    },
    setCustomRange(range) {
      this.showSelectionModal = !this.showSelectionModal
      this.currCustomDate = {
        start: moment(range.start).format(INTERNAL_DATE_FORMAT_1),
        end: moment(range.end).format(INTERNAL_DATE_FORMAT_1),
        startText: moment(range.start).format(this.format),
        endText: moment(range.end).format(this.format),
      }
      this.updateCustomComparePeriod()
    },
    reloadType() {
      // get saved type or subtype from store
      this.selectedType = this.savedType
      this.selectedSubtype = JSON.parse(JSON.stringify(DEFAULT_TYPE_SELECTION))
      this.selectedSubtype[this.savedType].subType = this.savedSubtype
      this.selectedSubtype[this.savedType].compareType = this.savedCompareType
      this.enableCompareTo = this.getEnableCompareTo
    },
    updateCustomComparePeriod() {
      const { CUSTOM } = this.periodCompare
      CUSTOM.forEach(item => {
        if (item.key === "PREVIOUS_PERIOD") {
          item.period = Date.previousPeriodCustom(this.currCustomDate)
          item.periodText = item.period.start + " - " + item.period.end
        }

        if (item.key === "PREVIOUS_YEAR") {
          item.period = Date.previousYearCustom(this.currCustomDate)
          item.periodText = item.period.start + " - " + item.period.end
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import "./presets/color";

.v-tabs-bar {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.v-tabs-items {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 12px;
}

.compare-to-switch {
  height: 30px;
  margin-top: 0px;
}

.v-input--radio-group.v-input--radio-group--column {
  margin-top: 0px;
}

// .primary-label {
//   color: $cop-color-black;
//   font-size: 14px;
// }

// .second-label {
//   color: $cop-color-grey;
//   font-size: 13px;
// }
</style>
