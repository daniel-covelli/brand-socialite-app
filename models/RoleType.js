import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const roletypeSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export default mongoose.models.RoleType ||
  mongoose.model('RoleType', roletypeSchema);
