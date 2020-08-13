import mongoose from 'mongoose';
var moment = require('moment');

const { String, Number } = mongoose.Schema.Types;

const BrandLoginSchema = new mongoose.Schema(
  {
    region: { type: String, required: true },
    companyName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: Number, required: true, select: false },
    role: { type: String, required: true, default: 'brand' }
  },
  { timestamps: true }
);

export default mongoose.models.BrandLogin ||
  mongoose.model('BrandLogin', BrandLoginSchema);
