import * as React from 'react';
import ExperienceForm from './Blocks/ExperienceForm.js';

const CreateExperience = (props) => {
	const { key, deleteOne } = props
	return (
		<ExperienceForm
			key={key}
			fetchUrl='http://localhost:3000/api/experience'
			companyNameDefault=''
			jobTitleDefault=''
			startDateDefault=''
			endDateDefault=''
			deleteOne={deleteOne}
		/>
	);
};

export default CreateExperience;
