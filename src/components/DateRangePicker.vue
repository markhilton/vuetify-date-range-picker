<template>
  <div>
    <v-list-item @click="opened = !opened">
      <v-list-item-icon class="mr-3">
        <v-icon size="30">mdi-calendar-range</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>May 1st, 2020 - Jun 30th, 2020</v-list-item-title>
        <v-list-item-subtitle>Compare to: Jun 1, 2002 - Mar 23, 2020</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card v-if="opened">
      <div v-if="!isMobile">
        <date-range-picker-desktop
          :savedDesktopConfig="savedDesktopConfig"
          :showDashboardDateSetting="showDashboardDateSetting"
          @hideModal="hideModal"
          @saveDesktopConfig="saveDesktopConfig"
        />
      </div>
      <div v-else>
        <date-range-picker-mobile
          :dark="dark"
          :format="format"
          :savedPeriodConfig="savedPeriodConfig"
          :showDashboardDateSetting="showDashboardDateSetting"
          @hideModal="hideModal"
          @saveMobileConfig="saveMobileConfig"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from "moment"
import DateRangePickerMobile from "./DateRangePickerMobile.vue"
import DateRangePickerDesktop from "./DateRangePickerDesktop.vue"
import { INTERNAL_DATE_FORMAT_1 } from "./presets/constant"

export default {
  components: {
    DateRangePickerMobile,
    DateRangePickerDesktop,
  },

  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    savedDesktopConfig: {},
    savedPeriodConfig: {},
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

  data: () => ({
    opened: false,
  }),

  methods: {
    hideModal() {
      this.$emit("hideModal")
    },
    saveMobileConfig(param) {
      this.$emit("saveMobileConfig", param)
    },
    saveDesktopConfig(param) {
      this.$emit("saveDesktopConfig", param)
    },
  },
}
</script>
