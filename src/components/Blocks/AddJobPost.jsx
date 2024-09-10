import * as React from 'react';
import BasicInput from './BasicInput.jsx';
import ContainedButton from './ContainedButton.jsx';
import { Stack, Typography } from '@mui/material';

const AddJobPost = (props) => {
	const {
		key,
		onSubmit,
		jobTitleInput,
		companyNameInput,
		jobFunctionInput,
		dateAppliedInput,
		submitButtonState,
		submitButtonText,
	} = props;

	return (
		<>
			<form
				key={key}
				onSubmit={onSubmit}
			>
				<Stack>
					<Typography
						variant='h2'
						id='job-post-form-heading'
					>
						Job You're Applying to
					</Typography>
					<BasicInput
						label='Job Title'
						id='job-title'
					>
						{jobTitleInput}
					</BasicInput>
					<BasicInput
						label='Company name'
						id='company'
					>
						{companyNameInput}
					</BasicInput>
					<BasicInput
						label='Job Function'
						id='job-function'
					>
						{jobFunctionInput}
					</BasicInput>
					<BasicInput
						label='Date Applied'
						id='date-applied'
						labelSx={{ marginTop: '50px' }}
					>
						{dateAppliedInput}
					</BasicInput>
					<ContainedButton
						disabled={submitButtonState}
						type='submit'
					>
						{submitButtonText}
					</ContainedButton>
				</Stack>
			</form>
		</>
	);
};

export default AddJobPost;
