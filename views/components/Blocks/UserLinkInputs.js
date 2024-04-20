import * as React from 'react';
import ContainedButton from './ContainedButton.js';
import {
	FormControl,
	Grid,
	InputLabel,
} from '@mui/material';

const UserLinkInputs = (props) => {
	const {
		titleInput,
		hrefInput,
		deleteOne,
		saveText,
		saveDisabled
	} = props;

	return (
		<>
			<Grid
				fullWidth
				container
				spacing={2}
				alignItems='center'
				justifyContent='center'
			>
				<Grid
					xs={12}
					md={3}
					item
				>
					<FormControl>
						<InputLabel>Title</InputLabel>
						{titleInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={3}
					item
				>
					<FormControl>
						<InputLabel>Href</InputLabel>
						{hrefInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={3}
					item
				>
					<ContainedButton disabled={saveDisabled} type="submit">{saveText}</ContainedButton>
				</Grid>
				<Grid
					xs={12}
					md={3}
					item
				>
					<ContainedButton onClick={deleteOne} type="button">Delete Link</ContainedButton>
				</Grid>
			</Grid>
		</>
	);
};

export default UserLinkInputs;
