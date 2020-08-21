import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const BrandProfileSchema = new mongoose.Schema({
  brand_id: {
    type: ObjectId,
    ref: 'BrandLogin',
    required: true
  },
  brandMediaUrl: { type: String, default: '' },
  brandAddress1: { type: String, default: '' },
  brandAddress2: { type: String, default: '' },
  brandCity: { type: String, default: '' },
  brandState: { type: String, default: '' },
  brandZip: { type: String, default: '' },
  brandPhoneNumber: { type: String, default: '' },
  brandWebsite: { type: String, default: '' },
  brandLinkedIn: { type: String, default: '' },
  brandDesription: { type: String, default: '' }
});

export default mongoose.models.BrandProfile ||
  mongoose.model('BrandProfile', BrandProfileSchema);
