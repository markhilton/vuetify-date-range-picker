<template>
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
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="endDate"
              label="End date(MM/DD/YYYY)"
              outlined
              dense
              type="date"
              maxlength="10"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-date-picker
          v-model="range"
          mode="range"
          :isDark="dark"
          :columns="2"
          :attributes="enableCompare ? attributes : []"
          is-inline
          is-expanded
        />

        <v-row justify="end" class="mt-3 mr-3">
          <v-btn text @click="close">Cancel</v-btn>
          <v-btn color="primary" @click="applySetting">Apply</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment"
import { PRESETS_DESKTOP, PRESETS_DEFAULT_DESKTOP, INTERNAL_DATE_FORMAT_1 } from "./presets/constant"

export default {
  props: {
    format: {
      type: String,
      default: () => moment().format(INTERNAL_DATE_FORMAT_1),
    },
    dark: {
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
    },
    currSelectedCompare: function() {
      this.updateComparePeriod()
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

    this.updateCalendar(this.presets.TODAY)
  },

  computed: {
    attributes() {
      return [
        {
          highlight: "red",
          dates: [
            {
              start: new Date(this.compareStartDate),
              end: new Date(this.compareEndDate),
            },
          ],
        },
      ]
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
      this.range = {
        start: new Date(this.startDate),
        end: new Date(this.endDate),
      }
      this.updateComparePeriod()
    },
    updateComparePeriod() {
      if (
        this.currSelectedPreset !== "CUSTOM" &&
        this.enableCompare &&
        this.currSelectedPreset &&
        this.currSelectedCompare
      ) {
        const {
          period: { start, end },
        } = this.presets[this.currSelectedPreset].compare[this.currSelectedCompare.id]
        this.compareStartDate = moment(start).format(this.format)
        this.compareEndDate = moment(end).format(this.format)
      }
    },
    close() {
      this.$emit("hideModal")
    },
    applySetting() {
      this.$emit("hideModal")
      this.$emit("saveDesktopConfig", {
        type: this.currSelectedPreset,
        start: this.startDate && moment(this.startDate).format(this.format),
        until: this.endDate && moment(this.endDate).format(this.format),
        compareType: this.currSelectedCompare,
        compareStart: this.compareStartDate && moment(this.compareStartDate).format(this.format),
        compareEnd: this.compareEndDate && moment(this.compareEndDate).format(this.format),
      })
    },
  },
}
</script>
