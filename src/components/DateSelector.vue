<template>
  <v-sheet max-height="44px" class="date-selector d-inline-block elevation-2 rounded">
    <v-row>
      <v-col class="date-selector__icon d-flex align-center py-1 px-6 pr-8">
        <v-icon>{{ icon.mdiCalendarRangeOutline }}</v-icon>
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

<script>
import moment from "moment"
import { mdiCalendarRangeOutline } from "@mdi/js"

const DATE_FORMAT = "MMM D, YYYY"

export default {
  name: "DateSelector",
  props: ["config"],

  data: () => ({
    icon: {
      mdiCalendarRangeOutline,
    },
    compare: true,
    moment: moment,
  }),

  created() {
    this.compare = this.config.compare || false
  },

  computed: {
    getDateStart() {
      return this.config.dateStart
        ? this.moment(this.config.dateStart).format(DATE_FORMAT)
        : this.moment().subtract(7, "days").format(DATE_FORMAT)
    },

    getDateUntil() {
      return this.config.dateUntil
        ? this.moment(this.config.dateUntil).format(DATE_FORMAT)
        : this.moment().subtract(1, "day").format(DATE_FORMAT)
    },

    getCompareStart() {
      return this.config.compareStart
        ? this.moment(this.config.compareStart).format(DATE_FORMAT)
        : this.moment().subtract(15, "days").format(DATE_FORMAT)
    },

    getCompareUntil() {
      return this.config.compareUntil
        ? this.moment(this.config.compareUntil).format(DATE_FORMAT)
        : this.moment().subtract(8, "days").format(DATE_FORMAT)
    },
  }, // computed
} // export
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
