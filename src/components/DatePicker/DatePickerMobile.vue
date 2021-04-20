<template>
  <v-dialog :value="true" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card class="date-picker-mobile elevation-0 d-flex flex-column">
      <v-container>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="From"
                    type="date"
                    outlined
                    dense
                    :max="getMaxDate"
                    :value="getDateStart"
                    class="picker-input"
                    @input="SET_DATE_START($event)"
                    @click="SET_PICKER_PRIMARY_ACTIVE(true)"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
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
              <v-row justify="start" class="pl-2 pr-1">
                <PresetsPrimary />
              </v-row>

              <v-row class="pl-2 pt-0">
                <v-checkbox
                  :input-value="getCompareState"
                  label="Compare to the following"
                  class="compare-label"
                  @change="FLIP_COMPARE_STATE()"
                />
              </v-row>

              <v-row>
                <v-col cols="12">
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
              </v-row>
              <v-row>
                <v-col cols="12">
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
              <v-row justify="start" class="pl-2">
                <PresetsCompare />
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text class="px-4 mr-3" @click="SET_DIALOG_OPENED(false)">Cancel</v-btn>
          <v-btn large class="primary px-7" @click="SET_CONFIG()">Apply</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import PresetsPrimary from "./PresetsPrimary.vue"
import PresetsCompare from "./PresetsCompare.vue"
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "DatePickerMobile",

  components: {
    PresetsPrimary,
    PresetsCompare,
  },

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
      "SET_COMPARE_UNTIL",

      // control vuetify calendar pickers
      "SET_PICKER_PRIMARY_ACTIVE",
    ]),
  },
}
</script>

<style lang="scss" scoped>
.date-picker-mobile::v-deep {
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
