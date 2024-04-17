import * as React from 'react';
import {
	FormControl,
	Input,
	InputLabel,
	InputAdornment,
	Paper,
	Stack,
} from '@mui/material';
import Header from './Header.js';
import AutoComplete from './AutoComplete.js';
import ContainedButton from './ContainedButton.js';

const UpdateRequirements = () => {
	const [isClient, setIsClient] = React.useState(false);

	const requirements = [
		{label: "document codebase", cat: "soft"}
	]

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
									<InputLabel>Response</InputLabel>
									<Input
										inputComponent='textarea'
										rows={10}
										multiline
										endAdornment={
											<InputAdornment position='end'>
												<ContainedButton>Save</ContainedButton>
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
