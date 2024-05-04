import * as React from 'react';
import { Chip, Typography, Paper, Stack } from '@mui/material';
import Guage from '../Blocks/Guage.js';

const PositionView = (props) => {
	const {company, jobTitle, jobFunction, dateApplied, requirements, guageValue} = props
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
					<Typography>{jobTitle}</Typography>
					<Typography>{company}</Typography>
					<Typography>{jobFunction}</Typography>
					<Typography>{dateApplied}</Typography>
					{requirements && requirements.length > 0 && requirements.map((req) => (<Typography>{req.res_content}</Typography>))}
				</Stack>
			</Paper>
		</>
	);
};

export default PositionView