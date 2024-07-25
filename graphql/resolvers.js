import { User } from '../models/users.js'
import { JobPost } from '../models/job-post.js';

// TODO
// add a function for update reqs
// add a function for add a job
// add delete functions

const rootValue = {
	// search resumes
		getJob: async function ({ jobPost }) {
		const jobyPost = JobPost.findOne({
			company_name: jobPost.company_name,
		});
		return jobyPost;
	},
	// add a user
	createUser: async function ({ postUser }) {
		const errors = []
		if(errors.length > 0) {
			const err = new Error(`Invalid inputs: ${errors[0].message}`)
			throw err
		}
		const connected = await User.findOne({ email: postUser.email });
		// this is working
		//console.log(connected)
		if (connected) {
			// mutate user if exists
			const existingUser = await User.findByIdAndUpdate({_id: connected._id}, {
				_id: connected._id,
				email: postUser.email,
				name: postUser.name,
				links: postUser.links,
				experience: postUser.experience,
				education: postUser.education})

			const updatedUser = existingUser.save();
			return { ...updatedUser._doc, _id: updatedUser._id }
		}
		const user = new User({
			_id: postUser._id,
			email: postUser.email,
			name: postUser.name,
			links: postUser.links,
			experience: postUser.experience,
			education: postUser.education,
		});
		const createdUser = user.save();
		return { ...createdUser._doc, _id: createdUser._id };
	},
};
export default rootValue
//deleteExperience: async function({userData}) {
//	await User.updateOne({_id: req.params.userId }, {$pull: {experience: {_id: req.params.id }}});
//},
//deleteEducation: async function({userData}) {

//},
//deleteLinks: async function({userData}) {

//}
