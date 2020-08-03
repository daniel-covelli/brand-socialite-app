import mongoose from 'mongoose';
var moment = require('moment');

const { String, Number, ObjectId, Date } = mongoose.Schema.Types;

const roleSchema = new mongoose.Schema(
  {
    event_id: { type: ObjectId, ref: 'Event', required: true },
    roletype: {
      type: String,
      required: true,
      enum: ['Bartender', 'Mixologist', 'Photographer']
    },
    // talent_id: {ObjectId, ref: 'Talent'},
    shiftStart: { type: Date, required: true },
    shiftEnd: { type: Date, required: true },
    instructions: { type: String, required: true },
    uniformInstructions: { type: String, required: true },
    wage: { type: Number, required: true, min: 15, default: 15 },
    overtime: { type: Number, default: 0 },
    tip: { type: Number, default: 0 }
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
  return moment.utc(this.shiftStart).format('LT');
});

roleSchema.virtual('shift_end_time').get(function () {
  return moment.utc(this.shiftEnd).format('LT');
});

roleSchema.virtual('shift_timespan').get(function () {
  return this.shift_start_time + ' - ' + this.shift_end_time;
});

roleSchema.virtual('hours').get(function () {
  return this.shift_start_time - this.shift_end_time;
});

// this field is called 'hours' and contains the
// amount of hours the role is scheduled to work
// roleSchema.virtual('hours').get(function () {
//   return this.shift_start_time.diff(this.shift_end_time);
// });

export default mongoose.models.Role || mongoose.model('Role', roleSchema);
