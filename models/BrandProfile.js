import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const BrandProfileSchema = new mongoose.Schema({
  brand_id: {
    type: ObjectId,
    ref: 'BrandLogin',
    required: true
  },
  brandMediaUrl: { type: String, required: true },
  brandAddress1: { type: String, required: true },
  brandAddress2: { type: String, required: true },
  brandCity: { type: String, required: true },
  brandState: { type: String, required: true },
  brandZip: { type: String, required: true },
  brandPhoneNumber: { type: String, required: true },
  brandWebsite: { type: String, required: true },
  brandLinkedIn: { type: String, required: true },
  brandDesription: { type: String, required: true }
});

export default mongoose.models.BrandProfile ||
  mongoose.model('BrandProfile', BrandProfileSchema);
