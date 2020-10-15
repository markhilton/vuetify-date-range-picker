<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Date Range Picker</h1>

        <div>This is a demo implementation of Date Range Picker component.</div>

        <v-container class="pl-0">
          <b>current component selection:</b>
        </v-container>

        <v-container style="background: #666; color: #FFF">
          {{ selection }}
        </v-container>

        <v-container class="pl-0">
          <!-- date-range-picker -->
          <date-range-picker :config="configuration" @update="setDateRange" />
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import moment from "moment"
import DateRangePicker from "./components/DateRangePicker"

export default {
  name: "App",

  components: {
    DateRangePicker,
  },

  data: () => ({
    // initial component configuration
    configuration: {
      dark: false,
      dateFormat: "MMM Do, YYYY",
      // dateStart: DAYS_AGO_7,
      // dateUntil: TODAY,
      // datePreset: LAST_7_DAYS,
      compare: true,
      // compareStart: DAYS_AGO_15,
      // compareUntil: DAYS_AGO_8,
      // comparePreset: PREVIOUS_7_DAYS,
    },

    // emited selection
    selection: {},
  }),

  methods: {
    setDateRange(update) {
      this.selection = update
    },
  },
}
</script>
