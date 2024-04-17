

export const updateOne = Model => async(req, res, next) => {
	const document = await Model.findByIdAndUpdate(req.params.id, req.body, {

	})
	if(!document) {
		return next(new Error('No document found with id'))
	}
	res.status(200).json({
		status: 'success',
		data: document
	})
}