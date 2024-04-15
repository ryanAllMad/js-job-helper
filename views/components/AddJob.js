import * as React from 'react';
import Header from './Header.js';
import AutoComplete from './AutoComplete.js';
import Guage from './Guage.js'
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	Chip,
	Stack,
	Paper,
} from '@mui/material';
import { DatePicker} from '@mui/x-date-pickers';

const AddJob = () => {
	const [isClient, setIsClient] = React.useState(false);
	const value = 75;
	const requirements = [
		{
			label: 'documenting codebase',
			category: 'soft',
		},
	];

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<>
					<Header />
					<main>
						<Paper
							sx={{ padding: '2em', paddingTop: '200px', position: 'relative', maxWidth: '1200px', margin: '0 auto' }}
							elevation={2}
						>
							<Guage value={value} />
							<Stack>
								<FormControl>
									<InputLabel>Job Title</InputLabel>
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
									<InputLabel>Company Name</InputLabel>
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
									<InputLabel>Job Function</InputLabel>
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
									<DatePicker label="Date Applied" />
								</FormControl>
								<FormControl>
									<InputLabel>Requirements</InputLabel>
									<AutoComplete label="Enter requirements" options={requirements} />
									<Box>
										<Chip
											variant='outlined'
											color='success'
											label='Document Codebase'
										/>
									</Box>
								</FormControl>
							</Stack>
						</Paper>
					</main>
				</>
			)}
		</>
	);
};

export default AddJob;
