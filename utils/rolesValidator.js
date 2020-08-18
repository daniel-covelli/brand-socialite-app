var moment = require('moment');

export function rolesValidator(
  res,
  brand_id,
  event_id,
  roletype,
  shiftEnd,
  shiftStart,
  instructions,
  uniformInstructions,
  wage
) {
  if (
    !brand_id ||
    !event_id ||
    !roletype ||
    !shiftStart ||
    !shiftEnd ||
    !instructions ||
    !uniformInstructions ||
    !wage
  ) {
    return res.status(422).send('Missing one or more fields');
  } else if (moment(shiftEnd).isBefore(shiftStart, 'HH:mm')) {
    return res
      .status(422)
      .send(`Shift ending time can't come before shift start time.`);
  } else if (wage < 15) {
    return res
      .status(422)
      .send(`Make sure that Hourly Wage is above 15 an hour!`);
  } else if (typeof wage == 'string' ? wage.match(/[a-z]/i) : false) {
    return res.status(422).send(`Make sure that wage input is a number!`);
  } else if (typeof tip === 'string' ? tip.match(/[a-z]/i) : false) {
    return res.status(422).send(`Make sure that tip input is a number!`);
  }
}
