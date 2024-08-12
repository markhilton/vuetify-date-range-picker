<template>
  <div class="date-picker-desktop elevation-4 mx-auto">
      <v-card-text class="pickers">
          <v-row>
              <v-col cols="7">
                  <v-row :class="['picker-main', isPickerPrimaryActive ? 'active' : '']">
                      <v-col cols="6">
                          <!-- left calendar -->
                          <v-date-picker
                              :key="leftKey"
                              class="my-5 left-date-picker"
                              multiple="range"
                              next-icon=false
                              color="primary"
                              locale="en"
                              :max="getMaxLeftDate"
                              first-day-of-week="1"
                              :model-value="getPickerPrimary"
                              :display-value="pickerLeftMonth"
                              :month="pickerLeftMonth"
                              :year="getPickerPrimaryLeftYear"
                              @update:month="datePickerStore.SET_PICKER_DATE_LEFT($event)"
                              @update:model-value="datePickerStore.SET_PICKER_PRIMARY($event)"
                          >
                          </v-date-picker>
                      </v-col>
                      <v-col cols="6">
                          <!-- right calendar -->
                          <v-date-picker
                              :key="rightKey"
                              class="my-5 right-date-picker"
                              multiple="range"
                              prev-icon=false
                              color="primary"
                              locale="en"         
                              :max="getMaxDate"
                              first-day-of-week="1"
                              :model-value="getPickerPrimary"
                              :display-value="getPickerPrimary"
                              :month="pickerRightMonth"
                              :year="getPickerPrimaryRightYear"
                              @update:month="datePickerStore.SET_PICKER_DATE($event)"
                              @update:model-value="datePickerStore.SET_PICKER_PRIMARY($event)"
                          >
                          </v-date-picker>
                      </v-col>
                  </v-row>
                  
                  <v-row v-if="getCompareState" justify="center" class="picker-compare">
                      <v-col cols="6">
                          <!-- left calendar -->
                          <v-date-picker
                              :key="leftKey"
                              class="my-5 left-date-picker picker-compare-selected"
                              multiple="range"
                              next-icon=false
                              color="orange-darken-2"
                              locale="en"
                              :max="getMaxLeftDate"
                              first-day-of-week="1"
                              :model-value="getPickerCompare"
                              :display-value="pickerLeftMonth"
                              :month="pickerLeftMonth"
                              :year="getPickerPrimaryLeftYear"
                              @update:month="datePickerStore.SET_PICKER_DATE_LEFT($event)"
                              @update:model-value="datePickerStore.SET_PICKER_COMPARE($event)"
                          >
                          </v-date-picker>
                      </v-col>
                      <v-col cols="6">
                          <!-- right calendar -->
                          <v-date-picker
                              :key="rightKey"
                              class="my-5 right-date-picker picker-compare-selected"
                              multiple="range"
                              prev-icon=false
                              color="orange-darken-2"
                              locale="en"         
                              :max="getMaxDate"
                              first-day-of-week="1"
                              :model-value="getPickerCompare"
                              :display-value="pickerRightMonth"
                              :month="pickerRightMonth"
                              :year="getPickerPrimaryRightYear"
                              @update:month="datePickerStore.SET_PICKER_DATE($event)"
                              @update:model-value="datePickerStore.SET_PICKER_COMPARE($event)"
                          >
                          </v-date-picker>
                      </v-col>
                  </v-row>
              </v-col>

              <v-col cols="5">
                  <v-row>
                      <v-col cols="6">
                      <v-text-field
                          hide-details
                          label="From"
                          type="date"
                          dense
                          variant="outlined"
                          :max="getMaxDateForTextField"
                          :model-value="getDateStart"
                          class="picker-input"
                          @update:model-value="datePickerStore.SET_DATE_START($event)"
                          @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(true)"
                      />
                      </v-col>
                      <v-col cols="6">
                      <v-text-field
                          hide-details
                          label="To"
                          type="date"
                          dense
                          variant="outlined"
                          :max="getMaxDateForTextField"
                          :model-value="getDateUntil"
                          class="picker-input"
                          @update:model-value="datePickerStore.SET_DATE_UNTIL($event)"
                          @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(true)"
                      />
                      </v-col>
                  </v-row>

                  <!-- presets for main period -->
                  <v-row class="pl-2 pr-1">
                      <PresetsPrimary :pinia-store="datePickerStore" :namespace="namespace" />
                  </v-row>

                  <v-row v-if="show_compare_date_range" class="pl-2 pt-6">
                      <v-checkbox
                          v-model="getCompareState"
                          label="Compare to the following"
                          class="compare-label"
                          hide-details
                          @update:model-value="datePickerStore.FLIP_COMPARE_STATE()"
                      />
                  </v-row>

                  <v-row v-if="show_compare_date_range">
                      <v-col cols="6">
                      <v-text-field
                          hide-details
                          label="From"
                          type="date"
                          variant="outlined"
                          dense
                          :max="getMaxDateForTextField"
                          :value="getDateCompareStart"
                          :disabled="!getCompareState"
                          class="picker-input"
                          @update:model-value="datePickerStore.SET_COMPARE_START($event)"
                          @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(false)"
                      />
                      </v-col>
                      <v-col cols="6">
                      <v-text-field
                          hide-details
                          label="To"
                          type="date"
                          variant="outlined"
                          dense
                          :max="getMaxDateForTextField"
                          :value="getDateCompareUntil"
                          :disabled="!getCompareState"
                          class="picker-input"
                          @update:model-value="datePickerStore.SET_COMPARE_UNTIL($event)"
                          @click="datePickerStore.SET_PICKER_PRIMARY_ACTIVE(false)"
                      />
                      </v-col>
                  </v-row>

                  <!-- presets for compare period -->
                  <v-row v-if="show_compare_date_range" class="pl-2">
                      <PresetsCompare :pinia-store="datePickerStore" :namespace="namespace" />
                  </v-row>
              </v-col>
          </v-row>
      </v-card-text>

      <v-card-actions class="mt-2">
          <v-spacer />
          <v-btn variant="outlined" class="px-4 mr-6" @click="datePickerStore.SET_DIALOG_OPENED(false)">Cancel</v-btn>
          <v-btn class="px-7" variant="elevated" color="primary" @click.stop="emitConfig()">Apply</v-btn>
      </v-card-actions>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import moment from 'moment'
import presets from './presets'

import PresetsPrimary from '@/components/DatePicker/PresetsPrimary.vue'
import PresetsCompare from '@/components/DatePicker/PresetsCompare.vue'

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
const getMaxDate = computed(() => datePickerStore.getMaxDate)
const getMaxDateForTextField = computed(() => moment(datePickerStore.getMaxDate).format(presets.DATE_FORMAT))
const getMaxLeftDate = computed(() => datePickerStore.getMaxLeftDate)
const isPickerPrimaryActive = computed(() => datePickerStore.isPickerPrimaryActive)
const getPickerPrimary = computed(() => datePickerStore.getPickerPrimary)
const getDateStart = computed(() => datePickerStore.getDateStart)
const getDateUntil = computed(() => datePickerStore.getDateUntil)
const getCompareState = computed(() => datePickerStore.getCompareState)
const getPickerCompare = computed(() => datePickerStore.getPickerCompare)
const getDateCompareStart = computed(() => datePickerStore.getDateCompareStart)
const getDateCompareUntil = computed(() => datePickerStore.getDateCompareUntil)
const getPickerPrimaryLeft = computed(() => datePickerStore.getPickerPrimaryLeft)
const getPickerPrimaryRight = computed(() => datePickerStore.getPickerPrimaryRight)

const getPickerPrimaryLeftYear = computed(() => datePickerStore.getPickerPrimaryLeftYear)
const getPickerPrimaryRightYear = computed(() => datePickerStore.getPickerPrimaryRightYear)

const pickerLeftMonth = computed(() => new Date(moment(datePickerStore.picker_active_mount).subtract(1, 'month').format(presets.MONTH_FORMAT)).getMonth())
const pickerRightMonth = computed(() => new Date(moment(datePickerStore.picker_active_mount).format(presets.MONTH_FORMAT)).getMonth())

const emit = defineEmits(['emitConfig'])

const emitConfig = () => {
  datePickerStore.SET_CONFIG();
  emit('change', getConfig.value);
}

const leftKey = ref(0);
const rightKey = ref(0);

watch(
  [getPickerPrimaryLeft, getPickerPrimaryRight, getPickerPrimary],
  () => {
    leftKey.value += 1;
    rightKey.value += 1;
  }
);

</script>

<style>
.v-date-picker-table--disabled {
  pointer-events: none;
}

.left-date-picker .v-date-picker-controls {
  flex-direction: row-reverse !important;
  justify-content: flex-start !important;
}

.left-date-picker .v-date-picker-controls__mode-btn {
  display: none !important;
}

.right-date-picker .v-date-picker-controls__mode-btn {
  display: none !important;
}
</style>

<style lang="scss" scoped>
.date-picker-desktop:deep() {
  max-width: 1150px;
  margin-top: 15vh;
  background-color: rgb(var(--v-theme-background)) !important;

  .pickers {
    max-height: 23em;

    .v-date-picker-header {
      display: none;
    }

    .v-picker-title {
      display: none;
    }

    .v-text-field__details {
      display: none;
    }
  }

  .picker-main {
    position: relative;
    z-index: 1;

    .picker-label {
      opacity: 0;
    }

    .v-picker {
      background-color: transparent;
    }

    &.active {
      z-index: 1000;
    }

    // Body should be rendered but not visible
    .v-picker__body {
      background-color: transparent;
    }

    .v-date-picker-table {
      button:not(.picker-main-selected) {
        background-color: transparent;
      }

      button:focus {
        background-color: #1976d2;
        color: #ffffff;
      }
    }

    &:not(.active) {
      .picker-main-selected {
        color: #ffffff;
      }
    }
  }

  // The secondary date picker should be translated
  // over the primary and many of its elements should
  // become invisible.
  .picker-compare {
    transform: translateY(-100%);

    position: relative;
    z-index: 2;

    &.active {
      z-index: 1015;
    }

    // Header should be rendered but not visible
    .v-date-picker-header {
      opacity: 0;
    }

    .v-date-picker-table {
      thead {
        opacity: 0;
      }

      button:not(.picker-compare-selected) {
        color: transparent;
      }

      button:focus {
        background-color: #f57c00;
        color: #ffffff;
      }
    }

    .v-picker {
      background-color: transparent !important;

      .v-picker__body {
        background-color: transparent !important;
      }
    }
  }

  .compare-label {
    .v-messages {
      display: none;
    }
  }

  //right and left arrows should be rendered but not visible
  .picker-main-left .v-date-picker-controls>button:nth-of-type(2) {
    display: none !important;
  }

  .v-date-picker-controls .picker-main-right>button:nth-of-type(1) {
    display: none;
  }
}
</style>