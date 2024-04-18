import * as React from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import fetchData from '../getters/fetchData.js';
import UserExists from '../UserExists.js';
import CreateUser from '../CreateUser.js';

const getUser = fetchData('http://localhost:3000/api/user');

const UserLanding = () => {
	const userDetails = getUser.read();
	return (
		<>
			<MainBody>
				<Stack spacing={2}>
					<Typography variant='h2'>Your Info</Typography>
					{userDetails && userDetails.length > 0 ? (
						<UserExists />
					) : (
						<CreateUser />
					)}
				</Stack>
			</MainBody>
		</>
	);
};

export default UserLanding;
