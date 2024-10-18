<template>
  <div class="date-selector">
    <DateSelector v-bind="$attrs" :class="inheritedClasses" :namespace="namespace" :pinia-store="datePickerStore"  @change="$emit('change', $event)" />
    <!-- <v-overlay v-model="isDialogOpened" @click="datePickerStore.SET_DIALOG_OPENED(true)"> -->
    <v-overlay v-model="isDialogOpened"  class="align-center justify-center">
      <div v-if="isDialogOpened" class="date-pickers-container">
        <DatePickerDesktop v-if="mdAndUp" :pinia-store="datePickerStore"  :namespace="namespace" @change="$emit('change', $event)" />
        <DatePickerTablet v-else-if="sm" :pinia-store="datePickerStore" :namespace="namespace" @change="$emit('change', $event)" />
        <DatePickerMobile v-else :pinia-store="datePickerStore" :namespace="namespace" @change="$emit('change', $event)" /> 
      </div>
    </v-overlay>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useDisplay } from "vuetify";

import DateSelector from "@/components/DatePicker/DateSelector.vue"
import DatePickerDesktop from "@/components/DatePicker/DatePickerDesktop.vue"
import DatePickerTablet from "@/components/DatePicker/DatePickerTablet.vue"
import DatePickerMobile from "@/components/DatePicker/DatePickerMobile.vue"

const props = defineProps({
  config: {
    type: Object,
  },
  namespace: {
    required: true
  },
});

const { mdAndUp, sm } = useDisplay();

let datePickerStore = props.namespace
const inheritedClasses = ref("");

const isDialogOpened = computed(() => datePickerStore.isDialogOpened)

onMounted(() => {
  // inheritedClasses.value = window.$el.

  // // We don't want to lose the default root element classes
  // window.$el.className = "date-selector d-inline-flex align-center justify-center"

  datePickerStore.SET_PROPS({ ...props.config })
  datePickerStore.SET_CONFIG()
});
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
  background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="%23FFFFFF" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" /></svg>') no-repeat;
}
</style>
