import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { Typography, FormHelperText, Stack } from '@mui/material';

const AddQualification = (props) => {
	const { key, onSubmit, onMissing, thisReq, qualificationDesc, addButtonText, removeButtonText, addButtonState, addPessedButtonState, removePressedButtonState, children } = props;
	return (
		<>
			<form
				key={key}
				style={{ display: 'flex', flexFlow: 'row wrap' }}
				onSubmit={onSubmit}
			>
				<Stack>
				<Typography
					variant='h2'
					id='qualifications'
				>
					Qualifications
				</Typography>
				<FormHelperText id='add-response'>
					{qualificationDesc}
				</FormHelperText>
				</Stack>
				<BasicInput
					sx={{
						width: '-webkit-fill-available',
						paddingRight: '15px',
					}}
					label={`Add qualifications for: ${thisReq}`}
					id='add-response'
				>
					{children}
				</BasicInput>
				<ContainedButton
					sx={{ marginTop: '1em' }}
					type='submit'
					disabled={addButtonState}
					ariaPressed={addPessedButtonState}

				>
				{addButtonText}
					
				</ContainedButton>
				<ContainedButton
					sx={{
						marginTop: '1em',
						backgroundColor: '#ba000d',
						'&:hover': { backgroundColor: '#e72d28' },
					}}
					type='button'
					ariaPressed={removePressedButtonState}
					onClick={onMissing}
				>
					{removeButtonText}
				</ContainedButton>
			</form>
		</>
	);
};

export default AddQualification