import mongoose from 'mongoose';


const requirementsSchema = new mongoose.Schema({
	req_title: String,
	req_content: String,
	res_content: String
})

export const Requirements = mongoose.model('Requirements', requirementsSchema)