<template>
  <div>
    <v-menu v-model="opened" :dark="dark" :close-on-content-click="!opened" :close-on-click="!opened">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-icon class="mr-3">
            <v-icon size="30">mdi-calendar-range</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Jun 1, 2002 - Mar 23, 2002</v-list-item-title>
            <v-list-item-subtitle>Compare to: Jun 1, 2002 - Mar 23, 2002</v-list-item-subtitle>
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
  }),

  computed: {
    isMobile() {
      return ["xs"].includes(this.$vuetify.breakpoint.name)
    },
  },

  methods: {
    hideModal() {
      this.opened = false
    },
    setDateRange(param) {
      this.$emit("update", param)
    },
  },
}
</script>
