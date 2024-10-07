<template>
  <div>
    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_7_DAYS' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_7_DAYS')"
    >
      Last 7 days
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_30_DAYS' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_30_DAYS')"
    >
      Last 30 days
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_90_DAYS' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_90_DAYS')"
    >
      Last 90 days
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_WEEK' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_WEEK')"
    >
      Last week
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_MONTH' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_MONTH')"
    >
      Last month
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_3_MONTHS' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_3_MONTHS')"
    >
      Last 3 months
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'LAST_YEAR' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('LAST_YEAR')"
    >
      Last Year
    </v-btn>

    <v-btn
      size="x-small"
      variant="flat"
      :color="getPrimaryPreset === 'THIS_YEAR' ? 'primary' : null"
      @click="datePickerStore.SET_PRIMARY_PRESET('THIS_YEAR')"
    >
      This Year
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  namespace: {
    required: true
  },
  piniaStore: {
    required: true
  }
})

const datePickerStore = props.piniaStore;

const getPrimaryPreset = computed(() => datePickerStore.getPrimaryPreset)

</script>