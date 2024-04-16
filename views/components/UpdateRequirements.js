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
//import { fetchOne } from '../../utils/utilities.cjs';

const UpdateRequirements = () => {
	const [isClient, setIsClient] = React.useState(false);
	//const requirementsDoc = fetchOne(
	//	'661c15038dd29f00ad6f1738',
	//	'requirements'
	//).then((doc) =>
	//	console.log(doc).catch(err => console.log(err)));
	//const requirements = requirementsDoc.requirements;
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
