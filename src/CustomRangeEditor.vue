<template>
  <v-card>
    <v-col class="pl-6 pr-6">
      <v-row class="pb-10">Custom</v-row>
      <v-row justify="center">
        <span class="mr-3">{{ titleText }}</span>
        <v-icon>far fa-calendar</v-icon>
      </v-row>

      <v-divider />

      <v-row>
        <v-col cols="6" sm="12" md="6">
          <v-text-field
            v-model="startDate"
            :rules="[rules.invalideDate]"
            label="Start date"
            outlined
            type="date"
            maxlength="10"
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="12" md="6">
          <v-text-field
            v-model="endDate"
            :rules="[rules.invalideDate]"
            label="End date"
            outlined
            type="date"
            maxlength="10"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="end">
        <v-btn text @click="cancel">Cancel</v-btn>
        <v-btn text @click="apply">OK</v-btn>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import moment from "moment"

import { INTERNAL_DATE_FORMAT_1, DISPLAY_DATE_FORMAT_3 } from "./presets/constant"

export default {
  props: {
    start: {
      type: String,
      default: () => moment().format(INTERNAL_DATE_FORMAT_1),
    },
    end: {
      type: String,
      default: () => moment().format(INTERNAL_DATE_FORMAT_1),
    },
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      rules: {
        invalideDate: value => {
          const isValid = moment(value).isValid()
          return isValid || "Invalide Date"
        },
      },
    }
  },
  mounted() {
    this.startDate = moment(this.start).format("YYYY-MM-DD")
    this.endDate = moment(this.end).format("YYYY-MM-DD")
  },
  computed: {
    startDateText() {
      return moment(this.startDate).format(DISPLAY_DATE_FORMAT_3)
    },
    endDateText() {
      return moment(this.endDate).format(DISPLAY_DATE_FORMAT_3)
    },
    titleText() {
      return `${this.startDateText} - ${this.endDateText}`
    },
  },
  methods: {
    cancel() {
      this.$emit("close")
    },
    apply() {
      if (!moment(this.startDate).isValid() || !moment(this.endDate).isValid()) return
      this.$emit("apply", {
        start: moment(this.startDate).format(INTERNAL_DATE_FORMAT_1),
        end: moment(this.endDate).format(INTERNAL_DATE_FORMAT_1),
      })
    },
  },
}
</script>
