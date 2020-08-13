import mongoose from 'mongoose';
var moment = require('moment');

const { String, Number } = mongoose.Schema.Types;

const TalentLoginSchema = new mongoose.Schema(
  {
    region: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: Number, required: true },
    role: { type: String, required: true, default: 'talent' }
  },
  { timestamps: true }
);

export default mongoose.models.TalentLogin ||
  mongoose.model('TalentLogin', TalentLoginSchema);
