import * as React from 'react';
import {
	FormControl,
	Input,
	InputLabel,
	InputAdornment,
	Button,
	Paper,
	Stack,
} from '@mui/material';
import Header from './Header.js';
import AutoComplete from './AutoComplete.js';

const UpdateRequirements = () => {
	const [isClient, setIsClient] = React.useState(false);
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
							sx={{
								padding: '2em',
								position: 'relative',
								maxWidth: '1200px',
								margin: '0 auto',
							}}
							elevation={2}
						>
							<Stack padding='2em'>
								<FormControl>
									<AutoComplete
										label='Search Requirements'
										options={requirements}
									/>
								</FormControl>
							</Stack>
							<Stack padding='2em'>
								<FormControl>
									<InputLabel>Requirement</InputLabel>
									<Input
										inputComponent='textarea'
										rows={10}
										multiline
										endAdornment={
											<InputAdornment position='end'>
												<Button>Save</Button>
											</InputAdornment>
										}
									/>
								</FormControl>
							</Stack>
						</Paper>
					</main>
				</>
			)}
		</>
	);
};

export default UpdateRequirements;
