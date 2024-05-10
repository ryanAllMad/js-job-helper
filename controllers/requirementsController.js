import { Requirements } from "../models/requirements.js"
import { updateOne } from "./handlerFactory.js";

export const createRequirements = async (req, res) => {
	try {
		const newRequirements = await Requirements.insertMany(req.body);
		res.status(201).json({
			status: 'success',
			data: newRequirements,
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
			data: requirements,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};

export const getRequirementsByTitles = async (req, res) => {
	try {
		const requirements = await Requirements.find();
		res.status(200).json({
			status: 'success',
			data: requirements,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};

export const getSingleRequirementById = async (req, res) => {
	try {
		const requirement = await Requirements.findById(req.params.id);
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
export const deleteResponse = async (req, res) => {
	try {
		await Requirements.updateOne({_id: req.params.id}, {$unset: {res_content: ''}});
		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
}


export const updateRequirements = updateOne(Requirements)