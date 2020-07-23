import mongoose from 'mongoose';
import RoleSchema from 'Role.js';

const { String, Number } = mongoose.Schema.Types;

const EventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  hostName: { type: String, required: true },
  dates: [{ type: Number, required: true }],
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  eventType: { type: String, required: true },
  estAttendance: { type: Number, required: true },
  venue: { type: String },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  parking: { type: String, required: true },
  parkingvenue: { type: String },
  parkingaddress1: { type: String },
  parkingaddress2: { type: String },
  parkingcity: { type: String },
  parkingstate: { type: String },
  parkingzip: { type: String },
  parkingInstructions: { type: String, required: true },
  uniforms: { type: String, required: true },
  uniformsInstructions: { type: String },
  eventDescription: { type: String, required: true },
  eventMediaUrl: { type: String, required: true },
  adminMediaUrl: { type: String, required: true },
  roles: []
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
