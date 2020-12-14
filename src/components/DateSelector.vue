<template>
  <v-sheet max-height="44px" class="date-selector d-inline-block elevation-2 rounded" :icon-color="iconColor">
    <v-row>
      <v-col class="date-selector__icon d-flex align-center py-1 px-6 pr-8">
        <v-icon :color="iconColor">{{ icon.mdiCalendarRangeOutline }}</v-icon>
      </v-col>
      <v-col style="line-height: 10px" class="date-selector__info d-flex align-center pa-1">
        {{ getDateStart }} &mdash; {{ getDateUntil }}
        <small class="d-flex mt-n2" v-if="compare">
          Compare to: {{ getCompareStart }} &mdash; {{ getCompareUntil }}
        </small>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";

.date-selector::v-deep {
  min-width: 250px;
  max-width: 290px;
  cursor: pointer;

  .date-selector__icon {
    max-width: 3rem;
    min-height: 3rem;
  } // .date-selector__icon

  .date-selector__info {
    flex-wrap: wrap;
    min-height: 3rem;
    font-size: 0.9em;
  } // .date-selector__info
} // .date-selector
</style>

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
    moment: moment,
  }),

  computed: {
    // getDate* computed values get the dates formatted by DATE_FORMAT
    getDateStart() {
      let result

      if (this.dateStart) {
        result = this.moment(this.dateStart).format(DATE_FORMAT)
      } else {
        result = this.moment()
          .subtract(7, "days")
          .format(DATE_FORMAT)
      }

      return result
    },

    getDateUntil() {
      let result

      if (this.dateUntil) {
        result = this.moment(this.dateUntil).format(DATE_FORMAT)
      } else {
        result = this.moment()
          .subtract(1, "day")
          .format(DATE_FORMAT)
      }

      return result
    },

    getCompareStart() {
      let result

      if (this.compareStart) {
        result = this.moment(this.compareStart).format(DATE_FORMAT)
      } else {
        result = this.moment()
          .subtract(15, "days")
          .format(DATE_FORMAT)
      }

      return result
    },

    getCompareUntil() {
      let result

      if (this.compareUntil) {
        result = this.moment(this.compareUntil).format(DATE_FORMAT)
      } else {
        result = this.moment()
          .subtract(8, "days")
          .format(DATE_FORMAT)
      }

      return result
    },
  }, // computed
} // export
</script>
