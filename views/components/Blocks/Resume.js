import * as React from 'react';
import { Stack, Typography } from '@mui/material'
import PositionView from './PositionView.js';

const Resume = (props) => {
	const { fetchUrl } = props;
	const [job, setJob] = React.useState({})
	const [value, setValue] = React.useState(0)
	
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
		if(fetchUrl) {
			getJob().then((res => {
				setJob(res[0])
				const allRequirements = []
				const allQualifications = []
				res[0].requirements.forEach((req) => allRequirements.push(req.req_title))
				res[0].requirements.forEach((req) => {
					if(req.res_content && (req.res_content !== "" || req.res_content !== " ")) {
						allQualifications.push(req.res_content)
					}
				})
				const guage = Math.round((allQualifications.length/allRequirements.length) * 100)
				setValue(guage)
			}
			))
		}
	}, [])
	return (
		<>
				<Stack spacing={2}>
					<Typography variant='h2'>Resume</Typography>
					<PositionView
						jobTitle={job.job_title}
						jobFunction={job.job_function}
						requirements={job.requirements}
						guageValue={value}
					/>
				</Stack>
		</>
	);
};

export default Resume;
