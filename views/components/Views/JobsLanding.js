import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import CreateJob from '../Blocks/CreateJob.js';
import fetchData from '../getters/fetchData.js';

const getJobs = fetchData(`http://localhost:3000/api/job-post`);

const JobsLanding = () => {
	const jobsExist = getJobs.read();
	
	return (
		<>
			<MainBody sx={{ paddingTop: '200px' }}>
				<Stack spacing={2}>
					<Typography variant='h2'>Enter Job Post Info</Typography>
					<CreateJob />
				</Stack>
			</MainBody>
		</>
	);
};

export default JobsLanding;
