<template>
  <div>
    <v-btn
      x-small
      depressed
      :disabled="!getCompareState"
      :text="getComparePreset !== 'PREVIOUS_PERIOD'"
      :color="getComparePreset === 'PREVIOUS_PERIOD' ? 'primary' : null"
      @click="SET_COMPARE_PRESET('PREVIOUS_PERIOD')"
    >
      Previous period
    </v-btn>

    <v-btn
      x-small
      depressed
      :disabled="!getCompareState"
      :text="getComparePreset !== 'PREVIOUS_MONTH'"
      :color="getComparePreset === 'PREVIOUS_MONTH' ? 'primary' : null"
      @click="SET_COMPARE_PRESET('PREVIOUS_MONTH')"
    >
      Previous month
    </v-btn>

    <v-btn
      x-small
      depressed
      :disabled="!getCompareState"
      :text="getComparePreset !== 'PREVIOUS_YEAR'"
      :color="getComparePreset === 'PREVIOUS_YEAR' ? 'primary' : null"
      @click="SET_COMPARE_PRESET('PREVIOUS_YEAR')"
    >
      Previous year
    </v-btn>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  name: "ComparePresets",

  props: {
    namespace: {
      type: String,
      default: "datepicker"
    }
  },

  computed: mapState({
    getCompareState (state, getters) {
      return getters[this.namespace + '/getCompareState']
    },
    getComparePreset (state, getters) {
      return getters[this.namespace + '/getComparePreset']
    },
  }),

  methods: {
    ...mapMutations({
      SET_COMPARE_PRESET(commit, payload) {
        return commit(this.namespace + '/SET_COMPARE_PRESET', payload)
      },
    }),
  },
}
</script>
