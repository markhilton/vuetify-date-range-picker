import Date from "./date"
import moment from "moment"

// all date(used inside the project) should be stored as the internal format
const INTERNAL_DATE_FORMAT_1 = "YYYY-MM-DD"
const INTERNAL_DATE_FORMAT_2 = "YYYY-MM"

// kind of date formats that we can see on UI
const DISPLAY_DATE_FORMAT_1 = "MMM D"
const DISPLAY_DATE_FORMAT_2 = "dddd, MMM D"
const DISPLAY_DATE_FORMAT_3 = "MMM D, YYYY"

///////////////////////////////////DAY - MOBILE/////////////////////////////////////////
const PERIOD_DAY = {
  TODAY: {
    id: "TODAY",
    label: "Today",
    period: Date.today(),
  },
  YESTERDAY: {
    id: "YESTERDAY",
    label: "Yesterday",
    period: Date.yesterday(),
  },
}

const PERIOD_DAY_COMPARE = {
  PREVIOUS_DAY: {
    id: "PREVIOUS_DAY",
    label: "Previous day",
    period: {
      TODAY: Date.previousDay(PERIOD_DAY.TODAY),
      YESTERDAY: Date.previousDay(PERIOD_DAY.YESTERDAY),
    },
  },
  SAME_DAY_LAST_WEEK: {
    id: "SAME_DAY_LAST_WEEK",
    label: "Same day last week",
    period: {
      TODAY: Date.sameDayLastWeek(PERIOD_DAY.TODAY),
      YESTERDAY: Date.sameDayLastWeek(PERIOD_DAY.YESTERDAY),
    },
  },
  SAME_DATE_LAST_YEAR: {
    id: "SAME_DATE_LAST_YEAR",
    label: "Same date last year",
    period: {
      TODAY: Date.sameDateLastYear(PERIOD_DAY.TODAY),
      YESTERDAY: Date.sameDateLastYear(PERIOD_DAY.YESTERDAY),
    },
  },
  SAME_DAY_OF_WEEK_LAST_YEAR: {
    id: "SAME_DAY_OF_WEEK_LAST_YEAR",
    label: "Same day of week last year",
    period: {
      TODAY: Date.sameDayOfWeekLastYear(PERIOD_DAY.TODAY),
      YESTERDAY: Date.sameDayOfWeekLastYear(PERIOD_DAY.YESTERDAY),
    },
  },
}

///////////////////////////////WEEK - MOBILE///////////////////////////////
const PERIOD_WEEK = {
  LAST7: {
    id: "LAST7",
    label: "Last 7 days",
    period: Date.last7Days(),
  },
  THIS_WEEK: {
    id: "THIS_WEEK",
    label: "This week",
    period: Date.thisWeek(),
  },
  LAST_WEEK: {
    id: "LAST_WEEK",
    label: "Last week",
    period: Date.lastWeek(),
  },
}

const PERIOD_WEEK_COMPARE = {
  PREVIOUS_PERIOD: {
    id: "PREVIOUS_PERIOD",
    label: "Previous period",
    period: {
      LAST7: Date.previousPeriodWeek(PERIOD_WEEK.LAST7),
      THIS_WEEK: Date.previousPeriodWeek(PERIOD_WEEK.THIS_WEEK),
      LAST_WEEK: Date.previousPeriodWeek(PERIOD_WEEK.LAST_WEEK),
    },
  },
  FOUR_WEEKS_AGO: {
    id: "FOUR_WEEKS_AGO",
    label: "Four weeks ago",
    period: {
      LAST7: Date.fourWeeksAgo(PERIOD_WEEK.LAST7),
      THIS_WEEK: Date.fourWeeksAgo(PERIOD_WEEK.THIS_WEEK),
      LAST_WEEK: Date.fourWeeksAgo(PERIOD_WEEK.LAST_WEEK),
    },
  },
}

//////////////////////////////MONTH - MOBILE//////////////////////////////////
const PERIOD_MONTH = {
  LAST30: {
    id: "LAST30",
    label: "Last 30 days",
    period: Date.last30Days(),
  },
  THIS_MONTH: {
    id: "THIS_MONTH",
    label: "This month",
    period: Date.thisMonth(),
  },
  LAST_MONTH: {
    id: "LAST_MONTH",
    label: "Last month",
    period: Date.lastMonth(),
  },
}

const PERIOD_MONTH_COMPARE = {
  PREVIOUS_PERIOD: {
    id: "PREVIOUS_PERIOD",
    label: "Previous period",
    period: {
      LAST30: Date.previousPeriodMonth(PERIOD_MONTH.LAST30),
      THIS_MONTH: Date.previousMonth(PERIOD_MONTH.THIS_MONTH),
      LAST_MONTH: Date.previousMonthx2(PERIOD_MONTH.LAST_MONTH),
    },
  },
  FOUR_WEEKS_AGO: {
    id: "FOUR_WEEKS_AGO",
    label: "Four weeks ago",
    period: {
      LAST30: Date.fourWeeksAgo(PERIOD_MONTH.LAST30),
      THIS_MONTH: Date.fourWeeksAgoMonth(PERIOD_MONTH.THIS_MONTH),
      LAST_MONTH: Date.fourWeeksAgoMonth(PERIOD_MONTH.LAST_MONTH),
    },
  },
  PREVIOUS_YEAR: {
    id: "PREVIOUS_YEAR",
    label: "Previous year",
    period: {
      LAST30: Date.previousYear(PERIOD_MONTH.LAST30),
      THIS_MONTH: Date.sameMonthLastYear(PERIOD_MONTH.THIS_MONTH),
      LAST_MONTH: Date.sameMonthLastYear(PERIOD_MONTH.LAST_MONTH),
    },
  },
}

/////////////////////////////CUSTOM - MOBILE/////////////////////////////////////
const CUSTOM_COMPARE = {
  PREVIOUS_PERIOD: {
    id: "PREVIOUS_PERIOD",
    label: "Previous period",
  },
  PREVIOUS_YEAR: {
    id: "PREVIOUS_YEAR",
    label: "Previous year",
  },
}

// analytics period type
const PERIOD_TYPE = {
  DAY: {
    id: "DAY",
    label: "DAY",
    subType: PERIOD_DAY,
    compare: PERIOD_DAY_COMPARE,
  },
  WEEK: {
    id: "WEEK",
    label: "WEEK",
    subType: PERIOD_WEEK,
    compare: PERIOD_WEEK_COMPARE,
  },
  MONTH: {
    id: "MONTH",
    label: "MONTH",
    subType: PERIOD_MONTH,
    compare: PERIOD_MONTH_COMPARE,
  },
  CUSTOM: {
    id: "CUSTOM",
    label: "CUSTOM",
    compare: CUSTOM_COMPARE,
  },
}

// default selected subType
const DEFAULT_TYPE_SELECTION = {
  DAY: {
    id: "DAY",
    subType: PERIOD_DAY.TODAY.id,
    compare: PERIOD_DAY_COMPARE.PREVIOUS_DAY.id,
  },
  WEEK: {
    id: "WEEK",
    subType: PERIOD_WEEK.LAST7.id,
    compare: PERIOD_WEEK_COMPARE.PREVIOUS_PERIOD.id,
  },
  MONTH: {
    id: "MONTH",
    subType: PERIOD_MONTH.LAST30.id,
    compare: PERIOD_MONTH_COMPARE.PREVIOUS_PERIOD.id,
  },
  CUSTOM: {
    id: "CUSTOM",
    compare: CUSTOM_COMPARE.PREVIOUS_PERIOD.id,
  },
}

const DEFAULT_CUSTOM_DATE = {
  start: moment().format(INTERNAL_DATE_FORMAT_1),
  end: moment().format(INTERNAL_DATE_FORMAT_1),
}

/////////////////////PRESETS OPTIONS - DESKTOP///////////////////////
const COMPARE_PERIODS_DESKTOP = {
  PREVIOUS_PERIOD: {
    id: "PREVIOUS_PERIOD",
    label: "Previous period",
  },
  PREVIOUS_YEAR: {
    id: "PREVIOUS_YEAR",
    label: "Previous year",
  },
}

const PRESETS_DESKTOP = {
  TODAY: {
    id: "TODAY",
    label: "Today",
    compare: {
      PREVIOUS_PERIOD: {
        id: "PREVIOUS_PERIOD",
        label: "Previous period",
        period: Date.previousDayWithStartEnd({ period: Date.todayWithStartEnd() }),
      },
      PREVIOUS_YEAR: {
        id: "PREVIOUS_YEAR",
        label: "Previous year",
        period: Date.previousYear({ period: Date.todayWithStartEnd() }),
      },
    },
    period: Date.todayWithStartEnd(),
  },
  LAST_WEEK: {
    id: "LAST_WEEK",
    label: "Last week",
    compare: {
      PREVIOUS_PERIOD: {
        id: "PREVIOUS_PERIOD",
        label: "Previous period",
        period: Date.previousPeriodWeek({ period: Date.lastWeek() }),
      },
      PREVIOUS_YEAR: {
        id: "PREVIOUS_YEAR",
        label: "Previous year",
        period: Date.previousYear({ period: Date.lastWeek() }),
      },
    },
    period: Date.lastWeek(),
  },
  LAST_MONTH: {
    id: "LAST_MONTH",
    label: "Last month",
    compare: {
      PREVIOUS_PERIOD: {
        id: "PREVIOUS_PERIOD",
        label: "Previous period",
        period: Date.previousPeriodMonth({ period: Date.lastMonthWithStartEnd() }),
      },
      PREVIOUS_YEAR: {
        id: "PREVIOUS_YEAR",
        label: "Previous year",
        period: Date.previousYear({ period: Date.lastMonthWithStartEnd() }),
      },
    },
    period: Date.lastMonthWithStartEnd(),
  },
  LAST_7DAY: {
    id: "LAST_7DAY",
    label: "Last 7 days",
    compare: {
      PREVIOUS_PERIOD: {
        id: "PREVIOUS_PERIOD",
        label: "Previous period",
        period: Date.previousPeriodWeek({ period: Date.last7Days() }),
      },
    },
    period: Date.last7Days(),
  },
  LAST_30DAY: {
    id: "LAST_30DAY",
    label: "Last 30 days",
    compare: {
      PREVIOUS_PERIOD: {
        id: "PREVIOUS_PERIOD",
        label: "Previous period",
        period: Date.previousPeriodMonth({ period: Date.last30Days() }),
      },
    },
    period: Date.last30Days(),
  },
  CUSTOM: {
    id: "CUSTOM",
    label: "Custom",
    compare: {
      PREVIOUS_PERIOD: COMPARE_PERIODS_DESKTOP.PREVIOUS_PERIOD,
      PREVIOUS_YEAR: COMPARE_PERIODS_DESKTOP.PREVIOUS_YEAR,
    },
    period: Date.today(),
  },
}

const PRESETS_DEFAULT_DESKTOP = {
  PRESET: PRESETS_DESKTOP.TODAY.id,
  COMPARE: COMPARE_PERIODS_DESKTOP.PREVIOUS_PERIOD,
}

export {
  PERIOD_TYPE,
  PERIOD_DAY,
  PERIOD_DAY_COMPARE,
  PERIOD_WEEK,
  PERIOD_WEEK_COMPARE,
  PERIOD_MONTH,
  PERIOD_MONTH_COMPARE,
  CUSTOM_COMPARE,
  DEFAULT_TYPE_SELECTION,
  INTERNAL_DATE_FORMAT_1,
  INTERNAL_DATE_FORMAT_2,
  DISPLAY_DATE_FORMAT_1,
  DISPLAY_DATE_FORMAT_2,
  DISPLAY_DATE_FORMAT_3,
  DEFAULT_CUSTOM_DATE,
  PRESETS_DESKTOP,
  COMPARE_PERIODS_DESKTOP,
  PRESETS_DEFAULT_DESKTOP,
}
