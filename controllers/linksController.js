import { Links } from '../models/links.js';
import { updateOne, getOne } from './handlerFactory.js';

export const createLinks = async (req, res) => {
	try {
		const newLinks = await Links.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				links: newLinks,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getLinks = async (req, res) => {
	try {
		const links = await Links.find();
		res.status(200).json({
			status: 'success',
			data: links,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
}

export const getSingleLinks = getOne(Links)

export const updateLink = updateOne(Links)