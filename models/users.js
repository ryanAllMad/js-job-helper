import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	links: Array
})

export const User = mongoose.model('User', userSchema)
