import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { FormGroup, Grid, InputLabel } from '@mui/material';

const ExperienceForm = (props) => {
	const {
		companyNameComp,
		jobTitleComp,
		startDateComp,
		endDateComp,
		deleteOne,
		key,
		idComp,
		idTitle,
		idStart,
		idEnd,
	} = props;
	return (
		<FormGroup key={key}>
			<BasicInput
				id={idComp}
				label='Company Name'
			>
				{companyNameComp}
			</BasicInput>
			<BasicInput
				id={idTitle}
				label='Job Title'
			>
				{jobTitleComp}
			</BasicInput>
			<InputLabel
				sx={{ marginTop: '50px' }}
				htmlFor={idStart}
			>
				Start Date:
			</InputLabel>
			{startDateComp}
			<InputLabel
				sx={{ marginTop: '50px' }}
				htmlFor={idEnd}
			>
				End Date:
			</InputLabel>
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
