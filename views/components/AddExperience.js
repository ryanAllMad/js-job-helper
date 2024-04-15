import * as React from 'react';
import {
	Button,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const AddExperience = () => {
	return (
		<>
			<FormControl>
				<InputLabel>Position name</InputLabel>
				<Input
					type='text'
					endAdornment={
						<InputAdornment position='end'>
							<Button>Enter</Button>
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
							<Button>Enter</Button>
						</InputAdornment>
					}
				/>
			</FormControl>
			<DatePicker label='Start Date' />
			<DatePicker label='End Date' />
			<Button
				color='success'
				variant='contained'
			>
				Add more experience?
			</Button>
		</>
	);
};

export default AddExperience;
