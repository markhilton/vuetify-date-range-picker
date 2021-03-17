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
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "ComparePresets",

  computed: {
    ...mapGetters(["getCompareState", "getComparePreset"]),
  },

  methods: {
    ...mapMutations(["SET_COMPARE_PRESET"]),
  },
}
</script>
