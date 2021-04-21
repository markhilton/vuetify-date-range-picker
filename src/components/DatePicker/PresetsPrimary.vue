<template>
  <div>
    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_7_DAYS'"
      :color="getPrimaryPreset === 'LAST_7_DAYS' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_7_DAYS')"
    >
      Last 7 days
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_30_DAYS'"
      :color="getPrimaryPreset === 'LAST_30_DAYS' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_30_DAYS')"
    >
      Last 30 days
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_90_DAYS'"
      :color="getPrimaryPreset === 'LAST_90_DAYS' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_90_DAYS')"
    >
      Last 90 days
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_WEEK'"
      :color="getPrimaryPreset === 'LAST_WEEK' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_WEEK')"
    >
      Last week
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_MONTH'"
      :color="getPrimaryPreset === 'LAST_MONTH' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_MONTH')"
    >
      Last month
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_3_MONTHS'"
      :color="getPrimaryPreset === 'LAST_3_MONTHS' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_3_MONTHS')"
    >
      Last 3 months
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'LAST_YEAR'"
      :color="getPrimaryPreset === 'LAST_YEAR' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('LAST_YEAR')"
    >
      Last Year
    </v-btn>

    <v-btn
      x-small
      depressed
      :text="getPrimaryPreset !== 'THIS_YEAR'"
      :color="getPrimaryPreset === 'THIS_YEAR' ? 'primary' : null"
      @click="SET_PRIMARY_PRESET('THIS_YEAR')"
    >
      This Year
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "PrimaryPresets",

  computed: {
    ...mapGetters("datepicker", ["getPrimaryPreset"]),
  },

  methods: {
    ...mapMutations("datepicker", ["SET_PRIMARY_PRESET"]),
  },
}
</script>
