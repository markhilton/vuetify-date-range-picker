<template>
  <div>
    <v-overlay :value="dateSelectorOpen" @click.native="dateSelectorOpen = false" />

    <date-selector
      icon-color="grey darken-1"
      :class="inheritedClasses"
      :config="config"
      @click.native="dateSelectorOpen = !dateSelectorOpen"
    />

    <div v-if="dateSelectorOpen">
      <date-picker-desktop
        v-if="$vuetify.breakpoint.mdAndUp"
        :config="config"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
      />

      <date-picker-tablet
        v-else-if="$vuetify.breakpoint.smAndUp"
        :config="config"
        @change="dateSelectorChanged"
        @close="dateSelectorOpen = false"
      />

      <date-picker-mobile v-else :config="config" @change="dateSelectorChanged" @close="dateSelectorOpen = false" />
    </div>
  </div>
</template>

<script>
import DateSelector from "./DateSelector.vue"
import DatePickerDesktop from "./DatePickerDesktop.vue"
import DatePickerTablet from "./DatePickerTablet.vue"
import DatePickerMobile from "./DatePickerMobile.vue"

export default {
  name: "MainComponent",

  components: {
    DateSelector,
    DatePickerDesktop,
    DatePickerTablet,
    DatePickerMobile,
  },

  props: ["config"],

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

      this.$emit("change", {
        dateStart: this.dateStart,
        dateUntil: this.dateUntil,
        compareStart: this.compareStart,
        compareUntil: this.compareUntil,
        compare: this.compare,
      })
    },
  },
}
</script>
