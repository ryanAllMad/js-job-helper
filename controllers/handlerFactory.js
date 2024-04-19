

export const updateOne = Model => async(req, res, next) => {
	const document = await Model.findByIdAndUpdate(req.params.id, req.body)
	if(!document) {
		return next(new Error('No document found with id'))
	}
	res.status(200).json({
		status: 'success',
		data: document
	})
}

export const getOne = Model => async (req, res) => {
	try {
		const document = await Model.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				document,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};

export const deleteOne = Model => async (req, res) => {
	try {
		await Model.findByIdAndDelete(req.params.id);
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
};