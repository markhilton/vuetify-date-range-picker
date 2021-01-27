<template>
  <div class="date-selector">
    <v-overlay :value="dateSelectorOpen" @click.native="dateSelectorOpen = false" />

    <date-selector
      v-bind="$attrs"
      :class="inheritedClasses"
      :date-start="dateStart"
      :date-until="dateUntil"
      :compare-start="compareStart"
      :compare-until="compareUntil"
      :compare="compare"
      @click.native="dateSelectorOpen = !dateSelectorOpen"
    />

    <div class="date-pickers-container" v-if="dateSelectorOpen">
      <date-picker-desktop
        :config="config"
        :compare-ranges="compare"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
        v-if="this.$vuetify.breakpoint.mdAndUp"
      />
      <date-picker-tablet
        :config="config"
        :compare-ranges="compare"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
        v-else-if="this.$vuetify.breakpoint.sm"
      />
      <date-picker-mobile
        :config="config"
        :compare-ranges="compare"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
        v-else
      />
    </div>
  </div>
</template>

<script>
import DateSelector from "./DatePicker/DateSelector.vue"
import DatePickerDesktop from "./DatePicker/DatePickerDesktop.vue"
import DatePickerTablet from "./DatePicker/DatePickerTablet.vue"
import DatePickerMobile from "./DatePicker/DatePickerMobile.vue"

export default {
  name: "DatePicker",

  components: {
    DateSelector,
    DatePickerDesktop,
    DatePickerTablet,
    DatePickerMobile,
  },

  inheritAttrs: false,

  props: ["config"],

  data: () => ({
    dateSelectorOpen: false,
    dateStart: null,
    dateUntil: null,
    compareStart: null,
    compareUntil: null,
    compare: false,
    // The following takes care of the classes which should not go to the root element
    // but to the <date-selector /> which actually represents the whole picker
    inheritedClasses: "",
  }), // data

  mounted() {
    console.log("[DatePicker -> mounted()] config:", JSON.stringify(this.config, null, 2))

    this.changeValues(this.config)

    // The classes which are provided to the root element are passed to the <date-selector />
    this.inheritedClasses = this.$el.className
    // We don't want to lose the default root element classes
    this.$el.className = "date-selector d-inline-flex align-center justify-center"
  },

  methods: {
    dateSelectorChanged(newVals) {
      this.changeValues(newVals)
      this.$emit("change", newVals)
    },

    changeValues(newVals) {
      this.dateStart = newVals.dateStart
      this.dateUntil = newVals.dateUntil
      this.compareStart = newVals.compareStart
      this.compareUntil = newVals.compareUntil
      this.compare = newVals.compare
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
