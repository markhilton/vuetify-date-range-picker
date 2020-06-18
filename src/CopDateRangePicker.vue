<template>
  <v-card>
    <div v-if="!isMobile">
      <date-range-picker-desktop @hideModal="hideModal" @saveDesktopConfig="saveDesktopConfig"/>
    </div>
    <div v-else>
      <date-range-picker-mobile
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
    savedPeriodConfig: {},
    showDashboardDateSetting: {
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
