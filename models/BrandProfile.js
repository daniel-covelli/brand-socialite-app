import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const BrandProfileSchema = new mongoose.Schema({
  brand_id: {
    type: ObjectId,
    ref: 'BrandLogin',
    required: true
  },
  brandMediaUrl: { type: String },
  brandAddress1: { type: String },
  brandAddress2: { type: String },
  brandCity: { type: String },
  brandState: { type: String },
  brandZip: { type: String },
  brandPhoneNumber: { type: String },
  brandWebsite: { type: String },
  brandLinkedIn: { type: String },
  brandDesription: { type: String }
});

export default mongoose.models.BrandProfile ||
  mongoose.model('BrandProfile', BrandProfileSchema);
