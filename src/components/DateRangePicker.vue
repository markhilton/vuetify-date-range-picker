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

  props: ["config"],

  data: () => ({
    // The following takes care of the classes which should not go to the root element
    // but to the <date-selector /> which actually represents the whole picker
    inheritedClasses: "",
    configParsed: {},
  }),

  computed: {
    ...mapGetters("datepicker", ["isDialogOpened", "getConfig"]),

    // props have to be stringify to be make watch reactive on object
    propsChange() {
      return JSON.stringify(this.config)
    },
  },

  watch: {
    // we need to watch for any props update to pass it to component
    propsChange() {
      this.SET_PROPS({ ...this.config })
    },

    // watch for current component config to emit values on change
    getConfig(state) {
      this.$emit("change", state)
    },
  },

  // this component has to be mounted for this.$el.className
  mounted() {
    // The classes which are provided to the root element are passed to the <date-selector />
    this.inheritedClasses = this.$el.className

    // We don't want to lose the default root element classes
    this.$el.className = "date-selector d-inline-flex align-center justify-center"

    this.SET_PROPS({ ...this.config })
  },

  methods: {
    ...mapMutations("datepicker", ["SET_DIALOG_OPENED", "SET_PROPS"]),
  },
}
</script>

<style lang="scss" scoped>
.date-selector {
  padding: 0;
  margin: 0;
  max-height: 60px;
  width: 280px;
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

<style lang="scss">
/* not scoped white calendar icon for dark theme <v-text-field type="date" /> */
.theme--dark input[type="date"]::-webkit-calendar-picker-indicator {
  background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="%23FFFFFF" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" /></svg>')
    no-repeat;
}
</style>
