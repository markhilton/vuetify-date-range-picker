import moment from "moment"

export const DATE_FORMAT = "YYYY-MM-DD"
export const MONTH_FORMAT = "YYYY-MM"

export const LAST_7_DAYS = [
  moment().subtract(7, "day").format(DATE_FORMAT),
  moment().subtract(1, "day").format(DATE_FORMAT),
]

export const LAST_30_DAYS = [
  moment().subtract(1, "month").format(DATE_FORMAT),
  moment().subtract(1, "day").format(DATE_FORMAT),
]

export const PREVIOUS_WEEK = [
  moment().subtract(1, "week").day(1).format(DATE_FORMAT),
  moment().subtract(1, "week").day(7).format(DATE_FORMAT),
]

export const PREVIOUS_MONTH = [
  moment().subtract(1, "month").date(1).format(DATE_FORMAT),
  moment().date(0).format(DATE_FORMAT),
]

export const PREVIOUS_PERIOD = ([start, end]) => {
  const duration = moment(end).diff(moment(start), "days")

  return [
    moment(start)
      .subtract(1 + duration, "days")
      .format(DATE_FORMAT),
    moment(end)
      .subtract(1 + duration, "days")
      .format(DATE_FORMAT),
  ]
}

export const PREVIOUS_YEAR = [
  moment().subtract(1, "year").startOf("year").format(DATE_FORMAT),
  moment().subtract(1, "year").endOf("year").format(DATE_FORMAT),
]

export default {
  LAST_7_DAYS,
  LAST_30_DAYS,
  PREVIOUS_WEEK,
  PREVIOUS_MONTH,
  PREVIOUS_PERIOD,
  PREVIOUS_YEAR,
}
