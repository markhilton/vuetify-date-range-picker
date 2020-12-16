<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <h1 class="font-weight-light mb-10">Vuetify Date Picker</h1>
      </v-row>

      <v-row justify="center">
        <date-picker
          :config="config"
          @change="datePickerChanged"
        />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker.vue"

export default {
  components: { DatePicker },
  name: "App",

  data: () => ({
    config: {
      dateStart: "2020-01-05",
      dateUntil: "2020-01-07",
      compareStart: "2019-01-01",
      compareUntil: "2019-01-07",
      compare: true,
    },
  }),

  methods: {
    datePickerChanged (val) {
      this.config = val
      console.log("[App @datePickerChanged] val:", JSON.stringify(val, null, 2))
    },

    setDateRange(config) {
      console.log("[ DateRangePicket change ]:", config)
    },
  },
} // export
</script>
