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
                <PresetsPrimary :namespace="namespace" />
              </v-row>

              <v-row v-if="show_compare_date_range" class="pl-2 pt-0">
                <v-checkbox
                  :input-value="getCompareState"
                  label="Compare to the following"
                  class="compare-label"
                  @change="FLIP_COMPARE_STATE()"
                />
              </v-row>

              <v-row v-if="show_compare_date_range">
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

              <v-row v-if="show_compare_date_range">
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
              <v-row v-if="show_compare_date_range" justify="start" class="pl-2">
                <PresetsCompare :namespace="namespace" />
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="mt-2">
          <v-spacer />
          <v-btn outlined class="px-4 mr-3" @click="SET_DIALOG_OPENED(false)">Cancel</v-btn>
          <v-btn class="primary px-7" @click="emitConfig()">Apply</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import PresetsPrimary from "./PresetsPrimary.vue"
import PresetsCompare from "./PresetsCompare.vue"
import { mapState, mapMutations } from "vuex"

export default {
  name: "DatePickerMobile",

  components: {
    PresetsPrimary,
    PresetsCompare,
  },

  props: {
    namespace: {
      type: String,
      default: "datepicker",
    },
  },

  computed: mapState({
    show_compare_date_range(state) {
      return state[this.namespace]
    },

    // config
    getConfig(state, getters) {
      return getters[this.namespace + "/getConfig"]
    },
    getMaxDate(state, getters) {
      return getters[this.namespace + "/getMaxDate"]
    },

    // compare checkbox
    getCompareState(state, getters) {
      return getters[this.namespace + "/getCompareState"]
    },

    // individual dates
    getDateStart(state, getters) {
      return getters[this.namespace + "/getDateStart"]
    },
    getDateUntil(state, getters) {
      return getters[this.namespace + "/getDateUntil"]
    },
    getDateCompareStart(state, getters) {
      return getters[this.namespace + "/getDateCompareStart"]
    },
    getDateCompareUntil(state, getters) {
      return getters[this.namespace + "/getDateCompareUntil"]
    },
  }),

  methods: {
    ...mapMutations({
      // controls compare checkbox
      FLIP_COMPARE_STATE(commit, payload) {
        return commit(this.namespace + "/FLIP_COMPARE_STATE", payload)
      },

      // controls applied selections
      SET_CONFIG(commit, payload) {
        return commit(this.namespace + "/SET_CONFIG", payload)
      },

      // controls dialog modal
      SET_DIALOG_OPENED(commit, payload) {
        return commit(this.namespace + "/SET_DIALOG_OPENED", payload)
      },

      // control selected date ranges
      SET_DATE_START(commit, payload) {
        return commit(this.namespace + "/SET_DATE_START", payload)
      },
      SET_DATE_UNTIL(commit, payload) {
        return commit(this.namespace + "/SET_DATE_UNTIL", payload)
      },
      SET_COMPARE_START(commit, payload) {
        return commit(this.namespace + "/SET_COMPARE_START", payload)
      },
      SET_COMPARE_UNTIL(commit, payload) {
        return commit(this.namespace + "/SET_COMPARE_UNTIL", payload)
      },

      // control vuetify calendar pickers
      SET_PICKER_PRIMARY_ACTIVE(commit, payload) {
        return commit(this.namespace + "/SET_PICKER_PRIMARY_ACTIVE", payload)
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
