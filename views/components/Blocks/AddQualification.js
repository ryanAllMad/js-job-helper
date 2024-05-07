import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { Typography } from '@mui/material';

const AddQualification = (props) => {
	const { key, onSubmit, onMissing, thisReq, qualificationDesc, addButtonText, removeButtonText, children } = props;
	return (
		<>
			<form
				key={key}
				style={{ display: 'flex', flexFlow: 'row wrap' }}
				onSubmit={onSubmit}
			>
				<Typography
					variant='h2'
					id='qualifications'
				>
					Qualifications
				</Typography>
				<Typography id='qualifications-desc'>
					{qualificationDesc}
				</Typography>
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
					onClick={onMissing}
				>
					{removeButtonText}
				</ContainedButton>
			</form>
		</>
	);
};

export default AddQualification