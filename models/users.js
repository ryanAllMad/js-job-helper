import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	portfolio: String,
	github: String,
	blog: String,
	linked_in: String
})

export const User = mongoose.model('User', userSchema)
