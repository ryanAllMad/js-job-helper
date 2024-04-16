import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
	company: String,
	title: String,
	year_started: String,
	year_ended: String,
})

export const Experience = mongoose.model('Experience', experienceSchema)