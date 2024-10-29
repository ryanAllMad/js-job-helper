import * as React from 'react';
import ContainedButton from './ContainedButton.jsx';
import { FormControl, Grid2 as Grid } from '@mui/material';
import { theme } from '../../entry-client.jsx'

const UserLinkInputs = (props) => {
	const { titleInput, hrefInput, deleteOne, dataTestId } = props;

	return (
		<>
			<Grid
				container
				spacing={2}
				alignItems='center'
				justifyContent='space-between'
			>
				<Grid
					xs={12}
					md={4}
				>
					<FormControl>
						{titleInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={4}
				>
					<FormControl>
						{hrefInput}
					</FormControl>
				</Grid>
				<Grid
					xs={12}
					md={4}
				>
					<ContainedButton
						onClick={deleteOne}
						dataTestId={`links-${dataTestId}`}
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
