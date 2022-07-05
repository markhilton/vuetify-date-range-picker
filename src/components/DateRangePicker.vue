<template>
  <div class="date-selector">
    <v-overlay :value="isDialogOpened" @click.native="SET_DIALOG_OPENED(true)" />

    <DateSelector v-bind="$attrs" :class="inheritedClasses" :namespace="namespace" @change="$emit('change', $event)" />

    <div v-if="isDialogOpened" class="date-pickers-container">
      <DatePickerDesktop v-if="$vuetify.breakpoint.mdAndUp" :namespace="namespace" @change="$emit('change', $event)" />
      <DatePickerTablet v-else-if="$vuetify.breakpoint.sm" :namespace="namespace" @change="$emit('change', $event)" />
      <DatePickerMobile v-else :namespace="namespace" @change="$emit('change', $event)" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"

import DateSelector from "./DatePicker/DateSelector.vue"
import DatePickerDesktop from "./DatePicker/DatePickerDesktop.vue"
import DatePickerTablet from "./DatePicker/DatePickerTablet.vue"
import DatePickerMobile from "./DatePicker/DatePickerMobile.vue"
import DateRangeStore from "../store/datepicker"
import localStore from "@/store"
import deepcopy from "deepcopy";

export default {
  name: "DatePicker",

  components: {
    DateSelector,
    DatePickerDesktop,
    DatePickerTablet,
    DatePickerMobile,
  },

  props: {
    config: Object,
  },

  data: () => ({
    // The following takes care of the classes which should not go to the root element
    // but to the <date-selector /> which actually represents the whole picker
    inheritedClasses: "",
    configParsed: {},
    namespace: "datepicker"
  }),

  computed: mapState({
    isDialogOpened(state, getters) {
      return getters[this.namespace + "/isDialogOpened"]
    },
    getConfig(state, getters) {
      return getters[this.namespace + "/getConfig"]
    },

    // props have to be stringify to be make watch reactive on object
    propsChange() {
      return JSON.stringify(this.config)
    },
  }),

  watch: {
    // we need to watch for any props update to pass it to component
    propsChange() {
      this.SET_PROPS({ ...this.config })
    },
  },

  beforeMount() {
    // register module
    const number = Math.random()
    const moduleName = this.namespace + number
    this.namespace += number
    localStore.registerModule(moduleName, deepcopy(DateRangeStore))
  },

  // this component has to be mounted for this.$el.className
  mounted() {
    // The classes which are provided to the root element are passed to the <date-selector />
    this.inheritedClasses = this.$el.className

    // We don't want to lose the default root element classes
    this.$el.className = "date-selector d-inline-flex align-center justify-center"

    this.SET_PROPS({ ...this.config })
    this.SET_CONFIG()
  },

  methods: {
    ...mapMutations({
      SET_DIALOG_OPENED(commit, payload) {
        return commit(this.namespace + "/SET_DIALOG_OPENED", payload)
      },
      SET_PROPS(commit, payload) {
        return commit(this.namespace + "/SET_PROPS", payload)
      },
      SET_CONFIG(commit, payload) {
        return commit(this.namespace + "/SET_CONFIG", payload)
      },
    }),
  },
}
</script>

<style lang="scss" scoped>
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
