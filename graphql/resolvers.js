import { User } from '../models/users.js'
import { JobPost } from '../models/job-post.js';

const rootValue = {
	getJob: async function ({ jobPost }) {
		const jobyPost = JobPost.findOne({
			company_name: jobPost.company_name,
		});
		// idk how to get requirements is the issue that 
		// i need to account for the req propagate?
		console.log(jobyPost)
		return jobyPost;
	},
	createUser: async function ({ postUser }) {
		const connected = await User.findOne({email: postUser.email});
		if (connected) {
			const err = new Error('User already exists!')
			throw err
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
