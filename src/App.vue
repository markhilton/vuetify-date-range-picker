<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="font-weight-light">Vuetify Date Picker</h1>
        </v-col>
      </v-row>

      <v-row>
        <date-range-picker :config="config" @change="setDateRange" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DateRangePicker from "./components/Component.vue"

export default {
  name: "App",

  components: { DateRangePicker },

  data: () => ({
    config: {
      dateStart: "2020-01-01",
      dateUntil: "2020-01-07",
      compareStart: "2019-01-01",
      compareUntil: "2019-01-07",
      compare: true,
    },
  }),

  methods: {
    setDateRange(config) {
      console.log("[ DateRangePicket change ]:", config)
    },
  },
}
</script>
