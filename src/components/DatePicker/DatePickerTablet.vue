<template>
  <v-card class="date-picker-tablet elevation-4 mx-auto">
    <v-card-text class="pickers">
      <v-row>
        <v-col cols="5">
          <v-row justify="center" :class="['picker-main', isPickerPrimaryActive ? 'active' : '']">
            <v-col cols="12">
              <v-date-picker
                range
                no-title
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerPrimary"
                :picker-date="getPickerDate"
                class="picker-compare-left pr-1"
                color="blue darken-2 picker-main-selected"
                @click:date="SET_PICKER_PRIMARY($event)"
                @update:picker-date="SET_PICKER_DATE($event)"
              />
            </v-col>
          </v-row>
          <v-row v-if="getCompareState" justify="center" class="picker-compare">
            <v-col cols="12">
              <v-date-picker
                range
                no-title
                first-day-of-week="1"
                class="picker-main-right"
                color="orange darken-2 picker-compare-selected"
                :max="getMaxDate"
                :value="getPickerCompare"
                :picker-date="getPickerDate"
                @click:date="SET_PICKER_COMPARE($event)"
                @update:picker-date="SET_PICKER_DATE($event)"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="7">
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
            <PresetsPrimary />
          </v-row>

          <v-row class="pl-2 pt-6">
            <v-checkbox
              :input-value="getCompareState"
              label="Compare to the following"
              class="compare-label"
              @change="FLIP_COMPARE_STATE()"
            />
          </v-row>

          <v-row>
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
          <v-row class="pl-2">
            <PresetsCompare />
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text class="px-4 mr-6" @click="SET_DIALOG_OPENED({status: false})">Cancel</v-btn>
      <v-btn large class="primary px-7" @click="SET_CONFIG()">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import PresetsPrimary from "./PresetsPrimary.vue"
import PresetsCompare from "./PresetsCompare.vue"
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "DatePickerTablet",

  components: {
    PresetsPrimary,
    PresetsCompare,
  },

  computed: {
    ...mapGetters("datepicker", [
      // config
      "getMaxDate",

      // compare checkbox
      "getCompareState",

      // individual dates
      "getDateStart",
      "getDateUntil",
      "getDateCompareStart",
      "getDateCompareUntil",

      // date picker arrays of date range
      "getPickerPrimary",
      "getPickerCompare",

      // vuetify date range calendars setup
      "isPickerPrimaryActive",
      "getPickerDate",
    ]),
  },

  methods: {
    ...mapMutations("datepicker", [
      // controls compare checkbox
      "FLIP_COMPARE_STATE",

      // controls applied selections
      "SET_CONFIG",

      // controls dialog modal
      "SET_DIALOG_OPENED",

      // control selected date ranges
      "SET_DATE_START",
      "SET_DATE_UNTIL",
      "SET_COMPARE_START",
      "SET_COMPARE_UNTIL",
      "SET_PICKER_PRIMARY",
      "SET_PICKER_COMPARE",

      // control vuetify calendar pickers
      "SET_PICKER_PRIMARY_ACTIVE",
      "SET_PICKER_DATE",
    ]),
  },
}
</script>

<style lang="scss" scoped>
.date-picker-tablet::v-deep {
  max-width: 785px;
  margin-top: 15vh;

  .pickers {
    max-height: 23em;
  }

  .picker-input {
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
}
</style>
