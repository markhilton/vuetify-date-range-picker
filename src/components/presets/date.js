import moment from "moment"

const INTERNAL_DATE_FORMAT_1 = "YYYY-MM-DD"
const INTERNAL_DATE_FORMAT_2 = "YYYY-MM"

function today() {
  return { start: moment().format(INTERNAL_DATE_FORMAT_1) }
}

function todayWithStartEnd() {
  return {
    start: moment().format(INTERNAL_DATE_FORMAT_1),
    end: moment().format(INTERNAL_DATE_FORMAT_1),
  }
}

function yesterday() {
  return {
    start: moment()
      .subtract(1, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function yesterdayWithStartEnd() {
  return {
    start: moment()
      .subtract(1, "days")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment()
      .subtract(1, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function last7Days() {
  const start = moment()
    .subtract(7, "days")
    .format(INTERNAL_DATE_FORMAT_1)
  const end = moment()
    .subtract(1, "days")
    .format(INTERNAL_DATE_FORMAT_1)
  return { start, end }
}

function thisWeek() {
  const start = moment()
    .startOf("week")
    .format(INTERNAL_DATE_FORMAT_1)
  const end = moment()
    .endOf("week")
    .format(INTERNAL_DATE_FORMAT_1)
  return { start, end }
}

function lastWeek() {
  const start = moment()
    .subtract(1, "weeks")
    .startOf("week")
    .format(INTERNAL_DATE_FORMAT_1)
  const end = moment()
    .subtract(1, "weeks")
    .endOf("week")
    .format(INTERNAL_DATE_FORMAT_1)
  return { start, end }
}

function last30Days() {
  const start = moment()
    .subtract(30, "days")
    .format(INTERNAL_DATE_FORMAT_1)
  const end = moment()
    .subtract(1, "days")
    .format(INTERNAL_DATE_FORMAT_1)
  return { start, end }
}

function thisMonth() {
  return { start: moment().format(INTERNAL_DATE_FORMAT_2) }
}

function lastMonth() {
  return {
    start: moment()
      .subtract(1, "months")
      .format(INTERNAL_DATE_FORMAT_2),
  }
}

function lastMonthWithStartEnd() {
  return {
    start: moment()
      .subtract(1, "months")
      .startOf("month")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment()
      .subtract(1, "months")
      .endOf("month")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function previousDay(day) {
  const {
    period: { start },
  } = day
  return {
    start: moment(start)
      .subtract(1, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function previousDayWithStartEnd(day) {
  const {
    period: { start, end },
  } = day
  return {
    start: moment(start)
      .subtract(1, "days")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(end)
      .subtract(1, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function sameDayLastWeek(day) {
  const {
    period: { start },
  } = day
  return {
    start: moment(start)
      .subtract(7, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function sameDateLastYear(day) {
  const {
    period: { start },
  } = day
  return {
    start: moment(start)
      .subtract(1, "year")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function sameDayOfWeekLastYear(day) {
  const {
    period: { start },
  } = day
  const weekday = moment(start).isoWeekday()
  const week = moment(start).isoWeek()
  return {
    start: moment()
      .subtract(1, "year")
      .isoWeek(week)
      .isoWeekday(weekday)
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function previousPeriodWeek(period) {
  const {
    period: { start, end },
  } = period
  return {
    start: moment(start)
      .subtract(7, "days")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(end)
      .subtract(7, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function fourWeeksAgo(period) {
  const {
    period: { start, end },
  } = period
  return {
    start: moment(start)
      .subtract(28, "days")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(end)
      .subtract(28, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function fourWeeksAgoMonth(period) {
  const {
    period: { start },
  } = period
  const numberOfDayThisMonth = moment().daysInMonth()
  return {
    start: moment(start)
      .startOf("month")
      .subtract(28, "days")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(start)
      .startOf("month")
      .add(numberOfDayThisMonth - 1, "days")
      .subtract(28, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function previousPeriodMonth(period) {
  const {
    period: { start, end },
  } = period
  return {
    start: moment(start)
      .subtract(30, "days")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(end)
      .subtract(30, "days")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function previousMonth(period) {
  const {
    period: { start },
  } = period
  const numOfDaysThisMonth = moment().daysInMonth()
  const numOfDaysLastMonth = moment()
    .subtract(1, "months")
    .daysInMonth()
  if (numOfDaysLastMonth > numOfDaysThisMonth) {
    return {
      start: moment(start)
        .subtract(1, "month")
        .startOf("month")
        .format(INTERNAL_DATE_FORMAT_1),
      end: moment(start)
        .subtract(1, "month")
        .startOf("month")
        .add(numOfDaysThisMonth - 1, "days")
        .format(INTERNAL_DATE_FORMAT_1),
    }
  } else {
    return {
      start: moment()
        .subtract(1, "months")
        .format(INTERNAL_DATE_FORMAT_2),
    }
  }
}

function previousMonthx2() {
  return {
    start: moment()
      .subtract(2, "months")
      .format(INTERNAL_DATE_FORMAT_2),
  }
}

function previousYear(period) {
  const {
    period: { start, end },
  } = period
  return {
    start: moment(start)
      .subtract(1, "year")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(end)
      .subtract(1, "year")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

function sameMonthLastYear(period) {
  const {
    period: { start },
  } = period
  const numberOfDayThisMonth = moment().daysInMonth()
  const numberOfDaySameMonthLastYear = moment(start)
    .subtract(1, "year")
    .daysInMonth()

  if (numberOfDayThisMonth < numberOfDaySameMonthLastYear) {
    return {
      start: moment(start)
        .subtract(1, "year")
        .startOf("month")
        .format(INTERNAL_DATE_FORMAT_1),
      end: moment(start)
        .subtract(1, "year")
        .startOf("month")
        .add(numberOfDayThisMonth - 1, "days")
        .format(INTERNAL_DATE_FORMAT_1),
    }
  } else {
    return {
      start: moment(start)
        .subtract(1, "year")
        .format(INTERNAL_DATE_FORMAT_2),
    }
  }
}

function previousPeriodCustom(period) {
  const { start, end } = period
  const mtStart = moment(start)
  const mtEnd = moment(end)
  const diffDays = mtEnd.diff(mtStart, "days")
  return {
    end: mtStart.subtract(1, "days").format(INTERNAL_DATE_FORMAT_1),
    start: mtStart.subtract(diffDays, "days").format(INTERNAL_DATE_FORMAT_1),
  }
}

function previousYearCustom(period) {
  const { start, end } = period
  return {
    start: moment(start)
      .subtract(1, "year")
      .format(INTERNAL_DATE_FORMAT_1),
    end: moment(end)
      .subtract(1, "year")
      .format(INTERNAL_DATE_FORMAT_1),
  }
}

export default {
  today,
  todayWithStartEnd,
  yesterday,
  yesterdayWithStartEnd,
  last7Days,
  thisWeek,
  lastWeek,
  last30Days,
  thisMonth,
  lastMonth,
  lastMonthWithStartEnd,
  previousDay,
  previousDayWithStartEnd,
  sameDayLastWeek,
  sameDateLastYear,
  sameDayOfWeekLastYear,
  previousPeriodWeek,
  fourWeeksAgo,
  previousPeriodMonth,
  previousMonth,
  previousMonthx2,
  previousYear,
  sameMonthLastYear,
  fourWeeksAgoMonth,
  previousPeriodCustom,
  previousYearCustom,
}
