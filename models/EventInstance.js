import mongoose from 'mongoose';
var moment = require('moment');

const { Date, ObjectId } = mongoose.Schema.Types;

const EventInstanceSchema = new mongoose.Schema(
  {
    event_id: { type: ObjectId, ref: 'Event' },
    date: { type: Date, required: true },
    setupStart: { type: Date, required: true },
    setupEnd: { type: Date, required: true },
    eventStart: { type: Date, required: true },
    eventEnd: { type: Date, required: true },
    breakdownStart: { type: Date, required: true },
    breakdownEnd: { type: Date, required: true }
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

EventInstanceSchema.virtual('date_formatted').get(function () {
  return moment(this.date).format('ll');
});

EventInstanceSchema.virtual('date_from_now').get(function () {
  return moment(this.date).endOf('day').fromNow();
});

EventInstanceSchema.virtual('start_time').get(function () {
  return moment(this.setupStart).format('LT');
});

EventInstanceSchema.virtual('end_time').get(function () {
  return moment(this.breakdownEnd).format('LT');
});

EventInstanceSchema.virtual('timespan').get(function () {
  var timespan_string = this.start_time + ' - ' + this.end_time;
  return timespan_string;
});

export default mongoose.models.EventInstance ||
  mongoose.model('EventInstance', EventInstanceSchema);
