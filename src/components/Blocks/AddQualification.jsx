import * as React from 'react';
import BasicInput from './BasicInput.jsx';
import ContainedButton from './ContainedButton.jsx';
import { Typography, FormHelperText, Stack } from '@mui/material';
import { theme } from '../../entry-client.jsx'

const AddQualification = (props) => {
	const { onSubmit, onMissing, thisReq, qualificationDesc, addButtonText, removeButtonText, addButtonState, addPessedButtonState, removePressedButtonState, children } = props;
	return (
		<>
			<form
				onSubmit={onSubmit}
				key={3}
			>
				<Stack direction="column">
				<Typography
					variant='h2'
					id='qualifications'
				>
					Qualifications
				</Typography>
				<FormHelperText id='add-response'>
					{qualificationDesc}
				</FormHelperText>
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
				<Stack direction="row">
				<ContainedButton
					sx={{ marginTop: '1em'}}
					type='submit'
					disabled={addButtonState}
					ariaPressed={addPessedButtonState}

				>
				{addButtonText}
					
				</ContainedButton>
				<ContainedButton
					sx={{
						marginTop: '1em',
						color: '#111',
						backgroundColor: theme.palette.secondary.main,
						'&:hover': { backgroundColor: theme.palette.secondary.dark, color: '#fff' },
					}}
					type='button'
					ariaPressed={removePressedButtonState}
					onClick={onMissing}
				>
					{removeButtonText}
				</ContainedButton>
				</Stack>
				</Stack>
			</form>
		</>
	);
};

export default AddQualification