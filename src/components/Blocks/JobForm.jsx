import * as React from 'react';
import fetchData from '../getters/fetchData';
import { Autocomplete, Input, TextField, Button } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete/index.js';
import { useForm, Controller } from 'react-hook-form';
import ContainedButton from './ContainedButton.jsx';
import AddJobPost from './AddJobPost';
import Resume from './Resume';
import AddRequirements from './AddRequirements';
import AddQualification from './AddQualification';

const getRequirements = fetchData('http://localhost:5173/api/requirements');
const getJobs = fetchData('http://localhost:5173/api/job-post/');

const filter = createFilterOptions();

const JobForm = (props) => {
	const {
		createJob,
		saveJobUrl,
		renderTags,
		defaultValueReqs,
		defaultValueJobTitle,
		defaultValueCompName,
		defaultValueJobFunc,
		defaultValueDateApplied,
		submitButtonText,
		onSaveJob
	} = props;
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
		formState: {isValid: qualsValid }
		} = useForm();
	const [reqIds, setReqIds] = React.useState(null);
	const [reqTitles, setReqTitles] = React.useState([]);
	const [responseState, setResponseState] = React.useState(false);
	const [progress, setProgress] = React.useState(0);
	const [requirementsArray, setRequirementsArray] = React.useState([]);
	const [reqDisableState, setReqDisableState] = React.useState(false);
	const [jobDisableState, setJobDisableState] = React.useState(false);
	const [resumeLocation, setResumeLocation] = React.useState('');
	const [addQualState, setAddQualState] = React.useState(false)
	const [remQualState, setRemQualState] = React.useState(false)

	const theRequirements = getRequirements.read();
	const allJobs = getJobs.read();
	const hasRequirements = theRequirements.length > 0 ? theRequirements : null;
	const noMoreRequirements = React.useMemo(
		() => requirementsArray.length === 0,
		[requirementsArray]
	);

	const getRequirementsUpdated = async () => {
		try {
			const reqPromise = await fetch(
				'http://localhost:5173/api/requirements/',
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
						if (createJob && !d.res_content) {
							newReqs.push(d);
						}
						if(!createJob) {
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
				'http://localhost:5173/api/requirements',
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

	const handleSaveJob = async (data) => {
		setJobDisableState(true);
		setProgress(60);
		let parsedCompanyName = data.company.toLowerCase().replaceAll('/', '-').replaceAll(' ', '-');
		const companyNameExists = allJobs.jobPost.filter((el) => el.company_name === data.company)
		console.log(companyNameExists)
		if (companyNameExists.length > 0) {
			parsedCompanyName = `${parsedCompanyName}-${companyNameExists.length}`
			console.log(parsedCompanyName)
		}
		
		setResumeLocation(`${parsedCompanyName}`);
		const postJob = await fetch(saveJobUrl, {
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
	const handleAddResponse = async (data, id) => {
		const newRequirementsArr = requirementsArray.filter(
			(d) => d._id !== id
		);
		if (newRequirementsArr.length === 0) {
			setProgress(100);
			onSaveJob()
		}
		const updateRequirement = await fetch(
			`http://localhost:5173/api/requirements/${id}`,
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
		if (updateRequirement.status === 200) {
			setAddQualState(true)
			setTimeout(() => {
				setAddQualState(false)
			}, [500])
		}
		setRequirementsArray(newRequirementsArr);
		if (newRequirementsArr.length > 0 && newRequirementsArr[0].res_content) {
			reset({response: newRequirementsArr[0].res_content});
		} else {
			reset({response: ''});
		}
		return updateRequirement.json();
	};

	const handleNoResponse = async (id) => {
		if(createJob || !requirementsArray[0].res_content) {
			const newRequirementsArr = requirementsArray.filter(
				(d) => d._id !== id
			);
			if(newRequirementsArr.length === 0) {
				setProgress(100);
				onSaveJob()
			}
			setRequirementsArray(newRequirementsArr);
			setRemQualState(true)
			setTimeout(() => {
				setRemQualState(false)
			}, [500])
			if (newRequirementsArr.length > 0 && newRequirementsArr[0].res_content) {
				reset({response: newRequirementsArr[0].res_content});
			} else {
				reset({response: ''});
			}
		} 
		if (!createJob && requirementsArray.length > 0 && requirementsArray[0].res_content) {
			const updateRequirement = await fetch(
				`http://localhost:5173/api/requirements/${id}`,
				{
					method: 'DELETE',
				}
			);
			if(updateRequirement.status === 204) {
				setRemQualState(true)
				reset({response: requirementsArray[0].res_content});
				setTimeout(() => {
					setRemQualState(false)
				}, [500])
			}
			return updateRequirement;
		}
		
	};

	return (
		<>
			<AddRequirements
				progress={progress}
				keyProp={1}
				onSubmit={handleSubmitRequirements((data) =>
					handleSaveRequirements(data)
				)}
				reqDisableState={reqDisableState}
			>
				<Controller
					render={({ field: { onChange, value, ref } }) => (
						<Autocomplete
							sx={{ marginTop: '100px' }}
							multiple
							onKeyDown={(e) => {
								if(e.key === 'Enter') {
									e.preventDefault()
								}
							}}
							disabled={reqDisableState}
							id='enter-requirements'
							filterOptions={(options, params) => {
								const filtered = filter(options, params);
								const { inputValue } = params;
								const exists = options.some(
									(option) => inputValue === option.req_title
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
							getOptionLabel={(option) => option.req_title}
							renderTags={renderTags}
							renderInput={(params) => (
								<TextField
									{...params}
									variant='outlined'
								/>
							)}
							onChange={(e, data) => onChange(data)}
							value={value}
							inputRef={ref}
						/>
					)}
					onChange={([, data]) => data}
					name='requirements'
					control={controlReq}
					defaultValue={defaultValueReqs}
				/>
			</AddRequirements>
			{reqIds && reqIds.length > 0 && (
				<AddJobPost
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
							defaultValue={defaultValueJobTitle}
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
							defaultValue={defaultValueCompName}
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
							defaultValue={defaultValueJobFunc}
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
							defaultValue={defaultValueDateApplied}
						/>
					}
					submitButtonState={!isValid || jobDisableState}
					submitButtonText={submitButtonText}
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
					addButtonState={!qualsValid}
					addPessedButtonState={addQualState}
					removePressedButtonState={remQualState}
					addButtonText={!addQualState ? 'Add Qualification' : 'Qualification Added!'}
					removeButtonText={!remQualState ? 'Missing Qualification' : 'Qualification Skipped!'}
					qualificationDesc={`Enter the qualifications for each job requirement you've input into the form. 
				If you don't meet this requirement, click the "Missing Qualification" button. 
				This will help your Job Match Guage be more accurate. Remember to 'show' and not 'tell' by explaining not just what you can do but how you've used the qualification to be successful."`}
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
						defaultValue={createJob ? '' : requirementsArray[0].res_content}
					/>
				</AddQualification>
			)}
			{requirementsArray && noMoreRequirements && responseState && (
				<>
					<Resume
						fetchJobUrl={`http://localhost:5173/api/job-post/${resumeLocation}`}
						fetchResumeUrl={`http://localhost:5173/api/resume/${resumeLocation}`}
					/>
					<Button
						variant='outlined'
						sx={{marginTop: '20px', width: '100%'}}
						href={`/job-post/${resumeLocation}`}
					>
						Edit Resume
					</Button>
				</>
			)}
			{createJob && (
			<>
			{progress > 60 && (
				<ContainedButton
					onClick={() => window.location.reload()}
					type='button'
				>
					Add a new job post
				</ContainedButton>
			)}
			</>)}
		</>
	);
};

export default JobForm;
