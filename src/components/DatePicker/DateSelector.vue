<template>
  <v-sheet class="pa-2 date-selector d-inline-block elevation-2 rounded" :icon-color="iconColor">
    <v-row>
      <v-col class="date-selector__icon d-flex align-center py-1 px-6 pr-8">
        <v-icon :color="iconColor">{{ icon.mdiCalendarRangeOutline }}</v-icon>
      </v-col>

      <v-col style="line-height: 10px" class="date-selector__info d-flex align-center pa-1">
        {{ getDateStart }} &mdash; {{ getDateUntil }}

        <small v-if="compare" class="d-flex mt-n2">
          Compare to: {{ getCompareStart }} &mdash; {{ getCompareUntil }}
        </small>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import moment from "moment"
import { mdiCalendarRangeOutline } from "@mdi/js"

const DATE_FORMAT = "MMM D, YYYY"

export default {
  name: "DateSelector",

  props: ["iconColor", "dateStart", "dateUntil", "compareStart", "compareUntil", "compare"],

  data: () => ({
    icon: {
      mdiCalendarRangeOutline,
    },
  }),

  computed: {
    getDateStart() {
      return this.dateStart
        ? moment(this.dateStart).format(DATE_FORMAT)
        : moment().subtract(7, "days").format(DATE_FORMAT)
    },

    getDateUntil() {
      return this.dateUntil
        ? moment(this.dateUntil).format(DATE_FORMAT)
        : moment().subtract(1, "day").format(DATE_FORMAT)
    },

    getCompareStart() {
      return this.compareStart
        ? moment(this.compareStart).format(DATE_FORMAT)
        : moment().subtract(15, "days").format(DATE_FORMAT)
    },

    getCompareUntil() {
      return this.compareUntil
        ? moment(this.compareUntil).format(DATE_FORMAT)
        : moment().subtract(8, "days").format(DATE_FORMAT)
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";

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
