import * as React from 'react';
import {
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import ContainedButton from './ContainedButton.js';

const AddExperience = () => {
	return (
		<>
			<FormControl>
				<InputLabel>Position name</InputLabel>
				<Input
					type='text'
					endAdornment={
						<InputAdornment position='end'>
							<ContainedButton>Enter</ContainedButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Company name</InputLabel>
				<Input
					type='text'
					endAdornment={
						<InputAdornment position='end'>
							<ContainedButton>Enter</ContainedButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<DatePicker label='Start Date' />
			<DatePicker label='End Date' />
			<ContainedButton>Add more experience?</ContainedButton>
		</>
	);
};

export default AddExperience;
