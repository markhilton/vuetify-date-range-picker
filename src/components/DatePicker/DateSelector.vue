<template>
  <v-sheet class="pa-2 date-selector elevation-2 rounded" @click="SET_DIALOG_OPENED(true)">
    <v-row no-gutters>
      <v-col v-if="isCalendarIconShown" cols="1" class="mr-2">
        <v-btn
          variant="text"
          rounded
          :icon="getConfig.compare ? 'mdi-calendar-month' : 'mdi-free-cancellation'"
        />
      </v-col>

      <v-col class="ml-3">
        <div
          v-if="getConfig.primaryPreset"
          :class="['title', { 'mt-1': !getConfig.compare || !show_compare_date_range }]"
        >
          {{ getPresetLabel(getConfig.primaryPreset) }}
        </div>
        <div v-else :class="['subtitle-1', { 'mt-2': !getConfig.compare || !show_compare_date_range }]">
          {{ getFormattedDate(getConfig.dateStart, getConfig.dateUntil) }}
        </div>

        <div v-if="show_compare_date_range && getConfig.compare" class="text--lighten-2 mt-n2 caption">
          <div v-if="getConfig.comparePreset">vs {{ getPresetLabelSmall(getConfig.comparePreset) }}</div>
          <div v-else>vs {{ getFormattedDate(getConfig.compareStart, getConfig.compareUntil) }}</div>
        </div>
      </v-col>

      <v-col v-if="isPresetsIconShown" cols="1" class="mr-4">
        <v-menu offset-y left>
          <template v-slot:activator="{ props }">
            <v-btn rounded variant="text" v-bind="props" icon="mdi-chevron-down">
            </v-btn>
          </template>
<v-list>
  <v-list-item v-for="(item, index) in getPrimaryPresets" :key="index">
    <v-list-item-title>{{ getPresetLabel(item) }}</v-list-item-title>
  </v-list-item>
</v-list>
</v-menu>
</v-col>
</v-row>
</v-sheet>
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

const show_compare_date_range = computed(() => datePickerStore.show_compare_date_range)

const getConfig = computed(() => datePickerStore.getConfig)
const isPresetsIconShown = computed(() => datePickerStore.isPresetsIconShown)
const isCalendarIconShown = computed(() => datePickerStore.isCalendarIconShown)
const getFormattedDate = computed(() => datePickerStore.getFormattedDate)
const getPrimaryPresets = computed(() => datePickerStore.getPrimaryPresets)
const getPresetLabel = computed(() => datePickerStore.getPresetLabel)
const getPresetLabelSmall = computed(() => datePickerStore.getPresetLabelSmall)

const SET_DIALOG_OPENED = (payload) => {
  datePickerStore.dialog_opened = payload;
}
</script>

<style lang="scss" scoped>
.date-selector {
  cursor: pointer;

  .theme--dark.v-sheet,
  .theme--light.v-sheet {
    background-color: transparent;
  }
}
</style>
