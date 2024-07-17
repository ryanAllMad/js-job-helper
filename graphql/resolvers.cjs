//import User from '../models/users.js'

module.exports = {
	getData() {
		return {
			job_title: 'SE 2',
			company_name: 'Job Co',
			job_function: 'Build the ooniberse',
			date_applied: '03/14/1984',
			requirements: [
				{
					res_content:"Documenting codebase for prosperity",
					req_title:"documenting-codebase"
				}
			]
		}
	},
	//deleteExperience: async function({userData}) {
	//	await User.updateOne({_id: req.params.userId }, {$pull: {experience: {_id: req.params.id }}});
	//},
	//deleteEducation: async function({userData}) {

	//},
	//deleteLinks: async function({userData}) {

	//}
}