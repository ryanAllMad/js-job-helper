import * as React from 'react';
import { Link, Typography, Paper, Stack } from '@mui/material';
import Guage from './Guage.js';
import parseDate from '../helpers/parseDate.js';

const PositionView = React.forwardRef((props, ref) => {
	const { userDetails, jobTitle, jobFunction, guageValue, children } = props;
	const parseLink = (link) => {
		if(link.includes('http')) {
			return link
		} else {
			return `https://${link}`
		}
	}
	return (
		<>
			<Paper
				sx={{
					padding: '2em',
					paddingTop: '200px',
					position: 'relative',
					maxWidth: '1200px',
					margin: '0 auto',
					backgroundColor: '#f3ebeb',
				}}
				elevation={2}
			>
				<Guage value={guageValue} />
				<Stack
					ref={ref}
					id='resume'
				>
					{userDetails && userDetails.length > 0 && (
						<>
							<Typography variant='h1'>
								{userDetails[0].name}
							</Typography>
							<Typography variant='h2'>{jobTitle}</Typography>
							<Typography>{jobFunction}</Typography>
							<Typography variant='body1'>
								<strong>Email:{' '}</strong>
								<Link href={`mailto:${userDetails[0].email}`}>
									{userDetails[0].email}
								</Link>
							</Typography>
						</>
					)}
					{userDetails && userDetails.length > 0 && userDetails[0].links.map((link) => (
						<Typography
							key={userDetails[0].links.indexOf(link)}
							variant='body1'
						>
							<strong>{link.title}:{' '}</strong>
							<Link
								target='_blank'
								href={parseLink(link.href)}
							>
								{link.href}
							</Link>
						</Typography>
					))}
					<>{children}</>
					{userDetails && userDetails.length > 0 && userDetails[0].education && userDetails[0].education.length > 0 && userDetails[0].education.map((ed) => (
						<Stack key={userDetails[0].education.indexOf(ed)}>
							<Typography variant='h2'>Education</Typography>
							<Typography variant='h3'>
								{ed.school} - {ed.degree}
							</Typography>
							<Typography>
								From: {parseDate(ed.year_started)} - To: {parseDate(ed.year_ended)}
							</Typography>
						</Stack>
					))}
				</Stack>
			</Paper>
		</>
	);
});

export default PositionView;
