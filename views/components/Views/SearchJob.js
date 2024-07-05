import * as React from 'react';
import {
	Autocomplete,
	Button,
	FormControl,
	Paper,
	Stack,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import ContainedButton from '../Blocks/ContainedButton.js';
import Resume from '../Blocks/Resume.js';
import { useForm, Controller } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';

const getJobs = fetchData('http://localhost:3000/api/job-post/');

const SearchJob = () => {
	const [resumeLocation, setResumeLocation] = React.useState(null);
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm();
	const allJobs = getJobs.read();
	const handleSetCompanyName = (data) => {
		setResumeLocation(data.searchJob);
	};
	return (
		<>
			<MainBody>
				<Stack>
					<Typography variant='h1'>
						Search Your Resume's by Company Name
					</Typography>
					{allJobs &&
					allJobs.jobPost &&
					allJobs.jobPost.length > 0 ? (
						<form
							onSubmit={handleSubmit((data) =>
								handleSetCompanyName(data)
							)}
						>
							<FormControl sx={{ width: '100%' }}>
								<Grid
									container
									spacing={4}
									sx={{ width: '100%' }}
								>
									<Grid
										item
										xs={12}
										md={6}
									>
										<Controller
											control={control}
											onChange={(data) => data}
											name='searchJob'
											rules={{ required: true }}
											render={({
												field: { onChange },
											}) => (
												<Autocomplete
													disableClearable
													id='job-search-input'
													noOptionsText="Job doesn't exist. Go to add a job page."
													options={allJobs.jobPost.map(
														(job) =>
															job.company_name
													)}
													renderInput={(params) => (
														<TextField
															{...params}
															variant='outlined'
															label='Search Company Name'
															type='search'
														/>
													)}
													onChange={(e, data) => {
														setResumeLocation(null);
														onChange(data);
													}}
												/>
											)}
											defaultValue=''
										/>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
									>
										<ContainedButton
											disabled={!isValid}
											type='submit'
											sx={{
												margin: '0.33em auto 0.25em !important;',
											}}
										>
											Ok
										</ContainedButton>
									</Grid>
								</Grid>
							</FormControl>
						</form>
					) : (
						'No jobs, go to job post to input new jobs'
					)}
				</Stack>
				<Paper elevation={0}>
					{resumeLocation && (
						<>
							<Resume
								fetchJobUrl={`http://localhost:3000/api/job-post/${resumeLocation}`}
								fetchResumeUrl={`http://localhost:3000/api/resume/${resumeLocation}`}
							/>
							<Button
								sx={{ minWidth: '100%', marginTop: '20px' }}
								variant='outlined'
								href={`/job-post/${resumeLocation}`}
							>
								Edit Resume
							</Button>
						</>
					)}
				</Paper>
			</MainBody>
		</>
	);
};

export default SearchJob;
