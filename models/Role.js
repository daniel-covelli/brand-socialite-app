import mongoose from 'mongoose';

const { String, Number, ObjectId } = mongoose.Schema.Types;

const roleSchema = new mongoose.Schema({
  role: { type: ObjectId, ref: 'RoleType', required: true },
  date: { type: Number, required: true },
  shiftStart: { type: Number, required: true },
  shiftEnd: { type: Number, required: true },
  instructions: { type: String, required: true },
  uniformInstructions: { type: String, required: true },
  wage: { type: Number, required: true, min: 15 },
  tip: { type: Number }
});

export default mongoose.models.Role || mongoose.model('Role', roleSchema);
