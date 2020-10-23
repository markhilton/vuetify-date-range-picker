<template>
  <v-card>
    <v-col>
      <v-row justify="space-between">
        <v-btn text @click="close">
          <v-icon>fas fa-times</v-icon>
        </v-btn>
        <v-btn text @click="apply">Apply</v-btn>
      </v-row>

      <v-row>
        <v-col class="d-flex flex-column align-center">
          <span>Custom</span>
          <v-row align="center">
            <span>{{ selectedRange }}</span>
            <v-btn text @click="editRange">
              <v-icon small>fas fa-pen</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-divider />

      <v-date-picker
        v-model="range"
        mode="range"
        :dark="dark"
        :rows="2"
        is-inline
        is-expanded
        class="mt-3"
      />

      <v-dialog :dark="dark" v-model="showRangeEditor">
        <custom-range-editor
          :dark="dark"
          :start="start"
          :end="end"
          @close="closeRangeEditor"
          @apply="applyRange"
        ></custom-range-editor>
      </v-dialog>
    </v-col>
  </v-card>
</template>

<script>
import moment from "moment"

import { INTERNAL_DATE_FORMAT_1 } from "./presets/constants"
import CustomRangeEditor from "./CustomRangeEditor.vue"

export default {
  components: {
    CustomRangeEditor,
  },
  props: {
    start: {
      type: String,
      default: () => moment().format(INTERNAL_DATE_FORMAT_1),
    },
    end: {
      type: String,
      default: () => moment().format(INTERNAL_DATE_FORMAT_1),
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      range: {
        start: new Date(this.start),
        end: new Date(this.end),
      },
      showRangeEditor: false,
    }
  },
  computed: {
    startDate() {
      return moment(this.range.start)
        .format("MMM D, YYYY")
        .toString()
    },
    endDate() {
      return moment(this.range.end)
        .format("MMM D, YYYY")
        .toString()
    },
    selectedRange() {
      return this.startDate + " - " + this.endDate
    },
  },

  mounted() {
    this.range = {
      start: new Date(this.start),
      end: new Date(this.end),
    }
  },

  methods: {
    close() {
      this.$emit("close")
    },
    apply() {
      this.$emit("apply", {
        start: this.startDate,
        end: this.endDate,
      })
    },
    editRange() {
      this.showRangeEditor = !this.showRangeEditor
    },
    closeRangeEditor() {
      this.showRangeEditor = !this.showRangeEditor
    },
    applyRange(range) {
      this.showRangeEditor = !this.showRangeEditor
      this.range = range
    },
  },
}
</script>
