import { buildSchema } from "graphql";

const schema = buildSchema(`
	
	input LinksInput {
		title: String
		href: String
	}
	input ExperienceInput {
		company: String
		title: String
		year_started: String
		year_ended: String
	}
	input EducationInput {
		school: String
		degree: String
		year_started: String
		year_ended: String
	}

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
	input RequirementsInput {
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
	input JobPostInput {
		job_title: String
		company_name: String
		job_function: String
		date_applied: String
		requirements: [RequirementsInput]
	}
	type User {
		_id: ID
		name: String
		email: String
		links: [Links]
		experience: [Experience]
		education: [Education]
	}
	input UserInput {
		_id: ID
		name: String
		email: String
		links: [LinksInput]
		experience: [ExperienceInput]
		education: [EducationInput]
	}
	type RootQuery {
		getJob(jobPost: JobPostInput): JobPost
	}
	type RootMutation {
		createUser(postUser: UserInput): User
	}
	schema {
		query: RootQuery
		mutation: RootMutation
	}
	`);
export default schema
/* 
type DeleteMutation {
	deleteExperience(userData: Experience)
	deleteEducation(userData: Education)
	deleteLinks(userData: Links)
}
	
experience: { company: \"jojosiwa\", title: \"weewa\", year_started: \"01/24/24\", year_ended: \"01/24/24\" }
*/
