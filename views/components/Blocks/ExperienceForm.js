import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { FormGroup, Grid, InputLabel } from '@mui/material';
import { theme } from '../../index.js'

const ExperienceForm = (props) => {
	const {
		companyLabel,
		companyNameComp,
		jobLabel,
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
				label={companyLabel}
			>
				{companyNameComp}
			</BasicInput>
			<BasicInput
				id={idTitle}
				label={jobLabel}
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
						sx={{
							color: '#111',
							backgroundColor: theme.palette.secondary.main,
							'&:hover': { backgroundColor: theme.palette.secondary.dark, color: '#fff' },
						}}
					>
						Delete
					</ContainedButton>
				</Grid>
			</Grid>
		</FormGroup>
	);
};

export default ExperienceForm;
