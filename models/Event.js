import mongoose from 'mongoose';
var moment = require('moment');

const { String, Number, ObjectId } = mongoose.Schema.Types;

const eventSchema = new mongoose.Schema(
  {
    brand_id: {
      type: ObjectId,
      ref: 'BrandLogin',
      type: String,
      required: true
    },
    eventName: { type: String, required: true },
    hostName: { type: String, required: true },
    eventType: { type: String, required: true },
    estAttendance: { type: Number, required: true },
    venue: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, default: '' },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    parking: { type: String, required: true },
    parkingvenue: { type: String },
    parkingaddress1: { type: String },
    parkingaddress2: { type: String, default: '' },
    parkingcity: { type: String },
    parkingstate: { type: String },
    parkingzip: { type: String },
    parkingInstructions: { type: String },
    uniforms: { type: String, required: true },
    uniformsInstructions: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventMediaUrl: { type: String },
    adminMediaUrl: { type: String },
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

eventSchema.virtual('setup_timespan').get(function () {
  var setup_timespan_string =
    moment(this.setupStart).format('LT') +
    ' - ' +
    moment(this.setupEd).format('LT');
  return setup_timespan_string;
});

eventSchema.virtual('event_timespan').get(function () {
  var event_timespan_string =
    moment(this.eventStart).format('LT') +
    ' - ' +
    moment(this.eventEnd).format('LT');
  return event_timespan_string;
});

eventSchema.virtual('breakdown_timespan').get(function () {
  var event_timespan_string =
    moment(this.breakdownStart).format('LT') +
    ' - ' +
    moment(this.breakdownEnd).format('LT');
  return event_timespan_string;
});

eventSchema.virtual('date_formatted').get(function () {
  return moment(this.date).format('ll');
});

eventSchema.virtual('date_formatted_long').get(function () {
  return (
    moment(this.date).format('dddd') + ', ' + moment(this.date).format('LL')
  );
});

eventSchema.virtual('start_time').get(function () {
  return moment(this.setupStart).format('LT');
});

eventSchema.virtual('end_time').get(function () {
  return moment(this.breakdownEnd).format('LT');
});

eventSchema.virtual('date_from_now').get(function () {
  return moment(this.date).endOf('day').fromNow();
});

eventSchema.virtual('timespan').get(function () {
  var timespan_string = this.start_time + ' - ' + this.end_time;
  return timespan_string;
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
