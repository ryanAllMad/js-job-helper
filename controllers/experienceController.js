import { Experience } from "../models/experience.js";

export const createExperience = async (req, res) => {
	try {
		const newExperience = await Experience.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				experience: newExperience,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getExperience = async (req, res) => {
	try {
		const experience = await Experience.find();
		res.status(200).json({
			status: 'success',
			data: {
				experience,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};
