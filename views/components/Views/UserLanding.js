import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import EditUserComponent from '../Blocks/EditUserComponent.js';
import CreateUserComponent from '../Blocks/CreateUserComponent.js';
import fetchData from '../getters/fetchData.js';

const getUser = fetchData(`http://localhost:3000/api/user`);

const UserLanding = () => {
	const userExists = getUser.read();
	
	return (
		<>
			<MainBody>
				<Stack spacing={2}>
					<Typography variant='h2'>Your Info</Typography>
					{userExists && userExists.length > 0 ? (<EditUserComponent />) : (<CreateUserComponent />)}
				</Stack>
			</MainBody>
		</>
	);
};

export default UserLanding;
