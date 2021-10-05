<template>
  <v-sheet class="pa-2 date-selector elevation-2 rounded" @click="SET_DIALOG_OPENED(true)">
    <v-row no-gutters>
      <v-col v-if="isCalendarIconShown" cols="1" class="mr-2">
        <v-btn
          small
          icon
          fab
          @click.native.stop="
            FLIP_COMPARE_STATE()
            SET_CONFIG()
          "
        >
          <v-icon>{{ getConfig.compare ? icon.mdiCalendarCheck : icon.mdiCalendarRemove }}</v-icon>
        </v-btn>
      </v-col>

      <v-col class="ml-3">
        <div
          v-if="getConfig.primaryPreset"
          :class="['title', { 'mt-1': !getConfig.compare || !show_compare_date_range }]"
        >
          {{ getPresetLabel(getConfig.primaryPreset) }}
        </div>
        <div v-else :class="['subtitle-1', { 'mt-2': !getConfig.compare || !show_compare_date_range }]">
          {{ getFormattedDate(getConfig.dateStart, getConfig.dateUntil) }}
        </div>

        <div v-if="show_compare_date_range && getConfig.compare" class="text--lighten-2 mt-n2 caption">
          <div v-if="getConfig.comparePreset">vs {{ getPresetLabelSmall(getConfig.comparePreset) }}</div>
          <div v-else>vs {{ getFormattedDate(getConfig.compareStart, getConfig.compareUntil) }}</div>
        </div>
      </v-col>

      <v-col v-if="isPresetsIconShown" cols="1" class="mr-4">
        <v-menu offset-y left>
          <template #activator="{ on, attrs }">
            <v-btn primary small icon fab v-bind="attrs" v-on="on">
              <v-icon>{{ icon.mdiChevronDown }}</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in getPrimaryPresets"
              :key="index"
              @click="
                SET_PRIMARY_PRESET(item)
                SET_CONFIG()
                $emit('change', getConfig)
              "
            >
              <v-list-item-title>{{ getPresetLabel(item) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex"
import { mdiCalendarCheck, mdiCalendarRemove, mdiChevronDown } from "@mdi/js"

export default {
  name: "DateSelector",

  data: () => ({
    icon: {
      mdiChevronDown,
      mdiCalendarCheck,
      mdiCalendarRemove,
    },
  }),

  computed: {
    ...mapState("datepicker", ["show_compare_date_range"]),

    // date format helper
    ...mapGetters("datepicker", [
      "getConfig",
      "isPresetsIconShown",
      "isCalendarIconShown",
      "getFormattedDate",
      "getPrimaryPresets",
      "getPresetLabel",
      "getPresetLabelSmall",
    ]),
  },

  methods: {
    ...mapMutations("datepicker", ["FLIP_COMPARE_STATE", "SET_DIALOG_OPENED", "SET_PRIMARY_PRESET", "SET_CONFIG"]),
  },
}
</script>

<style lang="scss" scoped>
.date-selector {
  cursor: pointer;

  .theme--dark.v-sheet,
  .theme--light.v-sheet {
    background-color: transparent;
  }
}
</style>
