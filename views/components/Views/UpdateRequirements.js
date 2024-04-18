import * as React from 'react';
import {
	FormControl,
	Input,
	InputLabel,
	InputAdornment,
	Stack,
} from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import AutoComplete from '../Blocks/AutoComplete.js';
import ContainedButton from '../Blocks/ContainedButton.js';

const UpdateRequirements = () => {
	const requirements = [
		{label: "document codebase", cat: "soft"}
	]

	return (
		<>
			<MainBody>
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
						</MainBody>
		</>
	);
};

export default UpdateRequirements;
