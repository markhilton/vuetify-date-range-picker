<template>
  <div class="date-selector">
    <v-overlay :value="isDialogOpened" @click.native="SET_DIALOG_OPENED(true)" />

    <DateSelector v-bind="$attrs" :class="inheritedClasses" />

    <div v-if="isDialogOpened" class="date-pickers-container">
      <DatePickerDesktop v-if="$vuetify.breakpoint.mdAndUp" />
      <DatePickerTablet v-else-if="$vuetify.breakpoint.sm" />
      <DatePickerMobile v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

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

  data: () => ({
    // The following takes care of the classes which should not go to the root element
    // but to the <date-selector /> which actually represents the whole picker
    inheritedClasses: "",
  }),

  computed: {
    ...mapGetters(["isDialogOpened"]),
  },

  mounted() {
    console.log("[DatePicker -> mounted()] config:", JSON.stringify(this.config, null, 2))

    // The classes which are provided to the root element are passed to the <date-selector />
    this.inheritedClasses = this.$el.className

    // We don't want to lose the default root element classes
    this.$el.className = "date-selector d-inline-flex align-center justify-center"
  },

  methods: {
    ...mapMutations(["SET_DIALOG_OPENED", "SET_PROPS"]),
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
