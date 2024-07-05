import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
	company_name: String,
	resume_array: Array,
})

export const Resume = mongoose.model('Resume', resumeSchema)