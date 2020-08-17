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

export function militaryToDateTime(time) {
  if (time) {
    const datetime = moment(time, 'HH:mm').toDate();
    console.log('datetime', datetime);
    return datetime;
  }
}
