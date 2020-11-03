<template>
  <v-card>
    <v-container>
      <v-row>
        <!-- preset options and compare periods -->
        <v-col cols="3">
          <v-list>
            <v-list-item-group v-model="datePreset">
              <v-list-item v-for="item in presets" :key="item.id" :value="item.id">
                <v-list-item-content>{{ item.label }}</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-row class="pl-5 mb-2">
            <v-switch class="compare-to-switch" v-model="compare"></v-switch>
            <span class="pt-1">Compare to</span>
          </v-row>

          <v-select
            v-if="compare"
            v-model="comparePreset"
            :disabled="!compare"
            :items="presets[datePreset].compareArray"
            item-text="label"
            item-value="id"
            return-object
            solo
          ></v-select>
        </v-col>

        <!-- custom range edit and calendar -->
        <v-col cols="9">
          <v-row>
            <v-col cols="1">
              <v-icon class="pt-2">far fa-calendar-alt</v-icon>
            </v-col>

            <v-col cols="5">
              <v-text-field
                v-model="startDate"
                label="Start date(MM/DD/YYYY)"
                outlined
                dense
                type="date"
                maxlength="10"
              />
            </v-col>

            <v-col cols="5">
              <v-text-field
                v-model="endDate"
                label="End date(MM/DD/YYYY)"
                outlined
                dense
                type="date"
                maxlength="10"
              />
            </v-col>
          </v-row>
          <custom-date-picker
            v-model="range"
            mode="range"
            :isDark="dark"
            :columns="2"
            :attributes="attributes"
            is-inline
            is-expanded
          />

          <!--:attributes="enableCompare ? attributes : []"-->
          <v-row justify="end" class="mt-3 mr-3">
            <v-btn text @click="close">Cancel</v-btn>
            <v-btn color="primary" @click="applySetting">Apply</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import moment from "moment"
import {
  PRESETS_DESKTOP,
  PRESETS_DEFAULT_DESKTOP,
  INTERNAL_DATE_FORMAT_1,
  PERIOD_CONVERT_LIST_DESKTOP,
  PERIOD_COMPARE_CONVERT_LIST_DESKTOP,
} from "./presets/constants"

export default {
  props: {
    format: {
      type: String,
      // default: () => moment().format(INTERNAL_DATE_FORMAT_1),
      default: () => INTERNAL_DATE_FORMAT_1,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    dateRange: {},
    showDashboardDateSetting: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    datePreset: function() {
      this.updateCalendar(this.presets[this.datePreset])
    },
    compare: function() {
      this.updateComparePeriod()
      if (!this.compare) {
        this.range = {}
      }
    },
    comparePreset: function() {
      this.updateComparePeriod()
    },
    getDashboardDateSetting(newValue) {
      if (newValue) {
        this.reloadType()
      }
    },
  },

  data() {
    return {
      currSelectedCompare: null,
      presets: PRESETS_DESKTOP,
      datePreset: PRESETS_DEFAULT_DESKTOP.PRESET,
      compare: false,
      comparePreset: PRESETS_DEFAULT_DESKTOP.COMPARE,
      startDate: "",
      endDate: "",
      compareStartDate: "",
      compareUntilDate: "",
      test: ["2020-01-01", "2020-02-01"],
      range: {},
    }
  },

  mounted() {
    // convert compare object to array
    Object.keys(this.presets).forEach(key => {
      const { compare } = this.presets[key]
      if (!compare) {
        return
      }
      const compareArray = Object.keys(compare).map(item => compare[item])
      this.presets[key].compareArray = compareArray
    })

    // this.updateCalendar(this.presets.TODAY)

    this.reloadType()
  },

  computed: {
    attributes() {
      return [
        {
          highlight: "red",
          dates: [
            {
              start: new Date(this.startDate),
              end: new Date(this.endDate),
            },
          ],
        },
      ]
    },
    getDashboardDateSetting() {
      return this.showDashboardDateSetting
    },
  },

  methods: {
    updateCalendar(preset) {
      // init start and end date
      const {
        period: { start, end },
      } = preset
      this.startDate = moment(start).format(this.format)
      this.endDate = moment(end).format(this.format)
      this.updateComparePeriod()
    },
    updateComparePeriod() {
      if (
        this.datePreset !== "CUSTOM" &&
        this.compare &&
        this.datePreset &&
        this.comparePreset &&
        this.comparePreset.id !== "CUSTOM_PERIOD"
      ) {
        const {
          period: { start, end },
        } = this.presets[this.datePreset].compare[this.comparePreset.id]
        this.compareStartDate = moment(start).format(this.format)
        this.compareUntilDate = moment(end).format(this.format)

        this.range = {
          start: new Date(this.compareStartDate),
          end: new Date(this.compareUntilDate),
        }
      }
    },
    close() {
      this.$emit("hideModal")
    },
    applySetting() {
      this.$emit("hideModal")

      // save desktop config
      // this.updateComparePeriod() // set compare period from preset if it is not custom mode
      let compareStart = this.range && this.range.start ? moment(this.range.start).format(INTERNAL_DATE_FORMAT_1) : ""
      let compareUntil = this.range && this.range.end ? moment(this.range.end).format(INTERNAL_DATE_FORMAT_1) : ""
      const desktopConfig = {
        type: this.datePreset,
        dateStart: this.startDate && moment(this.startDate).format(INTERNAL_DATE_FORMAT_1),
        dateUntil: this.endDate && moment(this.endDate).format(INTERNAL_DATE_FORMAT_1),
        compareType: this.comparePreset,
        compareStart,
        compareUntil,
        compare: !!this.compare,
      }

     // convert to mobile config & save
      let newType
      let newSubType
      let newCompareType
      if (this.datePreset) {
        // new type and subtype
        newType = PERIOD_COMPARE_CONVERT_LIST_DESKTOP[this.datePreset].MOBILE_TYPE
        newSubType = PERIOD_CONVERT_LIST_DESKTOP[this.datePreset]
      }
      if (this.comparePreset && desktopConfig.compare && this.datePreset) {
        // new compare type
        newCompareType = PERIOD_COMPARE_CONVERT_LIST_DESKTOP[this.datePreset][this.comparePreset.id]
      }

      const newMobileConfig = {
        type: newType ? newType : null,
        subType: newSubType ? newSubType : null,
        dateStart: desktopConfig.dateStart,
        dateUntil: newType !== "DAY" ? desktopConfig.dateUntil : null,
        compareType: newCompareType ? newCompareType : null,
        compare: desktopConfig.compare,
        compareStart: desktopConfig.compareStart,
        compareUntil: newType !== "DAY" ? desktopConfig.compareUntil : null,
      }

      this.$emit("saveConvertedMobileConfig", newMobileConfig)
      this.$emit("saveConfig", desktopConfig)
      this.$emit("update", desktopConfig)
    },
    reloadType() {
      // if saved config is valid, then init configuration
      if (this.dateRange) {
        const { compareStart, compareUntil, compareType, dateStart, dateUntil, type, compare } = this.dateRange
        this.compare = this.dateRange.compare

        this.compareStartDate = compareStart
        this.compareUntilDate = compareUntil
        this.comparePreset = compareType
        this.dateStart = dateStart
        this.dateUntil = dateUntil
        this.datePreset = type
        this.compare = compare

        if (this.compare) {
          this.range = {
            start: new Date(this.compareStartDate),
            end: new Date(this.compareEndDate),
          }
        } else {
          this.range = {}
        }
      } else {
        // init configuration
        const { start, end } = this.presets[this.datePreset].period
        this.startDate = start
        this.endDate = end
      }
    },
  },
}
</script>
