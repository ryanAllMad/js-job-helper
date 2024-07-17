const { buildSchema } = require('graphql');

module.exports = buildSchema(`
	type Links {
		title: String
		href: String
	}
	type Experience {
		company: String
		title: String
		year_started: String
		year_ended: String
	}
	type Education {
		school: String
		degree: String
		year_started: String
		year_ended: String
	}

	type Requirements {
		req_title: String
		res_content: String
	}
	type JobPost {
		job_title: String
		company_name: String
		job_function: String
		date_applied: String
		requirements: [Requirements]
	}
	type RootQuery {
		getData: JobPost
	}
	schema {
		query: RootQuery
	}
	`);

/* type DeleteMutation {
	deleteExperience(userData: Experience)
	deleteEducation(userData: Education)
	deleteLinks(userData: Links)
}
	
*/
