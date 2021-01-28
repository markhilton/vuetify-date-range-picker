<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <h1 class="font-weight-light mb-10">Vuetify Date Picker</h1>
      </v-row>

      <div class="subtitle">Props:</div>
      <v-text-field v-model="dateStart" label="From" type="date" outlined dense class="picker-input" />
      <v-text-field v-model="dateUntil" label="To" type="date" outlined dense class="picker-input" />
      <v-text-field v-model="compareStart" label="Compare From" type="date" outlined dense class="picker-input" />
      <v-text-field v-model="compareUntil" label="Compare To" type="date" outlined dense class="picker-input" />
      <v-checkbox v-model="compare" label="Compare to the following" class="compare-label" />

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
    </v-container>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker.vue"

export default {
  name: "App",

  components: { DatePicker },

  data: () => ({
    compare: true,
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
        dateStart: this.dateStart,
        dateUntil: this.dateUntil,
        compareStart: this.compareStart,
        compareUntil: this.compareUntil,
        compare: true,
      }
    },
  },

  methods: {
    datePickerChanged(val) {
      console.log("[App @datePickerChanged] val:", JSON.stringify(val, null, 2))
    },
  },
}
</script>
