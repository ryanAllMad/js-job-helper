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
const educationSchema = new mongoose.Schema({
	school: String,
	degree: String,
	year_started: String,
	year_ended: String,
})

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	links: [linksSchema],
	experience: [experienceSchema],
	education: [educationSchema]
})

export const User = mongoose.model('User', userSchema)
