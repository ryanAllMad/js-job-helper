import * as React from 'react';
import { Link, List, ListItem, Typography, Paper, Stack } from '@mui/material';
import Guage from './Guage.js';
import fetchData from '../getters/fetchData.js';


const getUser = fetchData('http://localhost:3000/api/user');

const PositionView = (props) => {
	const { jobTitle, jobFunction, requirements, guageValue } = props;
	const userDetails = getUser.read();
	return (
		<>
			<Paper
				sx={{
					padding: '2em',
					paddingTop: '200px',
					position: 'relative',
					maxWidth: '1200px',
					margin: '0 auto',
				}}
				elevation={2}
			>
				<Guage value={guageValue} />
				<Stack>
					<Typography variant='h1'>{userDetails[0].name}</Typography>
					<Typography variant='h2'>{jobTitle}</Typography>
					<Typography>{jobFunction}</Typography>
					<Typography variant='body1'>
						<Link href={`mailto:${userDetails[0].email}`}>
							{userDetails[0].email}
						</Link>
					</Typography>
					{userDetails[0].links.map((link) => (
						<Typography
							key={userDetails[0].links.indexOf(link)}
							variant='body1'
						>
							<Link
								target='_blank'
								href={link.href}
							>
								{link.title}
							</Link>
						</Typography>
					))}
					<Typography variant='h2'>Experience</Typography>
					<Typography variant='h3'>
						{userDetails[0].experience[0].title}
					</Typography>
					<Typography variant='h4'>
						{userDetails[0].experience[0].company}
					</Typography>
					<Typography>
						From: {userDetails[0].experience[0].year_started} - To:{' '}
						{userDetails[0].experience[0].year_ended}
					</Typography>
					<List>
						{requirements &&
							requirements.length > 0 &&
							requirements.map((req) => (
								<ListItem key={req._id}>
									{req.res_content}
								</ListItem>
							))}
					</List>
				</Stack>
			</Paper>
		</>
	);
};

export default PositionView;
