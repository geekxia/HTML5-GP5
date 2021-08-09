import moment from 'moment'

function dateParse(date, format) {
  return moment(date).format(format)
}

function dateValue(date) {
  return moment(date).valueOf()
}

export default {
  dateParse,
  dateValue
}
