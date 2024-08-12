# Vuetify Date Range Picker

Date Range Picker component build with Vuetify, optimized for best mobile and desktop user experience.

- [Install](#installation)
- [Usage](#usage)
- [Props](#available-props)
- [Events](#events)

## Install

```bash
npm install @nerd305/vuetify-date-range-picker
```

```javascript
import DateRangePicker from '@nerd305/vuetify-date-range-picker'

export default {
  // ...
  components: {
    DateRangePicker
  }
  // ...
}
```

## Usage

```html
<date-range-picker :namespace="namespace" :config="configuration" @change="setDateRange" />
```

example configuration using last 30 days preset and compare to previous period:

```html
<script>
  import { presets } from '@nerd305/vuetify-date-range-picker'

  const configuration = {
    dark: false,
    compare: true,
    dateFormat: 'MMM Do, YYYY',
    dateStart: presets.LAST_30_DAYS[0],
    dateUntil: presets.LAST_30_DAYS[1],
    compareStart: presets.PREVIOUS_PERIOD[LAST_30_DAYS][0],
    compareUntil: presets.PREVIOUS_PERIOD[LAST_30_DAYS][1],
    primaryPreset: LAST_30_DAYS,
    comparePreset: PREVIOUS_PERIOD
  }
</script>
```

## Available props

| Prop      | Type   | Default       | Description                                  |
| --------- | ------ | ------------- | -------------------------------------------- |
| config    | Object | configuration | Date format of the DateRangePicker           |
| namespace | String | none          | Namespace of the DateRangePicker Pinia Store |

| Object property | Type    | Default         | Description                                                              |
| --------------- | ------- | --------------- | ------------------------------------------------------------------------ |
| dark            | Boolean | false           | dark theme for DateRangePicker                                           |
| compare         | Boolean | false           | turn on/off comare period                                                |
| dateFormat      | String  | MM-DD-YYYY      | Date format of the DateRangePicker                                       |
| dateStart       | STRING  | DAYS_AGO_7      | 7 days ago                                                               |
| dateUntil       | STRING  | TODAY           | today                                                                    |
| compareStart    | STRING  | DAYS_AGO_15     | 7 prior days from dateStart                                              |
| compareUntil    | STRING  | DAYS_AGO_8      | 7 prior days from dateuntil                                              |
| primaryPreset   | STRING  | LAST_WEEK       | constant name representing last week                                     |
| comparePreset   | STRING  | PREVIOUS_PERIOD | constant name representing previous 7 days from primary preset selection |

## Events

These events are emitted on actions in the datepicker

| Event  | Output  | Description                                                                                                             |
| ------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| change | Object  | Date Range Picker date range selections, selected preset, comparison period, as described in above configuration object |
| opened | Boolean | emits true if the component is engaged and false when not                                                               |

## Date formatting

#### String formatter

Should be parsing and using date string format as in `moment` package.

| Token | Desc                   | Example     |
| ----- | ---------------------- | ----------- |
| d     | day                    | 1           |
| dd    | 0 prefixed day         | 01          |
| D     | abbr day               | Mon         |
| su    | date suffix            | st, nd, rd  |
| M     | month number (1 based) | 1 (for Jan) |
| MM    | 0 prefixed month       | 01          |
| MMM   | abbreviated month name | Jan         |
| MMMM  | month name             | January     |
| yy    | two digit year         | 16          |
| yyyy  | four digit year        | 2016        |

### Presets

#### Static presets

Used for primary date range selection

- LAST_WEEK
- LAST_MONTH
- LAST_7_DAYS
- LAST_30_DAYS

#### Computed presets

Used for compare date range selection based on primary date range selection

- PREVIOUS_PERIOD
- PREVIOUS_YEAR
