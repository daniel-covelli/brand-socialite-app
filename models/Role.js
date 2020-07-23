import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const RoleSchema = new mongoose.Schema({});

export export default mongoose.models.Role || mongoose.model('Role', RoleSchema);