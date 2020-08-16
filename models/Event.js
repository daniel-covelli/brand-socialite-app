import mongoose from 'mongoose';
var moment = require('moment');

const { String, Number, ObjectId } = mongoose.Schema.Types;

const eventSchema = new mongoose.Schema({
  brand_id: { type: ObjectId, ref: 'BrandLogin', required: true },
  events: [
    {
      eventName: { type: String },
      hostName: { type: String },
      eventType: { type: String },
      estAttendance: { type: Number },
      venue: { type: String },
      address1: { type: String },
      address2: { type: String, default: '' },
      city: { type: String },
      state: { type: String },
      zip: { type: Number },
      parking: { type: String },
      parkingvenue: { type: String },
      parkingaddress1: { type: String },
      parkingaddress2: { type: String, default: '' },
      parkingcity: { type: String },
      parkingstate: { type: String },
      parkingzip: { type: String },
      parkingInstructions: { type: String },
      uniforms: { type: String },
      uniformsInstructions: { type: String },
      eventDescription: { type: String },
      eventMediaUrl: { type: String },
      adminMediaUrl: { type: String },
      date: { type: Date },
      setupStart: { type: Date },
      setupEnd: { type: Date },
      eventStart: { type: Date },
      eventEnd: { type: Date },
      breakdownStart: { type: Date },
      breakdownEnd: { type: Date }
    },
    {
      toObject: {
        virtuals: true
      },
      toJSON: {
        virtuals: true
      }
    }
  ]
});

eventSchema.virtual('setup_timespan').get(function () {
  var setup_timespan_string =
    moment(this.events.setupStart).format('LT') +
    ' - ' +
    moment(this.events.setupEd).format('LT');
  return setup_timespan_string;
});

eventSchema.virtual('event_timespan').get(function () {
  var event_timespan_string =
    moment(this.events.eventStart).format('LT') +
    ' - ' +
    moment(this.events.eventEnd).format('LT');
  return event_timespan_string;
});

eventSchema.virtual('breakdown_timespan').get(function () {
  var event_timespan_string =
    moment(this.events.breakdownStart).format('LT') +
    ' - ' +
    moment(this.events.breakdownEnd).format('LT');
  return event_timespan_string;
});

eventSchema.virtual('date_formatted').get(function () {
  return moment(this.events.date).format('ll');
});

eventSchema.virtual('date_formatted_long').get(function () {
  return (
    moment(this.events.date).format('dddd') +
    ', ' +
    moment(this.events.date).format('LL')
  );
});

eventSchema.virtual('start_time').get(function () {
  return moment(this.events.setupStart).format('LT');
});

eventSchema.virtual('end_time').get(function () {
  return moment(this.events.breakdownEnd).format('LT');
});

eventSchema.virtual('date_from_now').get(function () {
  return moment(this.events.date).endOf('day').fromNow();
});

eventSchema.virtual('timespan').get(function () {
  var timespan_string = this.events.start_time + ' - ' + this.events.end_time;
  return timespan_string;
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
