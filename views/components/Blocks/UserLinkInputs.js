import * as React from 'react';
import ContainedButton from './ContainedButton.js';
import { FormControl, Grid, InputLabel } from '@mui/material';

const UserLinkInputs = (props) => {
	const { titleInput, hrefInput, deleteOne, key } = props;

	return (
		<>
			<Grid
				key={key}
				fullWidth
				container
				spacing={2}
				alignItems='center'
				justifyContent='center'
			>
				<Grid
					xs={12}
					md={4}
					item
				>
					<FormControl>
						<InputLabel>Title</InputLabel>
						{titleInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={4}
					item
				>
					<FormControl>
						<InputLabel>Href</InputLabel>
						{hrefInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={4}
					item
				>
					<ContainedButton
						onClick={deleteOne}
						type='button'
					>
						Delete Link
					</ContainedButton>
				</Grid>
			</Grid>
		</>
	);
};

export default UserLinkInputs;
