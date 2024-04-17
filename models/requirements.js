import mongoose from 'mongoose';

const requirementsSchema = new mongoose.Schema({
	requirements: Array,
});

export const Requirements = mongoose.model('Requirements', requirementsSchema);
