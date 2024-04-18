import * as React from 'react';
import {
	FormControl,
	Grid,
	InputLabel,
	Typography,
} from '@mui/material';

const UserLinkInputs = (props) => {
	const {
		titleInput,
		hrefInput
	} = props;

	return (
		<>
			<Typography variant='h4'>Add Link</Typography>
			<Grid
				fullWidth
				container
				spacing={2}
				alignItems='center'
				justifyContent='center'
			>
				<Grid
					xs={12}
					md={6}
					item
				>
					<FormControl>
						<InputLabel>Title</InputLabel>
						{titleInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={6}
					item
				>
					<FormControl>
						<InputLabel>Href</InputLabel>
						{hrefInput}
					</FormControl>
				</Grid>
			</Grid>
		</>
	);
};

export default UserLinkInputs;
