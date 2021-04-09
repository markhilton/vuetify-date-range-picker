<template>
  <v-card class="date-picker-desktop elevation-4 mx-auto">
    <v-card-text class="pickers">
      <v-row>
        <v-col cols="7">
          <v-row :class="['picker-main', isPickerPrimaryActive ? 'active' : '']">
            <v-col cols="6">
              <!-- left calendar -->
              <p v-if="!getCompareState">Primary Picker Left</p>
              <v-date-picker
                range
                no-title
                first-day-of-week="1"
                :max="getMaxDate"
                :picker-date="getPickerPrimaryLeft"
                class="picker-main-left pr-1"
                color="blue darken-2 picker-main-selected"
                @click:date="SET_PICKER_MAIN($event)"
              />
            </v-col>
            <v-col cols="6">
              <!-- right calendar -->
              <p v-if="!getCompareState">Primary Picker Right</p>
              <v-date-picker
                range
                no-title
                first-day-of-week="1"
                :max="getMaxDate"
                :picker-date="getPickerPrimaryRight"
                class="picker-main-right"
                color="blue darken-2 picker-main-selected"
                @change="SET_PICKER_MAIN($event)"
              />
            </v-col>
          </v-row>

          <v-row v-if="getCompareState" justify="center" class="picker-compare">
            <v-col cols="6">
              <p> Compare Picker Left</p>
              <v-date-picker
                range
                no-title
                show-current="false"
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerCompare"
                :picker-date="getPickerArrow"
                class="picker-compare-left pr-1"
                color="orange darken-2  picker-compare-selected"
                @change="SET_PICKER_COMPARE($event)"
              />
            </v-col>
            <v-col cols="6">
              <p>Compare Picker Right</p>
              <v-date-picker
                range
                no-title
                show-current="false"
                first-day-of-week="1"
                :max="getMaxDate"
                :value="getPickerCompare"
                :picker-date="getPickerArrow"
                class="picker-compare-right"
                color="orange darken-4 picker-compare-selected"
                @change="SET_PICKER_COMPARE($event)"
                @update:picker-date="SET_PICKER_MAIN_TEST($event)"
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
                @change="SET_DATE_START($event)"
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
                @change="SET_DATE_UNTIL($event)"
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
                @change="SET_COMAPRE_START($event)"
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
                @change="SET_COMPARE_UNTIL($event)"
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
      <v-btn text class="px-4 mr-6" @click="SET_DIALOG_OPENED(false)">Cancel</v-btn>
      <v-btn large class="primary px-7" @click="SET_CONFIG()">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import PresetsPrimary from "./PresetsPrimary"
import PresetsCompare from "./PresetsCompare"

export default {
  name: "DatePickerDesktop",

  components: {
    PresetsPrimary,
    PresetsCompare,
  },

  props: ["config"],

  computed: {
    ...mapGetters([
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
      "getPickerArrow",
      "getPickerPrimaryLeft",
      "getPickerPrimaryRight",
      "getPickerCompareLeft",
      "getPickerCompareRight",
    ]),
  },

  methods: {
    ...mapMutations([
      // controls compare checkbox
      "FLIP_COMPARE_STATE",

      // controls applied selections
      "SET_CONFIG",

      // controls dialog modal
      "SET_DIALOG_OPENED",

      // control selected date ranges
      "SET_DATE_START",
      "SET_DATE_UNTIL",
      "SET_COMAPRE_START",
      "SET_COMPARE_UNTIL",
      "SET_PICKER_MAIN",

      // control vuetify calendar pickers
      "SET_PICKER_PRIMARY_ACTIVE",
    ]),
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
    }

    &:not(.active) {
      .picker-main-selected {
        color: darkgrey;
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

  .picker-main-left .v-date-picker-header > button:nth-of-type(2) {
    display: none;
  }

  .picker-main-right .v-date-picker-header > button:nth-of-type(1) {
    display: none;
  }
}
</style>
