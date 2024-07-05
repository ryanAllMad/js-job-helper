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

export const updateResume = updateOne(Resume)
export const getOneResume = getOne(Resume)
