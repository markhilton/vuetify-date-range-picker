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

    <div v-if="dateSelectorOpen" class="date-pickers-container">
      <date-picker-desktop
        v-if="this.$vuetify.breakpoint.mdAndUp"
        :config="config"
        :compare-ranges="compare"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
      />
      <date-picker-tablet
        v-else-if="this.$vuetify.breakpoint.sm"
        :config="config"
        :compare-ranges="compare"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
      />
      <date-picker-mobile
        v-else
        :config="config"
        :compare-ranges="compare"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
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
  }),

  watch: {
    config(dateRange) {
      console.log("dateRange prop change:", dateRange)
      this.changeValues(dateRange)
    },
  },

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
      console.log("changeValues", newVals)

      this.dateStart = newVals.dateStart
      this.dateUntil = newVals.dateUntil
      this.compareStart = newVals.compareStart
      this.compareUntil = newVals.compareUntil
      this.compare = newVals.compare
    },
  },
}
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
}
</style>
