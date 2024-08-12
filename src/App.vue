<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <h2 class="font-weight-light ma-10">Vuetify Date Picker Demo</h2>
      </v-row>

      <h4 class="mb-1 text-decoration-underline">Props:</h4>
      <p>
        These props are loaded as initial state for the component to demonstrate that after component integration with
        application, when user opens previously created report, which already stored user selections, is able to set
        initial state of the component.
      </p>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-select v-model="init.primaryPreset" :items="primaryPreset" label="Primary Preset" />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-select v-model="init.comparePreset" :items="comparePreset" label="Compare Preset" />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field v-model="init.dateStart" label="From" type="date" dense outlined />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field v-model="init.dateUntil" label="To" type="date" dense outlined />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <v-text-field
            v-model="init.compareStart"
            label="From"
            type="date"
            outlined
            dense
            :disabled="!init.compare"
            class="picker-input"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <v-text-field
            v-model="init.compareUntil"
            label="To"
            type="date"
            outlined
            dense
            :disabled="!init.compare"
            class="picker-input"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-checkbox v-model="init.compare" label="Compare" class="compare-label mt-0 mb-5" />
        </v-col>
        <v-col>
          <v-checkbox v-model="darkTheme" @click="toggleTheme" label="Dark Theme" class="compare-label mt-0 mb-5" />
        </v-col>
      </v-row>

      <v-row justify="center">
        <DateRangePicker namespace="dakepickertestone" :config="init" @change="setDateRange" />
      </v-row>

      <v-row justify="center" class="mt-10">
        <DateRangePicker :config="init2" @change="setDateRange2" />
      </v-row>

      <v-row>
        <v-col>
          <h4 class="mb-2 mt-5 text-decoration-underline">Emitted:</h4>
          <p>
            These emitted values are to demonstrate that the component ONLY emits result when user interacts with the
            component. The component should emit full result object in 2 cases: A. When calendar icon is clicked to
            change compare selection OR B. when user clicks APPLY button after component opens dialog window.
          </p>
          <div style="background: #333; color: #fff" class="pa-4">
            <pre>{{ emittedDateRange }}</pre>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
/**
 * !!! PLEASE READ !!!
 *
 * this App.vue file is not a part of the component is its only designed to
 * test component integration, including passing props & collect emitted result
 * therefore we should NOT use VueX mappers here to ensure this component
 * props and emitted values can be properly tested.
 *
 * The test has to demonstrate that initial props containing date range object
 * can be passed to the component, and if not the component will assume default
 * initial values AND when new date range selection is applied by user, the
 * emitted object @change contains correct user selections.
 *
 * Therefore Vuex mappers in this file have to be removed and code refactored.
 * However it is allowed to import presets for dropdowns.
 *
 */
import { ref, defineAsyncComponent } from "vue";
import { primaryPresets, comparePresets } from "./components/DatePicker/presets"
import { useTheme } from "vuetify"

const DateRangePicker = defineAsyncComponent(() => import("@/components/DateRangePicker.vue"))

const init = ref({
  // test with and without init values
  // compare: true,
  // dateStart: "2023-01-01",
  // dateUntil: "2023-02-01",
  // compareStart: "2024-01-01",
  // compareUntil: "2024-02-01",
  // primaryPreset: "LAST_30_DAYS",
  // comparePreset: "PREVIOUS_YEAR",
});

const init2 = ref({
  // test with and without init values
  compare: true,
  dateStart: "2024-03-01",
  dateUntil: "2024-05-01",
  compareStart: "2024-06-01",
  compareUntil: "2024-07-01",
  // primaryPreset: "LAST_30_DAYS",
  // comparePreset: "PREVIOUS_YEAR",
});

const theme = useTheme();

const primaryPreset = ref(["", ...Object.keys(primaryPresets)])
const comparePreset = ref(["", ...Object.keys(comparePresets)]);
let emittedDateRange = ref(null); // emitted object from date range picker component
let darkTheme = ref(theme.global.name.value.dark ? true : false);

const setDateRange = (state) => {
  init.value = state // update props form
  emittedDateRange.value = state // update emitted object
}

const setDateRange2 = (state) => {
  init2.value = state // update props form
  emittedDateRange.value = state // update emitted object
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>
