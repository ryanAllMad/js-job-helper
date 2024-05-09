import * as React from 'react';
import BasicInput from './BasicInput.js';
import {
	AppBar,
	Autocomplete,
	FormControl,
	Input,
	InputLabel,
	LinearProgress,
	Button,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete/index.js';
import ContainedButton from './ContainedButton.js';
import { useForm, Controller } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';
import Resume from './Resume.js';
import AddQualification from './AddQualification.js';
import AddJobPost from './AddJobPost.js';

const getRequirements = fetchData('http://localhost:3000/api/requirements');

const filter = createFilterOptions();

const CreateJob = () => {
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm();
	const {
		control: controlReq,
		handleSubmit: handleSubmitRequirements,
		formState: { isSubmitSuccessful },
	} = useForm();
	const {
		control: controlRes,
		handleSubmit: handleSubmitResponses,
		reset,
	} = useForm();
	const [reqIds, setReqIds] = React.useState(null);
	const [reqTitles, setReqTitles] = React.useState([]);
	const [requirementsArray, setRequirementsArray] = React.useState([]);
	const [responseState, setResponseState] = React.useState(false);
	const [resumeLocation, setResumeLocation] = React.useState('');
	const [reqDisableState, setReqDisableState] = React.useState(false);
	const [jobDisableState, setJobDisableState] = React.useState(false);
	const [progress, setProgress] = React.useState(0);

	const theRequirements = getRequirements.read();
	const hasRequirements = theRequirements.length > 0 ? theRequirements : null;
	const noMoreRequirements = React.useMemo(
		() => requirementsArray.length === 0,
		[requirementsArray]
	);

	const handleSaveJob = async (data) => {
		setJobDisableState(true);
		setProgress(60);
		const parsedCompanyName = data.company.toLowerCase().replace(' ', '-');
		setResumeLocation(`${parsedCompanyName}`);
		const postJob = await fetch('http://localhost:3000/api/job-post', {
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
		setResponseState(true);
		return postJob.json();
	};
	const getRequirementsUpdated = async () => {
		try {
			const reqPromise = await fetch(
				'http://localhost:3000/api/requirements/',
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
		if (isSubmitSuccessful) {
			getRequirementsUpdated().then((res) => {
				const newIds = [];
				const newReqs = [];
				res.forEach((d) => {
					if (reqTitles.includes(d.req_title)) {
						newIds.push(d._id);
						if (!d.res_content) {
							newReqs.push(d);
						}
					}
				});
				setRequirementsArray(newReqs);
				setReqIds(newIds);
			});
		}
	}, [isSubmitSuccessful, setRequirementsArray, setReqIds]);
	React.useEffect(() => {
		if (progress === 60 && noMoreRequirements) {
			setProgress(100);
		}
	}, [setProgress, progress, noMoreRequirements]);

	const handleSaveRequirements = async (data) => {
		setReqDisableState(true);
		setProgress(30);
		const newReqTitles = [];
		const newDataToSave = data.requirements.filter((d) => !d._id);
		data.requirements.forEach((d) => newReqTitles.push(d.req_title));
		setReqTitles(newReqTitles);
		if (data.requirements && newDataToSave) {
			const postRequirements = await fetch(
				'http://localhost:3000/api/requirements',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newDataToSave),
				}
			);
			return postRequirements.json();
		}
	};
	const handleAddResponse = async (data, id) => {
		setProgress(100);
		const newRequirementsArr = requirementsArray.filter(
			(d) => d._id !== id
		);
		const updateRequirement = await fetch(
			`http://localhost:3000/api/requirements/${id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					res_content: data.response,
				}),
			}
		);
		setRequirementsArray(newRequirementsArr);
		reset();
		return updateRequirement.json();
	};
	const handleNoResponse = (id) => {
		const newRequirementsArr = requirementsArray.filter(
			(d) => d._id !== id
		);
		setRequirementsArray(newRequirementsArr);
	};

	return (
		<>
			<Typography>
				After following these 3 steps your resume will be ready at the
				bottom of the page. If you need to make edits after you complete
				this page, you can click the "Edit Resume" button at the bottom.
				<br />
				<strong>How to add a job post:</strong>
				<br />
				1. Fill out *ALL* of the Job Requirements. <br />
				2. Enter the Job Post Information <br />
				3. Fill out your qualifications
			</Typography>
			<AppBar
				sx={{
					backgroundColor: '#fff',
					color: 'rgb(16 73 129)',
					boxShadow: 'none',
				}}
				position='sticky'
			>
				<Typography>
					<strong>Current Resume Status:</strong>
				</Typography>
				<LinearProgress
					variant='determinate'
					value={progress}
				/>
			</AppBar>
			<form
				key={1}
				onSubmit={handleSubmitRequirements((data) =>
					handleSaveRequirements(data)
				)}
			>
				<Stack>
					<Typography
						variant='h2'
						id='requirements'
					>
						Requirements
					</Typography>
					<Typography id='requirements-desc'>
						Enter the keywords for each job requirement. (Example:
						'Documenting codebase'...) If a requirement exists in
						the dropdown that is similar to one in the job post,
						select the one that already exists. It's important to
						input ALL requirements even if you don't have those
						requirements. This will help your Job Match meter give
						you an accurate reading.
					</Typography>
					<FormControl>
						<InputLabel
							sx={{ marginTop: '50px' }}
							htmlFor='enter-requirements'
						>
							Input Each Job Requirement & Nice to Have's
						</InputLabel>
						<Controller
							render={({ field: { onChange } }) => (
								<Autocomplete
									sx={{ marginTop: '100px' }}
									multiple
									disabled={reqDisableState}
									id='enter-requirements'
									filterOptions={(options, params) => {
										const filtered = filter(
											options,
											params
										);
										const { inputValue } = params;
										const exists = options.some(
											(option) =>
												inputValue === option.req_title
										);
										if (inputValue !== '' && !exists) {
											filtered.push({
												req_title: inputValue,
											});
										}
										return filtered;
									}}
									options={
										hasRequirements
											? hasRequirements.map((req) => req)
											: [
													{
														req_title:
															'Example: Unit testing...',
													},
											  ]
									}
									getOptionKey={(option) => option._id}
									getOptionLabel={(option) =>
										option.req_title
									}
									renderInput={(params) => (
										<TextField
											{...params}
											variant='outlined'
										/>
									)}
									onChange={(e, data) => onChange(data)}
								/>
							)}
							onChange={([, data]) => data}
							name='requirements'
							control={controlReq}
						/>
					</FormControl>
					<ContainedButton
						disabled={reqDisableState}
						type='submit'
					>
						Save All
					</ContainedButton>
				</Stack>
			</form>
			{reqIds && reqIds.length > 0 && (
				<AddJobPost
					key={2}
					onSubmit={handleSubmit((data) => handleSaveJob(data))}
					jobTitleInput={
						<Controller
							control={control}
							name='jobTitle'
							rules={{ required: true }}
							render={({
								field: { onChange, onBlur, value, ref },
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
							defaultValue=''
						/>
					}
					companyNameInput={
						<Controller
							control={control}
							name='company'
							rules={{ required: true }}
							render={({
								field: { onChange, onBlur, value, ref },
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
							defaultValue=''
						/>
					}
					jobFunctionInput={
						<Controller
							control={control}
							name='jobFunction'
							rules={{ required: true }}
							render={({
								field: { onChange, onBlur, value, ref },
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
							defaultValue=''
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
								field: { onChange, onBlur, ref, value },
							}) => (
								<Input
									sx={{
										marginTop: '100px !important',
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
							defaultValue=''
						/>
					}
					submitButtonState={!isValid || jobDisableState}
					submitButtonText='Save'
				/>
			)}
			{requirementsArray && !noMoreRequirements && responseState && (
				<AddQualification
					key={3}
					onSubmit={handleSubmitResponses((data) =>
						handleAddResponse(data, requirementsArray[0]._id)
					)}
					onMissing={() => handleNoResponse(requirementsArray[0]._id)}
					thisReq={requirementsArray[0].req_title}
					addButtonText='Add Qualification'
					removeButtonText='Missing Qualification'
					qualificationDesc={`Enter the qualifications for each job requirement you've input into the form. 
				If you don't meet this requirement, click the "Missing Qualification" button. 
				This will help your Job Match meter be more accurate."`}
				>
					<Controller
						control={controlRes}
						name='response'
						rules={{ required: true }}
						render={({
							field: { onChange, onBlur, value, ref },
						}) => (
							<Input
								onChange={onChange}
								onBlur={onBlur}
								placeholder='Enter qualifications'
								value={value}
								inputRef={ref}
								type='text'
								multiline
								rows={4}
								id='add-response'
							/>
						)}
						defaultValue=''
					/>
				</AddQualification>
			)}
			{requirementsArray && noMoreRequirements && responseState && (
				<>
					<Resume
						fetchUrl={`http://localhost:3000/api/job-post/${resumeLocation}`}
					/>
					<Button variant='outlined' href={`/job-post/${resumeLocation}`}>
						Edit Resume
					</Button>
				</>
			)}
			{progress > 60 && (
				<ContainedButton
					onClick={() => window.location.reload()}
					type='button'
				>
					Add a new job post
				</ContainedButton>
			)}
		</>
	);
};

export default CreateJob;
