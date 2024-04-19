import { Experience } from "../models/experience.js";
import { updateOne, getOne, deleteOne } from "./handlerFactory.js";

export const createExperience = async (req, res) => {
	try {
		const newExperience = await Experience.create(req.body);
		res.status(201).json({
			status: 'success',
			data: newExperience,
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
			data: experience,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};

export const getSingleExperience = getOne(Experience)
export const updateExperience = updateOne(Experience)
export const deleteExperience = deleteOne(Experience)