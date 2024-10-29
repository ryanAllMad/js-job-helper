import * as React from 'react';
import BasicInput from './BasicInput.jsx';
import ContainedButton from './ContainedButton.jsx';
import { FormGroup, Grid2 as Grid, InputLabel } from '@mui/material';
import { theme } from '../../entry-client.jsx'

const ExperienceForm = (props) => {
	const {
		buttonText,
		id,
		companyLabel,
		companyNameComp,
		jobLabel,
		jobTitleComp,
		startDateComp,
		endDateComp,
		deleteOne,
		idComp,
		idTitle,
		idStart,
		idEnd,
	} = props;
	return (
		<FormGroup>
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
				container
				spacing={2}
				alignItems='center'
				justifyContent='flex-start'
				sx={{ marginTop: '0' }}
			>
				<Grid
					xs={12}
				>
					<ContainedButton
						onClick={deleteOne}
						dataTestId={`experience-${id}`}
						type='button'
						sx={{
							color: '#111',
							backgroundColor: theme.palette.secondary.main,
							'&:hover': { backgroundColor: theme.palette.secondary.dark, color: '#fff' },
						}}
					>
						Delete {buttonText}
					</ContainedButton>
				</Grid>
			</Grid>
		</FormGroup>
	);
};

export default ExperienceForm;
