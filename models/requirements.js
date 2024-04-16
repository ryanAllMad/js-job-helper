import mongoose from 'mongoose';

const requirementsSchema = new mongoose.Schema({
	job_title: String,
	company_name: String,
	job_function: String,
	date_applied: String,
	requirements: [{ type: mongoose.Schema.ObjectId, ref: 'Response' }],
});

export const Requirements = mongoose.model('Requirements', requirementsSchema);
