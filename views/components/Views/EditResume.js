import * as React from 'react';
import { Button, Stack, Typography, Input } from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import Guage from '../Blocks/Guage.js';
import AddJobPost from '../Blocks/AddJobPost.js';
import { useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

const EditResume = () => {
	const location = useLocation();
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm();
	const [path, setPath] = React.useState(null);
	const [job, setJob] = React.useState({});
	const [value, setValue] = React.useState(0);
	const [jobDisableState, setJobDisableState] = React.useState(false);
	React.useEffect(() => {
		if (location) {
			setPath(location.pathname);
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
			console.log(JSON.stringify(err));
		}
	};

	const handleSaveJob = async (data) => {
		setJobDisableState(true);
		const parsedCompanyName = data.company.toLowerCase().replace(' ', '-');
		setResumeLocation(`${parsedCompanyName}`);
		const postJob = await fetch(`http://localhost:3000/api${path}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				job_title: data.jobTitle,
				company_name: parsedCompanyName,
				job_function: data.jobFunction,
				date_applied: data.dateApplied,
				requirements: reqIds,
			}),
		});
		return postJob.json();
	};
	return (
		<>
			<MainBody sx={{ paddingTop: '200px' }}>
				<Stack spacing={2}>
					<Typography variant='h1'>Update Resume</Typography>
					{path && job && job.company_name && (
						<>
							<Guage value={value} />
							<AddJobPost
								key={2}
								onSubmit={handleSubmit((data) =>
									handleSaveJob(data)
								)}
								jobTitleInput={
									<Controller
										control={control}
										name='jobTitle'
										rules={{ required: true }}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
												id='job-title'
												disabled={jobDisableState}
											/>
										)}
										defaultValue={job.job_title}
									/>
								}
								companyNameInput={
									<Controller
										control={control}
										name='company'
										rules={{ required: true }}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
												id='company'
												disabled={jobDisableState}
											/>
										)}
										defaultValue={job.company_name}
									/>
								}
								jobFunctionInput={
									<Controller
										control={control}
										name='jobFunction'
										rules={{ required: true }}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
												id='job-function'
												disabled={jobDisableState}
											/>
										)}
										defaultValue={job.job_function}
									/>
								}
								dateAppliedInput={
									<Controller
										control={control}
										name='dateApplied'
										rules={{
											required:
												'Please enter the first date you started in this position',
										}}
										render={({
											field: {
												onChange,
												onBlur,
												ref,
												value,
											},
										}) => (
											<Input
												sx={{
													marginTop:
														'100px !important',
													maxWidth: '200px',
												}}
												type='date'
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id='date-applied'
												disabled={jobDisableState}
											/>
										)}
										defaultValue={job.date_applied}
									/>
								}
								submitButtonState={!isValid || jobDisableState}
								submitButtonText='Update'
							/>
						</>
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
