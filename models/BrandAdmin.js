import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const BrandAdminSchema = new mongoose.Schema({
  brand_id: {
    type: ObjectId,
    ref: 'BrandLogin',
    required: true
  },
  adminMediaUrl: { type: String, required: true },
  adminTitle: { type: String, required: true },
  adminNumber: { type: String, required: true },
  adminEmail: { type: String, required: true }
});

export default mongoose.models.BrandAdmin ||
  mongoose.model('BrandAdmin', BrandAdminSchema);
