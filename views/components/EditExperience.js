import * as React from 'react';
import ExperienceForm from './Blocks/ExperienceForm.js';


const EditExperience = (props) => {
	const {expId, companyNameDefault, jobTitleDefault, startDateDefault, endDateDefault, deleteOne } = props

	return (
		<ExperienceForm
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