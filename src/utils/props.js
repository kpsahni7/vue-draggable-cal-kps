var cDate = new Date()
export default {
  lang: {
    type: String,
    enum: ['EN', 'FR'],
    default: 'EN',
  },
  days: {
    type: Number,
    default: 365,
  },
  allMonthShow: {
    type: Boolean,
    default: false,
  },
  months: {
    type: Number,
    default: 12,
  },
  prependedMonths: {
    type: Number,
    default: 1,
  },
  pastIsDisabled: {
    type: Boolean,
    default: true,
  },
  years: {
    type: Number,
    default: 0,
  },
  prependedYears: {
    type: Number,
    default: 0,
  },
  selected: {
    type: Object,
    default: () => ({monthNumber: cDate.getMonth(), fullYear: cDate.getFullYear()}),
  },
  disabledWeekDays: {
    type: Object,
    default: () => ({}),
  },
  disabledDates: {
    type: Array,
    validator: v => v.every(el => !isNaN(Date.UTC(...el.split('-')))),
    default: () => [],
  },
  fullMonths: {
    type: Boolean,
    default: false,
  },
  accentColor: {
    type: String,
    default: '#00008b',
  },
  isEventAvailable: {
    type: Boolean,
    default: false,
  },
  attributes: {
    type: Array,
    default: () => [],
  },
}
