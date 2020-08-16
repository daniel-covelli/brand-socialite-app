import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const BrandAdminSchema = new mongoose.Schema({
  brand_id: {
    type: ObjectId,
    ref: 'BrandLogin',
    required: true
  },
  adminMediaUrl: { type: String },
  adminTitle: { type: String },
  adminNumber: { type: String },
  adminEmail: { type: String }
});

export default mongoose.models.BrandAdmin ||
  mongoose.model('BrandAdmin', BrandAdminSchema);
