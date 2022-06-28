<template>
  <v-card class="date-picker-desktop elevation-4 mx-auto">
    <v-card-text class="pickers">
      <v-row>
        <v-col cols="7">
          <v-row :class="['picker-main', isPickerPrimaryActive ? 'active' : '']">
            <v-col cols="6">
              <!-- left calendar -->
              <v-date-picker
                range
                no-title
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerPrimary"
                :picker-date="getPickerPrimaryLeft"
                class="picker-main-left pr-1"
                color="primary darken-2 picker-main-selected"
                @click:date="SET_PICKER_PRIMARY($event)"
                @update:picker-date="SET_PICKER_DATE_LEFT($event)"
              />
            </v-col>
            <v-col cols="6">
              <!-- right calendar -->
              <v-date-picker
                range
                no-title
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerPrimary"
                :picker-date="getPickerPrimaryRight"
                class="picker-main-right"
                color="primary darken-2 picker-main-selected"
                @click:date="SET_PICKER_PRIMARY($event)"
                @update:picker-date="SET_PICKER_DATE($event)"
              />
            </v-col>
          </v-row>

          <v-row v-if="getCompareState" justify="center" class="picker-compare">
            <v-col cols="6">
              <v-date-picker
                range
                no-title
                show-current="false"
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerCompare"
                :picker-date="getPickerPrimaryLeft"
                class="pr-1"
                color="orange darken-2 picker-compare-selected"
                @click:date="SET_PICKER_COMPARE($event)"
                @update:picker-date="SET_PICKER_DATE_LEFT($event)"
              />
            </v-col>
            <v-col cols="6">
              <v-date-picker
                range
                no-title
                show-current="false"
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerCompare"
                :picker-date="getPickerPrimaryRight"
                color="orange darken-2 picker-compare-selected"
                @click:date="SET_PICKER_COMPARE($event)"
                @update:picker-date="SET_PICKER_DATE($event)"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="5">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="From"
                type="date"
                dense
                outlined
                :max="getMaxDate"
                :value="getDateStart"
                class="picker-input"
                @input="SET_DATE_START($event)"
                @click="SET_PICKER_PRIMARY_ACTIVE(true)"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="To"
                type="date"
                dense
                outlined
                :max="getMaxDate"
                :value="getDateUntil"
                class="picker-input"
                @input="SET_DATE_UNTIL($event)"
                @click="SET_PICKER_PRIMARY_ACTIVE(true)"
              />
            </v-col>
          </v-row>

          <!-- presets for main period -->
          <v-row class="pl-2 pr-1">
            <PresetsPrimary :namespace="namespace" />
          </v-row>

          <v-row v-if="show_compare_date_range" class="pl-2 pt-6">
            <v-checkbox
              :input-value="getCompareState"
              label="Compare to the following"
              class="compare-label"
              @change="FLIP_COMPARE_STATE()"
            />
          </v-row>

          <v-row v-if="show_compare_date_range">
            <v-col cols="6">
              <v-text-field
                label="From"
                type="date"
                outlined
                dense
                :max="getMaxDate"
                :value="getDateCompareStart"
                :disabled="!getCompareState"
                class="picker-input"
                @input="SET_COMPARE_START($event)"
                @click="SET_PICKER_PRIMARY_ACTIVE(false)"
              />
            </v-col>

            <v-col cols="6">
              <v-text-field
                label="To"
                type="date"
                outlined
                dense
                :max="getMaxDate"
                :value="getDateCompareUntil"
                :disabled="!getCompareState"
                class="picker-input"
                @input="SET_COMPARE_UNTIL($event)"
                @click="SET_PICKER_PRIMARY_ACTIVE(false)"
              />
            </v-col>
          </v-row>

          <!-- presets for compare period -->
          <v-row v-if="show_compare_date_range" class="pl-2">
            <PresetsCompare :namespace="namespace" />
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="mt-2">
      <v-spacer />
      <v-btn outlined class="px-4 mr-6" @click="SET_DIALOG_OPENED(false)">Cancel</v-btn>
      <v-btn class="primary px-7" @click="emitConfig()">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import PresetsPrimary from "./PresetsPrimary.vue"
import PresetsCompare from "./PresetsCompare.vue"
import { mapState, mapMutations } from "vuex"

export default {
  name: "DatePickerDesktop",

  components: {
    PresetsPrimary,
    PresetsCompare,
  },

  props: {
    namespace: {
      type: String,
      default: "datepicker",
    }
  },

  computed: mapState({
    show_compare_date_range (state) {
      return state[this.namespace]
    },

    // config
    getConfig (state, getters) {
      return getters[this.namespace + '/getConfig']
    },
    getMaxDate (state, getters) {
      return getters[this.namespace + '/getMaxDate']
    },

    // compare checkbox
    getCompareState (state, getters) {
      return getters[this.namespace + '/getCompareState']
    },

    // individual dates
    getDateStart (state, getters) {
      return getters[this.namespace + '/getDateStart']
    },
    getDateUntil (state, getters) {
      return getters[this.namespace + '/getDateUntil']
    },
    getDateCompareStart (state, getters) {
      return getters[this.namespace + '/getDateCompareStart']
    },
    getDateCompareUntil (state, getters) {
      return getters[this.namespace + '/getDateCompareUntil']
    },

    // date picker arrays of date range
    getPickerPrimary (state, getters) {
      return getters[this.namespace + '/getPickerPrimary']
    },
    getPickerCompare (state, getters) {
      return getters[this.namespace + '/getPickerCompare']
    },
    getPickerDate (state, getters) {
      return getters[this.namespace + '/getPickerDate']
    },
    getPickerPrimaryLeft (state, getters) {
      return getters[this.namespace + '/getPickerPrimaryLeft']
    },
    getPickerPrimaryRight (state, getters) {
      return getters[this.namespace + '/getPickerPrimaryRight']
    },

    // vuetify date range calendars setup
    isPickerPrimaryActive (state, getters) {
      return getters[this.namespace + '/isPickerPrimaryActive']
    },
  }),

  methods: {
    ...mapMutations({
      // controls compare checkbox
      FLIP_COMPARE_STATE(commit, payload) {
        return commit(this.namespace + '/FLIP_COMPARE_STATE', payload)
      },

      // controls applied selections
      SET_CONFIG(commit, payload) {
        return commit(this.namespace + '/SET_CONFIG', payload)
      },

      // controls dialog modal
      SET_DIALOG_OPENED(commit, payload) {
        return commit(this.namespace + '/SET_DIALOG_OPENED', payload)
      },

      // control selected date ranges
      SET_DATE_START(commit, payload) {
        return commit(this.namespace + '/SET_DATE_START', payload)
      },
      SET_DATE_UNTIL(commit, payload) {
        return commit(this.namespace + '/SET_DATE_UNTIL', payload)
      },
      SET_COMPARE_START(commit, payload) {
        return commit(this.namespace + '/SET_COMPARE_START', payload)
      },
      SET_COMPARE_UNTIL(commit, payload) {
        return commit(this.namespace + '/SET_COMPARE_UNTIL', payload)
      },

      // control vuetify calendar pickers
      SET_PICKER_PRIMARY_ACTIVE(commit, payload) {
        return commit(this.namespace + '/SET_PICKER_PRIMARY_ACTIVE', payload)
      },
      SET_PICKER_DATE(commit, payload) {
        return commit(this.namespace + '/SET_PICKER_DATE', payload)
      },
      SET_PICKER_PRIMARY(commit, payload) {
        return commit(this.namespace + '/SET_PICKER_PRIMARY', payload)
      },
      SET_PICKER_COMPARE(commit, payload) {
        return commit(this.namespace + '/SET_PICKER_COMPARE', payload)
      },
      SET_PICKER_DATE_LEFT(commit, payload) {
        return commit(this.namespace + '/SET_PICKER_DATE_LEFT', payload)
      },
    }),

    emitConfig() {
      this.SET_CONFIG()
      this.$emit("change", this.getConfig)
    },
  },
}
</script>

<style lang="scss" scoped>
.date-picker-desktop::v-deep {
  max-width: 1040px;
  margin-top: 15vh;

  .pickers {
    max-height: 23em;

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
  .picker-main-left .v-date-picker-header > button:nth-of-type(2) {
    display: none;
  }

  .picker-main-right .v-date-picker-header > button:nth-of-type(1) {
    display: none;
  }
}
</style>
