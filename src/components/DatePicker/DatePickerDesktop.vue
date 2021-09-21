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

    <v-card-actions class="mt-2">
      <v-spacer />
      <v-btn outlined class="px-4 mr-6" @click="SET_DIALOG_OPENED(false)">Cancel</v-btn>
      <v-btn class="primary px-7" @click="emitConfig()">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import PresetsPrimary from "./PresetsPrimary.vue"
import PresetsCompare from "./PresetsCompare.vue"

export default {
  name: "DatePickerDesktop",

  components: {
    PresetsPrimary,
    PresetsCompare,
  },

  computed: {
    ...mapGetters("datepicker", [
      // config
      "getConfig",
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
      "getPickerDate",
      "getPickerPrimaryLeft",
      "getPickerPrimaryRight",

      // vuetify date range calendars setup
      "isPickerPrimaryActive",
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

      // control vuetify calendar pickers
      "SET_PICKER_PRIMARY_ACTIVE",
      "SET_PICKER_DATE",
      "SET_PICKER_PRIMARY",
      "SET_PICKER_COMPARE",
      "SET_PICKER_DATE_LEFT",
    ]),

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
