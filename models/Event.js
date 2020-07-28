import mongoose from 'mongoose';
// var moment = require('moment');

const { String, Number } = mongoose.Schema.Types;

const eventSchema = new mongoose.Schema(
  {
    // brand_id: { type: ObjectId, ref: 'Brand' },
    eventName: { type: String, required: true },
    hostName: { type: String, required: true },
    // eventInstances: [{ type: ObjectId, ref: 'EventInstance' }],
    eventType: { type: String, required: true },
    estAttendance: { type: Number, required: true },
    venue: { type: String },
    address1: { type: String, required: true },
    address2: { type: String, default: '' },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    parking: { type: String, required: true },
    parkingvenue: { type: String },
    parkingaddress1: { type: String },
    parkingaddress2: { type: String, default: '' },
    parkingcity: { type: String },
    parkingstate: { type: String },
    parkingzip: { type: String },
    parkingInstructions: { type: String, required: true },
    uniforms: { type: String, required: true },
    uniformsInstructions: { type: String },
    eventDescription: { type: String, required: true },
    eventMediaUrl: { type: String, required: true },
    adminMediaUrl: { type: String, required: true }
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

// eventSchema.virtual('dates_formatted').get(function () {
//   return moment(this.dates).format('ll');
// });

// eventSchema.virtual('dates_from_now').get(function () {
//   return moment(this.dates).endOf('day').fromNow();
// });

// eventSchema.virtual('start_time').get(function () {
//   return moment(this.start).format('LT');
// });

// eventSchema.virtual('end_time').get(function () {
//   return moment(this.end).format('LT');
// });

// eventSchema.virtual('dates_from_now').get(function () {
//   return moment(this.dates).endOf('day').fromNow();
// });

// eventSchema.virtual('timespan').get(function () {
//   var timespan_string = this.start_time + ' - ' + this.end_time;
//   return timespan_string;
// });

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
