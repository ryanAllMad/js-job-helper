import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import MainBody from '../Layout/MainBody';
import CreateJob from '../Blocks/CreateJob';


const JobsLanding = () => {
	
	return (
		<>
			<MainBody sx={{ paddingTop: '200px' }}>
				<Stack spacing={2}>
					<Typography variant='h1'>Enter Job Post Info</Typography>
					<CreateJob />
				</Stack>
			</MainBody>
		</>
	);
};

export default JobsLanding;
