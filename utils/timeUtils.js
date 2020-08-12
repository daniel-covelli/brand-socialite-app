var moment = require('moment');

export function dateToMilitary(datetime) {
  if (datetime) {
    return moment(datetime).format('HH:mm');
  }
}

export function dateToTime(datetime) {
  if (datetime) {
    return moment(datetime).format('LT');
  }
}
