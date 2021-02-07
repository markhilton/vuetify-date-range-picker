import moment from "moment"

export const DATE_FORMAT = "YYYY-MM-DD"
export const MONTH_FORMAT = "YYYY-MM"

export const LAST_WEEK = [
  moment().subtract(1, "weeks").startOf("isoWeek").format(DATE_FORMAT),
  moment().subtract(1, "weeks").endOf("isoWeek").format(DATE_FORMAT),
]

export const LAST_MONTH = [
  moment().subtract(1, "month").startOf("month").format(DATE_FORMAT),
  moment().subtract(1, "month").endOf("month").format(DATE_FORMAT),
]

export const LAST_7_DAYS = [
  moment().subtract(7, "day").format(DATE_FORMAT),
  moment().subtract(1, "day").format(DATE_FORMAT),
]

export const LAST_30_DAYS = [
  moment().subtract(30, "day").format(DATE_FORMAT),
  moment().subtract(1, "day").format(DATE_FORMAT),
]

export const PREVIOUS_PERIOD = ([start, until]) => {
  const duration = moment(until).diff(moment(start), "days") + 1

  return [
    moment(start).subtract(duration, "days").format(DATE_FORMAT),
    moment(until).subtract(duration, "days").format(DATE_FORMAT),
  ]
}

export const PREVIOUS_YEAR = ([start, until]) => {
  return [moment(start).subtract(1, "year").format(DATE_FORMAT), moment(until).subtract(1, "year").format(DATE_FORMAT)]
}

export const today = moment().format(DATE_FORMAT)

export const primaryPresets = {
  LAST_WEEK,
  LAST_MONTH,
  LAST_7_DAYS,
  LAST_30_DAYS,
}

export const comparePresets = {
  PREVIOUS_PERIOD,
  PREVIOUS_YEAR,
}

export default {
  LAST_WEEK,
  LAST_MONTH,
  LAST_7_DAYS,
  LAST_30_DAYS,
  PREVIOUS_PERIOD,
  PREVIOUS_YEAR,
}
