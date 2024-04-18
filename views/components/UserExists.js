import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import ContainedButton from './ContainedButton.js';
import fetchData from './getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');

const UserExists = () => {
	const userDetails = getUser.read();


	return (
		<>
			<Typography variant='h3'>{userDetails[0].name}</Typography>
			<Typography variant='body1'><Link href={`mailto:${userDetails[0].email}`}>{userDetails[0].email}</Link></Typography>
			{userDetails[0].links.map((link) => (
				<Typography key={userDetails[0].links.indexOf(link)} variant='body1'>
				<Link target="_blank" href={link.href}>{link.title}</Link>
			</Typography>
			))}
			<RouterLink to={'/edit-user'}>Edit</RouterLink>
		</>
	);
};

export default UserExists;
