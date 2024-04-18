import * as React from 'react';
import { FormGroup } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import BasicInput from './BasicInput.js';

const ExperienceComponent = (props) => {
	const { key, handleCoChange, handleTitleChange } = props;

	return (
		<FormGroup key={key}>
			<BasicInput
				label={`Company Name`}
				handleChange={handleCoChange}
				defaultValue=''
			/>
			<BasicInput
				label='Job Title'
				handleChange={handleTitleChange}
				defaultValue=''
			/>
			<DatePicker label='Start Date' />
			<DatePicker label='End Date' />
		</FormGroup>
	);
};

export default ExperienceComponent;
