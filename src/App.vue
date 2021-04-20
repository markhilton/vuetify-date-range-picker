<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <h2 class="font-weight-light ma-10">Vuetify Date Picker Demo</h2>
      </v-row>

      <h4 class="mb-1 text-decoration-underline">Props:</h4>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-select
            :items="getPrimaryPresets"
            :value="getPrimaryPreset"
            label="Primary Preset"
            @input="SET_PRIMARY_PRESET($event)"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-select
            :items="getComparePresets"
            :value="getComparePreset"
            label="Compare Preset"
            @input="SET_COMPARE_PRESET($event)"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field
              label="From"
              type="date"
              dense
              outlined
              :max="getMaxDate"
              :value="getDateStart"
              class="picker-input"
              @input="SET_DATE_START($event)"
              @click="SET_PICKER_PRIMARY_ACTIVE(true)"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
              label="To"
              type="date"
              dense
              outlined
              :max="getMaxDate"
              :value="getDateUntil"
              class="picker-input"
              @input="SET_DATE_UNTIL($event)"
              @click="SET_PICKER_PRIMARY_ACTIVE(true)"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field
              label="From"
              type="date"
              outlined
              dense
              :max="getMaxDate"
              :value="getDateCompareStart"
              :disabled="!getCompareState"
              class="picker-input"
              @input="SET_COMPARE_START($event)"
              @click="SET_PICKER_PRIMARY_ACTIVE(false)"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
              label="To"
              type="date"
              outlined
              dense
              :max="getMaxDate"
              :value="getDateCompareUntil"
              :disabled="!getCompareState"
              class="picker-input"
              @input="SET_COMPARE_UNTIL($event)"
              @click="SET_PICKER_PRIMARY_ACTIVE(false)"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-checkbox
            :input-value="getCompareState"
            label="Compare"
            class="compare-label mt-0 mb-5"
            @change="FLIP_COMPARE_STATE()"
          />
        </v-col>
        <v-col>
          <v-checkbox
              :input-value="getThemeState"
              label="Dark Theme"
              class="compare-label mt-0 mb-5"
              @change="SET_THEME_STATE()"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <date-picker />
      </v-row>

      <v-row>
        <v-col>
          <h4 class="mb-2 mt-5 text-decoration-underline">Emitted:</h4>
          <div style="background: #333; color: #fff" class="pa-4">
            <pre>{{ getEmittedConfig }}</pre>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker.vue"
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "App",

  components: { DatePicker },

  computed: {
    ...mapGetters([
      // config
      "getMaxDate",
      "getThemeState",
      "getEmittedConfig",

      // compare checkbox
      "getCompareState",

      // individual dates
      "getDateStart",
      "getDateUntil",
      "getDateCompareUntil",
      "getDateCompareStart",

      // vuetify date range calendars setup
      "getPrimaryPreset",
      "getComparePreset",
      "getPrimaryPresets",
      "getComparePresets",
    ]),
  },

  watch: {
    getThemeState(val) {
      this.$vuetify.theme.dark = val
    },
  },

  methods: {
    ...mapMutations([
      // controls compare checkbox
      "FLIP_COMPARE_STATE",

      // control selected date ranges
      "SET_DATE_START",
      "SET_DATE_UNTIL",
      "SET_COMPARE_START",
      "SET_COMPARE_UNTIL",

      // control vuetify calendar pickers
      "SET_PICKER_PRIMARY_ACTIVE",
      "SET_THEME_STATE",
      "SET_PRIMARY_PRESET",
      "SET_COMPARE_PRESET",
    ]),
  },
}
</script>
