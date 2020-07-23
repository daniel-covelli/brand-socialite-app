import mongoose from 'mongoose';

const { String, Number, ObjectId } = mongoose.Schema.Types;

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  hostName: { type: String, required: true },
  dates: [{ type: Number, required: true }],
  start: { type: Number, required: true },
  end: { type: Number, required: true },
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
  adminMediaUrl: { type: String, required: true },
  roles: [{ type: ObjectId, ref: 'Role', required: true }]
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
