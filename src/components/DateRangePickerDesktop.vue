<template>
  <v-card>
    <v-container>
      <v-row>
        <!-- preset options and compare periods -->
        <v-col cols="3">
          <v-list>
            <v-list-item-group v-model="currSelectedPreset">
              <v-list-item v-for="item in presets" :key="item.id" :value="item.id">
                <v-list-item-content>{{ item.label }}</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-row class="pl-5 mb-2">
            <v-switch class="compare-to-switch" v-model="enableCompare"></v-switch>
            <span class="pt-1">Compare to</span>
          </v-row>

          <v-select
            v-model="currSelectedCompare"
            :disabled="!enableCompare"
            :items="presets[currSelectedPreset].compareArray"
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
              <v-text-field v-model="endDate" label="End date(MM/DD/YYYY)" outlined dense type="date" maxlength="10" />
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
    savedDesktopConfig: {},
    showDashboardDateSetting: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    currSelectedPreset: function() {
      this.updateCalendar(this.presets[this.currSelectedPreset])
    },
    enableCompare: function() {
      this.updateComparePeriod()
      if (!this.enableCompare) {
        this.range = {}
      }
    },
    currSelectedCompare: function() {
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
      presets: PRESETS_DESKTOP,
      currSelectedPreset: PRESETS_DEFAULT_DESKTOP.PRESET,
      enableCompare: false,
      currSelectedCompare: PRESETS_DEFAULT_DESKTOP.COMPARE,
      startDate: "",
      endDate: "",
      compareStartDate: "",
      compareEndDate: "",
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
        this.currSelectedPreset !== "CUSTOM" &&
        this.enableCompare &&
        this.currSelectedPreset &&
        this.currSelectedCompare &&
        this.currSelectedCompare.id !== "CUSTOM_PERIOD"
      ) {
        const {
          period: { start, end },
        } = this.presets[this.currSelectedPreset].compare[this.currSelectedCompare.id]
        this.compareStartDate = moment(start).format(this.format)
        this.compareEndDate = moment(end).format(this.format)

        this.range = {
          start: new Date(this.compareStartDate),
          end: new Date(this.compareEndDate),
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
      let compareEnd = this.range && this.range.end ? moment(this.range.end).format(INTERNAL_DATE_FORMAT_1) : ""
      const desktopConfig = {
        type: this.currSelectedPreset,
        start: this.startDate && moment(this.startDate).format(INTERNAL_DATE_FORMAT_1),
        until: this.endDate && moment(this.endDate).format(INTERNAL_DATE_FORMAT_1),
        compareType: this.currSelectedCompare,
        compareStart,
        compareEnd,
        enableCompare: !!this.enableCompare,
      }

      // convert to mobile config & save
      let newType
      let newSubType
      let newCompareType
      if (this.currSelectedPreset) {
        // new type and subtype
        newType = PERIOD_COMPARE_CONVERT_LIST_DESKTOP[this.currSelectedPreset].MOBILE_TYPE
        newSubType = PERIOD_CONVERT_LIST_DESKTOP[this.currSelectedPreset]
      }
      if (this.currSelectedCompare && desktopConfig.enableCompare && this.currSelectedPreset) {
        // new compare type
        newCompareType = PERIOD_COMPARE_CONVERT_LIST_DESKTOP[this.currSelectedPreset][this.currSelectedCompare.id]
      }

      const newMobileConfig = {
        type: newType ? newType : null,
        subType: newSubType ? newSubType : null,
        start: desktopConfig.start,
        until: newType !== "DAY" ? desktopConfig.until : null,
        compareType: newCompareType ? newCompareType : null,
        enableCompareTo: desktopConfig.enableCompare,
        compareStart: desktopConfig.compareStart,
        compareEnd: newType !== "DAY" ? desktopConfig.compareEnd : null,
      }

      // this.$emit("saveConvertedMobileConfig", newMobileConfig)
      this.$emit("saveDesktopConfig", {
        desktopConfig,
        newMobileConfig,
      })
    },
    reloadType() {
      // if saved config is valid, then init configuration
      if (this.savedDesktopConfig) {
        const { compareEnd, compareStart, compareType, start, type, until, enableCompare } = this.savedDesktopConfig
        this.compareStartDate = compareStart
        this.compareEndDate = compareEnd
        this.currSelectedCompare = compareType
        this.startDate = start
        this.endDate = until
        this.currSelectedPreset = type
        this.enableCompare = enableCompare

        if (this.enableCompare) {
          this.range = {
            start: new Date(this.compareStartDate),
            end: new Date(this.compareEndDate),
          }
        } else {
          this.range = {}
        }
      } else {
        // init configuration
        const { start, end } = this.presets[this.currSelectedPreset].period
        this.startDate = start
        this.endDate = end
      }
    },
  },
}
</script>
