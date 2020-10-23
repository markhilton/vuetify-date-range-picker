<template>
  <div>
    <v-menu
      v-model="opened"
      :dark="dark"
      :close-on-content-click="!opened"
      :close-on-click="!opened"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-icon class="mr-3">
            <v-icon size="30">mdi-calendar-range</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ selectedDate }}</v-list-item-title>
            <v-list-item-subtitle>Compare to: {{ displayDate }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-dialog v-if="isMobile" :dark="dark" v-model="opened" fullscreen>
        <date-range-picker-mobile
          :dark="dark"
          :format="format"
          :dateRange="dateRange"
          @hideModal="hideModal"
          @update="setDateRange($event)"
        />
      </v-dialog>

      <date-range-picker-desktop
        v-else
        :dark="dark"
        :dateRange="dateRange"
        @hideModal="hideModal"
        @update="setDateRange($event)"
      />
    </v-menu>
  </div>
</template>

<script>
import moment from "moment"
import DateRangePickerMobile from "./DateRangePickerMobile.vue"
import DateRangePickerDesktop from "./DateRangePickerDesktop.vue"
import { INTERNAL_DATE_FORMAT_1 } from "./presets/constants"

export default {
  props: {
    dateRange: {
      dateStart: {
        type: String,
        default: () =>
          moment()
            .subtract(7, "days")
            .format("YYYY-MM-DD"),
      },
      dateUntil: {
        type: String,
        default: () =>
          moment()
            .subtract(1, "days")
            .format("YYYY-MM-DD"),
      },
      datePreset: {
        type: String,
        default: "LAST_7_DAYS",
      },
      compare: {
        type: Boolean,
        default: true,
      },
      compareStart: {
        type: String,
        default: () =>
          moment()
            .subtract(14, "days")
            .format("YYYY-MM-DD"),
      },
      compareUntil: {
        type: String,
        default: () =>
          moment()
            .subtract(8, "days")
            .format("YYYY-MM-DD"),
      },
      comparePreset: {
        type: String,
        default: "PREVIOUS_PERIOD",
      },
      dateFormat: {
        type: String,
        default: () => moment().format("MMM D, YYYY"),
      },
    },
    showDashboardDateSetting: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: () => moment().format(INTERNAL_DATE_FORMAT_1),
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    DateRangePickerMobile,
    DateRangePickerDesktop,
  },

  data: () => ({
    opened: false,
    dateFormat: "MMM Do, YYYY",
    selectedDate: "",
    displayDate: "",
  }),

  computed: {
    isMobile() {
      return ["xs"].includes(this.$vuetify.breakpoint.name)
    },
    // dateFormat() {
    //   return this.dateRange.dateFormat || this.defaultDateFormat
    // },
    dateRangeString() {
      if (!this.dateRange) return ""

      const { start, until } = this.dateRange

      return moment(start).format(this.dateFormat) + " - " + moment(until).format(this.dateFormat)
    },
    compareDateRangeString() {
      if (!this.dateRange || !this.dateRange.enableCompare) return ""

      const { compareStart, compareUntil } = this.dateRange

      return (
        moment(compareStart).format(this.dateRange.dateFormat) +
        " - " +
        moment(compareUntil).format(this.dateRange.dateFormat)
      )
    },
  },

  methods: {
    hideModal() {
      this.opened = false
    },
    setDateRange(param) {
      const { start, until, compareStart, compareUntil } = param

      this.selectedDate = moment(start).format(this.dateFormat) + " - " + moment(until).format(this.dateFormat)

      this.displayDate =
        moment(compareStart).format(this.dateFormat) + " - " + moment(compareUntil).format(this.dateFormat)

      console.log(this.selectedDate)
      this.$emit("update", param)
    },
  },
}
</script>
