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
import presets from "./DatePicker/presets"
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

    compare: false,

    dateStart: null,
    dateUntil: null,

    compareStart: null,
    compareUntil: null,

    primaryPreset: null,
    comparePreset: null,

    // The following takes care of the classes which should not go to the root element
    // but to the <date-selector /> which actually represents the whole picker
    inheritedClasses: "",
  }),

  watch: {
    config(dateRange) {
      this.updateConfig(dateRange)
    },
  },

  mounted() {
    console.log("[DatePicker -> mounted()] config:", JSON.stringify(this.config, null, 2))

    this.updateConfig(this.config)

    // The classes which are provided to the root element are passed to the <date-selector />
    this.inheritedClasses = this.$el.className
    // We don't want to lose the default root element classes
    this.$el.className = "date-selector d-inline-flex align-center justify-center"
  },

  methods: {
    dateSelectorChanged(values) {
      this.updateConfig(values)
      this.$emit("change", values)
    },

    updateConfig(values) {
      console.log("updateConfig", values)

      this.compare = values.compare

      this.dateStart = values.dateStart
      this.dateUntil = values.dateUntil
      this.compareStart = values.compareStart
      this.compareUntil = values.compareUntil

      // overwrite primary period if preset is passed
      if (values.primaryPreset && presets[values.primaryPreset]) {
        console.log("primaryPreset preset overwrite")
        this.dateStart = presets[values.primaryPreset][0]
        this.dateUntil = presets[values.primaryPreset][1]
      }

      // overwrite compare period if preset is passed based on primary period
      if (values.comparePreset && presets[values.comparePreset]) {
        console.log("comparePreset preset overwrite")
        const comparePreset = presets[values.comparePreset]([this.dateStart, this.dateUntil])
        this.compareStart = comparePreset[0]
        this.compareUntil = comparePreset[1]
      }

      this.primaryPreset = values.primaryPreset
      this.comparePreset = values.comparePreset
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
