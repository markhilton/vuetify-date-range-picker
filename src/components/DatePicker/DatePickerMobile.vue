<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card class="date-picker-mobile elevation-0 d-flex flex-column">
      <v-container>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    label="From"
                    type="date"
                    variant="outlined"
                    dense
                    :max="getMaxDate"
                    :value="getDateStart"
                    class="picker-input"
                    @update:model-value="datePickerStore.SET_DATE_START($event)"
                    @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(true)"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    label="To"
                    type="date"
                    dense
                    variant="outlined"
                    :max="getMaxDate"
                    :value="getDateUntil"
                    class="picker-input"
                    @update:model-value="datePickerStore.SET_DATE_UNTIL($event)"
                    @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(true)"
                  />
                </v-col>
              </v-row>

              <!-- presets for main period -->
              <v-row justify="start" class="pl-2 pr-1">
                <PresetsPrimary :pinia-store="datePickerStore" :namespace="namespace" />
              </v-row>

              <v-row v-if="show_compare_date_range" class="pl-2 pt-0">
                <v-checkbox
                  v-model="getCompareState"
                  label="Compare to the following"
                  class="compare-label"
                  @change="datePickerStore.FLIP_COMPARE_STATE()"
                />
              </v-row>

              <v-row v-if="show_compare_date_range">
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    label="From"
                    type="date"
                    variant="outlined"
                    dense
                    :max="getMaxDate"
                    :value="getDateCompareStart"
                    :disabled="!getCompareState"
                    class="picker-input"
                    @update:model-value="datePickerStore.SET_COMPARE_START($event)"
                    @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(false)"
                  />
                </v-col>
              </v-row>

              <v-row v-if="show_compare_date_range">
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    label="To"
                    type="date"
                    variant="outlined"
                    dense
                    :max="getMaxDate"
                    :value="getDateCompareUntil"
                    :disabled="!getCompareState"
                    class="picker-input"
                    @update:model-value="datePickerStore.SET_COMPARE_UNTIL($event)"
                    @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(false)"
                  />
                </v-col>
              </v-row>

              <!-- presets for compare period -->
              <v-row v-if="show_compare_date_range" justify="start" class="pl-2">
                <PresetsCompare :pinia-store="datePickerStore" :namespace="namespace" />
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="mt-2">
          <v-spacer />
          <v-btn variant="outlined" class="px-4 mr-3" @click="datePickerStore.SET_DIALOG_OPENED(false)">Cancel</v-btn>
          <v-btn class="px-7" variant="elevated" color="primary" @click="emitConfig()">Apply</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>


<script setup>
import { ref, computed } from "vue"
import moment from 'moment'
import presets from './presets'

import PresetsPrimary from "@/components/DatePicker/PresetsPrimary.vue"
import PresetsCompare from "@/components/DatePicker/PresetsCompare.vue"

const props = defineProps({
  namespace: {
    required: true
  },
  piniaStore: {
    required: true
  }
})

const datePickerStore = props.piniaStore;

const show_compare_date_range = computed(() => datePickerStore.show_compare_date_range)

const getConfig = computed(() => datePickerStore.getConfig)
const getMaxDate = computed(() => moment(datePickerStore.getMaxDate).format(presets.DATE_FORMAT))
const getCompareState = computed(() => datePickerStore.getCompareState)
const getDateCompareStart = computed(() => datePickerStore.getDateCompareStart)
const getDateCompareUntil = computed(() => datePickerStore.getDateCompareUntil)
const getDateStart = computed(() => datePickerStore.getDateStart)
const getDateUntil = computed(() => datePickerStore.getDateUntil)

const emit = defineEmits(["emitConfig"])

const emitConfig = () => {
  datePickerStore.SET_CONFIG();
  emit("change", getConfig.value)
}

const dialog = ref(true)
</script>


<style lang="scss" scoped>
.date-picker-mobile:deep() {
  .picker-input {

    // Under the date inputs there is a place
    // for some details, which are completely
    // unnecessary
    .v-text-field__details {
      display: none;
    }
  }

  .compare-label {
    .v-messages {
      display: none;
    }
  }
}
</style>
