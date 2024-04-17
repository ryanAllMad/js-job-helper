import * as React from 'react';
import { Typography, Link } from '@mui/material';
import fetchData from './getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');

const UserExists = () => {
	const userDetails = getUser.read();

	return (
		<>
			<Typography variant='h3'>{userDetails[0].name}</Typography>
			<Typography variant='body1'>{userDetails[0].email}</Typography>
			<Typography variant='body1'>
				<Link href={userDetails[0].portfolio}>Portfolio</Link>
			</Typography>
			<Typography variant='body1'>
				<Link href={userDetails[0].github}>Github</Link>
			</Typography>
			<Typography variant='body1'>
				<Link href={userDetails[0].blog}>Blog</Link>
			</Typography>
			<Typography variant='body1'>
				<Link href={userDetails[0].linked_in}>LinkedIn</Link>
			</Typography>
		</>
	);
};

export default UserExists;
