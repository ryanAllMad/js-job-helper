import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { FormGroup, Grid } from '@mui/material';

const ExperienceForm = (props) => {
	const {
		companyNameComp,
		jobTitleComp,
		startDateComp,
		endDateComp,
		deleteOne,
		key,
	} = props;
	return (
		<FormGroup key={key}>
			<BasicInput
				id='companyName'
				label='Company Name'
			>
				{companyNameComp}
			</BasicInput>
			<BasicInput
				id='jobTitle'
				label='Job Title'
			>
				{jobTitleComp}
			</BasicInput>
			{startDateComp}
			{endDateComp}
			<Grid
				fullWidth
				container
				spacing={2}
				alignItems='center'
				justifyContent='center'
				sx={{ marginTop: '0' }}
			>
				<Grid
					item
					xs={12}
				>
					<ContainedButton
						onClick={deleteOne}
						type='button'
					>
						Delete Experience
					</ContainedButton>
				</Grid>
			</Grid>
		</FormGroup>
	);
};

export default ExperienceForm;
