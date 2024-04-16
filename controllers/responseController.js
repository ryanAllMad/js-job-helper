import { Response } from "../models/responses.js"

export const createResponse = async (req, res) => {
	try {
		const newResponse = await Response.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				response: newResponse,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getResponse = async (req, res) => {
	try {
		const response = await Response.find();
		res.status(200).json({
			status: 'success',
			data: {
				response,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};
export const getSingleRequirement = async (req, res) => {
	try {
		const requirement = await Response.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				requirement,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};