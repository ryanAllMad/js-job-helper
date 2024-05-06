import * as React from 'react';
import { Stack, Typography } from '@mui/material'
import PositionView from './PositionView.js';

const Resume = (props) => {
	const { fetchUrl, guageValue } = props;
	const [job, setJob] = React.useState({})
	const getJob = async () => {
		try {
			const reqPromise = await fetch(
				fetchUrl,
				{
					method: 'GET',
				}
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.status === 'success') {
						if (!res.data) {
							console.log('no data');
						}
						return res.data;
					} else {
						console.log(res.status);
					}
				});
			return reqPromise;
		} catch (err) {
			console.log(err);
		}
	};
	React.useEffect(() => {
		getJob().then((res => setJob(res[0])))
	}, [])
	return (
		<>
				<Stack spacing={2}>
					<Typography variant='h2'>Resume</Typography>
					<PositionView
						jobTitle={job.job_title}
						jobFunction={job.job_function}
						requirements={job.requirements}
						guageValue={guageValue}
					/>
				</Stack>
		</>
	);
};

export default Resume;
