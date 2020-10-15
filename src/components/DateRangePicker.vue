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
      <date-range-picker-mobile
        v-if="isMobile"
        :dark="dark"
        :format="format"
        :savedPeriodConfig="savedPeriodConfig"
        :showDashboardDateSetting="showDashboardDateSetting"
        @hideModal="hideModal"
        @saveMobileConfig="saveMobileConfig"
      />
      <date-range-picker-desktop
        v-else
        :savedDesktopConfig="savedDesktopConfig"
        :showDashboardDateSetting="showDashboardDateSetting"
        @hideModal="hideModal"
        @saveDesktopConfig="saveDesktopConfig"
      />
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

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.name == "sm" ? true : false
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
