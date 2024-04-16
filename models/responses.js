import mongoose from 'mongoose';

const resonseSchema = new mongoose.Schema({
	requirement: String,
	response: String
})

export const Response = mongoose.model('Response', resonseSchema)