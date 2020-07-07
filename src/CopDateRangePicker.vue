<template>
  <v-card>
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
</template>

<script>
import DateRangePickerMobile from "./DateRangePickerMobile.vue"
import DateRangePickerDesktop from "./DateRangePickerDesktop.vue"
import moment from "moment"
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
