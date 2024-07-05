import { Resume } from '../models/stored-resume.js';
import { updateOne, getOne } from './handlerFactory.js';

export const createResume = async (req, res) => {
	try {
		const newResume = await Resume.create(req.body);
		res.status(201).json({
			status: 'success',
			data: newResume,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getResumes = async (req, res) => {
	try {
		const resumes = await Resume.find();
		res.status(200).json({
			status: 'success',
			data: resumes,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
}

export const updateResume = async (req, res) => {
	const document = await Resume.findOneAndUpdate({ company_name: req.params.company_name }, req.body)
	if(!document) {
		return next(new Error('No document found with company name'))
	}
	res.status(200).json({
		status: 'success',
		data: document
	})
}
export const getOneResume = async (req, res) => {
	try {
		const title = req.params.company_name
		const requirement = await Resume.find({ company_name: title });
		res.status(200).json({
			status: 'success',
			data: requirement,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};
