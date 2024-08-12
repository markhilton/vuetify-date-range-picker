import moment from 'moment'

export const DATE_FORMAT = 'YYYY-MM-DD'
export const MONTH_FORMAT = 'YYYY-MM'
export const DEFAULT_FORMAT = 'MMM D, YYYY'
export const TODAY = String(moment().format(DATE_FORMAT))

export const LAST_WEEK = [
  String(moment(TODAY).subtract(1, 'weeks').startOf('isoWeek').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'weeks').endOf('isoWeek').format(DATE_FORMAT))
]

export const LAST_MONTH = [
  String(moment(TODAY).subtract(1, 'month').startOf('month').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'month').endOf('month').format(DATE_FORMAT))
]

export const LAST_3_MONTHS = [
  String(moment(TODAY).subtract(3, 'month').startOf('month').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'month').endOf('month').format(DATE_FORMAT))
]

export const LAST_7_DAYS = [
  String(moment(TODAY).subtract(7, 'day').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'day').format(DATE_FORMAT))
]

export const LAST_30_DAYS = [
  String(moment(TODAY).subtract(30, 'day').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'day').format(DATE_FORMAT))
]

export const LAST_90_DAYS = [
  String(moment(TODAY).subtract(90, 'day').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'day').format(DATE_FORMAT))
]

export const LAST_YEAR = [
  String(moment(TODAY).subtract(1, 'year').startOf('Year').format(DATE_FORMAT)),
  String(moment(TODAY).subtract(1, 'year').endOf('Year').format(DATE_FORMAT))
]

export const THIS_YEAR = [
  String(moment(TODAY).startOf('Year').format(DATE_FORMAT)),
  String(moment(TODAY).format(DATE_FORMAT))
]

export const PREVIOUS_PERIOD = ([start, until]) => {
  const duration = moment(until).diff(moment(start), 'days') + 1

  return [
    String(moment(start).subtract(duration, 'days').format(DATE_FORMAT)),
    String(moment(until).subtract(duration, 'days').format(DATE_FORMAT))
  ]
}

export const PREVIOUS_MONTH = ([start, until]) => {
  return [
    String(moment(start).subtract(1, 'month').format(DATE_FORMAT)),
    String(moment(until).subtract(1, 'month').format(DATE_FORMAT))
  ]
}

export const PREVIOUS_YEAR = ([start, until]) => {
  return [
    String(moment(start).subtract(1, 'year').format(DATE_FORMAT)),
    String(moment(until).subtract(1, 'year').format(DATE_FORMAT))
  ]
}

export const getDatesBetween = (fromDate, toDate) => {
  let dates = []
  let currentDate = new Date(fromDate)

  while (currentDate <= new Date(toDate)) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

export const getLastDayOfMonth = (date) => {
  const year = new Date(date).getFullYear()
  const month = new Date(date).getMonth()

  return new Date(year, month + 1, 0)
}

// function getDatesBetween(fromDate, toDate) {
//   let dates = []
//   let currentDate = new Date(fromDate)

//   while (currentDate <= new Date(toDate)) {
//     dates.push(new Date(currentDate))
//     currentDate.setDate(currentDate.getDate() + 1)
//   }

//   return dates
// }

// function getLastDayOfMonth(date) {
//   const year = new Date(date).getFullYear()
//   const month = new Date(date).getMonth()

//   return new Date(year, month + 1, 0)
// }

export const primaryPresets = {
  LAST_WEEK,
  LAST_MONTH,
  LAST_3_MONTHS,
  LAST_7_DAYS,
  LAST_30_DAYS,
  LAST_90_DAYS,
  LAST_YEAR,
  THIS_YEAR
}

export const comparePresets = {
  PREVIOUS_PERIOD,
  PREVIOUS_MONTH,
  PREVIOUS_YEAR
}

export default {
  TODAY,
  DATE_FORMAT,
  MONTH_FORMAT,
  DEFAULT_FORMAT,

  ...primaryPresets,
  ...comparePresets,

  getDatesBetween,
  getLastDayOfMonth
}
