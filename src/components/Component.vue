<template>
  <div class="date-selector">
    <v-overlay :value="dateSelectorOpen" @click.native="dateSelectorOpen = false" />

    <date-selector
      icon-color="grey darken-1"
      :class="`${this.inheritedClasses}`"
      :date-start="dateStart"
      :date-until="dateUntil"
      :compare-start="compareStart"
      :compare-until="compareUntil"
      :compare="compare"
      @click.native="dateSelectorOpen = !dateSelectorOpen"
    />

    <div class="date-pickers-container" v-if="dateSelectorOpen">
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
    </div>
  </div>
</template>

<script>
import DateSelector from "./DateSelector.vue"
import DatePickerDesktop from "./DatePickerDesktop.vue"
import DatePickerTablet from "./DatePickerTablet.vue"
import DatePickerMobile from "./DatePickerMobile.vue"

export default {
  name: "SubComponent",
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
    inheritedClasses: "",
  }),

  mounted() {
    this.inheritedClasses = this.$el.className
    this.$el.className = "date-selector d-inline-flex align-center justify-center"
  },

  methods: {
    dateSelectorChanged(v) {
      this.dateStart = v.dateStart
      this.dateUntil = v.dateUntil
      this.compareStart = v.compareStart
      this.compareUntil = v.compareUntil
      this.compare = v.compare
    },
  }, // methods
} // export
</script>

<style lang="scss" scoped>
.date-selector {
  padding: 0;
  margin: 0;
  max-height: 60px;
}

.date-pickers-container {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 100;
  width: 100vw;
} // .date-pickers-container
</style>
