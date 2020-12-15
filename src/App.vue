<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="font-weight-light">Vuetify Date Picker</h1>
        </v-col>
      </v-row>

      <v-row>
        <date-range-picker />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DateRangePicker from "./components/Component.vue"
export default {
  components: { DateRangePicker },
  name: "App",
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
