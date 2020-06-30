# Vuetify Date Range Picker

Date Range Picker component build with Vuetify.

[![Downloads](https://img.shields.io/npm/dm/vuejs-datepicker.svg)](https://www.npmjs.com/package/@nerd305/vuetify-date-range-picker)
<!-- # DateRangepicker -->

<!-- [![Travis Build](https://img.shields.io/travis/charliekassel/vuejs-datepicker.svg)](https://travis-ci.org/charliekassel/vuejs-datepicker)
[![Version](https://img.shields.io/npm/v/vuejs-datepicker.svg)](https://www.npmjs.com/package/vuejs-datepicker)
[![Coveralls github](https://img.shields.io/coveralls/github/charliekassel/vuejs-datepicker.svg)](https://coveralls.io/github/charliekassel/vuejs-datepicker?branch=master)
[![Downloads](https://img.shields.io/npm/dm/vuejs-datepicker.svg)](https://www.npmjs.com/package/@nerd305/vuetify-date-range-picker)

A datepicker Vue component. Compatible with Vue 2.x -->

<!-- - [Demo](#demo) -->
- [Install](#install)
- [Usage](#usage)
- [Date Formatting](#date-formatting)
- [Props](#available-props)
- [Events](#events)

## Install

``` bash
npm install markhilton/vuetify-date-range-picker --save
```


``` javascript
import DateRangePicker from '@nerd305/vuetify-date-range-picker';

export default {
  // ...
  components: {
    DateRangePicker
  }
  // ...
}
```

## Usage

``` html
<v-dialog v-model="value" :dark="true" :fullscreen="isMobile" max-width="800">
	<date-range-picker></date-range-picker>
</v-dialog>	
```

*format* prop if passed should be a Date format String

``` html
<script>
var state = {
  dateFormat: "MMM Do, YYYY"
}
</script>
<date-range-picker :format="state.dateFormat"></date-range-picker>
```

*dark* prop if passed should be a Boolean

``` html
<script>
var state = {
  dark: true
}
</script>
<date-range-picker :dark="state.dark"></date-range-picker>
```

Emits events
``` html
<date-range-picker @hideModal="doSomethingInParentComponentFunction" @saveMobileConfig="datepickerOpenedFunction" @saveDesktopConfig="datepickerClosedFunction">
```

## Available props

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| format                         | String    |    DD-MM-YYYY         | Date format of the DateRangePicker             |
| dark                          | Boolean          |   false          | dark theme for DateRangePicker                      |
| isMobile                            | Boolean          |    false         | responsive design for mobile view                                 |
| showDashboardDateSetting                        | Boolean| false |    display selected date range    |
|     savedPeriodConfig           | Object         |        |               |



## Events

These events are emitted on actions in the datepicker

| Event             | Output     | Description                          |
|-------------------|------------|--------------------------------------|
| hideModal            |            | The picker is toggle                 |
| saveMobileConfig            |            |                  |
| saveDesktopConfig          |  |              |



## Date formatting

#### String formatter

NB. This is not very robust at all - use at your own risk! Needs a better implementation.

| Token | Desc                   | Example     |
|-------|------------------------|-------------|
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

#### Function formatter

Delegates date formatting to provided function.
Function will be called with date and it has to return formated date as a string.
This allow us to use moment, date-fns, globalize or any other library to format date.

``` html
<script>
  methods: {
    customFormatter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
</script>
<date-range-picker :format="customFormatter"></date-range-picker>
```
