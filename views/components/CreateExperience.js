import * as React from 'react';
import ExperienceComponent from './Blocks/ExperienceComponent.js';

const CreateExperience = (props) => {
	const {key, deleteOne} = props
	return (
		<ExperienceComponent
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
