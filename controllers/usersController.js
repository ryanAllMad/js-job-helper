import { User } from '../models/users.js';
import { updateOne } from './handlerFactory.js';

export const createUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getUser = async (req, res) => {
	try {
		const user = await User.find().populate('links').populate('experience');
		res.status(200).json({
			status: 'success',
			data: user,
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
}

export const updateUser = updateOne(User)