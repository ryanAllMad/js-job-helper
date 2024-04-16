import { Requirements } from "../models/requirements.js";

export const createRequirements = async (req, res) => {
	try {
		const newRequirements = await Requirements.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				requirements: newRequirements
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getRequirements = async (req, res) => {
	try {
		const requirements = await Requirements.find();
		res.status(200).json({
			status: 'success',
			data: {
				requirements,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};


