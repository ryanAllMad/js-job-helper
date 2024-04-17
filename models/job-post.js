import mongoose from 'mongoose';

const jobPostSchema = new mongoose.Schema({
	job_title: String,
	company_name: String,
	job_function: String,
	date_applied: String,
	requirements: [{ type: mongoose.Schema.ObjectId, ref: 'Requirements' }],
});

export const JobPost = mongoose.model('JobPost', jobPostSchema);
