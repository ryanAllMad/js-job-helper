import mongoose from 'mongoose';

const linksSchema = new mongoose.Schema({
	title: String,
	href: String
})

const experienceSchema = new mongoose.Schema({
	company: String,
	title: String,
	year_started: String,
	year_ended: String,
})

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	links: [linksSchema],
	experience: [experienceSchema]
})

export const User = mongoose.model('User', userSchema)
