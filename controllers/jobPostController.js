import { JobPost } from "../models/job-post.js";
import { updateOne } from "./handlerFactory.js";

export const createJobPost = async (req, res) => {
	try {
		const newJobPost = await JobPost.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				job_post: newJobPost
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `${err}`,
		});
	}
};

export const getJobPost = async (req, res) => {
	try {
		const jobPost = await JobPost.find();
		res.status(200).json({
			status: 'success',
			data: {
				jobPost,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'not found',
			message: `${err}`,
		});
	}
};

export const getSingleJobPostAndRequirements = async (req, res) => {
	try {
		const requirement = await JobPost.findById(req.params.id).populate('requirements');
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

export const updateJobPost = updateOne(JobPost)
