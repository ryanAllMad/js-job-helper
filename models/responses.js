import mongoose from 'mongoose';

const resonseSchema = new mongoose.Schema({
	requirement: { type: mongoose.Schema.ObjectId, ref: 'Requirements' },
	response: String
})

export const Response = mongoose.model('Response', resonseSchema)