import * as React from 'react';
import MainBody from '../Layout/MainBody.js';
import AutoComplete from '../Blocks/AutoComplete.js';
import Guage from '../Blocks/Guage.js';
import {
	Box,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	Chip,
	Stack,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import ContainedButton from '../Blocks/ContainedButton.js';

const AddJob = () => {
	const value = 75;
	const requirements = [
		{
			label: 'documenting codebase',
			category: 'soft',
		},
	];

	return (
		<>
			<MainBody sx={{ paddingTop: '200px' }}>
				<Guage value={value} />
				<Stack>
					<FormControl>
						<InputLabel>Job Title</InputLabel>
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
						<InputLabel>Company Name</InputLabel>
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
						<InputLabel>Job Function</InputLabel>
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
						<DatePicker label='Date Applied' />
					</FormControl>
					<FormControl>
						<InputLabel>Requirements</InputLabel>
						<AutoComplete
							label='Enter requirements'
							options={requirements}
						/>
						<Box>
							<Chip
								variant='outlined'
								color='success'
								label='Document Codebase'
							/>
						</Box>
					</FormControl>
				</Stack>
			</MainBody>
		</>
	);
};

export default AddJob;
