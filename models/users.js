import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	links: [{ type: mongoose.Schema.ObjectId, ref: 'Links' }],
	experience: [{ type: mongoose.Schema.ObjectId, ref: 'Experience' }]
})

export const User = mongoose.model('User', userSchema)
