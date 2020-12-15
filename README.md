# Vuetify Date Range Picker

Date Range Picker component build with Vuetify, optimized for best mobile and desktop user experience.

- [Install](#installation)
- [Usage](#usage)
- [Props](#available-props)
- [Events](#events)

## Install

```bash
npm install markhilton/vuetify-date-range-picker --save
```

```javascript
import DateRangePicker from "@nerd305/vuetify-date-range-picker"

export default {
  // ...
  components: {
    DateRangePicker,
  },
  // ...
}
```

## Usage

```html
<date-range-picker :config="configuration" @update="setDateRange" />
```

configuration:

```html
<script>
  var configuration = {
    dark: false,
    dateFormat: "MMM Do, YYYY",
    dateStart: DAYS_AGO_7,
    dateUntil: TODAY,
    datePreset: LAST_7_DAYS,
    compare: true,
    compareStart: DAYS_AGO_15,
    compareUntil: DAYS_AGO_8,
    comparePreset: PREVIOUS_7_DAYS,
  }
</script>
```

## Available props

| Prop   | Type   | Default       | Description                        |
| ------ | ------ | ------------- | ---------------------------------- |
| config | Object | configuration | Date format of the DateRangePicker |

| Object property | Type    | Default         | Description                            |
| --------------- | ------- | --------------- | -------------------------------------- |
| dark            | Boolean | false           | dark theme for DateRangePicker         |
| dateFormat      | String  | MM-DD-YYYY      | Date format of the DateRangePicker     |
| dateStart       | STRING  | DAYS_AGO_7      | 7 days ago                             |
| dateUntil       | STRING  | TODAY           | today                                  |
| datePreset      | STRING  | LAST_7_DAYS     | constant name representing 7 last days |
| compare         | Boolean | false           | turn on/off comare period              |
| compareStart    | STRING  | DAYS_AGO_15     | 7 prior days from dateStart            |
| compareUntil    | STRING  | DAYS_AGO_8      | 7 prior days from dateuntil            |
| comparePreset   | STRING  | PREVIOUS_7_DAYS | previous period or year                |

## Events

These events are emitted on actions in the datepicker

| Event  | Output  | Description                                                                                                             |
| ------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| update | Object  | Date Range Picker date range selections, selected preset, comparison period, as described in above configuration object |
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
