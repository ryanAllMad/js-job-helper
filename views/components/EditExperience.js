import * as React from 'react';
import ExperienceComponent from './Blocks/ExperienceComponent.js';


const EditExperience = (props) => {
	const {expId, companyNameDefault, jobTitleDefault, startDateDefault, endDateDefault, deleteOne } = props

	return (
		<ExperienceComponent
			key={expId}
			fetchUrl={`http://localhost:3000/api/experience/${expId}`}
			companyNameDefault={companyNameDefault}
			jobTitleDefault={jobTitleDefault}
			startDateDefault={startDateDefault}
			endDateDefault={endDateDefault}
			deleteOne={deleteOne}
		/>
	);
};

export default EditExperience;