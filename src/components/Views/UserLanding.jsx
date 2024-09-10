import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import MainBody from '../Layout/MainBody';
import EditUserComponent from '../Blocks/EditUserComponent';

const UserLanding = () => {
	return (
		<>
			<MainBody>
				<Stack spacing={2}>
					<Typography variant='h1'>Your Info</Typography>
					<EditUserComponent />
				</Stack>
			</MainBody>
		</>
	);
};

export default UserLanding;
