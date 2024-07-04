import * as React from 'react';
import ContainedButton from './ContainedButton.js';
import { FormControl, Grid } from '@mui/material';
import { theme } from '../../index.js'

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
						{titleInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={4}
					item
				>
					<FormControl>
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
						sx={{
							color: '#111',
							backgroundColor: theme.palette.secondary.main,
							'&:hover': { backgroundColor: theme.palette.secondary.dark, color: '#fff' },
						}}
					>
						Delete Link
					</ContainedButton>
				</Grid>
			</Grid>
		</>
	);
};

export default UserLinkInputs;
