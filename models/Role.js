import mongoose from 'mongoose';
var moment = require('moment');

const { String, Number, ObjectId, Date } = mongoose.Schema.Types;

const roleSchema = new mongoose.Schema(
  {
    event_id: { type: ObjectId, ref: 'Event', required: true },
    brand_id: { type: ObjectId, ref: 'BrandLogin', required: true },
    roletype: {
      type: String,
      required: true,
      enum: [
        'Bartender',
        'Mixologist',
        'Photographer',
        'Brand Ambassador',
        'Event Producer',
        'Butler',
        'Promotional Model',
        'Security Guard',
        'Sommelier',
        'Sushi Chef',
        'Videographer'
      ]
    },
    // talent_id: {ObjectId, ref: 'Talent'},
    shiftStart: { type: Date, required: true },
    shiftEnd: { type: Date, required: true },
    instructions: { type: String, required: true },
    uniformInstructions: { type: String, required: true },
    wage: { type: Number, required: true, min: 15, default: 15 },
    overtime: { type: Number, default: 0 },
    tip: { type: Number, default: 0 },
    status: { type: ObjectId, ref: 'TalentLogin', default: null }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

roleSchema.virtual('shift_start_time').get(function () {
  return moment(this.shiftStart).format('LT');
});

roleSchema.virtual('shift_end_time').get(function () {
  return moment(this.shiftEnd).format('LT');
});

roleSchema.virtual('shift_timespan').get(function () {
  return this.shift_start_time + ' - ' + this.shift_end_time;
});

// returns the amount of hours and minutes a shift is
roleSchema.virtual('hours').get(function () {
  const start = moment(this.shiftStart);
  const end = moment(this.shiftEnd);
  const difference = end.diff(start);
  const durration = moment.duration(difference);
  if (durration.minutes() < 10) {
    return durration.hours() + '.' + '0' + durration.minutes();
  } else {
    return durration.hours() + '.' + durration.minutes();
  }
});

// returns the amount of hours and minutes
roleSchema.virtual('hours_int').get(function () {
  const start = moment(this.shiftStart);
  const end = moment(this.shiftEnd);
  const difference = end.diff(start);
  const durration = moment.duration(difference);
  return durration.hours() + durration.minutes() / 60;
});

export default mongoose.models.Role || mongoose.model('Role', roleSchema);
