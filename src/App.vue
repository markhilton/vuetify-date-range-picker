<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <h2 class="font-weight-light ma-10">Vuetify Date Picker Demo</h2>
      </v-row>

      <h4 class="mb-1 text-decoration-underline">Props:</h4>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-select v-model="primaryPreset" :items="primaryPresets" label="Primary Preset" />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-select v-model="comparePreset" :items="comparePresets" label="Compare Preset" />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field
            v-model="dateStart"
            label="From"
            type="date"
            outlined
            dense
            class="picker-input"
            @keyup="primaryPreset = null"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
            v-model="dateUntil"
            label="To"
            type="date"
            outlined
            dense
            class="picker-input"
            @keyup="primaryPreset = null"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field
            v-model="compareStart"
            label="Compare From"
            type="date"
            outlined
            dense
            class="picker-input"
            @keyup="comparePreset = null"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
            v-model="compareUntil"
            label="Compare To"
            type="date"
            outlined
            dense
            class="picker-input"
            @keyup="comparePreset = null"
          />
        </v-col>
      </v-row>

      <v-checkbox v-model="compare" label="Compare" class="compare-label mt-0 mb-5" />

      <v-row justify="center">
        <date-picker :config="config" @change="datePickerChanged" />
      </v-row>

      <v-row justify="center" class="mt-7">
        <date-picker
          :config="secondConfig"
          icon-color="white"
          class="primary white--text elevation-3"
          @change="datePickerChanged"
        />
      </v-row>

      <v-row justify="center" class="mt-7">
        <date-picker
          :config="thirdConfig"
          icon-color="white"
          class="orange darken-3 white--text elevation-0"
          @change="datePickerChanged"
        />
      </v-row>

      <v-row>
        <v-col>
          <h4 class="mb-2 mt-5 text-decoration-underline">Emitted:</h4>

          <div style="background: #333; color: #fff" class="pa-4">
            <pre>{{ emitted }}</pre>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker.vue"
import { primaryPresets, comparePresets } from "./components/DatePicker/presets"

export default {
  name: "App",

  components: { DatePicker },

  data: () => ({
    emitted: null,
    compare: true,

    primaryPreset: null,
    comparePreset: null,
    primaryPresets: Object.keys(primaryPresets),
    comparePresets: Object.keys(comparePresets),

    dateStart: "2020-01-05",
    dateUntil: "2020-01-07",
    compareStart: "2019-01-01",
    compareUntil: "2019-01-07",

    secondConfig: {
      dateStart: "2009-02-20",
      dateUntil: "2009-02-28",
      compareStart: "2009-02-01",
      compareUntil: "2009-02-07",
      compare: true,
    },

    thirdConfig: {
      dateStart: "2020-12-03",
      dateUntil: "2020-12-07",
      compareStart: "2020-11-26",
      compareUntil: "2020-11-27",
      compare: false,
    },
  }),

  computed: {
    config() {
      return {
        compare: this.compare,
        dateStart: this.dateStart,
        dateUntil: this.dateUntil,
        compareStart: this.compareStart,
        compareUntil: this.compareUntil,
        primaryPreset: this.primaryPreset,
        comparePreset: this.comparePreset,
      }
    },
  },

  methods: {
    datePickerChanged(val) {
      this.emitted = JSON.stringify(val, null, 2)
      console.log("[App @datePickerChanged] val:", this.emitted)
    },
  },
}
</script>
