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
            v-model="init.dateStart"
            label="From"
            type="date"
            dense
            outlined
            :max="getMaxDate"
            class="picker-input"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
            v-model="init.dateUntil"
            label="To"
            type="date"
            dense
            outlined
            :max="getMaxDate"
            class="picker-input"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field
            v-model="init.compareStart"
            label="From"
            type="date"
            outlined
            dense
            :max="getMaxDate"
            :disabled="!getCompareState"
            class="picker-input"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
            v-model="init.compareUntil"
            label="To"
            type="date"
            outlined
            dense
            :max="getMaxDate"
            :disabled="!getCompareState"
            class="picker-input"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-checkbox v-model="init.compare" label="Compare" class="compare-label mt-0 mb-5" />
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
        <date-picker :config="init" @change="setDateRange" />
      </v-row>

      <v-row>
        <v-col>
          <h4 class="mb-2 mt-5 text-decoration-underline">Emitted:</h4>
          <div style="background: #333; color: #fff" class="pa-4">
            <pre>{{ dateRange }}</pre>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
/**
 * !!! PLEASE READ !!!
 *
 * this App.vue file is not a part of the component is its only designed to
 * test component integration, including passing props & collect emitted result
 * therefore we should NOT use VueX mappers here to ensure this component
 * props and emitted values can be properly tested.
 *
 * The test has to demonstrate that initial props containing date range object
 * can be passed to the component, and if not the component will assume default
 * initial values AND when new date range selection is applied by user, the
 * emitted object @change contains correct user selections.
 *
 * Therefore Vuex mappers in this file have to be removed and code refactored.
 * However it is allowed to import presets for dropdowns.
 *
 */
import DatePicker from "./components/DatePicker.vue"
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "App",

  components: { DatePicker },

  data: () => ({
    init: {
      // test with and without init values
      compare: true,
      // dateStart: "2021-01-01",
      // dateUntil: "2021-02-01",
      // compareStart: "2020-01-01",
      // compareUntil: "2020-02-01",
      primaryPreset: "LAST_30_DAYS",
      comparePreset: "PREVIOUS_YEAR",
    },
    dateRange: null,
  }),

  computed: {
    ...mapGetters("datepicker", [
      // config
      "getMaxDate",
      "getThemeState",

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
    getCompareState(value) {
      this.dateRange = { ...this.dateRange, compare: value}
    },
  },

  methods: {
    ...mapMutations("datepicker", [
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

    setDateRange(state) {
      this.dateRange = state
    },
  },
}
</script>
