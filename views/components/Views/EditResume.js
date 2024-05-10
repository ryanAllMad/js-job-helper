import * as React from 'react';
import {
	Chip,
	Button,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import Guage from '../Blocks/Guage.js';
import JobForm from '../Blocks/JobForm.js';
import { useLocation } from 'react-router-dom';

const EditResume = () => {
	const location = useLocation();
	const [path, setPath] = React.useState(null);
	const [value, setValue] = React.useState(0);
	const [job, setJob] = React.useState({});
	const [pageHead, setPageHead] = React.useState('')

	React.useEffect(() => {
		if (location) {
			setPath(location.pathname);
			if(path) {
				const parsedPath = path.replaceAll('/', '').replace('job-post', '')
				setPageHead(`${parsedPath.charAt(0).toUpperCase()}${parsedPath.slice(1).replaceAll('-', ' ')}`)
				getJob().then((res) => {
					if (res && res.length > 0) {
						setJob(res[0]);
						const allRequirements = [];
						const allQualifications = [];
						res[0].requirements.forEach((req) =>
							allRequirements.push(req.req_title)
						);
						res[0].requirements.forEach((req) => {
							if (
								req.res_content &&
								(req.res_content !== '' || req.res_content !== ' ')
							) {
								allQualifications.push(req.res_content);
							}
						});
						const guage = Math.round(
							(allQualifications.length / allRequirements.length) *
								100
						);
						setValue(guage);
					}
				});
			}
		}
	}, [location, path]);

	const getJob = async () => {
		try {
			const reqPromise = await fetch(`http://localhost:3000/api${path}`, {
				method: 'GET',
			})
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

	return (
		<>
			<MainBody sx={{ paddingTop: '200px' }}>
				<Stack spacing={2}>
					<Typography variant='h1'>Update Resume {path && `for ${pageHead}`}</Typography>
					{path && job && job.company_name && job.requirements && (
						<Paper>
							<Guage value={value} />
						<JobForm
							createJob={false}
							saveJobUrl={`http://localhost:3000/api${path}`}
							renderTags={(v, getTagProps) =>
								v.map((option, index) => (
									<Chip
										{...getTagProps({
											index,
										})}
										label={option.req_title}
									/>
								))
							}
							defaultValueReqs={job.requirements.map(
								(req) => req
							)}
							defaultValueJobTitle={job.job_title}
							defaultValueCompName={job.company_name}
							defaultValueJobFunc={job.job_function}
							defaultValueDateApplied={job.date_applied}
							submitButtonText='Update'
						/>
						</Paper>
					)}
					{path && (!job || !job.company_name) && (
						<Typography>
							That company name isn't found. Try searching at{' '}
							<Button
								variant='outlined'
								href='/search-job'
							>
								search job
							</Button>
							<br /> Or try adding a new{' '}
							<Button
								variant='outlined'
								href='/add-job'
							>
								job post
							</Button>
						</Typography>
					)}
				</Stack>
			</MainBody>
		</>
	);
};

export default EditResume;
