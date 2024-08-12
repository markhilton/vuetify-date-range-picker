<template>
  <div>
    <v-btn
      size="x-small"
      variant="flat"
      :disabled="!getCompareState"
      :color="getComparePreset === 'PREVIOUS_PERIOD' ? 'primary' : null"
      @click="datePickerStore.SET_COMPARE_PRESET('PREVIOUS_PERIOD')"
    >
      Previous period
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :disabled="!getCompareState"
      :color="getComparePreset === 'PREVIOUS_MONTH' ? 'primary' : null"
      @click="datePickerStore.SET_COMPARE_PRESET('PREVIOUS_MONTH')"
    >
      Previous month
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :disabled="!getCompareState"
      :color="getComparePreset === 'PREVIOUS_YEAR' ? 'primary' : null"
      @click="datePickerStore.SET_COMPARE_PRESET('PREVIOUS_YEAR')"
    >
      Previous year
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  namespace: {
    type: String,
    default: "datepicker",
  },
  piniaStore: {
    required: true
  }
})

const datePickerStore = props.piniaStore;

const getCompareState = computed(() => datePickerStore.getCompareState)
const getComparePreset = computed(() => datePickerStore.getComparePreset)

</script>
