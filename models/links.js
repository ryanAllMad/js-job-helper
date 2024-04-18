import mongoose from 'mongoose';

const linksSchema = new mongoose.Schema({
	title: String,
	href: String
})

export const Links = mongoose.model('Links', linksSchema)