<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="font-weight-light">Vuetify Date Picker</h1>
        </v-col>
      </v-row>

      <v-overlay :value="dateSelectorOpen" @click.native="dateSelectorOpen = false" />

      <v-row>
        <v-btn x-small class="ma-2 primary">X-small</v-btn>
        <v-btn small class="ma-2 primary">Small</v-btn>
        <v-btn class="ma-2 secondary">Normal</v-btn>
        <v-btn large class="ma-2 success">Large</v-btn>

        <date-selector
          icon-color="grey darken-1"
          class="ma-2 grey lighten-2"
          :date-start="dateStart"
          :date-until="dateUntil"
          :compare-start="compareStart"
          :compare-until="compareUntil"
          :compare="compare"
          @click.native="dateSelectorOpen = !dateSelectorOpen"
        />

        <v-btn x-large class="ma-2 success">X-large</v-btn>
      </v-row>

      <v-row>
        <v-btn small class="ma-2 accent">Small</v-btn>
        <date-selector
          icon-color="grey lighten-2"
          class="ma-2 primary white--text"
          :date-start="dateStart"
          :date-until="dateUntil"
          :compare-start="compareStart"
          :compare-until="compareUntil"
          :compare="compare"
          @click.native="dateSelectorOpen = !dateSelectorOpen"
        />
        <v-btn large class="ma-2 accent-1">Large</v-btn>
      </v-row>

      <v-row>
        <v-btn x-small class="ma-2 accent-3">X-Small</v-btn>
        <v-btn x-small class="ma-2 warning">X-Small</v-btn>
        <date-selector
          icon-color="grey lighten-2"
          class="ma-2 orange darken-4 white--text"
          :date-start="dateStart"
          :date-until="dateUntil"
          :compare-start="compareStart"
          :compare-until="compareUntil"
          :compare="compare"
          @click.native="dateSelectorOpen = !dateSelectorOpen"
        />
        <v-btn x-large class="ma-2 success darken-3">X-Large</v-btn>
      </v-row>

      <v-row class="date-pickers-container" justify="center" v-if="dateSelectorOpen">
        <date-picker-desktop
          :compare-ranges="compare"
          @change="dateSelectorChanged"
          @close="dateSelectorOpen = false"
          v-if="this.$vuetify.breakpoint.mdAndUp"
        />
        <date-picker-tablet
          :compare-ranges="compare"
          @change="dateSelectorChanged"
          @close="dateSelectorOpen = false"
          v-else-if="this.$vuetify.breakpoint.smAndUp"
        />
        <date-picker-mobile
          :compare-ranges="compare"
          @change="dateSelectorChanged"
          @close="dateSelectorOpen = false"
          v-else
        />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DateSelector from "./components/DateSelector.vue"
import DatePickerDesktop from "./components/DatePickerDesktop.vue"
import DatePickerTablet from "./components/DatePickerTablet.vue"
import DatePickerMobile from "./components/DatePickerMobile.vue"

export default {
  name: "App",
  components: {
    DateSelector,
    DatePickerDesktop,
    DatePickerTablet,
    DatePickerMobile,
  },

  data: () => ({
    dateSelectorOpen: false,
    dateStart: null,
    dateUntil: null,
    compareStart: null,
    compareUntil: null,
    compare: false,
  }), // data

  methods: {
    dateSelectorChanged(v) {
      this.dateStart = v.dateStart
      this.dateUntil = v.dateUntil
      this.compareStart = v.compareStart
      this.compareUntil = v.compareUntil
      this.compare = v.compare
    },
  },
} // export
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .date-pickers-container {
    position: fixed;
    top: 50%;
    width: 100%;
    z-index: 100;
    transform: translateY(-50%);
  } // .date-pickers-container
} // #app
</style>
