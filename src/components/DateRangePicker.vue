<template>
  <div>
    <v-menu v-model="opened" :dark="dark" :close-on-content-click="!opened" :close-on-click="!opened">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-icon class="mr-3">
            <v-icon size="30">mdi-calendar-range</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Compare to: Jun 1, 2002 - Mar 23, 2002</v-list-item-title>
            <v-list-item-subtitle>Compare to: Jun 1, 2002 - Mar 23, 2002</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-dialog v-if="isMobile" :dark="dark" v-model="opened" fullscreen>
        <date-range-picker-mobile
          :dark="dark"
          :format="format"
          :savedPeriodConfig="savedPeriodConfig"
          :showDashboardDateSetting="showDashboardDateSetting"
          @hideModal="hideModal"
          @saveMobileConfig="saveMobileConfig"
        />
      </v-dialog>

      <date-range-picker-desktop
        v-if="!isMobile"
        :savedDesktopConfig="savedDesktopConfig"
        :showDashboardDateSetting="showDashboardDateSetting"
        @hideModal="hideModal"
        @saveDesktopConfig="saveDesktopConfig"
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

  components: {
    DateRangePickerMobile,
    DateRangePickerDesktop,
  },

  data: () => ({
    opened: false,
  }),

  computed: {
    isMobile() {
      return ["xs", "sm"].includes(this.$vuetify.breakpoint.name) ? true : false
    },
  },

  methods: {
    hideModal() {
      this.opened = false
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
