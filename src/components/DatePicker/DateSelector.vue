<template>
  <v-sheet class="pa-2 date-selector d-inline-block elevation-2 rounded" @click="SET_DIALOG_OPENED(true)">
    <v-row>
      <v-col class="date-selector__icon d-flex align-center">
        <v-icon class="py-1" @click.native.stop="FLIP_COMPARE_STATE()">{{getCompareState ? icon.mdiCalendarCheck : icon.mdiCalendarRemove}}</v-icon>
      </v-col>

      <v-col style="line-height: 10px" class="date-selector__info d-flex align-center pa-1">
        {{ getDefaultDateFormat(getDateStart) }} &mdash; {{ getDefaultDateFormat(getDateUntil) }}
        <small v-if="getCompareState" class="d-flex mt-n2">
          Compare to:
          {{ getDefaultDateFormat(getDateCompareStart) }} &mdash; {{ getDefaultDateFormat(getDateCompareUntil) }}
        </small>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import { mdiCalendarCheck, mdiCalendarRemove } from "@mdi/js"

export default {
  name: "DateSelector",

  data: () => ({
    icon: {
      mdiCalendarCheck,
      mdiCalendarRemove,
    },
  }),

  computed: {
    ...mapGetters([
      // date format helper
      "getDefaultDateFormat",

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
    ...mapMutations(["FLIP_COMPARE_STATE", "SET_DIALOG_OPENED"]),
  },
}
</script>

<style lang="scss" scoped>

.date-selector::v-deep {
  min-width: 250px;
  max-width: 290px;
  cursor: pointer;

  .date-selector__icon {
    max-width: 3rem;
    min-height: 3rem;
  }

  .date-selector__info {
    flex-wrap: wrap;
    min-height: 3rem;
    font-size: 0.9em;
  }
}
</style>
